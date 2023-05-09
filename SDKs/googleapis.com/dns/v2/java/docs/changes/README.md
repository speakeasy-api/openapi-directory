# changes

### Available Operations

* [dnsChangesCreate](#dnschangescreate) - Atomically updates the ResourceRecordSet collection.
* [dnsChangesGet](#dnschangesget) - Fetches the representation of an existing Change.
* [dnsChangesList](#dnschangeslist) - Enumerates Changes to a ResourceRecordSet collection.

## dnsChangesCreate

Atomically updates the ResourceRecordSet collection.

### Example Usage

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

            DnsChangesCreateRequest req = new DnsChangesCreateRequest("est", "rem", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                change = new Change() {{
                    additions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "officiis";
                            name = "Carmen Carroll";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "esse";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "ad";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "enim";
                                                        port = "delectus";
                                                        project = "iusto";
                                                        region = "dignissimos";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "libero";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ab";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "accusamus";
                                                        port = "saepe";
                                                        project = "tempore";
                                                        region = "veniam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "eos";
                                            location = "reiciendis";
                                            rrdatas = new String[]{{
                                                add("reprehenderit"),
                                                add("praesentium"),
                                                add("nemo"),
                                                add("repellat"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("sequi"),
                                                add("nihil"),
                                                add("deleniti"),
                                                add("illo"),
                                            }};
                                        }}),
                                    }};
                                    kind = "labore";
                                }};
                                kind = "assumenda";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "provident";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "repudiandae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "maxime";
                                                            port = "aspernatur";
                                                            project = "nam";
                                                            region = "expedita";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quas";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "repudiandae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "dignissimos";
                                                            port = "corporis";
                                                            project = "vero";
                                                            region = "similique";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repellendus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "dolorem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "impedit";
                                                            port = "commodi";
                                                            project = "aut";
                                                            region = "voluptatem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ad";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "amet";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "praesentium";
                                                            port = "quidem";
                                                            project = "cum";
                                                            region = "amet";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quasi";
                                                location = "dicta";
                                                rrdatas = new String[]{{
                                                    add("doloremque"),
                                                    add("earum"),
                                                    add("iusto"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("provident"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "necessitatibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "repudiandae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nemo";
                                                            port = "molestiae";
                                                            project = "itaque";
                                                            region = "facilis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "corrupti";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sint";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "eos";
                                                            port = "totam";
                                                            project = "dicta";
                                                            region = "voluptatem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "velit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "dolor";
                                                            port = "occaecati";
                                                            project = "atque";
                                                            region = "beatae";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "at";
                                                location = "labore";
                                                rrdatas = new String[]{{
                                                    add("esse"),
                                                    add("voluptatem"),
                                                    add("perferendis"),
                                                    add("rerum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("aperiam"),
                                                    add("dignissimos"),
                                                }};
                                            }}),
                                        }};
                                        kind = "repellat";
                                    }};
                                    kind = "velit";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "provident";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "eligendi";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "consectetur";
                                                port = "soluta";
                                                project = "natus";
                                                region = "temporibus";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "officia";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "tenetur";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "quo";
                                                port = "itaque";
                                                project = "illum";
                                                region = "laborum";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "dignissimos";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "qui";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "repellat";
                                                port = "explicabo";
                                                project = "explicabo";
                                                region = "exercitationem";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "nihil";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "ab";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "hic";
                                                port = "deserunt";
                                                project = "delectus";
                                                region = "non";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 7193.89;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "labore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "repudiandae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "in";
                                                        port = "explicabo";
                                                        project = "accusamus";
                                                        region = "rem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aperiam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "deleniti";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "voluptate";
                                                        port = "similique";
                                                        project = "minima";
                                                        region = "libero";
                                                    }}),
                                                }};
                                            }};
                                            kind = "magnam";
                                            rrdatas = new String[]{{
                                                add("modi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("nesciunt"),
                                                add("mollitia"),
                                            }};
                                            weight = 4926.32;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nostrum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "veniam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "ab";
                                                        port = "modi";
                                                        project = "aut";
                                                        region = "aut";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eveniet";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "commodi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "dolorum";
                                                        port = "possimus";
                                                        project = "voluptate";
                                                        region = "consectetur";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nesciunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "itaque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "sunt";
                                                        port = "distinctio";
                                                        project = "iusto";
                                                        region = "quas";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "et";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "amet";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "fuga";
                                                        port = "alias";
                                                        project = "rem";
                                                        region = "aut";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quos";
                                            rrdatas = new String[]{{
                                                add("repellendus"),
                                                add("veritatis"),
                                                add("quae"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("saepe"),
                                            }};
                                            weight = 9655.17;
                                        }}),
                                    }};
                                    kind = "mollitia";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("officia"),
                                add("sed"),
                                add("voluptatem"),
                                add("alias"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("hic"),
                                add("voluptatem"),
                                add("incidunt"),
                                add("qui"),
                            }};
                            ttl = 185897;
                            type = "necessitatibus";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "harum";
                            name = "Doris Jacobi";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officia";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "totam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "aliquid";
                                                        port = "ea";
                                                        project = "impedit";
                                                        region = "ducimus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "reiciendis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "nulla";
                                                        port = "laborum";
                                                        project = "natus";
                                                        region = "accusamus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "doloremque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "rerum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "voluptates";
                                                        port = "non";
                                                        project = "rem";
                                                        region = "quia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ullam";
                                            location = "quisquam";
                                            rrdatas = new String[]{{
                                                add("voluptatibus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quae"),
                                                add("officiis"),
                                                add("architecto"),
                                                add("architecto"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "optio";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "perferendis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "reiciendis";
                                                        port = "a";
                                                        project = "iste";
                                                        region = "dicta";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quos";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "dolore";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "itaque";
                                                        port = "maxime";
                                                        project = "modi";
                                                        region = "consequuntur";
                                                    }}),
                                                }};
                                            }};
                                            kind = "assumenda";
                                            location = "vero";
                                            rrdatas = new String[]{{
                                                add("impedit"),
                                                add("porro"),
                                                add("accusamus"),
                                                add("totam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ab"),
                                                add("sint"),
                                                add("nihil"),
                                                add("esse"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odio";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "debitis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "neque";
                                                        port = "corporis";
                                                        project = "voluptas";
                                                        region = "consequuntur";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officia";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "distinctio";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ipsa";
                                                        port = "rem";
                                                        project = "maiores";
                                                        region = "accusantium";
                                                    }}),
                                                }};
                                            }};
                                            kind = "veniam";
                                            location = "saepe";
                                            rrdatas = new String[]{{
                                                add("facere"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quos"),
                                                add("doloribus"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "est";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "velit";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nesciunt";
                                                        port = "similique";
                                                        project = "illo";
                                                        region = "repellat";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nemo";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "possimus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "incidunt";
                                                        port = "explicabo";
                                                        project = "ipsam";
                                                        region = "cupiditate";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "optio";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quidem";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "commodi";
                                                        port = "sapiente";
                                                        project = "consequuntur";
                                                        region = "veniam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "debitis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "sint";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "numquam";
                                                        port = "tenetur";
                                                        project = "adipisci";
                                                        region = "libero";
                                                    }}),
                                                }};
                                            }};
                                            kind = "in";
                                            location = "minima";
                                            rrdatas = new String[]{{
                                                add("minus"),
                                                add("ab"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("hic"),
                                            }};
                                        }}),
                                    }};
                                    kind = "nisi";
                                }};
                                kind = "quisquam";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fuga";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "architecto";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "aliquid";
                                                            port = "magni";
                                                            project = "incidunt";
                                                            region = "adipisci";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "praesentium";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "exercitationem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "facilis";
                                                            port = "impedit";
                                                            project = "sit";
                                                            region = "nemo";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "culpa";
                                                location = "consequuntur";
                                                rrdatas = new String[]{{
                                                    add("deserunt"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("veniam"),
                                                    add("quod"),
                                                }};
                                            }}),
                                        }};
                                        kind = "itaque";
                                    }};
                                    kind = "a";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "enim";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "assumenda";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "architecto";
                                                port = "alias";
                                                project = "culpa";
                                                region = "ipsa";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "nobis";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "quia";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "vel";
                                                port = "perspiciatis";
                                                project = "debitis";
                                                region = "ullam";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "architecto";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "perferendis";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "provident";
                                                port = "cumque";
                                                project = "iure";
                                                region = "quibusdam";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quod";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "recusandae";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "magnam";
                                                port = "dignissimos";
                                                project = "laboriosam";
                                                region = "sed";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 4862.72;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "facilis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "itaque";
                                                        port = "laboriosam";
                                                        project = "unde";
                                                        region = "modi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "perspiciatis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "cum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "libero";
                                                        port = "nam";
                                                        project = "incidunt";
                                                        region = "recusandae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quod";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "saepe";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quo";
                                                        port = "nesciunt";
                                                        project = "illum";
                                                        region = "nemo";
                                                    }}),
                                                }};
                                            }};
                                            kind = "illum";
                                            rrdatas = new String[]{{
                                                add("non"),
                                                add("mollitia"),
                                                add("assumenda"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("distinctio"),
                                                add("pariatur"),
                                                add("ad"),
                                                add("facere"),
                                            }};
                                            weight = 6746.83;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laborum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "maxime";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "alias";
                                                        port = "suscipit";
                                                        project = "deserunt";
                                                        region = "molestias";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laborum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "occaecati";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quo";
                                                        port = "perferendis";
                                                        project = "fugit";
                                                        region = "aliquid";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magnam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "eligendi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "nostrum";
                                                        port = "officiis";
                                                        project = "unde";
                                                        region = "nulla";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "error";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "magnam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "esse";
                                                        port = "corrupti";
                                                        project = "fuga";
                                                        region = "facere";
                                                    }}),
                                                }};
                                            }};
                                            kind = "impedit";
                                            rrdatas = new String[]{{
                                                add("deserunt"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("laboriosam"),
                                                add("doloremque"),
                                                add("voluptatem"),
                                                add("facere"),
                                            }};
                                            weight = 9010.08;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequatur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "architecto";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "porro";
                                                        port = "blanditiis";
                                                        project = "quae";
                                                        region = "magni";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officiis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "necessitatibus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "ipsa";
                                                        port = "excepturi";
                                                        project = "a";
                                                        region = "maiores";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laudantium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "alias";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "rem";
                                                        port = "dicta";
                                                        project = "suscipit";
                                                        region = "earum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "doloribus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "eius";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "in";
                                                        port = "eligendi";
                                                        project = "quasi";
                                                        region = "neque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "vero";
                                            rrdatas = new String[]{{
                                                add("accusantium"),
                                                add("qui"),
                                                add("impedit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("incidunt"),
                                            }};
                                            weight = 1165.58;
                                        }}),
                                    }};
                                    kind = "odit";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("rerum"),
                                add("alias"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("vel"),
                                add("accusantium"),
                                add("id"),
                            }};
                            ttl = 388169;
                            type = "ex";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "quas";
                            name = "Dana Berge";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deserunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "omnis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nesciunt";
                                                        port = "maxime";
                                                        project = "quis";
                                                        region = "cupiditate";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aliquam";
                                            location = "excepturi";
                                            rrdatas = new String[]{{
                                                add("laudantium"),
                                                add("velit"),
                                                add("reiciendis"),
                                                add("amet"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ipsa"),
                                                add("quisquam"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quas";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "aliquid";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "a";
                                                        port = "nobis";
                                                        project = "perspiciatis";
                                                        region = "accusantium";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dicta";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "commodi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "porro";
                                                        port = "tempore";
                                                        project = "quidem";
                                                        region = "modi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptates";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "eius";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "eligendi";
                                                        port = "asperiores";
                                                        project = "esse";
                                                        region = "blanditiis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sint";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "a";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "maiores";
                                                        port = "itaque";
                                                        project = "nulla";
                                                        region = "deserunt";
                                                    }}),
                                                }};
                                            }};
                                            kind = "corporis";
                                            location = "velit";
                                            rrdatas = new String[]{{
                                                add("enim"),
                                                add("officia"),
                                                add("saepe"),
                                                add("eum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("accusantium"),
                                                add("officia"),
                                                add("impedit"),
                                                add("quasi"),
                                            }};
                                        }}),
                                    }};
                                    kind = "blanditiis";
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
                                                            ipAddress = "nobis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "minus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "magnam";
                                                            port = "reprehenderit";
                                                            project = "quod";
                                                            region = "quos";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "corrupti";
                                                location = "amet";
                                                rrdatas = new String[]{{
                                                    add("amet"),
                                                    add("laborum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("perferendis"),
                                                    add("necessitatibus"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "molestias";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "neque";
                                                            port = "odit";
                                                            project = "earum";
                                                            region = "veniam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ipsam";
                                                location = "eaque";
                                                rrdatas = new String[]{{
                                                    add("veniam"),
                                                    add("nihil"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nisi"),
                                                    add("tenetur"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quibusdam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "suscipit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "sit";
                                                            port = "quidem";
                                                            project = "repellendus";
                                                            region = "perferendis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "id";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "sed";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "repellat";
                                                            port = "repudiandae";
                                                            project = "architecto";
                                                            region = "adipisci";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "pariatur";
                                                location = "harum";
                                                rrdatas = new String[]{{
                                                    add("voluptatibus"),
                                                    add("iure"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("minus"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolorum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "earum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "error";
                                                            port = "non";
                                                            project = "quasi";
                                                            region = "mollitia";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "accusamus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "cumque";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "expedita";
                                                            port = "corrupti";
                                                            project = "eaque";
                                                            region = "deserunt";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aliquid";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "magni";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "possimus";
                                                            port = "dolor";
                                                            project = "rerum";
                                                            region = "sed";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "accusamus";
                                                location = "optio";
                                                rrdatas = new String[]{{
                                                    add("minus"),
                                                    add("quo"),
                                                    add("quos"),
                                                    add("asperiores"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("iste"),
                                                    add("corporis"),
                                                    add("accusantium"),
                                                }};
                                            }}),
                                        }};
                                        kind = "illo";
                                    }};
                                    kind = "aut";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "nostrum";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "possimus";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "pariatur";
                                                port = "vel";
                                                project = "sapiente";
                                                region = "mollitia";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quae";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "aperiam";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "voluptates";
                                                port = "ad";
                                                project = "aliquam";
                                                region = "quisquam";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quas";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "maiores";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "aliquid";
                                                port = "laudantium";
                                                project = "est";
                                                region = "dolor";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "aliquid";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "cumque";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "voluptatum";
                                                port = "ducimus";
                                                project = "adipisci";
                                                region = "recusandae";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 2713.06;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sequi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "sit";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "veritatis";
                                                        port = "tenetur";
                                                        project = "autem";
                                                        region = "quidem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "totam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "deserunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nihil";
                                                        port = "voluptas";
                                                        project = "animi";
                                                        region = "commodi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "alias";
                                            rrdatas = new String[]{{
                                                add("aut"),
                                                add("dolore"),
                                                add("maxime"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("iste"),
                                                add("ullam"),
                                            }};
                                            weight = 7557.38;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptas";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "unde";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nihil";
                                                        port = "inventore";
                                                        project = "libero";
                                                        region = "ipsam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quasi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "dicta";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "facere";
                                                        port = "facilis";
                                                        project = "beatae";
                                                        region = "cumque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "delectus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "expedita";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "rem";
                                                        port = "atque";
                                                        project = "officiis";
                                                        region = "cum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "pariatur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quo";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quod";
                                                        port = "minus";
                                                        project = "porro";
                                                        region = "id";
                                                    }}),
                                                }};
                                            }};
                                            kind = "excepturi";
                                            rrdatas = new String[]{{
                                                add("libero"),
                                                add("quo"),
                                                add("esse"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("maxime"),
                                                add("accusantium"),
                                                add("soluta"),
                                                add("fugit"),
                                            }};
                                            weight = 8662.92;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "aut";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "iusto";
                                                        port = "dolor";
                                                        project = "voluptates";
                                                        region = "tempora";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magni";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "doloremque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "eum";
                                                        port = "at";
                                                        project = "eum";
                                                        region = "reprehenderit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "nihil";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "rerum";
                                                        port = "deserunt";
                                                        project = "atque";
                                                        region = "nostrum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "atque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "est";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "rem";
                                                        port = "magni";
                                                        project = "quae";
                                                        region = "quas";
                                                    }}),
                                                }};
                                            }};
                                            kind = "placeat";
                                            rrdatas = new String[]{{
                                                add("labore"),
                                                add("sapiente"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("delectus"),
                                                add("officia"),
                                                add("natus"),
                                                add("cumque"),
                                            }};
                                            weight = 6174.97;
                                        }}),
                                    }};
                                    kind = "quaerat";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("quia"),
                                add("officiis"),
                                add("mollitia"),
                                add("cumque"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("enim"),
                                add("eum"),
                            }};
                            ttl = 365539;
                            type = "illum";
                        }}),
                    }};
                    deletions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "sit";
                            name = "Bethany Zboncak";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fugit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "aliquid";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "sed";
                                                        port = "deleniti";
                                                        project = "sunt";
                                                        region = "nesciunt";
                                                    }}),
                                                }};
                                            }};
                                            kind = "delectus";
                                            location = "laborum";
                                            rrdatas = new String[]{{
                                                add("deserunt"),
                                                add("modi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("impedit"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "at";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "repellat";
                                                        port = "aspernatur";
                                                        project = "inventore";
                                                        region = "sequi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fugit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "hic";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "dolorem";
                                                        port = "architecto";
                                                        project = "aperiam";
                                                        region = "aspernatur";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nulla";
                                            location = "enim";
                                            rrdatas = new String[]{{
                                                add("magnam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("numquam"),
                                                add("optio"),
                                                add("nobis"),
                                                add("ex"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "expedita";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "excepturi";
                                                        port = "aliquid";
                                                        project = "sed";
                                                        region = "beatae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "similique";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "animi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "tenetur";
                                                        port = "dignissimos";
                                                        project = "esse";
                                                        region = "animi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laudantium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "eveniet";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "velit";
                                                        port = "officiis";
                                                        project = "eius";
                                                        region = "rerum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "itaque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "ipsam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "impedit";
                                                        port = "aliquid";
                                                        project = "quis";
                                                        region = "facilis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsum";
                                            location = "ut";
                                            rrdatas = new String[]{{
                                                add("architecto"),
                                                add("praesentium"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("dolor"),
                                                add("expedita"),
                                                add("libero"),
                                                add("iste"),
                                            }};
                                        }}),
                                    }};
                                    kind = "illo";
                                }};
                                kind = "minus";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sint";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "enim";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "aperiam";
                                                            port = "voluptates";
                                                            project = "laudantium";
                                                            region = "tempora";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "illum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "tenetur";
                                                            port = "deleniti";
                                                            project = "modi";
                                                            region = "earum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "architecto";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "labore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "sequi";
                                                            port = "saepe";
                                                            project = "consequatur";
                                                            region = "esse";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "debitis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "quisquam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "aliquam";
                                                            port = "dolorum";
                                                            project = "deserunt";
                                                            region = "ad";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "reiciendis";
                                                location = "sequi";
                                                rrdatas = new String[]{{
                                                    add("laborum"),
                                                    add("nobis"),
                                                    add("quibusdam"),
                                                    add("omnis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ipsam"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "cupiditate";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "quia";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "accusantium";
                                                            port = "ad";
                                                            project = "nisi";
                                                            region = "molestiae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "sed";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "iusto";
                                                            port = "expedita";
                                                            project = "eos";
                                                            region = "repellendus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nesciunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sint";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "esse";
                                                            port = "accusantium";
                                                            project = "distinctio";
                                                            region = "sapiente";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quam";
                                                location = "est";
                                                rrdatas = new String[]{{
                                                    add("delectus"),
                                                    add("culpa"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("iusto"),
                                                    add("quod"),
                                                    add("voluptatibus"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "non";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "laborum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "doloribus";
                                                            port = "animi";
                                                            project = "recusandae";
                                                            region = "corporis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "non";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "distinctio";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                            networkUrl = "laboriosam";
                                                            port = "voluptatem";
                                                            project = "optio";
                                                            region = "sequi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "sunt";
                                                location = "vitae";
                                                rrdatas = new String[]{{
                                                    add("doloremque"),
                                                    add("sed"),
                                                    add("amet"),
                                                    add("rerum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nostrum"),
                                                    add("temporibus"),
                                                }};
                                            }}),
                                        }};
                                        kind = "ratione";
                                    }};
                                    kind = "dolor";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "dignissimos";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "itaque";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "est";
                                                port = "accusantium";
                                                project = "quod";
                                                region = "minus";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quos";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "maiores";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "provident";
                                                port = "sapiente";
                                                project = "aperiam";
                                                region = "similique";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 1979.82;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repellendus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "alias";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "sequi";
                                                        port = "commodi";
                                                        project = "labore";
                                                        region = "expedita";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "in";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "sunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nulla";
                                                        port = "maiores";
                                                        project = "distinctio";
                                                        region = "mollitia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "impedit";
                                            rrdatas = new String[]{{
                                                add("et"),
                                                add("quas"),
                                                add("blanditiis"),
                                                add("cum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("impedit"),
                                            }};
                                            weight = 2740.4;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repudiandae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "impedit";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "impedit";
                                                        port = "vel";
                                                        project = "eligendi";
                                                        region = "recusandae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ex";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "veritatis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "itaque";
                                                        port = "vero";
                                                        project = "quidem";
                                                        region = "illo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quo";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "minus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "possimus";
                                                        port = "cum";
                                                        project = "suscipit";
                                                        region = "saepe";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "earum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "nihil";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ipsum";
                                                        port = "ducimus";
                                                        project = "laudantium";
                                                        region = "rerum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "deserunt";
                                            rrdatas = new String[]{{
                                                add("ad"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("beatae"),
                                            }};
                                            weight = 4810.42;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magnam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "nulla";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "cupiditate";
                                                        port = "illo";
                                                        project = "exercitationem";
                                                        region = "laborum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "illum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "maxime";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                        networkUrl = "repellat";
                                                        port = "nostrum";
                                                        project = "illum";
                                                        region = "quibusdam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "commodi";
                                            rrdatas = new String[]{{
                                                add("explicabo"),
                                                add("consectetur"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("optio"),
                                                add("ipsa"),
                                                add("maiores"),
                                                add("exercitationem"),
                                            }};
                                            weight = 6336.43;
                                        }}),
                                    }};
                                    kind = "repudiandae";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("sapiente"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("officia"),
                            }};
                            ttl = 379661;
                            type = "harum";
                        }}),
                    }};
                    id = "70087875-6143-4f5a-ac98-b55554080d40";
                    isServing = false;
                    kind = "cum";
                    startTime = "nobis";
                    status = ChangeStatusEnum.DONE;
                }};;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "nisi";
                clientOperationId = "cumque";
                fields = "soluta";
                key = "fugiat";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "enim";
                uploadProtocol = "maiores";
            }};            

            DnsChangesCreateResponse res = sdk.changes.dnsChangesCreate(req, new DnsChangesCreateSecurity() {{
                option1 = new DnsChangesCreateSecurityOption1("consectetur", "necessitatibus") {{
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

## dnsChangesGet

Fetches the representation of an existing Change.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsChangesGetRequest;
import org.openapis.openapi.models.operations.DnsChangesGetResponse;
import org.openapis.openapi.models.operations.DnsChangesGetSecurity;
import org.openapis.openapi.models.operations.DnsChangesGetSecurityOption1;
import org.openapis.openapi.models.operations.DnsChangesGetSecurityOption2;
import org.openapis.openapi.models.operations.DnsChangesGetSecurityOption3;
import org.openapis.openapi.models.operations.DnsChangesGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsChangesGetRequest req = new DnsChangesGetRequest("maxime", "cupiditate", "voluptatem", "provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "repellat";
                clientOperationId = "omnis";
                fields = "explicabo";
                key = "vel";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "possimus";
                uploadProtocol = "fugit";
            }};            

            DnsChangesGetResponse res = sdk.changes.dnsChangesGet(req, new DnsChangesGetSecurity() {{
                option1 = new DnsChangesGetSecurityOption1("ipsam", "nostrum") {{
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

## dnsChangesList

Enumerates Changes to a ResourceRecordSet collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsChangesListRequest;
import org.openapis.openapi.models.operations.DnsChangesListResponse;
import org.openapis.openapi.models.operations.DnsChangesListSecurity;
import org.openapis.openapi.models.operations.DnsChangesListSecurityOption1;
import org.openapis.openapi.models.operations.DnsChangesListSecurityOption2;
import org.openapis.openapi.models.operations.DnsChangesListSecurityOption3;
import org.openapis.openapi.models.operations.DnsChangesListSecurityOption4;
import org.openapis.openapi.models.operations.DnsChangesListSortByEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsChangesListRequest req = new DnsChangesListRequest("sequi", "voluptatum", "quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "eius";
                key = "expedita";
                maxResults = 46384L;
                oauthToken = "voluptates";
                pageToken = "possimus";
                prettyPrint = false;
                quotaUser = "fugit";
                sortBy = DnsChangesListSortByEnum.CHANGE_SEQUENCE;
                sortOrder = "voluptatem";
                uploadType = "repudiandae";
                uploadProtocol = "corporis";
            }};            

            DnsChangesListResponse res = sdk.changes.dnsChangesList(req, new DnsChangesListSecurity() {{
                option1 = new DnsChangesListSecurityOption1("ea", "eos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.changesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
