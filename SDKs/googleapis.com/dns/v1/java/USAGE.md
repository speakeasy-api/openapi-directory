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
                                kind = "quia";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "laborum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "enim";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quo";
                                                            port = "sequi";
                                                            project = "tenetur";
                                                            region = "ipsam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "id";
                                                location = "possimus";
                                                rrdatas = new String[]{{
                                                    add("quasi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("temporibus"),
                                                    add("laborum"),
                                                    add("quasi"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "nihil";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "voluptatibus";
                                                            port = "ipsa";
                                                            project = "omnis";
                                                            region = "voluptate";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "cum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "doloremque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ut";
                                                            port = "maiores";
                                                            project = "dicta";
                                                            region = "corporis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "dicta";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "enim";
                                                            port = "accusamus";
                                                            project = "commodi";
                                                            region = "repudiandae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quidem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "excepturi";
                                                            port = "pariatur";
                                                            project = "modi";
                                                            region = "praesentium";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "rem";
                                                location = "voluptates";
                                                rrdatas = new String[]{{
                                                    add("repudiandae"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("veritatis"),
                                                    add("itaque"),
                                                    add("incidunt"),
                                                }};
                                            }}),
                                        }};
                                        kind = "enim";
                                    }};
                                    kind = "consequatur";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quibusdam";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "deserunt";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "quibusdam";
                                                port = "labore";
                                                project = "modi";
                                                region = "qui";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "aliquid";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "quos";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "magni";
                                                port = "assumenda";
                                                project = "ipsam";
                                                region = "alias";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "fugit";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "excepturi";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "facilis";
                                                port = "tempore";
                                                project = "labore";
                                                region = "delectus";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 4332.88;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sint";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "provident";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "sint";
                                                        port = "officia";
                                                        project = "dolor";
                                                        region = "debitis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "a";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "in";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "illum";
                                                        port = "maiores";
                                                        project = "rerum";
                                                        region = "dicta";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magnam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "facere";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "aliquid";
                                                        port = "laborum";
                                                        project = "accusamus";
                                                        region = "non";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "occaecati";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "accusamus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quidem";
                                                        port = "provident";
                                                        project = "nam";
                                                        region = "id";
                                                    }}),
                                                }};
                                            }};
                                            kind = "blanditiis";
                                            rrdatas = new String[]{{
                                                add("sapiente"),
                                                add("amet"),
                                                add("deserunt"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("vel"),
                                                add("natus"),
                                            }};
                                            weight = 6063.93;
                                        }}),
                                    }};
                                    kind = "molestiae";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("nihil"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("distinctio"),
                                add("id"),
                            }};
                            ttl = 287991;
                            type = "labore";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "suscipit";
                            name = "Robin Keebler";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "et";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "ullam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quos";
                                                        port = "sint";
                                                        project = "accusantium";
                                                        region = "mollitia";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "reiciendis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "ad";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "dolor";
                                                        port = "necessitatibus";
                                                        project = "odit";
                                                        region = "nemo";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quasi";
                                            location = "iure";
                                            rrdatas = new String[]{{
                                                add("debitis"),
                                                add("eius"),
                                                add("maxime"),
                                                add("deleniti"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("in"),
                                                add("architecto"),
                                                add("architecto"),
                                            }};
                                        }}),
                                    }};
                                    kind = "repudiandae";
                                }};
                                kind = "ullam";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repellat";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sed";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "pariatur";
                                                            port = "accusantium";
                                                            project = "consequuntur";
                                                            region = "praesentium";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "natus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                    kind = "dolorem";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
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
                                    trickleTraffic = 9702.37;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "numquam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ipsa";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "iure";
                                                        port = "odio";
                                                        project = "quaerat";
                                                        region = "accusamus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quidem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "voluptas";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "eos";
                                                        port = "atque";
                                                        project = "sit";
                                                        region = "fugiat";
                                                    }}),
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
                                                }};
                                            }};
                                            kind = "necessitatibus";
                                            rrdatas = new String[]{{
                                                add("asperiores"),
                                                add("nihil"),
                                                add("ipsum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("id"),
                                                add("saepe"),
                                            }};
                                            weight = 2633.22;
                                        }}),
                                    }};
                                    kind = "aspernatur";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("amet"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("accusamus"),
                                add("ad"),
                                add("saepe"),
                                add("suscipit"),
                            }};
                            ttl = 645785;
                            type = "provident";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "minima";
                            name = "Dr. Jimmie Murphy";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quod";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "qui";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "a";
                                                        port = "esse";
                                                        project = "harum";
                                                        region = "iusto";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "tenetur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "tempore";
                                                        port = "accusamus";
                                                        project = "numquam";
                                                        region = "enim";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dolorem";
                                            location = "sapiente";
                                            rrdatas = new String[]{{
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
                                    }};
                                    kind = "odio";
                                }};
                                kind = "sunt";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "hic";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "cumque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nobis";
                                                            port = "et";
                                                            project = "saepe";
                                                            region = "ipsum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "veritatis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "quos";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "cupiditate";
                                                            port = "aperiam";
                                                            project = "delectus";
                                                            region = "dolorem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "adipisci";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "architecto";
                                                            port = "quae";
                                                            project = "aut";
                                                            region = "quas";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "itaque";
                                                location = "consequatur";
                                                rrdatas = new String[]{{
                                                    add("repellendus"),
                                                    add("porro"),
                                                    add("doloribus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("facilis"),
                                                    add("cupiditate"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
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
                                                location = "ipsum";
                                                rrdatas = new String[]{{
                                                    add("voluptate"),
                                                    add("consectetur"),
                                                    add("vero"),
                                                    add("tenetur"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("hic"),
                                                    add("distinctio"),
                                                }};
                                            }}),
                                        }};
                                        kind = "quod";
                                    }};
                                    kind = "odio";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "facilis";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "ducimus";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "quibusdam";
                                                port = "illum";
                                                project = "sequi";
                                                region = "natus";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "impedit";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "voluptatibus";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "nulla";
                                                port = "fugit";
                                                project = "porro";
                                                region = "maiores";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "doloribus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "eligendi";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "alias";
                                                port = "officia";
                                                project = "tempora";
                                                region = "ipsam";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 4104.92;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "possimus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ratione";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "laudantium";
                                                        port = "dicta";
                                                        project = "dolor";
                                                        region = "maiores";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quasi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "nulla";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "voluptatibus";
                                                        port = "nostrum";
                                                        project = "sapiente";
                                                        region = "quisquam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "saepe";
                                            rrdatas = new String[]{{
                                                add("impedit"),
                                                add("corporis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("aliquid"),
                                                add("inventore"),
                                            }};
                                            weight = 3018.31;
                                        }}),
                                    }};
                                    kind = "ea";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("consectetur"),
                                add("recusandae"),
                                add("aspernatur"),
                                add("minima"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("a"),
                            }};
                            ttl = 725595;
                            type = "aut";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "aut";
                            name = "Myron Haag";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "et";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "laborum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "velit";
                                                        port = "eum";
                                                        project = "autem";
                                                        region = "nobis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quas";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "nulla";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "libero";
                                                        port = "quasi";
                                                        project = "tempora";
                                                        region = "numquam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "explicabo";
                                            location = "provident";
                                            rrdatas = new String[]{{
                                                add("molestiae"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("odio"),
                                                add("eius"),
                                            }};
                                        }}),
                                    }};
                                    kind = "esse";
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
                                                            ipAddress = "reprehenderit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "fugiat";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "eum";
                                                            port = "suscipit";
                                                            project = "assumenda";
                                                            region = "eos";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "praesentium";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "veritatis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "id";
                                                            port = "quidem";
                                                            project = "neque";
                                                            region = "quo";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "illum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "fuga";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "eos";
                                                            port = "voluptas";
                                                            project = "ab";
                                                            region = "cupiditate";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "consequatur";
                                                location = "tempora";
                                                rrdatas = new String[]{{
                                                    add("ipsam"),
                                                    add("aspernatur"),
                                                    add("sequi"),
                                                    add("quo"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("recusandae"),
                                                    add("aperiam"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                        }};
                                        kind = "harum";
                                    }};
                                    kind = "molestiae";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "occaecati";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "distinctio";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "sit";
                                                port = "culpa";
                                                project = "tempore";
                                                region = "adipisci";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "cumque";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "consequatur";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "quaerat";
                                                port = "sapiente";
                                                project = "consectetur";
                                                region = "esse";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "blanditiis";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "a";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "quas";
                                                port = "esse";
                                                project = "quasi";
                                                region = "a";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 6216.79;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "possimus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "eveniet";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "facere";
                                                        port = "veritatis";
                                                        project = "consequuntur";
                                                        region = "quasi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "similique";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "aliquid";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quae";
                                                        port = "earum";
                                                        project = "vel";
                                                        region = "in";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eius";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "illum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "accusantium";
                                                        port = "aliquam";
                                                        project = "sapiente";
                                                        region = "dicta";
                                                    }}),
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
                                            rrdatas = new String[]{{
                                                add("itaque"),
                                                add("dolorum"),
                                                add("architecto"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("tenetur"),
                                                add("quasi"),
                                                add("at"),
                                            }};
                                            weight = 920.27;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsa";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "veritatis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "adipisci";
                                                        port = "iste";
                                                        project = "temporibus";
                                                        region = "accusantium";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "laudantium";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "mollitia";
                                                        port = "ab";
                                                        project = "corrupti";
                                                        region = "non";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptatem";
                                            rrdatas = new String[]{{
                                                add("occaecati"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("impedit"),
                                                add("explicabo"),
                                            }};
                                            weight = 3762.26;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dignissimos";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "maiores";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "velit";
                                                        port = "voluptatibus";
                                                        project = "voluptas";
                                                        region = "asperiores";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aperiam";
                                            rrdatas = new String[]{{
                                                add("quaerat"),
                                                add("consequuntur"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("officia"),
                                                add("maxime"),
                                                add("dignissimos"),
                                                add("officia"),
                                            }};
                                            weight = 9894.1;
                                        }}),
                                    }};
                                    kind = "nemo";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("quaerat"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("quod"),
                                add("labore"),
                                add("ab"),
                                add("adipisci"),
                            }};
                            ttl = 683573;
                            type = "id";
                        }}),
                    }};
                    deletions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "velit";
                            name = "Rex Walter";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quos";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "labore";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "facilis";
                                                        port = "cum";
                                                        project = "commodi";
                                                        region = "in";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "corporis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "assumenda";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "recusandae";
                                                        port = "aliquid";
                                                        project = "aperiam";
                                                        region = "cum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "consectetur";
                                            location = "in";
                                            rrdatas = new String[]{{
                                                add("earum"),
                                                add("facere"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("doloribus"),
                                                add("suscipit"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quidem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "necessitatibus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "sunt";
                                                        port = "asperiores";
                                                        project = "adipisci";
                                                        region = "non";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "amet";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "dignissimos";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "debitis";
                                                        port = "consectetur";
                                                        project = "corporis";
                                                        region = "harum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laboriosam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "voluptates";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "vitae";
                                                        port = "accusamus";
                                                        project = "similique";
                                                        region = "tempora";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aspernatur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "voluptas";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "minima";
                                                        port = "nobis";
                                                        project = "dolorum";
                                                        region = "adipisci";
                                                    }}),
                                                }};
                                            }};
                                            kind = "minus";
                                            location = "dolores";
                                            rrdatas = new String[]{{
                                                add("in"),
                                                add("dolore"),
                                                add("aliquam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("temporibus"),
                                                add("ullam"),
                                                add("adipisci"),
                                                add("cum"),
                                            }};
                                        }}),
                                    }};
                                    kind = "blanditiis";
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
                                                            ipAddress = "culpa";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "pariatur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "hic";
                                                            port = "exercitationem";
                                                            project = "nobis";
                                                            region = "sit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "rerum";
                                                location = "sed";
                                                rrdatas = new String[]{{
                                                    add("explicabo"),
                                                    add("asperiores"),
                                                    add("facilis"),
                                                    add("voluptate"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ab"),
                                                    add("iste"),
                                                    add("dolore"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sed";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "commodi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "explicabo";
                                                            port = "voluptas";
                                                            project = "unde";
                                                            region = "architecto";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "suscipit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "debitis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "reiciendis";
                                                            port = "perferendis";
                                                            project = "corrupti";
                                                            region = "maiores";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "incidunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "provident";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "necessitatibus";
                                                            port = "ipsum";
                                                            project = "ea";
                                                            region = "occaecati";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quos";
                                                location = "voluptatibus";
                                                rrdatas = new String[]{{
                                                    add("tempora"),
                                                    add("voluptate"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ex"),
                                                    add("sit"),
                                                    add("non"),
                                                    add("officiis"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facilis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "incidunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "debitis";
                                                            port = "rem";
                                                            project = "sit";
                                                            region = "nobis";
                                                        }}),
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
                                                    }};
                                                }};
                                                kind = "praesentium";
                                                location = "cum";
                                                rrdatas = new String[]{{
                                                    add("dolorum"),
                                                    add("voluptatum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("hic"),
                                                    add("expedita"),
                                                    add("debitis"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolorum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "officia";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "corrupti";
                                                            port = "accusamus";
                                                            project = "tempora";
                                                            region = "atque";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "fugit";
                                                location = "ut";
                                                rrdatas = new String[]{{
                                                    add("voluptatem"),
                                                    add("culpa"),
                                                    add("expedita"),
                                                    add("magnam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("esse"),
                                                }};
                                            }}),
                                        }};
                                        kind = "ipsam";
                                    }};
                                    kind = "sit";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quas";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "corporis";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "blanditiis";
                                                port = "ex";
                                                project = "sed";
                                                region = "sit";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "vel";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "saepe";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "consequatur";
                                                port = "incidunt";
                                                project = "reiciendis";
                                                region = "dolorem";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "harum";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "architecto";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "labore";
                                                port = "quidem";
                                                project = "atque";
                                                region = "laborum";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 7241.48;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                            rrdatas = new String[]{{
                                                add("veniam"),
                                                add("voluptatem"),
                                                add("quisquam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quasi"),
                                                add("atque"),
                                                add("reprehenderit"),
                                                add("asperiores"),
                                            }};
                                            weight = 5199.52;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quidem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "et";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "amet";
                                                        port = "assumenda";
                                                        project = "ea";
                                                        region = "atque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "error";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "officiis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "natus";
                                                        port = "minima";
                                                        project = "aspernatur";
                                                        region = "ex";
                                                    }}),
                                                }};
                                            }};
                                            kind = "maiores";
                                            rrdatas = new String[]{{
                                                add("at"),
                                                add("error"),
                                                add("blanditiis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("repudiandae"),
                                                add("atque"),
                                            }};
                                            weight = 5413.81;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "repellendus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "reiciendis";
                                                        port = "doloremque";
                                                        project = "repudiandae";
                                                        region = "dicta";
                                                    }}),
                                                }};
                                            }};
                                            kind = "accusantium";
                                            rrdatas = new String[]{{
                                                add("dolores"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("laboriosam"),
                                                add("velit"),
                                            }};
                                            weight = 9521.43;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magnam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "consequuntur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "officiis";
                                                        port = "perspiciatis";
                                                        project = "in";
                                                        region = "adipisci";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eveniet";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "consequuntur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "id";
                                                        port = "quis";
                                                        project = "reprehenderit";
                                                        region = "error";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "illo";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "quidem";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "non";
                                                        port = "vero";
                                                        project = "doloremque";
                                                        region = "iure";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsa";
                                            rrdatas = new String[]{{
                                                add("quae"),
                                                add("molestiae"),
                                                add("eveniet"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("cum"),
                                            }};
                                            weight = 4347.61;
                                        }}),
                                    }};
                                    kind = "necessitatibus";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("laborum"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("voluptatum"),
                                add("rem"),
                                add("aliquam"),
                            }};
                            ttl = 320565;
                            type = "repellat";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "alias";
                            name = "Katrina Kovacek";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "reiciendis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "id";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "dolore";
                                                        port = "dolorum";
                                                        project = "nesciunt";
                                                        region = "quae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "quaerat";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ex";
                                                        port = "ut";
                                                        project = "culpa";
                                                        region = "adipisci";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "debitis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "eum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "recusandae";
                                                        port = "esse";
                                                        project = "provident";
                                                        region = "quis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "provident";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ullam";
                                                        port = "quasi";
                                                        project = "animi";
                                                        region = "nostrum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "mollitia";
                                            location = "provident";
                                            rrdatas = new String[]{{
                                                add("animi"),
                                                add("ex"),
                                                add("aliquid"),
                                                add("accusantium"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("doloribus"),
                                                add("ullam"),
                                                add("in"),
                                                add("nam"),
                                            }};
                                        }}),
                                    }};
                                    kind = "earum";
                                }};
                                kind = "officia";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "modi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "molestias";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "sapiente";
                                                            port = "cumque";
                                                            project = "vitae";
                                                            region = "rerum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "tempora";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "inventore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "cumque";
                                                            port = "quae";
                                                            project = "perferendis";
                                                            region = "velit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aspernatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "eius";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "at";
                                                            port = "impedit";
                                                            project = "eos";
                                                            region = "sapiente";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "minima";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "cupiditate";
                                                            port = "provident";
                                                            project = "earum";
                                                            region = "soluta";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "hic";
                                                location = "illum";
                                                rrdatas = new String[]{{
                                                    add("earum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("maiores"),
                                                    add("debitis"),
                                                    add("aliquid"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "suscipit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "fugit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "fuga";
                                                            port = "ratione";
                                                            project = "animi";
                                                            region = "necessitatibus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nulla";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quasi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ducimus";
                                                            port = "natus";
                                                            project = "occaecati";
                                                            region = "suscipit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "adipisci";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "magni";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nulla";
                                                            port = "necessitatibus";
                                                            project = "ipsa";
                                                            region = "tempora";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nihil";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "dicta";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "esse";
                                                            port = "praesentium";
                                                            project = "maiores";
                                                            region = "reiciendis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "vel";
                                                location = "architecto";
                                                rrdatas = new String[]{{
                                                    add("doloremque"),
                                                    add("dicta"),
                                                    add("odio"),
                                                    add("tempora"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ex"),
                                                    add("consectetur"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ipsa";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "fugiat";
                                                            port = "expedita";
                                                            project = "aliquid";
                                                            region = "officia";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "suscipit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "perferendis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "voluptas";
                                                            port = "iste";
                                                            project = "id";
                                                            region = "ab";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "error";
                                                location = "possimus";
                                                rrdatas = new String[]{{
                                                    add("mollitia"),
                                                    add("laborum"),
                                                    add("libero"),
                                                    add("ad"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("enim"),
                                                    add("vitae"),
                                                    add("repellendus"),
                                                }};
                                            }}),
                                        }};
                                        kind = "ex";
                                    }};
                                    kind = "quo";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ut";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "expedita";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "molestias";
                                                port = "cum";
                                                project = "aliquid";
                                                region = "beatae";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "voluptatum";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "veritatis";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "est";
                                                port = "culpa";
                                                project = "voluptatem";
                                                region = "sapiente";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 8892.88;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "pariatur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "voluptatem";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "deleniti";
                                                        port = "earum";
                                                        project = "ex";
                                                        region = "sapiente";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "nemo";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "ratione";
                                                        port = "ullam";
                                                        project = "perferendis";
                                                        region = "illum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "totam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quibusdam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "ipsam";
                                                        port = "culpa";
                                                        project = "dolor";
                                                        region = "aliquam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "inventore";
                                            rrdatas = new String[]{{
                                                add("veritatis"),
                                                add("tempora"),
                                                add("dolor"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("architecto"),
                                            }};
                                            weight = 249.44;
                                        }}),
                                    }};
                                    kind = "modi";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("ab"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("quae"),
                                add("dolor"),
                                add("fugiat"),
                            }};
                            ttl = 369490;
                            type = "consequuntur";
                        }}),
                    }};
                    id = "08ece7e2-53b6-4684-91c6-c6e205e16dea";
                    isServing = false;
                    kind = "harum";
                    startTime = "sequi";
                    status = ChangeStatusEnum.DONE;
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                clientOperationId = "nemo";
                fields = "voluptate";
                key = "blanditiis";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "numquam";
                uploadProtocol = "nemo";
            }};            

            DnsChangesCreateResponse res = sdk.changes.dnsChangesCreate(req, new DnsChangesCreateSecurity() {{
                option1 = new DnsChangesCreateSecurityOption1("quos", "eius") {{
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