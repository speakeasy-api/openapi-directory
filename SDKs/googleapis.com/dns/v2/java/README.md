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

            DnsChangesCreateRequest req = new DnsChangesCreateRequest("corrupti", "provident", "distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                change = new Change() {{
                    additions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "nulla";
                            name = "Dallas Kassulke";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magnam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "ipsa";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "tempora";
                                                        port = "suscipit";
                                                        project = "molestiae";
                                                        region = "minus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "placeat";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "iusto";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "nisi";
                                                        port = "recusandae";
                                                        project = "temporibus";
                                                        region = "ab";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quis";
                                            location = "veritatis";
                                            rrdatas = new String[]{{
                                                add("perferendis"),
                                                add("ipsam"),
                                                add("repellendus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quo"),
                                                add("odit"),
                                                add("at"),
                                                add("at"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quod";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "totam";
                                                        port = "porro";
                                                        project = "dolorum";
                                                        region = "dicta";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "occaecati";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "deleniti";
                                                        port = "hic";
                                                        project = "optio";
                                                        region = "totam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "beatae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "molestiae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "qui";
                                                        port = "impedit";
                                                        project = "cum";
                                                        region = "esse";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "aspernatur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ad";
                                                        port = "natus";
                                                        project = "sed";
                                                        region = "iste";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dolor";
                                            location = "natus";
                                            rrdatas = new String[]{{
                                                add("hic"),
                                                add("saepe"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("in"),
                                                add("corporis"),
                                                add("iste"),
                                            }};
                                        }}),
                                    }};
                                    kind = "iure";
                                }};
                                kind = "saepe";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ipsa";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "est";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "laborum";
                                                            port = "dolores";
                                                            project = "dolorem";
                                                            region = "corporis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "explicabo";
                                                location = "nobis";
                                                rrdatas = new String[]{{
                                                    add("omnis"),
                                                    add("nemo"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("excepturi"),
                                                    add("accusantium"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "culpa";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sapiente";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "mollitia";
                                                            port = "dolorem";
                                                            project = "culpa";
                                                            region = "consequuntur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repellat";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "occaecati";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "commodi";
                                                            port = "quam";
                                                            project = "molestiae";
                                                            region = "velit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "error";
                                                location = "quia";
                                                rrdatas = new String[]{{
                                                    add("vitae"),
                                                    add("laborum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("enim"),
                                                    add("odit"),
                                                    add("quo"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "tenetur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "id";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "aut";
                                                            port = "quasi";
                                                            project = "error";
                                                            region = "temporibus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "laborum";
                                                location = "quasi";
                                                rrdatas = new String[]{{
                                                    add("voluptatibus"),
                                                    add("vero"),
                                                    add("nihil"),
                                                    add("praesentium"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ipsa"),
                                                    add("omnis"),
                                                    add("voluptate"),
                                                    add("cum"),
                                                }};
                                            }}),
                                        }};
                                        kind = "perferendis";
                                    }};
                                    kind = "doloremque";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ut";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "dicta";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "dolore";
                                                port = "iusto";
                                                project = "dicta";
                                                region = "harum";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "enim";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "commodi";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "quae";
                                                port = "ipsum";
                                                project = "quidem";
                                                region = "molestias";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 5666.02;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "praesentium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "voluptates";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "repudiandae";
                                                        port = "sint";
                                                        project = "veritatis";
                                                        region = "itaque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "incidunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "consequatur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "quibusdam";
                                                        port = "explicabo";
                                                        project = "deserunt";
                                                        region = "distinctio";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quibusdam";
                                            rrdatas = new String[]{{
                                                add("modi"),
                                                add("qui"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("cupiditate"),
                                                add("quos"),
                                            }};
                                            weight = 201.07;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "assumenda";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "alias";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "dolorum";
                                                        port = "excepturi";
                                                        project = "tempora";
                                                        region = "facilis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "tempore";
                                            rrdatas = new String[]{{
                                                add("delectus"),
                                                add("eum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("eligendi"),
                                            }};
                                            weight = 5761.57;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "provident";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "sint";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "dolor";
                                                        port = "debitis";
                                                        project = "a";
                                                        region = "dolorum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "in";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "illum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "rerum";
                                                        port = "dicta";
                                                        project = "magnam";
                                                        region = "cumque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "facere";
                                            rrdatas = new String[]{{
                                                add("aliquid"),
                                                add("laborum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("non"),
                                                add("occaecati"),
                                                add("enim"),
                                                add("accusamus"),
                                            }};
                                            weight = 9654.17;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "provident";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "id";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "deleniti";
                                                        port = "sapiente";
                                                        project = "amet";
                                                        region = "deserunt";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nisi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "natus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "molestiae";
                                                        port = "perferendis";
                                                        project = "nihil";
                                                        region = "magnam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "distinctio";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "labore";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "suscipit";
                                                        port = "natus";
                                                        project = "nobis";
                                                        region = "eum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "vero";
                                            rrdatas = new String[]{{
                                                add("architecto"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("et"),
                                                add("excepturi"),
                                            }};
                                            weight = 3540.47;
                                        }}),
                                    }};
                                    kind = "provident";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("sint"),
                                add("accusantium"),
                                add("mollitia"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("mollitia"),
                                add("ad"),
                                add("eum"),
                                add("dolor"),
                            }};
                            ttl = 896547;
                            type = "odit";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "nemo";
                            name = "Vera Wyman";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facilis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "architecto";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "repudiandae";
                                                        port = "ullam";
                                                        project = "expedita";
                                                        region = "nihil";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repellat";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "sed";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "pariatur";
                                                        port = "accusantium";
                                                        project = "consequuntur";
                                                        region = "praesentium";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "natus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "sunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "illum";
                                                        port = "pariatur";
                                                        project = "maxime";
                                                        region = "ea";
                                                    }}),
                                                }};
                                            }};
                                            kind = "excepturi";
                                            location = "odit";
                                            rrdatas = new String[]{{
                                                add("accusantium"),
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
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "perferendis";
                                                        port = "fugiat";
                                                        project = "amet";
                                                        region = "aut";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cumque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "hic";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
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
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
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
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolorem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "dolor";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ipsum";
                                                        port = "hic";
                                                        project = "excepturi";
                                                        region = "cum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptate";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "reiciendis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "dolorum";
                                                        port = "numquam";
                                                        project = "veritatis";
                                                        region = "ipsa";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsa";
                                            location = "iure";
                                            rrdatas = new String[]{{
                                                add("quaerat"),
                                                add("accusamus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("voluptatibus"),
                                                add("voluptas"),
                                                add("natus"),
                                            }};
                                        }}),
                                    }};
                                    kind = "eos";
                                }};
                                kind = "atque";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ab";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "dolorum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "voluptate";
                                                            port = "dolorum";
                                                            project = "deleniti";
                                                            region = "omnis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "necessitatibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "asperiores";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ipsum";
                                                            port = "voluptate";
                                                            project = "id";
                                                            region = "saepe";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eius";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "perferendis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "optio";
                                                            port = "accusamus";
                                                            project = "ad";
                                                            region = "saepe";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "suscipit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "provident";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "repellendus";
                                                            port = "totam";
                                                            project = "similique";
                                                            region = "alias";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "at";
                                                location = "quaerat";
                                                rrdatas = new String[]{{
                                                    add("vel"),
                                                    add("quod"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("qui"),
                                                    add("dolorum"),
                                                    add("a"),
                                                    add("esse"),
                                                }};
                                            }}),
                                        }};
                                        kind = "harum";
                                    }};
                                    kind = "iusto";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quisquam";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "amet";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "accusamus";
                                                port = "numquam";
                                                project = "enim";
                                                region = "dolorem";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 9574.51;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "neque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "vel";
                                                        port = "libero";
                                                        project = "voluptas";
                                                        region = "deserunt";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "incidunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "cupiditate";
                                                        port = "maxime";
                                                        project = "pariatur";
                                                        region = "soluta";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dicta";
                                            rrdatas = new String[]{{
                                                add("totam"),
                                                add("incidunt"),
                                                add("aspernatur"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("distinctio"),
                                            }};
                                            weight = 7044.74;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "temporibus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "neque";
                                                        port = "fugit";
                                                        project = "magni";
                                                        region = "odio";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "nam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "voluptatem";
                                                        port = "cumque";
                                                        project = "soluta";
                                                        region = "nobis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "et";
                                            rrdatas = new String[]{{
                                                add("ipsum"),
                                                add("veritatis"),
                                                add("nobis"),
                                                add("quos"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("cupiditate"),
                                                add("aperiam"),
                                                add("delectus"),
                                            }};
                                            weight = 2091.57;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "labore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "dolorum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quae";
                                                        port = "aut";
                                                        project = "quas";
                                                        region = "itaque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequatur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "repellendus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "doloribus";
                                                        port = "ut";
                                                        project = "facilis";
                                                        region = "cupiditate";
                                                    }}),
                                                }};
                                            }};
                                            kind = "qui";
                                            rrdatas = new String[]{{
                                                add("laudantium"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("occaecati"),
                                                add("voluptatibus"),
                                            }};
                                            weight = 7875.42;
                                        }}),
                                    }};
                                    kind = "vero";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("quis"),
                                add("ipsum"),
                                add("delectus"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("consectetur"),
                                add("vero"),
                            }};
                            ttl = 949319;
                            type = "dignissimos";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "hic";
                            name = "Jermaine Kuhic";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "exercitationem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "fugit";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "maiores";
                                                        port = "doloribus";
                                                        project = "iusto";
                                                        region = "eligendi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ducimus";
                                            location = "alias";
                                            rrdatas = new String[]{{
                                                add("tempora"),
                                                add("ipsam"),
                                                add("ea"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("vel"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magnam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ex";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "dicta";
                                                        port = "dolor";
                                                        project = "maiores";
                                                        region = "quasi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ex";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "excepturi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "nostrum";
                                                        port = "sapiente";
                                                        project = "quisquam";
                                                        region = "saepe";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ea";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "corporis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "aliquid";
                                                        port = "inventore";
                                                        project = "magnam";
                                                        region = "ea";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quo";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "recusandae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "minima";
                                                        port = "eaque";
                                                        project = "a";
                                                        region = "libero";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aut";
                                            location = "aut";
                                            rrdatas = new String[]{{
                                                add("impedit"),
                                                add("aliquam"),
                                                add("fugit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("inventore"),
                                                add("non"),
                                                add("et"),
                                                add("dolorum"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "placeat";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "eum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nobis";
                                                        port = "quas";
                                                        project = "assumenda";
                                                        region = "nulla";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptas";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quasi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "numquam";
                                                        port = "explicabo";
                                                        project = "provident";
                                                        region = "ipsa";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "odio";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "esse";
                                                        port = "esse";
                                                        project = "rem";
                                                        region = "fuga";
                                                    }}),
                                                }};
                                            }};
                                            kind = "reprehenderit";
                                            location = "quidem";
                                            rrdatas = new String[]{{
                                                add("ut"),
                                                add("eum"),
                                                add("suscipit"),
                                                add("assumenda"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("praesentium"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "veritatis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "id";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "neque";
                                                        port = "quo";
                                                        project = "illum";
                                                        region = "quo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fuga";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "eos";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ab";
                                                        port = "cupiditate";
                                                        project = "consequatur";
                                                        region = "tempora";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "debitis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "aspernatur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quo";
                                                        port = "esse";
                                                        project = "recusandae";
                                                        region = "aperiam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "distinctio";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "dignissimos";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nihil";
                                                        port = "totam";
                                                        project = "accusamus";
                                                        region = "aliquam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "odio";
                                            location = "occaecati";
                                            rrdatas = new String[]{{
                                                add("sapiente"),
                                                add("dolores"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("molestiae"),
                                                add("accusantium"),
                                                add("porro"),
                                            }};
                                        }}),
                                    }};
                                    kind = "eum";
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
                                                            ipAddress = "deleniti";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "fuga";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "incidunt";
                                                            port = "atque";
                                                            project = "explicabo";
                                                            region = "minima";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nisi";
                                                location = "fugit";
                                                rrdatas = new String[]{{
                                                    add("consequuntur"),
                                                    add("ratione"),
                                                    add("explicabo"),
                                                    add("saepe"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("atque"),
                                                    add("et"),
                                                    add("esse"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "accusamus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "esse";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "nam";
                                                            port = "vero";
                                                            project = "aliquid";
                                                            region = "quasi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "saepe";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "harum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "rerum";
                                                            port = "occaecati";
                                                            project = "minima";
                                                            region = "distinctio";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eligendi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "culpa";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "adipisci";
                                                            port = "cumque";
                                                            project = "consequuntur";
                                                            region = "consequatur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "minus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sapiente";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "esse";
                                                            port = "blanditiis";
                                                            project = "provident";
                                                            region = "a";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nulla";
                                                location = "quas";
                                                rrdatas = new String[]{{
                                                    add("quasi"),
                                                    add("a"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("sint"),
                                                    add("pariatur"),
                                                    add("possimus"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eveniet";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "facere";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "consequuntur";
                                                            port = "quasi";
                                                            project = "similique";
                                                            region = "culpa";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "aliquid";
                                                location = "tenetur";
                                                rrdatas = new String[]{{
                                                    add("earum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("in"),
                                                    add("eius"),
                                                }};
                                            }}),
                                        }};
                                        kind = "libero";
                                    }};
                                    kind = "illum";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "accusantium";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "sapiente";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "ullam";
                                                port = "reprehenderit";
                                                project = "ullam";
                                                region = "nisi";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "aut";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "qui";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "ex";
                                                port = "deleniti";
                                                project = "itaque";
                                                region = "dolorum";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "architecto";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "tenetur";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "at";
                                                port = "et";
                                                project = "voluptate";
                                                region = "ipsa";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 3267.01;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "adipisci";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "temporibus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "rem";
                                                        port = "aut";
                                                        project = "laudantium";
                                                        region = "eum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "mollitia";
                                            rrdatas = new String[]{{
                                                add("corrupti"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("voluptatem"),
                                                add("dolor"),
                                            }};
                                            weight = 5801.52;
                                        }}),
                                    }};
                                    kind = "numquam";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("explicabo"),
                                add("voluptas"),
                                add("aut"),
                                add("dignissimos"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("maiores"),
                            }};
                            ttl = 618480;
                            type = "velit";
                        }}),
                    }};
                    deletions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "voluptas";
                            name = "Kevin Jast";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "maxime";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "officia";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "nemo";
                                                        port = "quae";
                                                        project = "quaerat";
                                                        region = "porro";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quod";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ab";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "fuga";
                                                        port = "id";
                                                        project = "suscipit";
                                                        region = "velit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "culpa";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "recusandae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "fugiat";
                                                        port = "vel";
                                                        project = "ducimus";
                                                        region = "quos";
                                                    }}),
                                                }};
                                            }};
                                            kind = "vel";
                                            location = "labore";
                                            rrdatas = new String[]{{
                                                add("facilis"),
                                                add("cum"),
                                                add("commodi"),
                                                add("in"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("reiciendis"),
                                                add("assumenda"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "aperiam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "consectetur";
                                                        port = "in";
                                                        project = "exercitationem";
                                                        region = "earum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facere";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "doloribus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "reiciendis";
                                                        port = "quidem";
                                                        project = "saepe";
                                                        region = "necessitatibus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dolore";
                                            location = "sunt";
                                            rrdatas = new String[]{{
                                                add("adipisci"),
                                                add("non"),
                                                add("amet"),
                                                add("beatae"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("a"),
                                                add("debitis"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "corporis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "laboriosam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "voluptates";
                                                        port = "libero";
                                                        project = "vitae";
                                                        region = "accusamus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "similique";
                                            location = "tempora";
                                            rrdatas = new String[]{{
                                                add("voluptas"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("voluptas"),
                                                add("minima"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolorum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "minus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "blanditiis";
                                                        port = "in";
                                                        project = "dolore";
                                                        region = "aliquam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officiis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "ullam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "cum";
                                                        port = "blanditiis";
                                                        project = "quas";
                                                        region = "hic";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nesciunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "corrupti";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "totam";
                                                        port = "hic";
                                                        project = "exercitationem";
                                                        region = "nobis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sit";
                                            location = "rerum";
                                            rrdatas = new String[]{{
                                                add("reiciendis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("asperiores"),
                                            }};
                                        }}),
                                    }};
                                    kind = "facilis";
                                }};
                                kind = "voluptate";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
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
                                                location = "unde";
                                                rrdatas = new String[]{{
                                                    add("suscipit"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("debitis"),
                                                    add("illo"),
                                                    add("reiciendis"),
                                                    add("perferendis"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "maiores";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sed";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "eius";
                                                            port = "necessitatibus";
                                                            project = "ipsum";
                                                            region = "ea";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "occaecati";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "voluptatibus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "tempora";
                                                            port = "voluptate";
                                                            project = "reiciendis";
                                                            region = "ex";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "officiis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "facilis";
                                                            port = "quaerat";
                                                            project = "incidunt";
                                                            region = "ipsam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "debitis";
                                                location = "rem";
                                                rrdatas = new String[]{{
                                                    add("nobis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("veniam"),
                                                    add("minima"),
                                                    add("recusandae"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nulla";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "aperiam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "numquam";
                                                            port = "veniam";
                                                            project = "in";
                                                            region = "officiis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "beatae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "exercitationem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "cum";
                                                            port = "laboriosam";
                                                            project = "dolorum";
                                                            region = "voluptatum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "error";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "expedita";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "neque";
                                                            port = "dolorum";
                                                            project = "nostrum";
                                                            region = "officia";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolorum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "accusamus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "atque";
                                                            port = "fugit";
                                                            project = "ut";
                                                            region = "fugiat";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "voluptatem";
                                                location = "culpa";
                                                rrdatas = new String[]{{
                                                    add("magnam"),
                                                    add("consequatur"),
                                                    add("esse"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("sit"),
                                                    add("voluptatum"),
                                                }};
                                            }}),
                                        }};
                                        kind = "quas";
                                    }};
                                    kind = "repudiandae";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "et";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "ex";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "sit";
                                                port = "vel";
                                                project = "nostrum";
                                                region = "saepe";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "error";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "incidunt";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "dolorem";
                                                port = "harum";
                                                project = "dicta";
                                                region = "architecto";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 5771.4;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "atque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "nam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "laboriosam";
                                                        port = "alias";
                                                        project = "amet";
                                                        region = "deserunt";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptate";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "reiciendis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "repellendus";
                                                        port = "delectus";
                                                        project = "voluptates";
                                                        region = "perferendis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "est";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "reprehenderit";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "fuga";
                                                        port = "praesentium";
                                                        project = "mollitia";
                                                        region = "veniam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptatem";
                                            rrdatas = new String[]{{
                                                add("repudiandae"),
                                                add("quasi"),
                                                add("atque"),
                                                add("reprehenderit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("totam"),
                                                add("suscipit"),
                                                add("quidem"),
                                                add("maxime"),
                                            }};
                                            weight = 908.85;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "amet";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "ea";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "error";
                                                        port = "officiis";
                                                        project = "officiis";
                                                        region = "accusamus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "natus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "aspernatur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "maiores";
                                                        port = "corrupti";
                                                        project = "at";
                                                        region = "error";
                                                    }}),
                                                }};
                                            }};
                                            kind = "blanditiis";
                                            rrdatas = new String[]{{
                                                add("repudiandae"),
                                                add("atque"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("sunt"),
                                                add("recusandae"),
                                                add("dolorum"),
                                            }};
                                            weight = 8298.98;
                                        }}),
                                    }};
                                    kind = "labore";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("doloremque"),
                                add("repudiandae"),
                                add("dicta"),
                                add("accusantium"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("dolores"),
                            }};
                            ttl = 316488;
                            type = "laboriosam";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "velit";
                            name = "Ross Gusikowski";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "perspiciatis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "adipisci";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "occaecati";
                                                        port = "consequuntur";
                                                        project = "fugit";
                                                        region = "id";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "error";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "corporis";
                                                        port = "quidem";
                                                        project = "eveniet";
                                                        region = "non";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vero";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "iure";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "totam";
                                                        port = "quae";
                                                        project = "molestiae";
                                                        region = "eveniet";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "qui";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "iure";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "ratione";
                                                        port = "laborum";
                                                        project = "distinctio";
                                                        region = "voluptatum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "rem";
                                            location = "aliquam";
                                            rrdatas = new String[]{{
                                                add("repellat"),
                                                add("alias"),
                                            }};
                                            signatureRrdatas = new String[]{{
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
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "dolores";
                                                        port = "id";
                                                        project = "minima";
                                                        region = "dolore";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolorum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "omnis";
                                                        port = "quaerat";
                                                        project = "molestiae";
                                                        region = "ex";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ut";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "adipisci";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
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
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
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
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "illum";
                                                            port = "eaque";
                                                            project = "earum";
                                                            region = "perspiciatis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "maiores";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "aliquid";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "suscipit";
                                                            port = "dolorem";
                                                            project = "fugit";
                                                            region = "cumque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fuga";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "animi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
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
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
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
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
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
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
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
                            }};
                            rrdatas = new String[]{{
                                add("expedita"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("vel"),
                                add("voluptatum"),
                            }};
                            ttl = 301692;
                            type = "exercitationem";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "ab";
                            name = "Raul Rolfson";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "exercitationem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quasi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "at";
                                                        port = "vero";
                                                        project = "est";
                                                        region = "harum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sequi";
                                            location = "doloribus";
                                            rrdatas = new String[]{{
                                                add("optio"),
                                                add("occaecati"),
                                                add("nemo"),
                                                add("voluptate"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("officia"),
                                                add("voluptas"),
                                                add("numquam"),
                                            }};
                                        }}),
                                    }};
                                    kind = "nemo";
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
                                                            ipAddress = "ducimus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "fuga";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "incidunt";
                                                            port = "quasi";
                                                            project = "rem";
                                                            region = "fugiat";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dicta";
                                                location = "nisi";
                                                rrdatas = new String[]{{
                                                    add("consectetur"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("cupiditate"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "soluta";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "omnis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "occaecati";
                                                            port = "iste";
                                                            project = "magni";
                                                            region = "inventore";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fuga";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "voluptatibus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "omnis";
                                                            port = "delectus";
                                                            project = "minima";
                                                            region = "praesentium";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "maxime";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "temporibus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "commodi";
                                                            port = "itaque";
                                                            project = "commodi";
                                                            region = "totam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "earum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "nam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "voluptatem";
                                                            port = "ipsam";
                                                            project = "vel";
                                                            region = "alias";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quasi";
                                                location = "non";
                                                rrdatas = new String[]{{
                                                    add("enim"),
                                                    add("sint"),
                                                    add("nulla"),
                                                    add("deserunt"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nemo"),
                                                    add("reprehenderit"),
                                                }};
                                            }}),
                                        }};
                                        kind = "est";
                                    }};
                                    kind = "quis";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "accusamus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "hic";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "asperiores";
                                                port = "ex";
                                                project = "voluptas";
                                                region = "debitis";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "delectus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "minus";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "laborum";
                                                port = "consectetur";
                                                project = "velit";
                                                region = "atque";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ipsum";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "magni";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "repudiandae";
                                                port = "nam";
                                                project = "dolore";
                                                region = "iusto";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 4530.94;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "neque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "deleniti";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "iure";
                                                        port = "odit";
                                                        project = "voluptatibus";
                                                        region = "vel";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magnam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "inventore";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "libero";
                                                        port = "architecto";
                                                        project = "voluptatibus";
                                                        region = "quia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "porro";
                                            rrdatas = new String[]{{
                                                add("velit"),
                                                add("illo"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("vel"),
                                            }};
                                            weight = 4069.22;
                                        }}),
                                    }};
                                    kind = "beatae";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("excepturi"),
                                add("eum"),
                                add("velit"),
                                add("ut"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("earum"),
                                add("dicta"),
                                add("impedit"),
                            }};
                            ttl = 975884;
                            type = "iste";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "itaque";
                            name = "Alma Waters";
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
                                                        kind = "doloremque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "officia";
                                                        port = "recusandae";
                                                        project = "ea";
                                                        region = "quidem";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptas";
                                            location = "facilis";
                                            rrdatas = new String[]{{
                                                add("perspiciatis"),
                                                add("expedita"),
                                                add("deleniti"),
                                                add("a"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ullam"),
                                                add("unde"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "animi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "ipsam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "est";
                                                        port = "error";
                                                        project = "esse";
                                                        region = "labore";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "veritatis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "consectetur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "inventore";
                                                        port = "dolorem";
                                                        project = "ad";
                                                        region = "qui";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iste";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "nemo";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "libero";
                                                        port = "rem";
                                                        project = "dolorum";
                                                        region = "odio";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fugit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "magni";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quae";
                                                        port = "quae";
                                                        project = "modi";
                                                        region = "neque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "exercitationem";
                                            location = "itaque";
                                            rrdatas = new String[]{{
                                                add("ipsum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("nulla"),
                                                add("distinctio"),
                                                add("maxime"),
                                            }};
                                        }}),
                                    }};
                                    kind = "quia";
                                }};
                                kind = "quia";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "libero";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "id";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "fugiat";
                                                            port = "officia";
                                                            project = "quos";
                                                            region = "placeat";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "ipsa";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "inventore";
                                                            port = "aperiam";
                                                            project = "totam";
                                                            region = "dolore";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eligendi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "voluptatem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "esse";
                                                            port = "dolores";
                                                            project = "assumenda";
                                                            region = "beatae";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "est";
                                                location = "facere";
                                                rrdatas = new String[]{{
                                                    add("molestiae"),
                                                    add("provident"),
                                                    add("accusamus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("tempore"),
                                                    add("sint"),
                                                    add("ea"),
                                                    add("autem"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "rerum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "corporis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "voluptatibus";
                                                            port = "cum";
                                                            project = "at";
                                                            region = "alias";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "fuga";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "accusantium";
                                                            port = "expedita";
                                                            project = "officiis";
                                                            region = "eos";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quibusdam";
                                                location = "odio";
                                                rrdatas = new String[]{{
                                                    add("odit"),
                                                    add("explicabo"),
                                                    add("corporis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("earum"),
                                                    add("adipisci"),
                                                    add("recusandae"),
                                                }};
                                            }}),
                                        }};
                                        kind = "similique";
                                    }};
                                    kind = "ut";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quis";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "unde";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "delectus";
                                                port = "cupiditate";
                                                project = "fugit";
                                                region = "numquam";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "numquam";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "at";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "dignissimos";
                                                port = "optio";
                                                project = "necessitatibus";
                                                region = "corporis";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "qui";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "voluptatum";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "minima";
                                                port = "placeat";
                                                project = "enim";
                                                region = "neque";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 4468.77;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "modi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "magnam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "maiores";
                                                        port = "tempore";
                                                        project = "aperiam";
                                                        region = "libero";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ratione";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "totam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "voluptas";
                                                        port = "quo";
                                                        project = "velit";
                                                        region = "minus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "fuga";
                                            rrdatas = new String[]{{
                                                add("est"),
                                                add("impedit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("tempore"),
                                                add("vero"),
                                                add("odit"),
                                                add("repellat"),
                                            }};
                                            weight = 8659.46;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "reprehenderit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "odio";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "in";
                                                        port = "ducimus";
                                                        project = "excepturi";
                                                        region = "dolores";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "error";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ducimus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "pariatur";
                                                        port = "itaque";
                                                        project = "similique";
                                                        region = "optio";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ex";
                                            rrdatas = new String[]{{
                                                add("commodi"),
                                                add("officiis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quidem"),
                                                add("exercitationem"),
                                                add("quam"),
                                                add("dolorem"),
                                            }};
                                            weight = 2646.19;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sint";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "sequi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "cum";
                                                        port = "dicta";
                                                        project = "earum";
                                                        region = "veniam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "animi";
                                            rrdatas = new String[]{{
                                                add("nam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("consequuntur"),
                                            }};
                                            weight = 8998.67;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsa";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "maiores";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quasi";
                                                        port = "laboriosam";
                                                        project = "pariatur";
                                                        region = "libero";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "excepturi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "nemo";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nostrum";
                                                        port = "doloribus";
                                                        project = "eligendi";
                                                        region = "sint";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "enim";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "animi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "totam";
                                                        port = "molestias";
                                                        project = "odio";
                                                        region = "eaque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "saepe";
                                            rrdatas = new String[]{{
                                                add("quos"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("assumenda"),
                                                add("tempore"),
                                                add("libero"),
                                            }};
                                            weight = 2440.32;
                                        }}),
                                    }};
                                    kind = "doloremque";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("impedit"),
                                add("cum"),
                                add("ipsum"),
                                add("adipisci"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("deserunt"),
                                add("doloremque"),
                                add("quis"),
                                add("veniam"),
                            }};
                            ttl = 727481;
                            type = "architecto";
                        }}),
                    }};
                    id = "97cd44e2-f52d-482d-b513-bb6f48b656bc";
                    isServing = false;
                    kind = "facere";
                    startTime = "facilis";
                    status = ChangeStatusEnum.PENDING;
                }};;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                clientOperationId = "consequuntur";
                fields = "debitis";
                key = "labore";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "reprehenderit";
                uploadProtocol = "nostrum";
            }};            

            DnsChangesCreateResponse res = sdk.changes.dnsChangesCreate(req, new DnsChangesCreateSecurity() {{
                option1 = new DnsChangesCreateSecurityOption1("neque", "iusto") {{
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
