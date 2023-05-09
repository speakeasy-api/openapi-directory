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

            DnsResponsePolicyRulesCreateRequest req = new DnsResponsePolicyRulesCreateRequest("vitae", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicyRule = new ResponsePolicyRule() {{
                    behavior = ResponsePolicyRuleBehaviorEnum.BYPASS_RESPONSE_POLICY;
                    dnsName = "quia";
                    kind = "reiciendis";
                    localData = new ResponsePolicyRuleLocalData() {{
                        localDatas = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                            add(new ResourceRecordSet() {{
                                kind = "doloribus";
                                name = "Phyllis Kshlerin";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatem";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "hic";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "delectus";
                                                            port = "deleniti";
                                                            project = "fugit";
                                                            region = "inventore";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "reprehenderit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "dignissimos";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nulla";
                                                            port = "consequatur";
                                                            project = "similique";
                                                            region = "eligendi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "impedit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "odio";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "mollitia";
                                                            port = "repudiandae";
                                                            project = "tempore";
                                                            region = "voluptate";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "cum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "alias";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "architecto";
                                                            port = "est";
                                                            project = "nemo";
                                                            region = "magni";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quae";
                                                location = "quaerat";
                                                rrdatas = new String[]{{
                                                    add("rerum"),
                                                    add("laboriosam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("repudiandae"),
                                                    add("unde"),
                                                }};
                                            }}),
                                        }};
                                        kind = "excepturi";
                                    }};
                                    geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "doloremque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "nisi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "necessitatibus";
                                                            port = "alias";
                                                            project = "provident";
                                                            region = "ut";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "hic";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "tenetur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "assumenda";
                                                            port = "exercitationem";
                                                            project = "exercitationem";
                                                            region = "dolore";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "a";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "neque";
                                                            port = "mollitia";
                                                            project = "velit";
                                                            region = "ut";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "est";
                                                location = "quasi";
                                                rrdatas = new String[]{{
                                                    add("blanditiis"),
                                                    add("sapiente"),
                                                    add("recusandae"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("natus"),
                                                    add("reprehenderit"),
                                                    add("dolorem"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                    }};
                                                }};
                                                kind = "fuga";
                                                location = "eveniet";
                                                rrdatas = new String[]{{
                                                    add("illum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("rerum"),
                                                    add("voluptate"),
                                                    add("perferendis"),
                                                    add("maiores"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ratione";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "odio";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "magni";
                                                            port = "sint";
                                                            project = "consequatur";
                                                            region = "illum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "adipisci";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "ex";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "eum";
                                                            port = "et";
                                                            project = "officiis";
                                                            region = "quo";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "culpa";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "iure";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "doloribus";
                                                            port = "praesentium";
                                                            project = "iste";
                                                            region = "tempora";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ad";
                                                location = "ab";
                                                rrdatas = new String[]{{
                                                    add("facere"),
                                                    add("ducimus"),
                                                    add("nisi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("officiis"),
                                                    add("necessitatibus"),
                                                    add("nam"),
                                                    add("nemo"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "molestias";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "modi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "similique";
                                                            port = "architecto";
                                                            project = "asperiores";
                                                            region = "est";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "repellendus";
                                                location = "dolor";
                                                rrdatas = new String[]{{
                                                    add("quis"),
                                                    add("quasi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("delectus"),
                                                }};
                                            }}),
                                        }};
                                        kind = "doloremque";
                                    }};
                                    kind = "laboriosam";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "itaque";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "nam";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "consequuntur";
                                                                port = "sapiente";
                                                                project = "alias";
                                                                region = "doloribus";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "nemo";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "corrupti";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "commodi";
                                                                port = "laudantium";
                                                                project = "est";
                                                                region = "consequatur";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "incidunt";
                                                    location = "dolores";
                                                    rrdatas = new String[]{{
                                                        add("earum"),
                                                        add("consequatur"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("officia"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "quibusdam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "voluptates";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "cupiditate";
                                                                port = "modi";
                                                                project = "ratione";
                                                                region = "aliquam";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "ea";
                                                    location = "aliquam";
                                                    rrdatas = new String[]{{
                                                        add("at"),
                                                        add("ipsa"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("aut"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "quaerat";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "expedita";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "mollitia";
                                                                port = "quis";
                                                                project = "cumque";
                                                                region = "cumque";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "vero";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "tenetur";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "quod";
                                                                port = "facilis";
                                                                project = "doloremque";
                                                                region = "illo";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "reiciendis";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "enim";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "accusamus";
                                                                port = "ipsam";
                                                                project = "aspernatur";
                                                                region = "atque";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "animi";
                                                    location = "eius";
                                                    rrdatas = new String[]{{
                                                        add("mollitia"),
                                                        add("minus"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("explicabo"),
                                                        add("distinctio"),
                                                        add("praesentium"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "maiores";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "libero";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "explicabo";
                                                                port = "placeat";
                                                                project = "animi";
                                                                region = "expedita";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "laborum";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "assumenda";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "magnam";
                                                                port = "veritatis";
                                                                project = "fugit";
                                                                region = "nihil";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "illum";
                                                    location = "nulla";
                                                    rrdatas = new String[]{{
                                                        add("omnis"),
                                                        add("iure"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("sapiente"),
                                                        add("eius"),
                                                        add("esse"),
                                                        add("quasi"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "inventore";
                                        }};
                                        kind = "similique";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "et";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "porro";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "numquam";
                                                    port = "rerum";
                                                    project = "atque";
                                                    region = "aliquid";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "placeat";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "quisquam";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "ducimus";
                                                    port = "incidunt";
                                                    project = "voluptatibus";
                                                    region = "nihil";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "ducimus";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "incidunt";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "aliquam";
                                                    port = "totam";
                                                    project = "soluta";
                                                    region = "quibusdam";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 4371.07;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "hic";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "tempora";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "architecto";
                                                            port = "nulla";
                                                            project = "qui";
                                                            region = "maxime";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ratione";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "quos";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "laudantium";
                                                            port = "sit";
                                                            project = "perspiciatis";
                                                            region = "quaerat";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nesciunt";
                                                rrdatas = new String[]{{
                                                    add("adipisci"),
                                                    add("eveniet"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("laboriosam"),
                                                }};
                                                weight = 253.21;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ullam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "soluta";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "rerum";
                                                            port = "cum";
                                                            project = "est";
                                                            region = "fugiat";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "perferendis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "tenetur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quis";
                                                            port = "corrupti";
                                                            project = "iure";
                                                            region = "quidem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quod";
                                                rrdatas = new String[]{{
                                                    add("et"),
                                                    add("ipsam"),
                                                    add("eos"),
                                                    add("exercitationem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("laudantium"),
                                                    add("quibusdam"),
                                                }};
                                                weight = 6849.38;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "excepturi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "nam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "suscipit";
                                                            port = "porro";
                                                            project = "nulla";
                                                            region = "consequatur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "qui";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "enim";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "impedit";
                                                            port = "consectetur";
                                                            project = "quis";
                                                            region = "ut";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "est";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "labore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ratione";
                                                            port = "cum";
                                                            project = "magnam";
                                                            region = "nihil";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "officiis";
                                                rrdatas = new String[]{{
                                                    add("esse"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("amet"),
                                                    add("minus"),
                                                }};
                                                weight = 3214.38;
                                            }}),
                                        }};
                                        kind = "explicabo";
                                    }};
                                    wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eligendi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "amet";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "perspiciatis";
                                                            port = "corrupti";
                                                            project = "sit";
                                                            region = "magni";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repellendus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "ratione";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "alias";
                                                            port = "repellendus";
                                                            project = "magnam";
                                                            region = "quis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repudiandae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "eius";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "blanditiis";
                                                            port = "nobis";
                                                            project = "ea";
                                                            region = "iusto";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolore";
                                                rrdatas = new String[]{{
                                                    add("recusandae"),
                                                    add("ipsam"),
                                                    add("quisquam"),
                                                    add("delectus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("sunt"),
                                                    add("rem"),
                                                    add("itaque"),
                                                    add("assumenda"),
                                                }};
                                                weight = 7622.96;
                                            }}),
                                        }};
                                        kind = "esse";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("quam"),
                                    add("quos"),
                                    add("dignissimos"),
                                    add("earum"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("magni"),
                                }};
                                ttl = 923652;
                                type = "voluptatem";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "eius";
                                name = "Antonio Stracke";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "cumque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "vel";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "aut";
                                                            port = "recusandae";
                                                            project = "voluptatibus";
                                                            region = "dolore";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "aspernatur";
                                                location = "harum";
                                                rrdatas = new String[]{{
                                                    add("dolor"),
                                                    add("porro"),
                                                    add("iste"),
                                                    add("earum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("impedit"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "veniam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "consectetur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "voluptas";
                                                            port = "quod";
                                                            project = "nesciunt";
                                                            region = "iste";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "distinctio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "assumenda";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "deserunt";
                                                            port = "vel";
                                                            project = "qui";
                                                            region = "perspiciatis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "accusantium";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "occaecati";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quam";
                                                            port = "reiciendis";
                                                            project = "nesciunt";
                                                            region = "laudantium";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nemo";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "atque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "culpa";
                                                            port = "possimus";
                                                            project = "molestiae";
                                                            region = "officiis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "reiciendis";
                                                location = "voluptatum";
                                                rrdatas = new String[]{{
                                                    add("reprehenderit"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("officia"),
                                                    add("eveniet"),
                                                    add("quae"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "hic";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "adipisci";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "similique";
                                                            port = "odio";
                                                            project = "unde";
                                                            region = "asperiores";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nam";
                                                location = "provident";
                                                rrdatas = new String[]{{
                                                    add("recusandae"),
                                                    add("non"),
                                                    add("aut"),
                                                    add("neque"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("soluta"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "qui";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "a";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "sequi";
                                                            port = "eum";
                                                            project = "rem";
                                                            region = "expedita";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "animi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "dolores";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "laboriosam";
                                                            port = "distinctio";
                                                            project = "quo";
                                                            region = "facilis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "magnam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "nostrum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "neque";
                                                            port = "quis";
                                                            project = "optio";
                                                            region = "esse";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "adipisci";
                                                location = "autem";
                                                rrdatas = new String[]{{
                                                    add("beatae"),
                                                    add("dignissimos"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ratione"),
                                                }};
                                            }}),
                                        }};
                                        kind = "veritatis";
                                    }};
                                    geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "recusandae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "quod";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "modi";
                                                            port = "eum";
                                                            project = "rerum";
                                                            region = "quod";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nemo";
                                                location = "architecto";
                                                rrdatas = new String[]{{
                                                    add("amet"),
                                                    add("facilis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("maxime"),
                                                    add("deserunt"),
                                                    add("eius"),
                                                }};
                                            }}),
                                        }};
                                        kind = "molestias";
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
                                                                ipAddress = "minus";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "odit";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "aspernatur";
                                                                port = "magni";
                                                                project = "minus";
                                                                region = "minima";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "ipsam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "quaerat";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "incidunt";
                                                                port = "cupiditate";
                                                                project = "minima";
                                                                region = "quo";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "quis";
                                                    location = "facere";
                                                    rrdatas = new String[]{{
                                                        add("harum"),
                                                        add("adipisci"),
                                                        add("optio"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("reprehenderit"),
                                                        add("quo"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "vitae";
                                        }};
                                        kind = "voluptates";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "iste";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "beatae";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "atque";
                                                    port = "dolorum";
                                                    project = "similique";
                                                    region = "qui";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "enim";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "assumenda";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "porro";
                                                    port = "quasi";
                                                    project = "sint";
                                                    region = "inventore";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 1450.15;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nulla";
                                                            port = "quaerat";
                                                            project = "aut";
                                                            region = "architecto";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "reiciendis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "esse";
                                                            port = "iste";
                                                            project = "ex";
                                                            region = "odit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "voluptatem";
                                                rrdatas = new String[]{{
                                                    add("libero"),
                                                    add("vero"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("consequuntur"),
                                                    add("quidem"),
                                                    add("aperiam"),
                                                    add("animi"),
                                                }};
                                                weight = 1911.51;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "voluptatibus";
                                                            port = "sint";
                                                            project = "reprehenderit";
                                                            region = "est";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "numquam";
                                                rrdatas = new String[]{{
                                                    add("sapiente"),
                                                    add("fuga"),
                                                    add("facere"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nam"),
                                                }};
                                                weight = 9906.35;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fugiat";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "molestiae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "deserunt";
                                                            port = "totam";
                                                            project = "modi";
                                                            region = "id";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repellendus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "unde";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "eius";
                                                            port = "quasi";
                                                            project = "quibusdam";
                                                            region = "voluptas";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quasi";
                                                rrdatas = new String[]{{
                                                    add("numquam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quis"),
                                                }};
                                                weight = 2008.24;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "blanditiis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "perferendis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "delectus";
                                                            port = "ea";
                                                            project = "totam";
                                                            region = "quidem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "eaque";
                                                rrdatas = new String[]{{
                                                    add("fuga"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("modi"),
                                                    add("dolores"),
                                                    add("beatae"),
                                                    add("rerum"),
                                                }};
                                                weight = 8303.04;
                                            }}),
                                        }};
                                        kind = "ut";
                                    }};
                                    wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "beatae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "ipsa";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "libero";
                                                            port = "eaque";
                                                            project = "animi";
                                                            region = "doloremque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "consequatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "dolor";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "facilis";
                                                            port = "eos";
                                                            project = "sed";
                                                            region = "fugiat";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sint";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "dolorem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "in";
                                                            port = "aperiam";
                                                            project = "pariatur";
                                                            region = "excepturi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aliquam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "fuga";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "iure";
                                                            port = "labore";
                                                            project = "quasi";
                                                            region = "cumque";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "corporis";
                                                rrdatas = new String[]{{
                                                    add("quibusdam"),
                                                    add("dicta"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("vero"),
                                                    add("quibusdam"),
                                                    add("maxime"),
                                                    add("consequuntur"),
                                                }};
                                                weight = 267.22;
                                            }}),
                                        }};
                                        kind = "nostrum";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("repellendus"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("quos"),
                                }};
                                ttl = 863037;
                                type = "quo";
                            }}),
                        }};
                    }};;
                    ruleName = "sequi";
                }};;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "ab";
                clientOperationId = "praesentium";
                fields = "nostrum";
                key = "labore";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "tenetur";
                uploadProtocol = "occaecati";
            }};            

            DnsResponsePolicyRulesCreateResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesCreate(req, new DnsResponsePolicyRulesCreateSecurity() {{
                option1 = new DnsResponsePolicyRulesCreateSecurityOption1("necessitatibus", "necessitatibus") {{
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

            DnsResponsePolicyRulesDeleteRequest req = new DnsResponsePolicyRulesDeleteRequest("autem", "natus", "quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                clientOperationId = "tempore";
                fields = "saepe";
                key = "adipisci";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "quaerat";
                uploadProtocol = "debitis";
            }};            

            DnsResponsePolicyRulesDeleteResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesDelete(req, new DnsResponsePolicyRulesDeleteSecurity() {{
                option1 = new DnsResponsePolicyRulesDeleteSecurityOption1("similique", "porro") {{
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

            DnsResponsePolicyRulesGetRequest req = new DnsResponsePolicyRulesGetRequest("blanditiis", "libero", "sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                clientOperationId = "corporis";
                fields = "quo";
                key = "nisi";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "voluptatibus";
                uploadProtocol = "officiis";
            }};            

            DnsResponsePolicyRulesGetResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesGet(req, new DnsResponsePolicyRulesGetSecurity() {{
                option1 = new DnsResponsePolicyRulesGetSecurityOption1("suscipit", "perferendis") {{
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

            DnsResponsePolicyRulesListRequest req = new DnsResponsePolicyRulesListRequest("nisi", "quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "deserunt";
                key = "error";
                maxResults = 769922L;
                oauthToken = "laudantium";
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "repudiandae";
                uploadProtocol = "nemo";
            }};            

            DnsResponsePolicyRulesListResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesList(req, new DnsResponsePolicyRulesListSecurity() {{
                option1 = new DnsResponsePolicyRulesListSecurityOption1("voluptatem", "quod") {{
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

            DnsResponsePolicyRulesPatchRequest req = new DnsResponsePolicyRulesPatchRequest("vitae", "vel", "voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicyRule1 = new ResponsePolicyRule() {{
                    behavior = ResponsePolicyRuleBehaviorEnum.BEHAVIOR_UNSPECIFIED;
                    dnsName = "similique";
                    kind = "veritatis";
                    localData = new ResponsePolicyRuleLocalData() {{
                        localDatas = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                            add(new ResourceRecordSet() {{
                                kind = "excepturi";
                                name = "Edna Kertzmann";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "possimus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "non";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "et";
                                                            port = "amet";
                                                            project = "tenetur";
                                                            region = "velit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "asperiores";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "voluptas";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "esse";
                                                            port = "veniam";
                                                            project = "fugit";
                                                            region = "assumenda";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "expedita";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "autem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "maxime";
                                                            port = "nostrum";
                                                            project = "occaecati";
                                                            region = "asperiores";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "doloremque";
                                                location = "id";
                                                rrdatas = new String[]{{
                                                    add("ea"),
                                                    add("placeat"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("harum"),
                                                    add("cumque"),
                                                    add("culpa"),
                                                    add("pariatur"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "consequuntur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "maxime";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "iusto";
                                                            port = "natus";
                                                            project = "ab";
                                                            region = "deleniti";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "et";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sint";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "laboriosam";
                                                            port = "molestiae";
                                                            project = "ab";
                                                            region = "ex";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iure";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "minus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ipsum";
                                                            port = "ipsa";
                                                            project = "nam";
                                                            region = "minima";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "vel";
                                                location = "nisi";
                                                rrdatas = new String[]{{
                                                    add("et"),
                                                    add("autem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("culpa"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "suscipit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "deleniti";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "illo";
                                                            port = "fugit";
                                                            project = "id";
                                                            region = "tempore";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "fugit";
                                                location = "nostrum";
                                                rrdatas = new String[]{{
                                                    add("sunt"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("perspiciatis"),
                                                    add("asperiores"),
                                                    add("eos"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ipsa";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "consequuntur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "autem";
                                                            port = "reprehenderit";
                                                            project = "quidem";
                                                            region = "quas";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "officia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "alias";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "minus";
                                                            port = "sit";
                                                            project = "quis";
                                                            region = "hic";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolorum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "voluptatem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nisi";
                                                            port = "quis";
                                                            project = "perferendis";
                                                            region = "itaque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facere";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "ratione";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "laborum";
                                                            port = "sint";
                                                            project = "incidunt";
                                                            region = "pariatur";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "aspernatur";
                                                location = "aperiam";
                                                rrdatas = new String[]{{
                                                    add("quo"),
                                                    add("perspiciatis"),
                                                    add("accusantium"),
                                                    add("debitis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("aliquam"),
                                                    add("quasi"),
                                                    add("repellendus"),
                                                }};
                                            }}),
                                        }};
                                        kind = "architecto";
                                    }};
                                    geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nisi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "saepe";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "veniam";
                                                            port = "ab";
                                                            project = "minima";
                                                            region = "nisi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repellat";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "a";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "amet";
                                                            port = "voluptatibus";
                                                            project = "temporibus";
                                                            region = "tenetur";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nostrum";
                                                location = "tempora";
                                                rrdatas = new String[]{{
                                                    add("facere"),
                                                    add("illum"),
                                                    add("exercitationem"),
                                                    add("saepe"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("sint"),
                                                    add("minima"),
                                                    add("dolore"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sequi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "voluptatum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "laborum";
                                                            port = "sapiente";
                                                            project = "soluta";
                                                            region = "eius";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolores";
                                                location = "dolorum";
                                                rrdatas = new String[]{{
                                                    add("assumenda"),
                                                    add("iure"),
                                                    add("dolorem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("laudantium"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "saepe";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "pariatur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "aut";
                                                            port = "nesciunt";
                                                            project = "error";
                                                            region = "necessitatibus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "culpa";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "asperiores";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "harum";
                                                            port = "sunt";
                                                            project = "atque";
                                                            region = "similique";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "qui";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "modi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "possimus";
                                                            port = "nisi";
                                                            project = "ab";
                                                            region = "omnis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "aut";
                                                location = "ipsum";
                                                rrdatas = new String[]{{
                                                    add("nulla"),
                                                    add("dolorum"),
                                                    add("maxime"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("velit"),
                                                    add("voluptatum"),
                                                    add("eveniet"),
                                                    add("quibusdam"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "assumenda";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "laboriosam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "et";
                                                            port = "temporibus";
                                                            project = "optio";
                                                            region = "quam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "delectus";
                                                location = "quae";
                                                rrdatas = new String[]{{
                                                    add("amet"),
                                                    add("culpa"),
                                                    add("asperiores"),
                                                    add("quasi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("provident"),
                                                    add("consequuntur"),
                                                }};
                                            }}),
                                        }};
                                        kind = "aut";
                                    }};
                                    kind = "maxime";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "repellendus";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "cum";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "natus";
                                                                port = "aperiam";
                                                                project = "dicta";
                                                                region = "repellat";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "dolores";
                                                    location = "harum";
                                                    rrdatas = new String[]{{
                                                        add("totam"),
                                                        add("provident"),
                                                        add("maxime"),
                                                        add("totam"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("neque"),
                                                        add("dolores"),
                                                        add("vel"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "occaecati";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "similique";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "facilis";
                                                                port = "in";
                                                                project = "nobis";
                                                                region = "nisi";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "natus";
                                                    location = "eaque";
                                                    rrdatas = new String[]{{
                                                        add("facilis"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("atque"),
                                                        add("illo"),
                                                        add("dolorum"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "incidunt";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "ea";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "sequi";
                                                                port = "nisi";
                                                                project = "autem";
                                                                region = "tempora";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "mollitia";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "hic";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "id";
                                                                port = "asperiores";
                                                                project = "rem";
                                                                region = "quod";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "commodi";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "beatae";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "molestiae";
                                                                port = "dolor";
                                                                project = "quia";
                                                                region = "nulla";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "occaecati";
                                                    location = "doloribus";
                                                    rrdatas = new String[]{{
                                                        add("culpa"),
                                                        add("tenetur"),
                                                        add("molestias"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("voluptate"),
                                                        add("aliquid"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "officia";
                                        }};
                                        kind = "qui";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "vero";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "possimus";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "quo";
                                                    port = "ullam";
                                                    project = "ipsa";
                                                    region = "placeat";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "quas";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "consectetur";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "dicta";
                                                    port = "eos";
                                                    project = "porro";
                                                    region = "iusto";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "dolorem";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "blanditiis";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "rem";
                                                    port = "provident";
                                                    project = "dolorem";
                                                    region = "alias";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 4922.61;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "mollitia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "sint";
                                                            port = "commodi";
                                                            project = "voluptas";
                                                            region = "eveniet";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "eligendi";
                                                rrdatas = new String[]{{
                                                    add("dolorem"),
                                                    add("eum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("dolore"),
                                                    add("neque"),
                                                    add("inventore"),
                                                    add("omnis"),
                                                }};
                                                weight = 3096.94;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "omnis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "optio";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "atque";
                                                            port = "dolor";
                                                            project = "optio";
                                                            region = "cupiditate";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quia";
                                                rrdatas = new String[]{{
                                                    add("cupiditate"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("accusamus"),
                                                    add("fugiat"),
                                                    add("ipsum"),
                                                }};
                                                weight = 8639.57;
                                            }}),
                                        }};
                                        kind = "amet";
                                    }};
                                    wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "est";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "placeat";
                                                            port = "veniam";
                                                            project = "minus";
                                                            region = "similique";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "corrupti";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "aliquam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "animi";
                                                            port = "ducimus";
                                                            project = "perferendis";
                                                            region = "impedit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "reiciendis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "veniam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "commodi";
                                                            port = "iste";
                                                            project = "corrupti";
                                                            region = "iste";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "distinctio";
                                                rrdatas = new String[]{{
                                                    add("consequuntur"),
                                                    add("voluptatem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("magnam"),
                                                    add("ad"),
                                                }};
                                                weight = 636.97;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iure";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "illum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "perspiciatis";
                                                            port = "accusamus";
                                                            project = "laborum";
                                                            region = "voluptatum";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ratione";
                                                rrdatas = new String[]{{
                                                    add("eius"),
                                                    add("perspiciatis"),
                                                    add("consequuntur"),
                                                    add("earum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("inventore"),
                                                    add("ut"),
                                                    add("tempore"),
                                                    add("molestias"),
                                                }};
                                                weight = 6827.24;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "minus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sint";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "magnam";
                                                            port = "veniam";
                                                            project = "quaerat";
                                                            region = "minima";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "officiis";
                                                rrdatas = new String[]{{
                                                    add("ullam"),
                                                    add("enim"),
                                                    add("facere"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("cumque"),
                                                    add("et"),
                                                    add("praesentium"),
                                                    add("minima"),
                                                }};
                                                weight = 9120.76;
                                            }}),
                                        }};
                                        kind = "est";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("unde"),
                                    add("consequatur"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("eligendi"),
                                }};
                                ttl = 439473;
                                type = "cumque";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "quaerat";
                                name = "Harriet Schultz";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "incidunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nobis";
                                                            port = "culpa";
                                                            project = "ratione";
                                                            region = "illum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sed";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "aut";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nulla";
                                                            port = "tenetur";
                                                            project = "dignissimos";
                                                            region = "dolor";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "totam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "vitae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "beatae";
                                                            port = "vitae";
                                                            project = "veniam";
                                                            region = "non";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "laudantium";
                                                location = "consequuntur";
                                                rrdatas = new String[]{{
                                                    add("nulla"),
                                                    add("ducimus"),
                                                    add("eveniet"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("enim"),
                                                    add("voluptas"),
                                                    add("veniam"),
                                                    add("voluptatem"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vel";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "veritatis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ad";
                                                            port = "deleniti";
                                                            project = "doloribus";
                                                            region = "magnam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nulla";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "adipisci";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "voluptas";
                                                            port = "nostrum";
                                                            project = "eum";
                                                            region = "modi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "cumque";
                                                location = "fugit";
                                                rrdatas = new String[]{{
                                                    add("fuga"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("reprehenderit"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "veritatis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "omnis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "dicta";
                                                            port = "illum";
                                                            project = "aspernatur";
                                                            region = "ut";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "deserunt";
                                                location = "dignissimos";
                                                rrdatas = new String[]{{
                                                    add("facilis"),
                                                    add("libero"),
                                                    add("corrupti"),
                                                    add("doloribus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("velit"),
                                                    add("sed"),
                                                }};
                                            }}),
                                        }};
                                        kind = "assumenda";
                                    }};
                                    geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "odit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "earum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "atque";
                                                            port = "sunt";
                                                            project = "dolores";
                                                            region = "placeat";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "architecto";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "impedit";
                                                            port = "deleniti";
                                                            project = "esse";
                                                            region = "voluptatum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aspernatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "accusantium";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "asperiores";
                                                            port = "corporis";
                                                            project = "tempora";
                                                            region = "voluptatum";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "a";
                                                location = "corrupti";
                                                rrdatas = new String[]{{
                                                    add("hic"),
                                                    add("blanditiis"),
                                                    add("maiores"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("harum"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "alias";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "quod";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "officiis";
                                                            port = "dicta";
                                                            project = "maiores";
                                                            region = "dolores";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "perferendis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "nulla";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "pariatur";
                                                            port = "quas";
                                                            project = "sequi";
                                                            region = "illo";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "temporibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "aperiam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ab";
                                                            port = "voluptatem";
                                                            project = "provident";
                                                            region = "ipsa";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "delectus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "nihil";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "voluptas";
                                                            port = "laboriosam";
                                                            project = "ducimus";
                                                            region = "adipisci";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "doloribus";
                                                location = "ratione";
                                                rrdatas = new String[]{{
                                                    add("ex"),
                                                    add("quos"),
                                                    add("dicta"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("exercitationem"),
                                                    add("molestiae"),
                                                    add("iure"),
                                                    add("blanditiis"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "impedit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "molestiae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "explicabo";
                                                            port = "dolore";
                                                            project = "accusantium";
                                                            region = "excepturi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "deserunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "beatae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "officiis";
                                                            port = "eaque";
                                                            project = "blanditiis";
                                                            region = "voluptas";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aut";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "tempora";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "cupiditate";
                                                            port = "officia";
                                                            project = "minima";
                                                            region = "doloribus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "suscipit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "debitis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "mollitia";
                                                            port = "tenetur";
                                                            project = "non";
                                                            region = "pariatur";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "vero";
                                                location = "natus";
                                                rrdatas = new String[]{{
                                                    add("quibusdam"),
                                                    add("officia"),
                                                    add("dolorem"),
                                                    add("velit"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("placeat"),
                                                    add("pariatur"),
                                                    add("vel"),
                                                    add("non"),
                                                }};
                                            }}),
                                        }};
                                        kind = "incidunt";
                                    }};
                                    kind = "praesentium";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "non";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "esse";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "natus";
                                                                port = "quas";
                                                                project = "saepe";
                                                                region = "modi";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "assumenda";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "neque";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "debitis";
                                                                port = "quaerat";
                                                                project = "nostrum";
                                                                region = "libero";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "totam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "veniam";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "facere";
                                                                port = "aliquam";
                                                                project = "vitae";
                                                                region = "ipsum";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "recusandae";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "ipsum";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "numquam";
                                                                port = "praesentium";
                                                                project = "dolores";
                                                                region = "consectetur";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "dicta";
                                                    location = "ipsa";
                                                    rrdatas = new String[]{{
                                                        add("perferendis"),
                                                        add("iure"),
                                                        add("cum"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("ratione"),
                                                        add("quis"),
                                                        add("modi"),
                                                        add("quo"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "aut";
                                        }};
                                        kind = "cupiditate";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "harum";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "nihil";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "incidunt";
                                                    port = "a";
                                                    project = "consequatur";
                                                    region = "consequuntur";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 2540.5;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "pariatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "vel";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "modi";
                                                            port = "expedita";
                                                            project = "quidem";
                                                            region = "consequuntur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eaque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "debitis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quibusdam";
                                                            port = "provident";
                                                            project = "veritatis";
                                                            region = "sunt";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quod";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sapiente";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "dignissimos";
                                                            port = "magnam";
                                                            project = "excepturi";
                                                            region = "placeat";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolorum";
                                                rrdatas = new String[]{{
                                                    add("modi"),
                                                    add("enim"),
                                                    add("mollitia"),
                                                    add("sed"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("delectus"),
                                                    add("ex"),
                                                }};
                                                weight = 6242.55;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "consequuntur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "occaecati";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "eum";
                                                            port = "temporibus";
                                                            project = "quae";
                                                            region = "doloremque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "debitis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "temporibus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "neque";
                                                            port = "est";
                                                            project = "repellendus";
                                                            region = "tempora";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quisquam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "cum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "adipisci";
                                                            port = "quasi";
                                                            project = "accusantium";
                                                            region = "molestias";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facere";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "quisquam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "sequi";
                                                            port = "in";
                                                            project = "modi";
                                                            region = "nihil";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "velit";
                                                rrdatas = new String[]{{
                                                    add("rem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("libero"),
                                                }};
                                                weight = 6243;
                                            }}),
                                        }};
                                        kind = "incidunt";
                                    }};
                                    wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "mollitia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "dicta";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "possimus";
                                                            port = "nemo";
                                                            project = "eum";
                                                            region = "iusto";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "veritatis";
                                                rrdatas = new String[]{{
                                                    add("unde"),
                                                    add("impedit"),
                                                    add("amet"),
                                                    add("dolores"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("neque"),
                                                    add("enim"),
                                                }};
                                                weight = 535.99;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "tempora";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "molestiae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "aliquam";
                                                            port = "ipsum";
                                                            project = "nihil";
                                                            region = "blanditiis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "natus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "itaque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "recusandae";
                                                            port = "iste";
                                                            project = "error";
                                                            region = "dicta";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nemo";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "numquam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "omnis";
                                                            port = "amet";
                                                            project = "deserunt";
                                                            region = "ducimus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "modi";
                                                rrdatas = new String[]{{
                                                    add("ipsa"),
                                                    add("dolores"),
                                                    add("ullam"),
                                                    add("sed"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("saepe"),
                                                    add("dolor"),
                                                    add("quidem"),
                                                    add("quaerat"),
                                                }};
                                                weight = 7365.74;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quibusdam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "atque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "odio";
                                                            port = "reprehenderit";
                                                            project = "quas";
                                                            region = "voluptates";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "distinctio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "nisi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "quasi";
                                                            port = "fugiat";
                                                            project = "aspernatur";
                                                            region = "impedit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "voluptatibus";
                                                rrdatas = new String[]{{
                                                    add("eaque"),
                                                    add("aspernatur"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("laborum"),
                                                    add("hic"),
                                                    add("rerum"),
                                                }};
                                                weight = 1292.59;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "aliquam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "adipisci";
                                                            port = "ipsam";
                                                            project = "fugiat";
                                                            region = "enim";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eveniet";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "exercitationem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "culpa";
                                                            port = "alias";
                                                            project = "eos";
                                                            region = "quos";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quisquam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "accusamus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "enim";
                                                            port = "veritatis";
                                                            project = "mollitia";
                                                            region = "veritatis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vero";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "aut";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "fugiat";
                                                            port = "deserunt";
                                                            project = "sint";
                                                            region = "eum";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "commodi";
                                                rrdatas = new String[]{{
                                                    add("rem"),
                                                    add("occaecati"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("voluptate"),
                                                    add("nam"),
                                                    add("quam"),
                                                    add("blanditiis"),
                                                }};
                                                weight = 3848.31;
                                            }}),
                                        }};
                                        kind = "odio";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("necessitatibus"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("consectetur"),
                                }};
                                ttl = 686190;
                                type = "quasi";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "eos";
                                name = "Chester Prosacco";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "perspiciatis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "corporis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "numquam";
                                                            port = "tempora";
                                                            project = "corrupti";
                                                            region = "ducimus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "asperiores";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "cumque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ut";
                                                            port = "amet";
                                                            project = "blanditiis";
                                                            region = "nesciunt";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ex";
                                                location = "tempore";
                                                rrdatas = new String[]{{
                                                    add("laboriosam"),
                                                    add("harum"),
                                                    add("consectetur"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nulla"),
                                                    add("a"),
                                                    add("ex"),
                                                    add("dolore"),
                                                }};
                                            }}),
                                        }};
                                        kind = "dicta";
                                    }};
                                    geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "magnam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "hic";
                                                            port = "error";
                                                            project = "repellendus";
                                                            region = "delectus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dicta";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "delectus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "officiis";
                                                            port = "itaque";
                                                            project = "nulla";
                                                            region = "distinctio";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "recusandae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "deleniti";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "reiciendis";
                                                            port = "commodi";
                                                            project = "sit";
                                                            region = "ea";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "molestias";
                                                location = "quia";
                                                rrdatas = new String[]{{
                                                    add("rem"),
                                                    add("molestias"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("necessitatibus"),
                                                    add("culpa"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aliquid";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "fugiat";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "impedit";
                                                            port = "in";
                                                            project = "fugit";
                                                            region = "voluptate";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "provident";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "expedita";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "laudantium";
                                                            port = "exercitationem";
                                                            project = "vitae";
                                                            region = "magnam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "blanditiis";
                                                location = "nulla";
                                                rrdatas = new String[]{{
                                                    add("quibusdam"),
                                                    add("minima"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("cupiditate"),
                                                    add("debitis"),
                                                }};
                                            }}),
                                        }};
                                        kind = "minima";
                                    }};
                                    kind = "vel";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "tempore";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "dolorem";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "maxime";
                                                                port = "voluptatem";
                                                                project = "maiores";
                                                                region = "unde";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "reprehenderit";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "placeat";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "magni";
                                                                port = "voluptatibus";
                                                                project = "quod";
                                                                region = "provident";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "delectus";
                                                    location = "dolore";
                                                    rrdatas = new String[]{{
                                                        add("labore"),
                                                        add("numquam"),
                                                        add("sunt"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("veniam"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "voluptates";
                                        }};
                                        kind = "in";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "expedita";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "excepturi";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "doloremque";
                                                    port = "iure";
                                                    project = "nostrum";
                                                    region = "cumque";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "eaque";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "earum";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "vel";
                                                    port = "sapiente";
                                                    project = "perspiciatis";
                                                    region = "ratione";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 7302.83;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fuga";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "distinctio";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "eligendi";
                                                            port = "unde";
                                                            project = "veniam";
                                                            region = "nam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "accusamus";
                                                rrdatas = new String[]{{
                                                    add("explicabo"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("incidunt"),
                                                    add("soluta"),
                                                }};
                                                weight = 4687.14;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "provident";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "dolore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "eveniet";
                                                            port = "odio";
                                                            project = "voluptate";
                                                            region = "explicabo";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "architecto";
                                                rrdatas = new String[]{{
                                                    add("possimus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("delectus"),
                                                }};
                                                weight = 3764.19;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "impedit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "excepturi";
                                                            port = "quod";
                                                            project = "iure";
                                                            region = "sed";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "odit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "fugit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "optio";
                                                            port = "accusantium";
                                                            project = "earum";
                                                            region = "excepturi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "numquam";
                                                rrdatas = new String[]{{
                                                    add("voluptatum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("possimus"),
                                                    add("unde"),
                                                }};
                                                weight = 8069.01;
                                            }}),
                                        }};
                                        kind = "culpa";
                                    }};
                                    wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "doloremque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quia";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "temporibus";
                                                            port = "voluptate";
                                                            project = "placeat";
                                                            region = "est";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "est";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "occaecati";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "modi";
                                                            port = "minus";
                                                            project = "id";
                                                            region = "culpa";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "beatae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "a";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "sint";
                                                            port = "saepe";
                                                            project = "illo";
                                                            region = "minima";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nulla";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "molestias";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "amet";
                                                            port = "natus";
                                                            project = "aperiam";
                                                            region = "ducimus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "doloribus";
                                                rrdatas = new String[]{{
                                                    add("ducimus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("dolor"),
                                                    add("ab"),
                                                    add("sint"),
                                                }};
                                                weight = 5537.14;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fugiat";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "odit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "minima";
                                                            port = "aliquam";
                                                            project = "similique";
                                                            region = "voluptatum";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "corporis";
                                                rrdatas = new String[]{{
                                                    add("commodi"),
                                                    add("commodi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("provident"),
                                                    add("iusto"),
                                                }};
                                                weight = 7619.61;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "consequatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "dolorem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "maxime";
                                                            port = "inventore";
                                                            project = "modi";
                                                            region = "nihil";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vitae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "veniam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "dolorum";
                                                            port = "animi";
                                                            project = "mollitia";
                                                            region = "autem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "illum";
                                                rrdatas = new String[]{{
                                                    add("hic"),
                                                    add("nemo"),
                                                    add("laborum"),
                                                    add("quidem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("aliquid"),
                                                    add("eius"),
                                                    add("atque"),
                                                    add("reprehenderit"),
                                                }};
                                                weight = 7749.46;
                                            }}),
                                        }};
                                        kind = "enim";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("impedit"),
                                    add("aspernatur"),
                                    add("nobis"),
                                    add("voluptatum"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("aspernatur"),
                                    add("est"),
                                }};
                                ttl = 30503;
                                type = "aut";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "nobis";
                                name = "Cary Jones";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "enim";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "suscipit";
                                                            port = "dolor";
                                                            project = "alias";
                                                            region = "libero";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quibusdam";
                                                location = "fuga";
                                                rrdatas = new String[]{{
                                                    add("similique"),
                                                    add("repellat"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("accusamus"),
                                                    add("illum"),
                                                    add("blanditiis"),
                                                    add("tempora"),
                                                }};
                                            }}),
                                        }};
                                        kind = "similique";
                                    }};
                                    geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolorum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "beatae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nesciunt";
                                                            port = "corrupti";
                                                            project = "officiis";
                                                            region = "inventore";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "officia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "sequi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "fuga";
                                                            port = "quisquam";
                                                            project = "qui";
                                                            region = "suscipit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "officia";
                                                location = "saepe";
                                                rrdatas = new String[]{{
                                                    add("ratione"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("itaque"),
                                                    add("maiores"),
                                                    add("provident"),
                                                }};
                                            }}),
                                        }};
                                        kind = "dignissimos";
                                    }};
                                    kind = "dicta";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "repellat";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "ex";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "placeat";
                                                                port = "mollitia";
                                                                project = "architecto";
                                                                region = "quae";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "aut";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "delectus";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "omnis";
                                                                port = "ea";
                                                                project = "ipsam";
                                                                region = "soluta";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "esse";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "beatae";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "voluptatem";
                                                                port = "blanditiis";
                                                                project = "eligendi";
                                                                region = "tenetur";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "deleniti";
                                                    location = "deleniti";
                                                    rrdatas = new String[]{{
                                                        add("cumque"),
                                                        add("iste"),
                                                        add("reiciendis"),
                                                        add("nihil"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("perspiciatis"),
                                                        add("occaecati"),
                                                        add("officia"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "quis";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "similique";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "quis";
                                                                port = "commodi";
                                                                project = "eveniet";
                                                                region = "possimus";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "dolor";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "velit";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "cum";
                                                                port = "accusantium";
                                                                project = "quo";
                                                                region = "officiis";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "laudantium";
                                                    location = "est";
                                                    rrdatas = new String[]{{
                                                        add("autem"),
                                                        add("quis"),
                                                        add("modi"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("qui"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "cupiditate";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "ea";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "soluta";
                                                                port = "odio";
                                                                project = "eveniet";
                                                                region = "beatae";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "dolore";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "mollitia";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "autem";
                                                                port = "non";
                                                                project = "doloremque";
                                                                region = "atque";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "natus";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "nemo";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "aut";
                                                                port = "natus";
                                                                project = "nihil";
                                                                region = "accusantium";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "et";
                                                    location = "unde";
                                                    rrdatas = new String[]{{
                                                        add("eius"),
                                                        add("rem"),
                                                        add("delectus"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("laudantium"),
                                                        add("earum"),
                                                        add("impedit"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "accusamus";
                                        }};
                                        kind = "reprehenderit";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "hic";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "perferendis";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "saepe";
                                                    port = "consequatur";
                                                    project = "architecto";
                                                    region = "dicta";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "sit";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "temporibus";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "laudantium";
                                                    port = "excepturi";
                                                    project = "alias";
                                                    region = "deleniti";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "quasi";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "aspernatur";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "suscipit";
                                                    port = "tempore";
                                                    project = "recusandae";
                                                    region = "harum";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 3944.35;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "doloremque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "vel";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ducimus";
                                                            port = "quidem";
                                                            project = "in";
                                                            region = "at";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "alias";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "mollitia";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "numquam";
                                                            port = "praesentium";
                                                            project = "aperiam";
                                                            region = "hic";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "blanditiis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "repudiandae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "voluptatem";
                                                            port = "tenetur";
                                                            project = "aut";
                                                            region = "ex";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "cupiditate";
                                                rrdatas = new String[]{{
                                                    add("atque"),
                                                    add("beatae"),
                                                    add("aut"),
                                                    add("commodi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("atque"),
                                                }};
                                                weight = 8363.95;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptate";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quia";
                                                            port = "aspernatur";
                                                            project = "iste";
                                                            region = "molestiae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "minima";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "culpa";
                                                            port = "voluptatum";
                                                            project = "voluptatem";
                                                            region = "amet";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vitae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quia";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "fugit";
                                                            port = "nobis";
                                                            project = "optio";
                                                            region = "laboriosam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quasi";
                                                rrdatas = new String[]{{
                                                    add("sed"),
                                                    add("laborum"),
                                                    add("in"),
                                                    add("eaque"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("distinctio"),
                                                }};
                                                weight = 7469.36;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "odio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "accusamus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "accusantium";
                                                            port = "dolores";
                                                            project = "fugiat";
                                                            region = "id";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sed";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "recusandae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "minima";
                                                            port = "tenetur";
                                                            project = "praesentium";
                                                            region = "officiis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "libero";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "dolorem";
                                                            port = "adipisci";
                                                            project = "voluptates";
                                                            region = "similique";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "id";
                                                rrdatas = new String[]{{
                                                    add("ut"),
                                                    add("veniam"),
                                                    add("eius"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("dolores"),
                                                }};
                                                weight = 6775.37;
                                            }}),
                                        }};
                                        kind = "quod";
                                    }};
                                    wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatem";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "soluta";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "vitae";
                                                            port = "maxime";
                                                            project = "placeat";
                                                            region = "cupiditate";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "asperiores";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "ex";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "deserunt";
                                                            port = "laborum";
                                                            project = "itaque";
                                                            region = "ad";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "voluptates";
                                                rrdatas = new String[]{{
                                                    add("quaerat"),
                                                    add("delectus"),
                                                    add("sit"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("labore"),
                                                    add("molestias"),
                                                    add("qui"),
                                                    add("soluta"),
                                                }};
                                                weight = 3558.49;
                                            }}),
                                        }};
                                        kind = "nihil";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("incidunt"),
                                    add("quibusdam"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("rem"),
                                }};
                                ttl = 677203;
                                type = "explicabo";
                            }}),
                        }};
                    }};;
                    ruleName = "odit";
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "est";
                clientOperationId = "est";
                fields = "accusamus";
                key = "debitis";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "repudiandae";
                uploadProtocol = "ipsum";
            }};            

            DnsResponsePolicyRulesPatchResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesPatch(req, new DnsResponsePolicyRulesPatchSecurity() {{
                option1 = new DnsResponsePolicyRulesPatchSecurityOption1("minus", "molestiae") {{
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

            DnsResponsePolicyRulesUpdateRequest req = new DnsResponsePolicyRulesUpdateRequest("illo", "est", "placeat") {{
                dollarXgafv = XgafvEnum.ONE;
                responsePolicyRule1 = new ResponsePolicyRule() {{
                    behavior = ResponsePolicyRuleBehaviorEnum.BEHAVIOR_UNSPECIFIED;
                    dnsName = "tempore";
                    kind = "voluptates";
                    localData = new ResponsePolicyRuleLocalData() {{
                        localDatas = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                            add(new ResourceRecordSet() {{
                                kind = "distinctio";
                                name = "Glenn Stokes";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "mollitia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "neque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "sapiente";
                                                            port = "maxime";
                                                            project = "sed";
                                                            region = "dolor";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nulla";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "eius";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "aperiam";
                                                            port = "animi";
                                                            project = "unde";
                                                            region = "rem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iure";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "aliquam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ad";
                                                            port = "cum";
                                                            project = "dolorum";
                                                            region = "quod";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nihil";
                                                location = "quae";
                                                rrdatas = new String[]{{
                                                    add("tenetur"),
                                                    add("eaque"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("rerum"),
                                                    add("magni"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repudiandae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "porro";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "autem";
                                                            port = "eius";
                                                            project = "unde";
                                                            region = "sunt";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "amet";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "commodi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "aliquid";
                                                            port = "qui";
                                                            project = "eligendi";
                                                            region = "perspiciatis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "eligendi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quisquam";
                                                            port = "quod";
                                                            project = "laboriosam";
                                                            region = "quidem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "reprehenderit";
                                                location = "praesentium";
                                                rrdatas = new String[]{{
                                                    add("error"),
                                                    add("alias"),
                                                    add("deserunt"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("sapiente"),
                                                }};
                                            }}),
                                        }};
                                        kind = "illum";
                                    }};
                                    geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "corrupti";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quibusdam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "dicta";
                                                            port = "perferendis";
                                                            project = "asperiores";
                                                            region = "deleniti";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "optio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "non";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "voluptatibus";
                                                            port = "iste";
                                                            project = "amet";
                                                            region = "quae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "pariatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "velit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "facere";
                                                            port = "tempore";
                                                            project = "minima";
                                                            region = "vitae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repellat";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "facere";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "numquam";
                                                            port = "similique";
                                                            project = "optio";
                                                            region = "minus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "sint";
                                                location = "aliquam";
                                                rrdatas = new String[]{{
                                                    add("ullam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nesciunt"),
                                                }};
                                            }}),
                                        }};
                                        kind = "reprehenderit";
                                    }};
                                    kind = "esse";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "quibusdam";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "ad";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "quia";
                                                                port = "dicta";
                                                                project = "nam";
                                                                region = "quos";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "velit";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "fuga";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "aliquid";
                                                                port = "facere";
                                                                project = "laboriosam";
                                                                region = "sint";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "architecto";
                                                    location = "totam";
                                                    rrdatas = new String[]{{
                                                        add("hic"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("iure"),
                                                        add("consequatur"),
                                                        add("accusamus"),
                                                        add("cum"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "occaecati";
                                        }};
                                        kind = "fuga";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "autem";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "atque";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "eum";
                                                    port = "molestias";
                                                    project = "fuga";
                                                    region = "non";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "nam";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "ut";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "illum";
                                                    port = "adipisci";
                                                    project = "totam";
                                                    region = "explicabo";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 8447.03;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "porro";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "ad";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ea";
                                                            port = "corrupti";
                                                            project = "minus";
                                                            region = "autem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aut";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "veniam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "aliquam";
                                                            port = "suscipit";
                                                            project = "atque";
                                                            region = "minus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "debitis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "doloremque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quibusdam";
                                                            port = "deleniti";
                                                            project = "quas";
                                                            region = "magnam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "cupiditate";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sapiente";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "explicabo";
                                                            port = "veritatis";
                                                            project = "incidunt";
                                                            region = "eligendi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "amet";
                                                rrdatas = new String[]{{
                                                    add("nihil"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("occaecati"),
                                                    add("iure"),
                                                    add("libero"),
                                                    add("cum"),
                                                }};
                                                weight = 530.39;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vel";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "recusandae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quam";
                                                            port = "fugit";
                                                            project = "facere";
                                                            region = "libero";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vitae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "labore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "tempore";
                                                            port = "deserunt";
                                                            project = "error";
                                                            region = "doloribus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "reprehenderit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "est";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "impedit";
                                                            port = "accusantium";
                                                            project = "necessitatibus";
                                                            region = "facere";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "reprehenderit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "officia";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "suscipit";
                                                            port = "explicabo";
                                                            project = "recusandae";
                                                            region = "unde";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "iusto";
                                                rrdatas = new String[]{{
                                                    add("ea"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("earum"),
                                                }};
                                                weight = 7393.02;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quod";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "corrupti";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "odit";
                                                            port = "voluptate";
                                                            project = "nobis";
                                                            region = "exercitationem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "beatae";
                                                rrdatas = new String[]{{
                                                    add("cupiditate"),
                                                    add("ex"),
                                                    add("tempore"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("expedita"),
                                                    add("modi"),
                                                }};
                                                weight = 7117.32;
                                            }}),
                                        }};
                                        kind = "quaerat";
                                    }};
                                    wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "saepe";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "iusto";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "odit";
                                                            port = "tempore";
                                                            project = "ducimus";
                                                            region = "animi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ducimus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "expedita";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "adipisci";
                                                            port = "tempora";
                                                            project = "modi";
                                                            region = "soluta";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "inventore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "vitae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "autem";
                                                            port = "rem";
                                                            project = "deleniti";
                                                            region = "illum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "necessitatibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "facilis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "asperiores";
                                                            port = "rem";
                                                            project = "perspiciatis";
                                                            region = "quam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "earum";
                                                rrdatas = new String[]{{
                                                    add("fugiat"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("voluptatem"),
                                                    add("quod"),
                                                    add("minus"),
                                                    add("pariatur"),
                                                }};
                                                weight = 2232.35;
                                            }}),
                                        }};
                                        kind = "amet";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("quasi"),
                                    add("dicta"),
                                    add("rerum"),
                                    add("neque"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("aliquam"),
                                    add("voluptates"),
                                    add("alias"),
                                    add("voluptatum"),
                                }};
                                ttl = 13682;
                                type = "officia";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "officia";
                                name = "Ms. Cynthia Gorczany";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "odio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "provident";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ipsa";
                                                            port = "eos";
                                                            project = "delectus";
                                                            region = "dolor";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dignissimos";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "consequuntur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "quis";
                                                            port = "cumque";
                                                            project = "laudantium";
                                                            region = "recusandae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "odit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sequi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "voluptates";
                                                            port = "culpa";
                                                            project = "at";
                                                            region = "dolorem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "incidunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "culpa";
                                                            port = "dolore";
                                                            project = "eius";
                                                            region = "iure";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "alias";
                                                location = "molestiae";
                                                rrdatas = new String[]{{
                                                    add("voluptatibus"),
                                                    add("sequi"),
                                                    add("ducimus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("libero"),
                                                    add("ut"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sed";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "aspernatur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "fugit";
                                                            port = "et";
                                                            project = "reiciendis";
                                                            region = "nulla";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "libero";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "hic";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "sint";
                                                            port = "eveniet";
                                                            project = "veniam";
                                                            region = "unde";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "consequuntur";
                                                location = "laboriosam";
                                                rrdatas = new String[]{{
                                                    add("quisquam"),
                                                    add("dignissimos"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quo"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sequi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "facere";
                                                            port = "labore";
                                                            project = "fugit";
                                                            region = "quis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "doloremque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ipsam";
                                                            port = "deleniti";
                                                            project = "laborum";
                                                            region = "quas";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "odit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "rem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "atque";
                                                            port = "repellat";
                                                            project = "eveniet";
                                                            region = "odit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "inventore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "fugit";
                                                            port = "perferendis";
                                                            project = "incidunt";
                                                            region = "ducimus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quod";
                                                location = "aut";
                                                rrdatas = new String[]{{
                                                    add("numquam"),
                                                    add("omnis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("inventore"),
                                                    add("quaerat"),
                                                    add("nesciunt"),
                                                    add("hic"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "laboriosam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "excepturi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "cum";
                                                            port = "in";
                                                            project = "repellendus";
                                                            region = "incidunt";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aperiam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "corporis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "quae";
                                                            port = "quae";
                                                            project = "voluptatibus";
                                                            region = "est";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "modi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "autem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "commodi";
                                                            port = "sed";
                                                            project = "exercitationem";
                                                            region = "natus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "explicabo";
                                                location = "velit";
                                                rrdatas = new String[]{{
                                                    add("hic"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("minima"),
                                                    add("minus"),
                                                    add("provident"),
                                                }};
                                            }}),
                                        }};
                                        kind = "quibusdam";
                                    }};
                                    geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iusto";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "omnis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "impedit";
                                                            port = "iusto";
                                                            project = "quas";
                                                            region = "nemo";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "facilis";
                                                location = "exercitationem";
                                                rrdatas = new String[]{{
                                                    add("tempore"),
                                                    add("magnam"),
                                                    add("maiores"),
                                                    add("quis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("voluptatem"),
                                                }};
                                            }}),
                                        }};
                                        kind = "vitae";
                                    }};
                                    kind = "quos";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "accusamus";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "vero";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "ea";
                                                                port = "voluptate";
                                                                project = "aliquid";
                                                                region = "nobis";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "reprehenderit";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "accusantium";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "pariatur";
                                                                port = "deserunt";
                                                                project = "facilis";
                                                                region = "in";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "ad";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "sit";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "qui";
                                                                port = "dolorum";
                                                                project = "ad";
                                                                region = "nisi";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "dolore";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "officiis";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "minus";
                                                                port = "tempora";
                                                                project = "sequi";
                                                                region = "natus";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "saepe";
                                                    location = "quibusdam";
                                                    rrdatas = new String[]{{
                                                        add("maxime"),
                                                        add("aliquam"),
                                                        add("adipisci"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("eaque"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "hic";
                                        }};
                                        kind = "incidunt";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "eos";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "voluptatem";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "aliquam";
                                                    port = "incidunt";
                                                    project = "totam";
                                                    region = "iusto";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 6503.19;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "provident";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "expedita";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "quaerat";
                                                            port = "nobis";
                                                            project = "nesciunt";
                                                            region = "quidem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "unde";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "magni";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "atque";
                                                            port = "blanditiis";
                                                            project = "quibusdam";
                                                            region = "odio";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "unde";
                                                rrdatas = new String[]{{
                                                    add("officia"),
                                                    add("fuga"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("aspernatur"),
                                                    add("asperiores"),
                                                }};
                                                weight = 8051.49;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "accusantium";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "laboriosam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "omnis";
                                                            port = "tenetur";
                                                            project = "vel";
                                                            region = "iste";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "animi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "doloremque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "pariatur";
                                                            port = "fugit";
                                                            project = "inventore";
                                                            region = "odit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "labore";
                                                rrdatas = new String[]{{
                                                    add("dolore"),
                                                    add("ullam"),
                                                    add("aut"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quasi"),
                                                    add("natus"),
                                                    add("fugiat"),
                                                }};
                                                weight = 4878.2;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ipsum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "et";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "magnam";
                                                            port = "illo";
                                                            project = "atque";
                                                            region = "magnam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "incidunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "nisi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "saepe";
                                                            port = "accusantium";
                                                            project = "sit";
                                                            region = "nesciunt";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "veritatis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "possimus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "qui";
                                                            port = "velit";
                                                            project = "repellendus";
                                                            region = "quod";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "error";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "beatae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "veniam";
                                                            port = "animi";
                                                            project = "delectus";
                                                            region = "pariatur";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "eos";
                                                rrdatas = new String[]{{
                                                    add("commodi"),
                                                    add("quo"),
                                                    add("aliquam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("praesentium"),
                                                    add("numquam"),
                                                }};
                                                weight = 4343.88;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "itaque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "assumenda";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "occaecati";
                                                            port = "eos";
                                                            project = "veniam";
                                                            region = "amet";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nobis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "provident";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "consequuntur";
                                                            port = "delectus";
                                                            project = "quaerat";
                                                            region = "quos";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "excepturi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "rerum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ad";
                                                            port = "et";
                                                            project = "eveniet";
                                                            region = "tempora";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ea";
                                                rrdatas = new String[]{{
                                                    add("sed"),
                                                    add("fugiat"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("cumque"),
                                                }};
                                                weight = 1987.88;
                                            }}),
                                        }};
                                        kind = "aliquam";
                                    }};
                                    wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "suscipit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "atque";
                                                            port = "animi";
                                                            project = "earum";
                                                            region = "quaerat";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "excepturi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "eos";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "voluptate";
                                                            port = "odio";
                                                            project = "magni";
                                                            region = "enim";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eveniet";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "magni";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "iste";
                                                            port = "aut";
                                                            project = "occaecati";
                                                            region = "vero";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "error";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "ipsa";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "labore";
                                                            port = "id";
                                                            project = "ullam";
                                                            region = "quibusdam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "recusandae";
                                                rrdatas = new String[]{{
                                                    add("omnis"),
                                                    add("mollitia"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nihil"),
                                                    add("ducimus"),
                                                    add("eaque"),
                                                    add("aliquid"),
                                                }};
                                                weight = 4083.63;
                                            }}),
                                        }};
                                        kind = "odio";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("quisquam"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("et"),
                                    add("optio"),
                                    add("a"),
                                    add("quis"),
                                }};
                                ttl = 603557;
                                type = "consectetur";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "qui";
                                name = "Mrs. Laura Halvorson DVM";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "harum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "non";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "laboriosam";
                                                            port = "deleniti";
                                                            project = "molestias";
                                                            region = "dignissimos";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facere";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "omnis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "qui";
                                                            port = "nulla";
                                                            project = "velit";
                                                            region = "amet";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ipsam";
                                                location = "suscipit";
                                                rrdatas = new String[]{{
                                                    add("ipsa"),
                                                    add("accusamus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("velit"),
                                                    add("earum"),
                                                    add("recusandae"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "impedit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "ad";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "delectus";
                                                            port = "dolorem";
                                                            project = "ipsam";
                                                            region = "voluptatum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolorum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "earum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "quisquam";
                                                            port = "officia";
                                                            project = "officiis";
                                                            region = "ratione";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "consequuntur";
                                                location = "neque";
                                                rrdatas = new String[]{{
                                                    add("adipisci"),
                                                    add("inventore"),
                                                    add("tempore"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ducimus"),
                                                    add("rerum"),
                                                    add("laborum"),
                                                    add("architecto"),
                                                }};
                                            }}),
                                        }};
                                        kind = "quod";
                                    }};
                                    geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "inventore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "maxime";
                                                            port = "deleniti";
                                                            project = "accusantium";
                                                            region = "sed";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "minus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sint";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "alias";
                                                            port = "placeat";
                                                            project = "in";
                                                            region = "possimus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iste";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "neque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "consectetur";
                                                            port = "repellat";
                                                            project = "quae";
                                                            region = "animi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "est";
                                                location = "autem";
                                                rrdatas = new String[]{{
                                                    add("officiis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("occaecati"),
                                                    add("optio"),
                                                    add("asperiores"),
                                                    add("et"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quas";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "commodi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "quo";
                                                            port = "libero";
                                                            project = "id";
                                                            region = "quaerat";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "inventore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "maiores";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "numquam";
                                                            port = "nemo";
                                                            project = "numquam";
                                                            region = "culpa";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aliquam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "voluptatibus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "maxime";
                                                            port = "repellat";
                                                            project = "veritatis";
                                                            region = "inventore";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "autem";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "fugiat";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "exercitationem";
                                                            port = "ut";
                                                            project = "dolore";
                                                            region = "numquam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "officia";
                                                location = "reprehenderit";
                                                rrdatas = new String[]{{
                                                    add("nisi"),
                                                    add("consequuntur"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("iusto"),
                                                    add("dolorem"),
                                                    add("placeat"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quibusdam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "natus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "repellat";
                                                            port = "est";
                                                            project = "doloribus";
                                                            region = "labore";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "adipisci";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "impedit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "qui";
                                                            port = "consectetur";
                                                            project = "ea";
                                                            region = "aspernatur";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "consequatur";
                                                location = "delectus";
                                                rrdatas = new String[]{{
                                                    add("et"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("voluptatum"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nesciunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "at";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "sequi";
                                                            port = "temporibus";
                                                            project = "cum";
                                                            region = "sit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "magni";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "earum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "id";
                                                            port = "exercitationem";
                                                            project = "commodi";
                                                            region = "nostrum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "delectus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "rem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "suscipit";
                                                            port = "veniam";
                                                            project = "consequuntur";
                                                            region = "repudiandae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "perspiciatis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "dolor";
                                                            port = "praesentium";
                                                            project = "non";
                                                            region = "deleniti";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolor";
                                                location = "corrupti";
                                                rrdatas = new String[]{{
                                                    add("molestias"),
                                                    add("aperiam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("labore"),
                                                }};
                                            }}),
                                        }};
                                        kind = "neque";
                                    }};
                                    kind = "cum";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "ratione";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "est";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "neque";
                                                                port = "perferendis";
                                                                project = "vero";
                                                                region = "excepturi";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "dicta";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "doloribus";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "alias";
                                                                port = "asperiores";
                                                                project = "quibusdam";
                                                                region = "animi";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "alias";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "porro";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "libero";
                                                                port = "quasi";
                                                                project = "quidem";
                                                                region = "soluta";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "exercitationem";
                                                    location = "exercitationem";
                                                    rrdatas = new String[]{{
                                                        add("magni"),
                                                        add("unde"),
                                                        add("consequuntur"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("aut"),
                                                        add("expedita"),
                                                        add("quo"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "non";
                                        }};
                                        kind = "libero";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "odio";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "aliquam";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "nisi";
                                                    port = "labore";
                                                    project = "accusamus";
                                                    region = "cum";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "sunt";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "voluptatem";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "ipsum";
                                                    port = "laudantium";
                                                    project = "totam";
                                                    region = "facilis";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "consequatur";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "architecto";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "rerum";
                                                    port = "architecto";
                                                    project = "in";
                                                    region = "fuga";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 9486.39;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "reprehenderit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "soluta";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "delectus";
                                                            port = "repudiandae";
                                                            project = "quidem";
                                                            region = "occaecati";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "labore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "voluptate";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nihil";
                                                            port = "recusandae";
                                                            project = "illum";
                                                            region = "laborum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "reiciendis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "provident";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "illo";
                                                            port = "autem";
                                                            project = "tenetur";
                                                            region = "rerum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "asperiores";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "nisi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "assumenda";
                                                            port = "ab";
                                                            project = "eum";
                                                            region = "quia";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quidem";
                                                rrdatas = new String[]{{
                                                    add("doloremque"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("debitis"),
                                                }};
                                                weight = 2354.27;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sed";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quidem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ipsum";
                                                            port = "accusamus";
                                                            project = "consectetur";
                                                            region = "tempora";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "sequi";
                                                rrdatas = new String[]{{
                                                    add("aliquid"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("sapiente"),
                                                    add("corporis"),
                                                    add("nemo"),
                                                    add("soluta"),
                                                }};
                                                weight = 2976.24;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ab";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "ullam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "consectetur";
                                                            port = "porro";
                                                            project = "optio";
                                                            region = "earum";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "vitae";
                                                rrdatas = new String[]{{
                                                    add("fugit"),
                                                    add("consequatur"),
                                                    add("incidunt"),
                                                    add("placeat"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("culpa"),
                                                    add("illum"),
                                                }};
                                                weight = 7985.36;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sint";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "voluptatem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "maxime";
                                                            port = "ad";
                                                            project = "illo";
                                                            region = "provident";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "exercitationem";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "atque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "labore";
                                                            port = "praesentium";
                                                            project = "optio";
                                                            region = "officiis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "quam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "a";
                                                            port = "ab";
                                                            project = "voluptates";
                                                            region = "eos";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facere";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "libero";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "perferendis";
                                                            port = "beatae";
                                                            project = "saepe";
                                                            region = "voluptatem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "sint";
                                                rrdatas = new String[]{{
                                                    add("explicabo"),
                                                    add("distinctio"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quidem"),
                                                    add("tempora"),
                                                    add("minus"),
                                                }};
                                                weight = 6917.42;
                                            }}),
                                        }};
                                        kind = "quidem";
                                    }};
                                    wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "ab";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "pariatur";
                                                            port = "excepturi";
                                                            project = "enim";
                                                            region = "culpa";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "nisi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "impedit";
                                                            port = "quasi";
                                                            project = "nesciunt";
                                                            region = "corrupti";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "in";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "odio";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "eveniet";
                                                            port = "vitae";
                                                            project = "quos";
                                                            region = "eveniet";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "officia";
                                                rrdatas = new String[]{{
                                                    add("debitis"),
                                                    add("non"),
                                                    add("veniam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("illo"),
                                                }};
                                                weight = 5361.81;
                                            }}),
                                        }};
                                        kind = "quisquam";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("optio"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("minima"),
                                    add("ducimus"),
                                    add("tenetur"),
                                    add("libero"),
                                }};
                                ttl = 833686;
                                type = "aliquid";
                            }}),
                            add(new ResourceRecordSet() {{
                                kind = "alias";
                                name = "Jack Paucek";
                                routingPolicy = new RRSetRoutingPolicy() {{
                                    geo = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eos";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "est";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "pariatur";
                                                            port = "quaerat";
                                                            project = "itaque";
                                                            region = "itaque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "animi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "ullam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nemo";
                                                            port = "atque";
                                                            project = "optio";
                                                            region = "fugit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "at";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "delectus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "optio";
                                                            port = "laudantium";
                                                            project = "quas";
                                                            region = "quidem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptates";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "hic";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nihil";
                                                            port = "quas";
                                                            project = "tenetur";
                                                            region = "fugiat";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "unde";
                                                location = "autem";
                                                rrdatas = new String[]{{
                                                    add("molestiae"),
                                                    add("accusamus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("autem"),
                                                    add("placeat"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dicta";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "dolores";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "repellat";
                                                            port = "id";
                                                            project = "fuga";
                                                            region = "ad";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "corrupti";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "minus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "repellat";
                                                            port = "sed";
                                                            project = "ratione";
                                                            region = "quaerat";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "minus";
                                                location = "natus";
                                                rrdatas = new String[]{{
                                                    add("veniam"),
                                                    add("tempore"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("facilis"),
                                                    add("assumenda"),
                                                    add("repellat"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vitae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "alias";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nobis";
                                                            port = "vero";
                                                            project = "excepturi";
                                                            region = "expedita";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "harum";
                                                location = "quisquam";
                                                rrdatas = new String[]{{
                                                    add("magni"),
                                                    add("dignissimos"),
                                                    add("aspernatur"),
                                                    add("ullam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("impedit"),
                                                    add("magni"),
                                                    add("suscipit"),
                                                    add("ipsam"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quisquam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "ipsa";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "totam";
                                                            port = "consequatur";
                                                            project = "corrupti";
                                                            region = "numquam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "alias";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "nisi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "eveniet";
                                                            port = "tenetur";
                                                            project = "vel";
                                                            region = "corrupti";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptates";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "enim";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "blanditiis";
                                                            port = "animi";
                                                            project = "quibusdam";
                                                            region = "possimus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "maiores";
                                                location = "est";
                                                rrdatas = new String[]{{
                                                    add("voluptate"),
                                                    add("nostrum"),
                                                    add("incidunt"),
                                                    add("enim"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ipsa"),
                                                }};
                                            }}),
                                        }};
                                        kind = "quaerat";
                                    }};
                                    geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "optio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "commodi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quia";
                                                            port = "facilis";
                                                            project = "magnam";
                                                            region = "dolor";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "provident";
                                                location = "inventore";
                                                rrdatas = new String[]{{
                                                    add("temporibus"),
                                                    add("sapiente"),
                                                    add("ipsa"),
                                                    add("vitae"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("adipisci"),
                                                    add("itaque"),
                                                    add("unde"),
                                                    add("beatae"),
                                                }};
                                            }}),
                                        }};
                                        kind = "eveniet";
                                    }};
                                    kind = "quas";
                                    primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                        backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                            enableFencing = false;
                                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "libero";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "ea";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "at";
                                                                port = "incidunt";
                                                                project = "autem";
                                                                region = "alias";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "est";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "dignissimos";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                                networkUrl = "quo";
                                                                port = "saepe";
                                                                project = "tempore";
                                                                region = "sunt";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "nisi";
                                                    location = "nulla";
                                                    rrdatas = new String[]{{
                                                        add("accusantium"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("et"),
                                                        add("repudiandae"),
                                                        add("delectus"),
                                                        add("qui"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "neque";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "quisquam";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "quisquam";
                                                                port = "aperiam";
                                                                project = "delectus";
                                                                region = "aut";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "repellat";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                                kind = "ducimus";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "sapiente";
                                                                port = "error";
                                                                project = "facere";
                                                                region = "veniam";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "eligendi";
                                                    location = "aspernatur";
                                                    rrdatas = new String[]{{
                                                        add("doloribus"),
                                                        add("illum"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("repudiandae"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "tempore";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "deserunt";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "officia";
                                                                port = "magnam";
                                                                project = "quia";
                                                                region = "ullam";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "dolor";
                                                    location = "maxime";
                                                    rrdatas = new String[]{{
                                                        add("ipsa"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("ullam"),
                                                    }};
                                                }}),
                                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "architecto";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                                kind = "maiores";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "fugit";
                                                                port = "maxime";
                                                                project = "iusto";
                                                                region = "recusandae";
                                                            }}),
                                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                                ipAddress = "iusto";
                                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                                kind = "porro";
                                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                                networkUrl = "tempora";
                                                                port = "voluptatum";
                                                                project = "cum";
                                                                region = "itaque";
                                                            }}),
                                                        }};
                                                    }};
                                                    kind = "sit";
                                                    location = "excepturi";
                                                    rrdatas = new String[]{{
                                                        add("numquam"),
                                                        add("architecto"),
                                                        add("fuga"),
                                                        add("iusto"),
                                                    }};
                                                    signatureRrdatas = new String[]{{
                                                        add("dolores"),
                                                        add("inventore"),
                                                        add("ipsam"),
                                                    }};
                                                }}),
                                            }};
                                            kind = "impedit";
                                        }};
                                        kind = "officia";
                                        primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "odit";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "labore";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "dolorum";
                                                    port = "provident";
                                                    project = "quibusdam";
                                                    region = "ipsam";
                                                }}),
                                            }};
                                        }};
                                        trickleTraffic = 5928.98;
                                    }};
                                    wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quos";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "perspiciatis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "placeat";
                                                            port = "sapiente";
                                                            project = "assumenda";
                                                            region = "alias";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eligendi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "iusto";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ullam";
                                                            port = "dolorem";
                                                            project = "vero";
                                                            region = "esse";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vero";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "facere";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "accusamus";
                                                            port = "vero";
                                                            project = "nisi";
                                                            region = "recusandae";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "deleniti";
                                                rrdatas = new String[]{{
                                                    add("excepturi"),
                                                    add("consequatur"),
                                                    add("distinctio"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("porro"),
                                                    add("consectetur"),
                                                    add("molestias"),
                                                }};
                                                weight = 2671.84;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "qui";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sint";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "in";
                                                            port = "ipsa";
                                                            project = "sequi";
                                                            region = "maiores";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "itaque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "adipisci";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quo";
                                                            port = "veniam";
                                                            project = "sit";
                                                            region = "deleniti";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "qui";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "possimus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "deleniti";
                                                            port = "perspiciatis";
                                                            project = "deserunt";
                                                            region = "dolor";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "iure";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "sunt";
                                                            port = "facere";
                                                            project = "dolores";
                                                            region = "in";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "repudiandae";
                                                rrdatas = new String[]{{
                                                    add("esse"),
                                                    add("accusantium"),
                                                    add("nihil"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("est"),
                                                    add("iure"),
                                                    add("aut"),
                                                }};
                                                weight = 8090.72;
                                            }}),
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "doloribus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "dolore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "debitis";
                                                            port = "commodi";
                                                            project = "beatae";
                                                            region = "voluptate";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptate";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "quidem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "pariatur";
                                                            port = "nobis";
                                                            project = "dolor";
                                                            region = "distinctio";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dignissimos";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "voluptatibus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "cum";
                                                            port = "facilis";
                                                            project = "nisi";
                                                            region = "occaecati";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ducimus";
                                                rrdatas = new String[]{{
                                                    add("repudiandae"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("odio"),
                                                    add("nihil"),
                                                    add("ipsa"),
                                                    add("eveniet"),
                                                }};
                                                weight = 2046.97;
                                            }}),
                                        }};
                                        kind = "autem";
                                    }};
                                    wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                            add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iusto";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "voluptatibus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "maxime";
                                                            port = "eos";
                                                            project = "doloremque";
                                                            region = "vel";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "itaque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "vitae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "sit";
                                                            port = "quibusdam";
                                                            project = "dolorem";
                                                            region = "aut";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "blanditiis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "inventore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "porro";
                                                            port = "consequuntur";
                                                            project = "perferendis";
                                                            region = "est";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ipsum";
                                                rrdatas = new String[]{{
                                                    add("perspiciatis"),
                                                    add("corrupti"),
                                                    add("ea"),
                                                    add("sequi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nobis"),
                                                    add("est"),
                                                }};
                                                weight = 5213.33;
                                            }}),
                                        }};
                                        kind = "corporis";
                                    }};
                                }};
                                rrdatas = new String[]{{
                                    add("adipisci"),
                                    add("delectus"),
                                    add("repudiandae"),
                                    add("autem"),
                                }};
                                signatureRrdatas = new String[]{{
                                    add("ad"),
                                    add("molestiae"),
                                }};
                                ttl = 282079;
                                type = "possimus";
                            }}),
                        }};
                    }};;
                    ruleName = "harum";
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "natus";
                clientOperationId = "labore";
                fields = "officia";
                key = "quam";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "rem";
                uploadProtocol = "a";
            }};            

            DnsResponsePolicyRulesUpdateResponse res = sdk.responsePolicyRules.dnsResponsePolicyRulesUpdate(req, new DnsResponsePolicyRulesUpdateSecurity() {{
                option1 = new DnsResponsePolicyRulesUpdateSecurityOption1("illo", "velit") {{
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
