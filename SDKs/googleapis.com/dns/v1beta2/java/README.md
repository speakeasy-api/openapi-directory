# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsChangesCreateRequest;
import org.openapis.openapi.models.operations.DnsChangesCreateResponse;
import org.openapis.openapi.models.operations.DnsChangesCreateSecurity;
import org.openapis.openapi.models.operations.DnsChangesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DnsChangesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Change;
import org.openapis.openapi.models.shared.ChangeStatusEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsChangesCreateRequest req = new DnsChangesCreateRequest("corrupti", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                change = new Change() {{
                    additions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "unde";
                            name = "Johnnie Stamm";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iure";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "debitis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "delectus";
                                                        port = "tempora";
                                                        project = "suscipit";
                                                        region = "molestiae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "minus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "voluptatum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "excepturi";
                                                        port = "nisi";
                                                        project = "recusandae";
                                                        region = "temporibus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ab";
                                            location = "quis";
                                            rrdatas = new String[]{{
                                                add("deserunt"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ipsam"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sapiente";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "odit";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "at";
                                                        port = "maiores";
                                                        project = "molestiae";
                                                        region = "quod";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quod";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "totam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "dolorum";
                                                        port = "dicta";
                                                        project = "nam";
                                                        region = "officia";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "occaecati";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "deleniti";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "optio";
                                                        port = "totam";
                                                        project = "beatae";
                                                        region = "commodi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "qui";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "cum";
                                                        port = "esse";
                                                        project = "ipsum";
                                                        region = "excepturi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aspernatur";
                                            location = "perferendis";
                                            rrdatas = new String[]{{
                                                add("natus"),
                                                add("sed"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("dolor"),
                                                add("natus"),
                                                add("laboriosam"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "saepe";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "in";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "iste";
                                                        port = "iure";
                                                        project = "saepe";
                                                        region = "quidem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "architecto";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "reiciendis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "mollitia";
                                                        port = "laborum";
                                                        project = "dolores";
                                                        region = "dolorem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "corporis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "nobis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "omnis";
                                                        port = "nemo";
                                                        project = "minima";
                                                        region = "excepturi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "accusantium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "culpa";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "sapiente";
                                                        port = "architecto";
                                                        project = "mollitia";
                                                        region = "dolorem";
                                                    }}),
                                                }};
                                            }};
                                            kind = "culpa";
                                            location = "consequuntur";
                                            rrdatas = new String[]{{
                                                add("mollitia"),
                                                add("occaecati"),
                                                add("numquam"),
                                                add("commodi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("molestiae"),
                                                add("velit"),
                                            }};
                                        }}),
                                    }};
                                    kind = "error";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vitae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "animi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "odit";
                                                        port = "quo";
                                                        project = "sequi";
                                                        region = "tenetur";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "possimus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quasi";
                                                        port = "error";
                                                        project = "temporibus";
                                                        region = "laborum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quasi";
                                            location = "reiciendis";
                                            rrdatas = new String[]{{
                                                add("vero"),
                                                add("nihil"),
                                                add("praesentium"),
                                                add("voluptatibus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("omnis"),
                                            }};
                                        }}),
                                    }};
                                    kind = "voluptate";
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
                                                            ipAddress = "reprehenderit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "maiores";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "corporis";
                                                            port = "dolore";
                                                            project = "iusto";
                                                            region = "dicta";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "harum";
                                                location = "enim";
                                                rrdatas = new String[]{{
                                                    add("commodi"),
                                                    add("repudiandae"),
                                                    add("quae"),
                                                    add("ipsum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("molestias"),
                                                    add("excepturi"),
                                                    add("pariatur"),
                                                }};
                                            }}),
                                        }};
                                        kind = "modi";
                                    }};
                                    kind = "praesentium";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "voluptates";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "repudiandae";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "veritatis";
                                                port = "itaque";
                                                project = "incidunt";
                                                region = "enim";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "consequatur";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "quibusdam";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "deserunt";
                                                port = "distinctio";
                                                project = "quibusdam";
                                                region = "labore";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "modi";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "aliquid";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "quos";
                                                port = "perferendis";
                                                project = "magni";
                                                region = "assumenda";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 3698.08;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolorum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "tempora";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "tempore";
                                                        port = "labore";
                                                        project = "delectus";
                                                        region = "eum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "non";
                                            rrdatas = new String[]{{
                                                add("sint"),
                                                add("aliquid"),
                                                add("provident"),
                                                add("necessitatibus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("officia"),
                                                add("dolor"),
                                                add("debitis"),
                                            }};
                                            weight = 9527.49;
                                        }}),
                                    }};
                                    kind = "dolorum";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "illum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "rerum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "magnam";
                                                        port = "cumque";
                                                        project = "facere";
                                                        region = "ea";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aliquid";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "accusamus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "occaecati";
                                                        port = "enim";
                                                        project = "accusamus";
                                                        region = "delectus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quidem";
                                            rrdatas = new String[]{{
                                                add("nam"),
                                                add("id"),
                                                add("blanditiis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("sapiente"),
                                                add("amet"),
                                                add("deserunt"),
                                            }};
                                            weight = 3948.69;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "natus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "molestiae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nihil";
                                                        port = "magnam";
                                                        project = "distinctio";
                                                        region = "id";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "labore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "suscipit";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "nobis";
                                                        port = "eum";
                                                        project = "vero";
                                                        region = "aspernatur";
                                                    }}),
                                                }};
                                            }};
                                            kind = "architecto";
                                            rrdatas = new String[]{{
                                                add("et"),
                                                add("excepturi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("provident"),
                                                add("quos"),
                                            }};
                                            weight = 5743.25;
                                        }}),
                                    }};
                                    kind = "accusantium";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("reiciendis"),
                                add("mollitia"),
                                add("ad"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("dolor"),
                                add("necessitatibus"),
                            }};
                            ttl = 141264;
                            type = "nemo";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "quasi";
                            name = "Melba Toy";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "in";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "architecto";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "ullam";
                                                        port = "expedita";
                                                        project = "nihil";
                                                        region = "repellat";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quibusdam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "saepe";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "accusantium";
                                                        port = "consequuntur";
                                                        project = "praesentium";
                                                        region = "natus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magni";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quo";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "pariatur";
                                                        port = "maxime";
                                                        project = "ea";
                                                        region = "excepturi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "odit";
                                            location = "ea";
                                            rrdatas = new String[]{{
                                                add("ab"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quidem"),
                                                add("ipsam"),
                                                add("voluptate"),
                                                add("autem"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eaque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "nemo";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "perferendis";
                                                        port = "fugiat";
                                                        project = "amet";
                                                        region = "aut";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cumque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "hic";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "nobis";
                                                        port = "dolores";
                                                        project = "quis";
                                                        region = "totam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dignissimos";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "eos";
                                                        port = "perferendis";
                                                        project = "dolores";
                                                        region = "minus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quam";
                                            location = "dolor";
                                            rrdatas = new String[]{{
                                                add("nostrum"),
                                                add("hic"),
                                                add("recusandae"),
                                                add("omnis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("perspiciatis"),
                                                add("voluptatem"),
                                                add("porro"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "blanditiis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "eaque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "rerum";
                                                        port = "adipisci";
                                                        project = "asperiores";
                                                        region = "earum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "modi";
                                            location = "iste";
                                            rrdatas = new String[]{{
                                                add("deleniti"),
                                                add("pariatur"),
                                                add("provident"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("libero"),
                                                add("delectus"),
                                                add("quaerat"),
                                                add("quos"),
                                            }};
                                        }}),
                                    }};
                                    kind = "aliquid";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolor";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ipsum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "excepturi";
                                                        port = "cum";
                                                        project = "voluptate";
                                                        region = "dignissimos";
                                                    }}),
                                                }};
                                            }};
                                            kind = "reiciendis";
                                            location = "amet";
                                            rrdatas = new String[]{{
                                                add("numquam"),
                                                add("veritatis"),
                                                add("ipsa"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("iure"),
                                            }};
                                        }}),
                                    }};
                                    kind = "odio";
                                }};
                                kind = "quaerat";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "natus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "atque";
                                                            port = "sit";
                                                            project = "fugiat";
                                                            region = "ab";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "soluta";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "iusto";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "dolorum";
                                                            port = "deleniti";
                                                            project = "omnis";
                                                            region = "necessitatibus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "distinctio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "nihil";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "voluptate";
                                                            port = "id";
                                                            project = "saepe";
                                                            region = "eius";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "aspernatur";
                                                location = "perferendis";
                                                rrdatas = new String[]{{
                                                    add("optio"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ad"),
                                                    add("saepe"),
                                                    add("suscipit"),
                                                    add("deserunt"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "minima";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "totam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "alias";
                                                            port = "at";
                                                            project = "quaerat";
                                                            region = "tempora";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vel";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "officiis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "dolorum";
                                                            port = "a";
                                                            project = "esse";
                                                            region = "harum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iusto";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quisquam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "amet";
                                                            port = "tempore";
                                                            project = "accusamus";
                                                            region = "numquam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "enim";
                                                location = "dolorem";
                                                rrdatas = new String[]{{
                                                    add("totam"),
                                                    add("nihil"),
                                                    add("sit"),
                                                    add("expedita"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("sed"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "libero";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "deserunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ipsum";
                                                            port = "incidunt";
                                                            project = "qui";
                                                            region = "cupiditate";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "maxime";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "soluta";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "laborum";
                                                            port = "totam";
                                                            project = "incidunt";
                                                            region = "aspernatur";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolores";
                                                location = "distinctio";
                                                rrdatas = new String[]{{
                                                    add("aliquid"),
                                                    add("quam"),
                                                    add("molestias"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("qui"),
                                                    add("neque"),
                                                    add("fugit"),
                                                    add("magni"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "nam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "voluptatem";
                                                            port = "cumque";
                                                            project = "soluta";
                                                            region = "nobis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "et";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "ipsum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nobis";
                                                            port = "quos";
                                                            project = "tempore";
                                                            region = "cupiditate";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "aperiam";
                                                location = "delectus";
                                                rrdatas = new String[]{{
                                                    add("dolore"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("adipisci"),
                                                    add("dolorum"),
                                                }};
                                            }}),
                                        }};
                                        kind = "architecto";
                                    }};
                                    kind = "quae";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quas";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "consequatur";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "repellendus";
                                                port = "porro";
                                                project = "doloribus";
                                                region = "ut";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 7034.95;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "odio";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "voluptatibus";
                                                        port = "quisquam";
                                                        project = "vero";
                                                        region = "omnis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quis";
                                            rrdatas = new String[]{{
                                                add("delectus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("consectetur"),
                                                add("vero"),
                                            }};
                                            weight = 9493.19;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "hic";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quod";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "similique";
                                                        port = "facilis";
                                                        project = "vero";
                                                        region = "ducimus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "illum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "natus";
                                                        port = "impedit";
                                                        project = "aut";
                                                        region = "voluptatibus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "exercitationem";
                                            rrdatas = new String[]{{
                                                add("fugit"),
                                                add("porro"),
                                                add("maiores"),
                                                add("doloribus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("eligendi"),
                                                add("ducimus"),
                                            }};
                                            weight = 40.48;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempora";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "ea";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "vel";
                                                        port = "possimus";
                                                        project = "magnam";
                                                        region = "ratione";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ex";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "dicta";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "maiores";
                                                        port = "quasi";
                                                        project = "ex";
                                                        region = "nulla";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "excepturi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "nostrum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quisquam";
                                                        port = "saepe";
                                                        project = "ea";
                                                        region = "impedit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "corporis";
                                            rrdatas = new String[]{{
                                                add("aliquid"),
                                                add("inventore"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ea"),
                                                add("quo"),
                                            }};
                                            weight = 2322.34;
                                        }}),
                                    }};
                                    kind = "recusandae";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eaque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "libero";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "aut";
                                                        port = "deleniti";
                                                        project = "impedit";
                                                        region = "aliquam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fugit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "inventore";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "et";
                                                        port = "dolorum";
                                                        project = "laborum";
                                                        region = "placeat";
                                                    }}),
                                                }};
                                            }};
                                            kind = "velit";
                                            rrdatas = new String[]{{
                                                add("autem"),
                                                add("nobis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("assumenda"),
                                                add("nulla"),
                                                add("voluptas"),
                                            }};
                                            weight = 7270.44;
                                        }}),
                                    }};
                                    kind = "quasi";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("numquam"),
                                add("explicabo"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("ipsa"),
                                add("molestiae"),
                                add("magnam"),
                            }};
                            ttl = 487935;
                            type = "eius";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "esse";
                            name = "Hilda Paucek";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "assumenda";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "praesentium";
                                                        port = "quisquam";
                                                        project = "veritatis";
                                                        region = "ipsa";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "id";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "neque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "illum";
                                                        port = "quo";
                                                        project = "fuga";
                                                        region = "eius";
                                                    }}),
                                                }};
                                            }};
                                            kind = "eos";
                                            location = "voluptas";
                                            rrdatas = new String[]{{
                                                add("cupiditate"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("tempora"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "sequi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "esse";
                                                        port = "recusandae";
                                                        project = "aperiam";
                                                        region = "distinctio";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quod";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "inventore";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "totam";
                                                        port = "accusamus";
                                                        project = "aliquam";
                                                        region = "odio";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "occaecati";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "sapiente";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "deserunt";
                                                        port = "molestiae";
                                                        project = "accusantium";
                                                        region = "porro";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "praesentium";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "deleniti";
                                                        port = "fugit";
                                                        project = "fuga";
                                                        region = "mollitia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "incidunt";
                                            location = "atque";
                                            rrdatas = new String[]{{
                                                add("minima"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("fugit"),
                                                add("sapiente"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ratione";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "saepe";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "atque";
                                                        port = "et";
                                                        project = "esse";
                                                        region = "eveniet";
                                                    }}),
                                                }};
                                            }};
                                            kind = "accusamus";
                                            location = "veritatis";
                                            rrdatas = new String[]{{
                                                add("quod"),
                                                add("nam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("aliquid"),
                                                add("quasi"),
                                                add("saepe"),
                                                add("vel"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "occaecati";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "distinctio";
                                                        port = "eligendi";
                                                        project = "sit";
                                                        region = "culpa";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "cumque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "consequatur";
                                                        port = "minus";
                                                        project = "quaerat";
                                                        region = "sapiente";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consectetur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "blanditiis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "a";
                                                        port = "nulla";
                                                        project = "quas";
                                                        region = "esse";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quasi";
                                            location = "a";
                                            rrdatas = new String[]{{
                                                add("sint"),
                                                add("pariatur"),
                                                add("possimus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("eveniet"),
                                            }};
                                        }}),
                                    }};
                                    kind = "asperiores";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequuntur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "similique";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "aliquid";
                                                        port = "tenetur";
                                                        project = "quae";
                                                        region = "earum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "vel";
                                            location = "in";
                                            rrdatas = new String[]{{
                                                add("libero"),
                                                add("illum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("accusantium"),
                                                add("aliquam"),
                                                add("sapiente"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ullam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "ullam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "aut";
                                                        port = "voluptatum";
                                                        project = "qui";
                                                        region = "quibusdam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ex";
                                            location = "deleniti";
                                            rrdatas = new String[]{{
                                                add("dolorum"),
                                                add("architecto"),
                                                add("omnis"),
                                                add("tenetur"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("at"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptate";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "minima";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "consectetur";
                                                        port = "adipisci";
                                                        project = "iste";
                                                        region = "temporibus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "accusantium";
                                            location = "rem";
                                            rrdatas = new String[]{{
                                                add("laudantium"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("mollitia"),
                                                add("ab"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "non";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "dolor";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "numquam";
                                                        port = "impedit";
                                                        project = "explicabo";
                                                        region = "voluptas";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aut";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "dicta";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "natus";
                                                        port = "velit";
                                                        project = "voluptatibus";
                                                        region = "voluptas";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "asperiores";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ea";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "consequuntur";
                                                        port = "repellendus";
                                                        project = "officia";
                                                        region = "maxime";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dignissimos";
                                            location = "officia";
                                            rrdatas = new String[]{{
                                                add("nemo"),
                                                add("quae"),
                                                add("quaerat"),
                                                add("porro"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("labore"),
                                                add("ab"),
                                                add("adipisci"),
                                                add("fuga"),
                                            }};
                                        }}),
                                    }};
                                    kind = "id";
                                }};
                                kind = "suscipit";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "est";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "totam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "vel";
                                                            port = "ducimus";
                                                            project = "quos";
                                                            region = "vel";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "labore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "facilis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "commodi";
                                                            port = "in";
                                                            project = "corporis";
                                                            region = "reiciendis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "assumenda";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "recusandae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "aperiam";
                                                            port = "cum";
                                                            project = "consectetur";
                                                            region = "in";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "exercitationem";
                                                location = "earum";
                                                rrdatas = new String[]{{
                                                    add("numquam"),
                                                    add("doloribus"),
                                                    add("suscipit"),
                                                    add("reiciendis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("saepe"),
                                                    add("necessitatibus"),
                                                    add("dolore"),
                                                }};
                                            }}),
                                        }};
                                        kind = "sunt";
                                    }};
                                    kind = "asperiores";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "non";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "beatae";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "a";
                                                port = "debitis";
                                                project = "consectetur";
                                                region = "corporis";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 6897.68;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptates";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "vitae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "similique";
                                                        port = "tempora";
                                                        project = "aspernatur";
                                                        region = "voluptas";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptas";
                                            rrdatas = new String[]{{
                                                add("minima"),
                                                add("nobis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("adipisci"),
                                                add("minus"),
                                                add("dolores"),
                                            }};
                                            weight = 5039.34;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "officiis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "ullam";
                                                        port = "adipisci";
                                                        project = "cum";
                                                        region = "blanditiis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quas";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "nesciunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "corrupti";
                                                        port = "pariatur";
                                                        project = "totam";
                                                        region = "hic";
                                                    }}),
                                                }};
                                            }};
                                            kind = "exercitationem";
                                            rrdatas = new String[]{{
                                                add("sit"),
                                                add("rerum"),
                                                add("sed"),
                                                add("reiciendis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("asperiores"),
                                            }};
                                            weight = 7079.18;
                                        }}),
                                    }};
                                    kind = "voluptate";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iste";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "laborum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "in";
                                                        port = "commodi";
                                                        project = "quidem";
                                                        region = "explicabo";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptas";
                                            rrdatas = new String[]{{
                                                add("architecto"),
                                                add("suscipit"),
                                                add("sapiente"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("illo"),
                                                add("reiciendis"),
                                                add("perferendis"),
                                                add("corrupti"),
                                            }};
                                            weight = 9795.74;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sed";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "eius";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "ipsum";
                                                        port = "ea";
                                                        project = "occaecati";
                                                        region = "quos";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatibus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "tempora";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "reiciendis";
                                                        port = "ex";
                                                        project = "sit";
                                                        region = "non";
                                                    }}),
                                                }};
                                            }};
                                            kind = "officiis";
                                            rrdatas = new String[]{{
                                                add("facilis"),
                                                add("quaerat"),
                                                add("incidunt"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("debitis"),
                                                add("rem"),
                                            }};
                                            weight = 265.22;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "error";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "minima";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "reiciendis";
                                                        port = "nulla";
                                                        project = "magni";
                                                        region = "aperiam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "saepe";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "veniam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "officiis";
                                                        port = "beatae";
                                                        project = "laudantium";
                                                        region = "exercitationem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "praesentium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "laboriosam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "voluptatum";
                                                        port = "error";
                                                        project = "hic";
                                                        region = "expedita";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "debitis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "dolorum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "officia";
                                                        port = "dolorum";
                                                        project = "corrupti";
                                                        region = "accusamus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "tempora";
                                            rrdatas = new String[]{{
                                                add("fugit"),
                                                add("ut"),
                                                add("fugiat"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("culpa"),
                                            }};
                                            weight = 7103.37;
                                        }}),
                                    }};
                                    kind = "magnam";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("esse"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("sit"),
                                add("voluptatum"),
                            }};
                            ttl = 558065;
                            type = "repudiandae";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "corporis";
                            name = "Mattie Jaskolski III";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "error";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "incidunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "dolorem";
                                                        port = "harum";
                                                        project = "dicta";
                                                        region = "architecto";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "occaecati";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quidem";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "laborum";
                                                        port = "nam";
                                                        project = "tenetur";
                                                        region = "laboriosam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "alias";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "deserunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "unde";
                                                        port = "reiciendis";
                                                        project = "provident";
                                                        region = "repellendus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "delectus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "perferendis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quidem";
                                                        port = "reprehenderit";
                                                        project = "facere";
                                                        region = "fuga";
                                                    }}),
                                                }};
                                            }};
                                            kind = "praesentium";
                                            location = "mollitia";
                                            rrdatas = new String[]{{
                                                add("voluptatem"),
                                                add("quisquam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quasi"),
                                                add("atque"),
                                                add("reprehenderit"),
                                                add("asperiores"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "suscipit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "maxime";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "esse";
                                                        port = "amet";
                                                        project = "assumenda";
                                                        region = "ea";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "atque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "officiis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "accusamus";
                                                        port = "natus";
                                                        project = "minima";
                                                        region = "aspernatur";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ex";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "corrupti";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "error";
                                                        port = "blanditiis";
                                                        project = "suscipit";
                                                        region = "repudiandae";
                                                    }}),
                                                }};
                                            }};
                                            kind = "atque";
                                            location = "atque";
                                            rrdatas = new String[]{{
                                                add("recusandae"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("repellendus"),
                                                add("labore"),
                                                add("reiciendis"),
                                            }};
                                        }}),
                                    }};
                                    kind = "doloremque";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "accusantium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "dolores";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "laboriosam";
                                                        port = "velit";
                                                        project = "a";
                                                        region = "molestias";
                                                    }}),
                                                }};
                                            }};
                                            kind = "magnam";
                                            location = "saepe";
                                            rrdatas = new String[]{{
                                                add("occaecati"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("perspiciatis"),
                                                add("in"),
                                                add("adipisci"),
                                                add("eveniet"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequuntur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "id";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "reprehenderit";
                                                        port = "error";
                                                        project = "illo";
                                                        region = "corporis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quidem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "non";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "doloremque";
                                                        port = "iure";
                                                        project = "ipsa";
                                                        region = "totam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "eveniet";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "cum";
                                                        port = "iure";
                                                        project = "necessitatibus";
                                                        region = "ratione";
                                                    }}),
                                                }};
                                            }};
                                            kind = "laborum";
                                            location = "distinctio";
                                            rrdatas = new String[]{{
                                                add("rem"),
                                                add("aliquam"),
                                                add("ad"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("alias"),
                                                add("corporis"),
                                                add("perspiciatis"),
                                                add("nihil"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptas";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "maiores";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "dolores";
                                                        port = "id";
                                                        project = "minima";
                                                        region = "dolore";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolorum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "omnis";
                                                        port = "quaerat";
                                                        project = "molestiae";
                                                        region = "ex";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ut";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "adipisci";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "laudantium";
                                                        port = "eum";
                                                        project = "nemo";
                                                        region = "recusandae";
                                                    }}),
                                                }};
                                            }};
                                            kind = "esse";
                                            location = "provident";
                                            rrdatas = new String[]{{
                                                add("eum"),
                                                add("reiciendis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("aspernatur"),
                                                add("ullam"),
                                                add("quasi"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nostrum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "provident";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "animi";
                                                        port = "ex";
                                                        project = "aliquid";
                                                        region = "accusantium";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repellat";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "ullam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nam";
                                                        port = "earum";
                                                        project = "officia";
                                                        region = "laborum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "placeat";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "voluptatibus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "officiis";
                                                        port = "sapiente";
                                                        project = "cumque";
                                                        region = "vitae";
                                                    }}),
                                                }};
                                            }};
                                            kind = "rerum";
                                            location = "tempora";
                                            rrdatas = new String[]{{
                                                add("inventore"),
                                                add("fugit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quae"),
                                                add("perferendis"),
                                                add("velit"),
                                                add("aspernatur"),
                                            }};
                                        }}),
                                    }};
                                    kind = "eum";
                                }};
                                kind = "eius";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "impedit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sapiente";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "dicta";
                                                            port = "minima";
                                                            project = "beatae";
                                                            region = "cupiditate";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "provident";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "soluta";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "illum";
                                                            port = "eaque";
                                                            project = "earum";
                                                            region = "perspiciatis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "maiores";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "aliquid";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "suscipit";
                                                            port = "dolorem";
                                                            project = "fugit";
                                                            region = "cumque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fuga";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "animi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nulla";
                                                            port = "consequatur";
                                                            project = "quasi";
                                                            region = "et";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ducimus";
                                                location = "natus";
                                                rrdatas = new String[]{{
                                                    add("suscipit"),
                                                    add("adipisci"),
                                                    add("quasi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("doloribus"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "necessitatibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "tempora";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "molestiae";
                                                            port = "dicta";
                                                            project = "iusto";
                                                            region = "esse";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "praesentium";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "reiciendis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "architecto";
                                                            port = "fugiat";
                                                            project = "doloremque";
                                                            region = "dicta";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "odio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "esse";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "consectetur";
                                                            port = "aliquid";
                                                            project = "ipsa";
                                                            region = "laborum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "fugiat";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "aliquid";
                                                            port = "officia";
                                                            project = "suscipit";
                                                            region = "aliquid";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "perferendis";
                                                location = "eum";
                                                rrdatas = new String[]{{
                                                    add("iste"),
                                                    add("id"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("error"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptates";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "laborum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ad";
                                                            port = "deleniti";
                                                            project = "enim";
                                                            region = "vitae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repellendus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "quo";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ut";
                                                            port = "ad";
                                                            project = "expedita";
                                                            region = "voluptatem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "molestias";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "aliquid";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "voluptatum";
                                                            port = "omnis";
                                                            project = "veritatis";
                                                            region = "rerum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "est";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "voluptatem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "officiis";
                                                            port = "architecto";
                                                            project = "fuga";
                                                            region = "pariatur";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "debitis";
                                                location = "voluptatem";
                                                rrdatas = new String[]{{
                                                    add("deleniti"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ex"),
                                                    add("sapiente"),
                                                    add("rem"),
                                                    add("minus"),
                                                }};
                                            }}),
                                        }};
                                        kind = "nemo";
                                    }};
                                    kind = "asperiores";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ullam";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "illum";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "impedit";
                                                port = "quibusdam";
                                                project = "nam";
                                                region = "ipsam";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 6334.15;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "inventore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "veritatis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "dolor";
                                                        port = "consequatur";
                                                        project = "architecto";
                                                        region = "sit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "modi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ab";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quae";
                                                        port = "dolor";
                                                        project = "fugiat";
                                                        region = "ipsam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "consequuntur";
                                            rrdatas = new String[]{{
                                                add("quas"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("impedit"),
                                                add("officiis"),
                                                add("esse"),
                                                add("necessitatibus"),
                                            }};
                                            weight = 1533.69;
                                        }}),
                                    }};
                                    kind = "veniam";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "voluptatum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "exercitationem";
                                                        port = "ab";
                                                        project = "porro";
                                                        region = "autem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nobis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "recusandae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "voluptatem";
                                                        port = "exercitationem";
                                                        project = "necessitatibus";
                                                        region = "quasi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nisi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "vero";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "harum";
                                                        port = "sequi";
                                                        project = "doloribus";
                                                        region = "repudiandae";
                                                    }}),
                                                }};
                                            }};
                                            kind = "optio";
                                            rrdatas = new String[]{{
                                                add("nemo"),
                                                add("voluptate"),
                                                add("blanditiis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("voluptas"),
                                                add("numquam"),
                                                add("nemo"),
                                            }};
                                            weight = 5510.79;
                                        }}),
                                    }};
                                    kind = "eius";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("ducimus"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("fuga"),
                            }};
                            ttl = 514054;
                            type = "incidunt";
                        }}),
                    }};
                    deletions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "rem";
                            name = "Keith Hyatt";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "reiciendis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "alias";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "eos";
                                                        port = "occaecati";
                                                        project = "iste";
                                                        region = "magni";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "inventore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "accusamus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "distinctio";
                                                        port = "omnis";
                                                        project = "delectus";
                                                        region = "minima";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "praesentium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "magnam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quos";
                                                        port = "commodi";
                                                        project = "itaque";
                                                        region = "commodi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "totam";
                                            location = "earum";
                                            rrdatas = new String[]{{
                                                add("nam"),
                                                add("vero"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ipsam"),
                                            }};
                                        }}),
                                    }};
                                    kind = "vel";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "non";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "enim";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "nulla";
                                                        port = "deserunt";
                                                        project = "esse";
                                                        region = "nemo";
                                                    }}),
                                                }};
                                            }};
                                            kind = "reprehenderit";
                                            location = "est";
                                            rrdatas = new String[]{{
                                                add("sint"),
                                                add("accusamus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("hic"),
                                                add("necessitatibus"),
                                                add("asperiores"),
                                                add("ex"),
                                            }};
                                        }}),
                                    }};
                                    kind = "voluptas";
                                }};
                                kind = "debitis";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "minus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "laborum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "velit";
                                                            port = "atque";
                                                            project = "ipsum";
                                                            region = "impedit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "magni";
                                                location = "soluta";
                                                rrdatas = new String[]{{
                                                    add("nam"),
                                                    add("dolore"),
                                                    add("iusto"),
                                                    add("voluptate"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("dignissimos"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quo";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "quibusdam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "odit";
                                                            port = "voluptatibus";
                                                            project = "vel";
                                                            region = "magnam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quibusdam";
                                                location = "inventore";
                                                rrdatas = new String[]{{
                                                    add("libero"),
                                                    add("architecto"),
                                                    add("voluptatibus"),
                                                    add("quia"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("aliquam"),
                                                    add("velit"),
                                                    add("illo"),
                                                    add("accusantium"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ea";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "vero";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "eum";
                                                            port = "velit";
                                                            project = "ut";
                                                            region = "perspiciatis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "earum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "impedit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "iste";
                                                            port = "itaque";
                                                            project = "alias";
                                                            region = "nisi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "itaque";
                                                location = "velit";
                                                rrdatas = new String[]{{
                                                    add("non"),
                                                    add("dolor"),
                                                    add("iusto"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("doloremque"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "officia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "ea";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "voluptas";
                                                            port = "facilis";
                                                            project = "placeat";
                                                            region = "perspiciatis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "expedita";
                                                location = "deleniti";
                                                rrdatas = new String[]{{
                                                    add("voluptate"),
                                                    add("ullam"),
                                                    add("unde"),
                                                    add("necessitatibus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("impedit"),
                                                    add("ipsam"),
                                                    add("corporis"),
                                                }};
                                            }}),
                                        }};
                                        kind = "est";
                                    }};
                                    kind = "error";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "labore";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "vero";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "vitae";
                                                port = "inventore";
                                                project = "dolorem";
                                                region = "ad";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "qui";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "ex";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "soluta";
                                                port = "libero";
                                                project = "rem";
                                                region = "dolorum";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 4876.76;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magni";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "quae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "modi";
                                                        port = "neque";
                                                        project = "exercitationem";
                                                        region = "itaque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "et";
                                            rrdatas = new String[]{{
                                                add("unde"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("distinctio"),
                                                add("maxime"),
                                                add("quia"),
                                                add("quia"),
                                            }};
                                            weight = 3421.37;
                                        }}),
                                    }};
                                    kind = "omnis";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "id";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "fugiat";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quos";
                                                        port = "placeat";
                                                        project = "sit";
                                                        region = "iusto";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsa";
                                            rrdatas = new String[]{{
                                                add("inventore"),
                                                add("aperiam"),
                                                add("totam"),
                                                add("dolore"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("distinctio"),
                                                add("voluptatem"),
                                                add("autem"),
                                                add("esse"),
                                            }};
                                            weight = 1729.51;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "beatae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "facere";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "molestiae";
                                                        port = "provident";
                                                        project = "accusamus";
                                                        region = "necessitatibus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "ea";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ipsam";
                                                        port = "rerum";
                                                        project = "laudantium";
                                                        region = "corporis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officiis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "cum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "alias";
                                                        port = "quia";
                                                        project = "quidem";
                                                        region = "fuga";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repudiandae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "expedita";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "eos";
                                                        port = "quibusdam";
                                                        project = "odio";
                                                        region = "praesentium";
                                                    }}),
                                                }};
                                            }};
                                            kind = "odit";
                                            rrdatas = new String[]{{
                                                add("corporis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("earum"),
                                                add("adipisci"),
                                                add("recusandae"),
                                            }};
                                            weight = 6308.71;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quidem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "beatae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "molestiae";
                                                        port = "delectus";
                                                        project = "cupiditate";
                                                        region = "fugit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "numquam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "nesciunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "officia";
                                                        port = "dignissimos";
                                                        project = "optio";
                                                        region = "necessitatibus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "corporis";
                                            rrdatas = new String[]{{
                                                add("expedita"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("cupiditate"),
                                                add("minima"),
                                                add("placeat"),
                                            }};
                                            weight = 3165.42;
                                        }}),
                                    }};
                                    kind = "neque";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("minus"),
                                add("eum"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("corporis"),
                                add("magnam"),
                            }};
                            ttl = 914971;
                            type = "maiores";
                        }}),
                    }};
                    id = "b0b34896-c3ca-45ac-bbe2-fd5707577929";
                    isServing = false;
                    kind = "veritatis";
                    startTime = "ducimus";
                    status = ChangeStatusEnum.PENDING;
                }};;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "similique";
                clientOperationId = "optio";
                fields = "ex";
                key = "quaerat";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "placeat";
                uploadProtocol = "quidem";
            }};            

            DnsChangesCreateResponse res = sdk.changes.dnsChangesCreate(req, new DnsChangesCreateSecurity() {{
                option1 = new DnsChangesCreateSecurityOption1("exercitationem", "quam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.change != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [changes](docs/changes/README.md)

* [dnsChangesCreate](docs/changes/README.md#dnschangescreate) - Atomically updates the ResourceRecordSet collection.
* [dnsChangesGet](docs/changes/README.md#dnschangesget) - Fetches the representation of an existing Change.
* [dnsChangesList](docs/changes/README.md#dnschangeslist) - Enumerates Changes to a ResourceRecordSet collection.

### [dnsKeys](docs/dnskeys/README.md)

* [dnsDnsKeysGet](docs/dnskeys/README.md#dnsdnskeysget) - Fetches the representation of an existing DnsKey.
* [dnsDnsKeysList](docs/dnskeys/README.md#dnsdnskeyslist) - Enumerates DnsKeys to a ResourceRecordSet collection.

### [managedZoneOperations](docs/managedzoneoperations/README.md)

* [dnsManagedZoneOperationsGet](docs/managedzoneoperations/README.md#dnsmanagedzoneoperationsget) - Fetches the representation of an existing Operation.
* [dnsManagedZoneOperationsList](docs/managedzoneoperations/README.md#dnsmanagedzoneoperationslist) - Enumerates Operations for the given ManagedZone.

### [managedZones](docs/managedzones/README.md)

* [dnsManagedZonesCreate](docs/managedzones/README.md#dnsmanagedzonescreate) - Creates a new ManagedZone.
* [dnsManagedZonesDelete](docs/managedzones/README.md#dnsmanagedzonesdelete) - Deletes a previously created ManagedZone.
* [dnsManagedZonesGet](docs/managedzones/README.md#dnsmanagedzonesget) - Fetches the representation of an existing ManagedZone.
* [dnsManagedZonesGetIamPolicy](docs/managedzones/README.md#dnsmanagedzonesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [dnsManagedZonesList](docs/managedzones/README.md#dnsmanagedzoneslist) - Enumerates ManagedZones that have been created but not yet deleted.
* [dnsManagedZonesPatch](docs/managedzones/README.md#dnsmanagedzonespatch) - Applies a partial update to an existing ManagedZone.
* [dnsManagedZonesSetIamPolicy](docs/managedzones/README.md#dnsmanagedzonessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [dnsManagedZonesTestIamPermissions](docs/managedzones/README.md#dnsmanagedzonestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [dnsManagedZonesUpdate](docs/managedzones/README.md#dnsmanagedzonesupdate) - Updates an existing ManagedZone.

### [policies](docs/policies/README.md)

* [dnsPoliciesCreate](docs/policies/README.md#dnspoliciescreate) - Creates a new Policy.
* [dnsPoliciesDelete](docs/policies/README.md#dnspoliciesdelete) - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
* [dnsPoliciesGet](docs/policies/README.md#dnspoliciesget) - Fetches the representation of an existing Policy.
* [dnsPoliciesList](docs/policies/README.md#dnspolicieslist) - Enumerates all Policies associated with a project.
* [dnsPoliciesPatch](docs/policies/README.md#dnspoliciespatch) - Applies a partial update to an existing Policy.
* [dnsPoliciesUpdate](docs/policies/README.md#dnspoliciesupdate) - Updates an existing Policy.

### [projects](docs/projects/README.md)

* [dnsProjectsGet](docs/projects/README.md#dnsprojectsget) - Fetches the representation of an existing Project.

### [resourceRecordSets](docs/resourcerecordsets/README.md)

* [dnsResourceRecordSetsCreate](docs/resourcerecordsets/README.md#dnsresourcerecordsetscreate) - Creates a new ResourceRecordSet.
* [dnsResourceRecordSetsDelete](docs/resourcerecordsets/README.md#dnsresourcerecordsetsdelete) - Deletes a previously created ResourceRecordSet.
* [dnsResourceRecordSetsGet](docs/resourcerecordsets/README.md#dnsresourcerecordsetsget) - Fetches the representation of an existing ResourceRecordSet.
* [dnsResourceRecordSetsList](docs/resourcerecordsets/README.md#dnsresourcerecordsetslist) - Enumerates ResourceRecordSets that you have created but not yet deleted.
* [dnsResourceRecordSetsPatch](docs/resourcerecordsets/README.md#dnsresourcerecordsetspatch) - Applies a partial update to an existing ResourceRecordSet.

### [responsePolicies](docs/responsepolicies/README.md)

* [dnsResponsePoliciesCreate](docs/responsepolicies/README.md#dnsresponsepoliciescreate) - Creates a new Response Policy
* [dnsResponsePoliciesDelete](docs/responsepolicies/README.md#dnsresponsepoliciesdelete) - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
* [dnsResponsePoliciesGet](docs/responsepolicies/README.md#dnsresponsepoliciesget) - Fetches the representation of an existing Response Policy.
* [dnsResponsePoliciesList](docs/responsepolicies/README.md#dnsresponsepolicieslist) - Enumerates all Response Policies associated with a project.
* [dnsResponsePoliciesPatch](docs/responsepolicies/README.md#dnsresponsepoliciespatch) - Applies a partial update to an existing Response Policy.
* [dnsResponsePoliciesUpdate](docs/responsepolicies/README.md#dnsresponsepoliciesupdate) - Updates an existing Response Policy.

### [responsePolicyRules](docs/responsepolicyrules/README.md)

* [dnsResponsePolicyRulesCreate](docs/responsepolicyrules/README.md#dnsresponsepolicyrulescreate) - Creates a new Response Policy Rule.
* [dnsResponsePolicyRulesDelete](docs/responsepolicyrules/README.md#dnsresponsepolicyrulesdelete) - Deletes a previously created Response Policy Rule.
* [dnsResponsePolicyRulesGet](docs/responsepolicyrules/README.md#dnsresponsepolicyrulesget) - Fetches the representation of an existing Response Policy Rule.
* [dnsResponsePolicyRulesList](docs/responsepolicyrules/README.md#dnsresponsepolicyruleslist) - Enumerates all Response Policy Rules associated with a project.
* [dnsResponsePolicyRulesPatch](docs/responsepolicyrules/README.md#dnsresponsepolicyrulespatch) - Applies a partial update to an existing Response Policy Rule.
* [dnsResponsePolicyRulesUpdate](docs/responsepolicyrules/README.md#dnsresponsepolicyrulesupdate) - Updates an existing Response Policy Rule.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
