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

            DnsChangesCreateRequest req = new DnsChangesCreateRequest("aspernatur", "ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                change = new Change() {{
                    additions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "laudantium";
                            name = "Joyce Leffler III";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aperiam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "reiciendis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "alias";
                                                        port = "omnis";
                                                        project = "eos";
                                                        region = "occaecati";
                                                    }}),
                                                }};
                                            }};
                                            kind = "iste";
                                            location = "magni";
                                            rrdatas = new String[]{{
                                                add("fuga"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("voluptatibus"),
                                                add("distinctio"),
                                                add("omnis"),
                                                add("delectus"),
                                            }};
                                        }}),
                                    }};
                                    kind = "minima";
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
                                                            ipAddress = "temporibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "commodi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "commodi";
                                                            port = "totam";
                                                            project = "earum";
                                                            region = "modi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "voluptatem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "vel";
                                                            port = "alias";
                                                            project = "quasi";
                                                            region = "non";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "maiores";
                                                location = "enim";
                                                rrdatas = new String[]{{
                                                    add("nulla"),
                                                    add("deserunt"),
                                                    add("esse"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("reprehenderit"),
                                                    add("est"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sint";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "impedit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "necessitatibus";
                                                            port = "asperiores";
                                                            project = "ex";
                                                            region = "voluptas";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "debitis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "quae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "fuga";
                                                            port = "laborum";
                                                            project = "consectetur";
                                                            region = "velit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "atque";
                                                location = "ipsum";
                                                rrdatas = new String[]{{
                                                    add("magni"),
                                                    add("soluta"),
                                                    add("repudiandae"),
                                                    add("nam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("iusto"),
                                                    add("voluptate"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dignissimos";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quo";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "quibusdam";
                                                            port = "iure";
                                                            project = "odit";
                                                            region = "voluptatibus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "vel";
                                                location = "magnam";
                                                rrdatas = new String[]{{
                                                    add("inventore"),
                                                    add("facere"),
                                                    add("libero"),
                                                    add("architecto"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quia"),
                                                    add("porro"),
                                                    add("aliquam"),
                                                    add("velit"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "accusantium";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "ea";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "vero";
                                                            port = "excepturi";
                                                            project = "eum";
                                                            region = "velit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ut";
                                                location = "perspiciatis";
                                                rrdatas = new String[]{{
                                                    add("dicta"),
                                                    add("impedit"),
                                                    add("voluptatibus"),
                                                    add("iste"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("alias"),
                                                    add("nisi"),
                                                    add("itaque"),
                                                    add("velit"),
                                                }};
                                            }}),
                                        }};
                                        kind = "laborum";
                                    }};
                                    kind = "non";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
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
                                    trickleTraffic = 3774.06;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "perspiciatis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "deleniti";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "voluptate";
                                                        port = "ullam";
                                                        project = "unde";
                                                        region = "necessitatibus";
                                                    }}),
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
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "libero";
                                                        port = "rem";
                                                        project = "dolorum";
                                                        region = "odio";
                                                    }}),
                                                }};
                                            }};
                                            kind = "fugit";
                                            rrdatas = new String[]{{
                                                add("magni"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quae"),
                                                add("quae"),
                                            }};
                                            weight = 2643.33;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "exercitationem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "et";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "unde";
                                                        port = "nulla";
                                                        project = "distinctio";
                                                        region = "maxime";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quia";
                                            rrdatas = new String[]{{
                                                add("nostrum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("libero"),
                                                add("dicta"),
                                                add("id"),
                                            }};
                                            weight = 7278.88;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officia";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "placeat";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "iusto";
                                                        port = "ipsa";
                                                        project = "voluptates";
                                                        region = "inventore";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aperiam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "dolore";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "distinctio";
                                                        port = "voluptatem";
                                                        project = "autem";
                                                        region = "esse";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolores";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "beatae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "facere";
                                                        port = "corrupti";
                                                        project = "molestiae";
                                                        region = "provident";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "accusamus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "tempore";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "ea";
                                                        port = "autem";
                                                        project = "ipsam";
                                                        region = "rerum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "laudantium";
                                            rrdatas = new String[]{{
                                                add("officiis"),
                                                add("voluptatibus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("at"),
                                                add("alias"),
                                                add("quia"),
                                            }};
                                            weight = 6941.58;
                                        }}),
                                    }};
                                    kind = "fuga";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("accusantium"),
                                add("expedita"),
                                add("officiis"),
                                add("eos"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("odio"),
                                add("praesentium"),
                                add("odit"),
                                add("explicabo"),
                            }};
                            ttl = 358995;
                            type = "error";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "earum";
                            name = "Delia Murray";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "unde";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "delectus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "fugit";
                                                        port = "numquam";
                                                        project = "numquam";
                                                        region = "nesciunt";
                                                    }}),
                                                }};
                                            }};
                                            kind = "at";
                                            location = "officia";
                                            rrdatas = new String[]{{
                                                add("optio"),
                                                add("necessitatibus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("qui"),
                                                add("expedita"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cupiditate";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "placeat";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "neque";
                                                        port = "in";
                                                        project = "minus";
                                                        region = "eum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "modi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "magnam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "maiores";
                                                        port = "tempore";
                                                        project = "aperiam";
                                                        region = "libero";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ratione";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "totam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "voluptas";
                                                        port = "quo";
                                                        project = "velit";
                                                        region = "minus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "fuga";
                                            location = "nostrum";
                                            rrdatas = new String[]{{
                                                add("impedit"),
                                                add("delectus"),
                                                add("tempore"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("odit"),
                                                add("repellat"),
                                                add("pariatur"),
                                                add("nemo"),
                                            }};
                                        }}),
                                    }};
                                    kind = "reprehenderit";
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
                                                            ipAddress = "in";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "excepturi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "error";
                                                            port = "veritatis";
                                                            project = "ducimus";
                                                            region = "voluptate";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "pariatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "similique";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "ex";
                                                            port = "quaerat";
                                                            project = "commodi";
                                                            region = "officiis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "placeat";
                                                location = "quidem";
                                                rrdatas = new String[]{{
                                                    add("quam"),
                                                    add("dolorem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ipsa"),
                                                    add("sint"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sequi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "cum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "earum";
                                                            port = "veniam";
                                                            project = "animi";
                                                            region = "dolores";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "consequuntur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nobis";
                                                            port = "ipsa";
                                                            project = "ducimus";
                                                            region = "maiores";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "veritatis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "laboriosam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "libero";
                                                            port = "excepturi";
                                                            project = "occaecati";
                                                            region = "nemo";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aliquam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "doloribus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "sint";
                                                            port = "enim";
                                                            project = "hic";
                                                            region = "animi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quas";
                                                location = "totam";
                                                rrdatas = new String[]{{
                                                    add("odio"),
                                                    add("eaque"),
                                                    add("saepe"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quos"),
                                                }};
                                            }}),
                                        }};
                                        kind = "iste";
                                    }};
                                    kind = "assumenda";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "libero";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "doloremque";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "impedit";
                                                port = "cum";
                                                project = "ipsum";
                                                region = "adipisci";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "saepe";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "doloremque";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "veniam";
                                                port = "libero";
                                                project = "architecto";
                                                region = "cupiditate";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "molestiae";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "possimus";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "magnam";
                                                port = "itaque";
                                                project = "sed";
                                                region = "asperiores";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 3302.67;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laudantium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "pariatur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "exercitationem";
                                                        port = "ab";
                                                        project = "velit";
                                                        region = "facilis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "voluptatibus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "blanditiis";
                                                        port = "distinctio";
                                                        project = "nisi";
                                                        region = "quis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nisi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "minus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "facilis";
                                                        port = "ipsum";
                                                        project = "ad";
                                                        region = "voluptatibus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatibus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "debitis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "rerum";
                                                        port = "eos";
                                                        project = "reprehenderit";
                                                        region = "nostrum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "neque";
                                            rrdatas = new String[]{{
                                                add("est"),
                                                add("rem"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("fugiat"),
                                                add("unde"),
                                                add("officiis"),
                                                add("ducimus"),
                                            }};
                                            weight = 2201.04;
                                        }}),
                                    }};
                                    kind = "dicta";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("porro"),
                                add("vitae"),
                                add("dignissimos"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("fugiat"),
                                add("ad"),
                            }};
                            ttl = 134818;
                            type = "enim";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "delectus";
                            name = "Mr. Marian Renner";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "eos";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "earum";
                                                        port = "reprehenderit";
                                                        project = "praesentium";
                                                        region = "nemo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repellat";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "sequi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "deleniti";
                                                        port = "illo";
                                                        project = "labore";
                                                        region = "assumenda";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aliquam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "provident";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "repudiandae";
                                                        port = "consequatur";
                                                        project = "maxime";
                                                        region = "aspernatur";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quas";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "repudiandae";
                                                        port = "rerum";
                                                        project = "dignissimos";
                                                        region = "corporis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "vero";
                                            location = "similique";
                                            rrdatas = new String[]{{
                                                add("iure"),
                                                add("dolorem"),
                                                add("commodi"),
                                                add("impedit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("aut"),
                                                add("voluptatem"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "illum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quidem";
                                                        port = "cum";
                                                        project = "amet";
                                                        region = "quasi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dicta";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "doloremque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "iusto";
                                                        port = "amet";
                                                        project = "provident";
                                                        region = "dolorum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "necessitatibus";
                                            location = "provident";
                                            rrdatas = new String[]{{
                                                add("consequatur"),
                                                add("nemo"),
                                                add("molestiae"),
                                                add("itaque"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("corrupti"),
                                                add("aperiam"),
                                                add("sint"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eos";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "dicta";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "velit";
                                                        port = "dolor";
                                                        project = "sunt";
                                                        region = "a";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolor";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "atque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "at";
                                                        port = "labore";
                                                        project = "minus";
                                                        region = "esse";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "rerum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "aperiam";
                                                        port = "dignissimos";
                                                        project = "repellat";
                                                        region = "velit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "porro";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "consectetur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "dignissimos";
                                                        port = "consectetur";
                                                        project = "soluta";
                                                        region = "natus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "temporibus";
                                            location = "officia";
                                            rrdatas = new String[]{{
                                                add("tenetur"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quo"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "illum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "dignissimos";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "qui";
                                                        port = "consectetur";
                                                        project = "repellat";
                                                        region = "explicabo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "explicabo";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "nihil";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ab";
                                                        port = "illo";
                                                        project = "hic";
                                                        region = "deserunt";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "delectus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "distinctio";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "exercitationem";
                                                        port = "labore";
                                                        project = "numquam";
                                                        region = "repudiandae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "modi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "explicabo";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "rem";
                                                        port = "aperiam";
                                                        project = "odit";
                                                        region = "deleniti";
                                                    }}),
                                                }};
                                            }};
                                            kind = "enim";
                                            location = "voluptate";
                                            rrdatas = new String[]{{
                                                add("minima"),
                                                add("libero"),
                                                add("magnam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("modi"),
                                            }};
                                        }}),
                                    }};
                                    kind = "eum";
                                }};
                                kind = "nesciunt";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fugiat";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "molestiae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "reiciendis";
                                                            port = "ab";
                                                            project = "modi";
                                                            region = "aut";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aut";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "odio";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "numquam";
                                                            port = "dolorum";
                                                            project = "possimus";
                                                            region = "voluptate";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "consectetur";
                                                location = "nesciunt";
                                                rrdatas = new String[]{{
                                                    add("itaque"),
                                                    add("minus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("distinctio"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quas";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "facilis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "autem";
                                                            port = "fuga";
                                                            project = "alias";
                                                            region = "rem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aut";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "laudantium";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "veritatis";
                                                            port = "quae";
                                                            project = "eaque";
                                                            region = "saepe";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "delectus";
                                                location = "mollitia";
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
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "necessitatibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "explicabo";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "aliquid";
                                                            port = "modi";
                                                            project = "optio";
                                                            region = "voluptatibus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "molestias";
                                                location = "officia";
                                                rrdatas = new String[]{{
                                                    add("totam"),
                                                    add("sequi"),
                                                    add("aliquid"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("impedit"),
                                                    add("ducimus"),
                                                }};
                                            }}),
                                        }};
                                        kind = "odit";
                                    }};
                                    kind = "velit";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "repellat";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "laborum";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "accusamus";
                                                port = "doloremque";
                                                project = "nisi";
                                                region = "rerum";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "recusandae";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "non";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "quia";
                                                port = "ullam";
                                                project = "quisquam";
                                                region = "dicta";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "voluptatibus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "quae";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "architecto";
                                                port = "architecto";
                                                project = "enim";
                                                region = "optio";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "rem";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "facilis";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "a";
                                                port = "iste";
                                                project = "dicta";
                                                region = "quos";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 3563.15;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "itaque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "modi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "assumenda";
                                                        port = "vero";
                                                        project = "doloribus";
                                                        region = "impedit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "porro";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "totam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "ab";
                                                        port = "sint";
                                                        project = "nihil";
                                                        region = "esse";
                                                    }}),
                                                }};
                                            }};
                                            kind = "iure";
                                            rrdatas = new String[]{{
                                                add("nesciunt"),
                                                add("debitis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("neque"),
                                                add("corporis"),
                                            }};
                                            weight = 3753.5;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                            rrdatas = new String[]{{
                                                add("neque"),
                                                add("facere"),
                                                add("aliquam"),
                                                add("quos"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("fugiat"),
                                                add("est"),
                                                add("delectus"),
                                                add("velit"),
                                            }};
                                            weight = 1105.22;
                                        }}),
                                    }};
                                    kind = "nesciunt";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("illo"),
                                add("repellat"),
                                add("nemo"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("possimus"),
                                add("unde"),
                                add("incidunt"),
                                add("explicabo"),
                            }};
                            ttl = 368491;
                            type = "cupiditate";
                        }}),
                    }};
                    deletions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "alias";
                            name = "Antonio Jerde";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officia";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "ut";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "tenetur";
                                                        port = "adipisci";
                                                        project = "libero";
                                                        region = "in";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "minima";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "minus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "beatae";
                                                        port = "hic";
                                                        project = "nisi";
                                                        region = "quisquam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolor";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "fuga";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "architecto";
                                                        port = "qui";
                                                        project = "aliquid";
                                                        region = "magni";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "incidunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "praesentium";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "exercitationem";
                                                        port = "expedita";
                                                        project = "facilis";
                                                        region = "impedit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sit";
                                            location = "nemo";
                                            rrdatas = new String[]{{
                                                add("consequuntur"),
                                                add("amet"),
                                                add("deserunt"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("veniam"),
                                                add("quod"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "a";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "enim";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "assumenda";
                                                        port = "officiis";
                                                        project = "architecto";
                                                        region = "alias";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "culpa";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "nobis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quia";
                                                        port = "dicta";
                                                        project = "vel";
                                                        region = "perspiciatis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "debitis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "architecto";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "perferendis";
                                                        port = "veritatis";
                                                        project = "provident";
                                                        region = "cumque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iure";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quod";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "recusandae";
                                                        port = "velit";
                                                        project = "magnam";
                                                        region = "dignissimos";
                                                    }}),
                                                }};
                                            }};
                                            kind = "laboriosam";
                                            location = "sed";
                                            rrdatas = new String[]{{
                                                add("natus"),
                                                add("provident"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("doloribus"),
                                                add("facilis"),
                                                add("quidem"),
                                            }};
                                        }}),
                                    }};
                                    kind = "itaque";
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
                                                location = "facilis";
                                                rrdatas = new String[]{{
                                                    add("mollitia"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("recusandae"),
                                                    add("distinctio"),
                                                    add("pariatur"),
                                                    add("ad"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "laborum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "laborum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "maxime";
                                                            port = "ipsam";
                                                            project = "alias";
                                                            region = "suscipit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "deserunt";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "laborum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "occaecati";
                                                            port = "labore";
                                                            project = "quo";
                                                            region = "perferendis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fugit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "magnam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "eligendi";
                                                            port = "hic";
                                                            project = "nostrum";
                                                            region = "officiis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "unde";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "error";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "magnam";
                                                            port = "nostrum";
                                                            project = "esse";
                                                            region = "corrupti";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "fuga";
                                                location = "facere";
                                                rrdatas = new String[]{{
                                                    add("quasi"),
                                                    add("deserunt"),
                                                    add("quod"),
                                                    add("laboriosam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("voluptatem"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "necessitatibus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "consequatur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "architecto";
                                                            port = "similique";
                                                            project = "porro";
                                                            region = "blanditiis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "officiis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "necessitatibus";
                                                            port = "impedit";
                                                            project = "ipsa";
                                                            region = "excepturi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "a";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "laudantium";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "alias";
                                                            port = "asperiores";
                                                            project = "rem";
                                                            region = "dicta";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "suscipit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "doloribus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "eius";
                                                            port = "esse";
                                                            project = "in";
                                                            region = "eligendi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quasi";
                                                location = "neque";
                                                rrdatas = new String[]{{
                                                    add("excepturi"),
                                                    add("accusantium"),
                                                    add("qui"),
                                                    add("impedit"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("incidunt"),
                                                }};
                                            }}),
                                        }};
                                        kind = "dicta";
                                    }};
                                    kind = "odit";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "rerum";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "error";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "accusantium";
                                                port = "id";
                                                project = "laboriosam";
                                                region = "ex";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quas";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "ullam";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "similique";
                                                port = "incidunt";
                                                project = "quam";
                                                region = "magni";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 6463.29;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sed";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "maxime";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "cupiditate";
                                                        port = "aliquam";
                                                        project = "excepturi";
                                                        region = "maiores";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laudantium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "reiciendis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nemo";
                                                        port = "ipsa";
                                                        project = "quisquam";
                                                        region = "tenetur";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quas";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "aliquid";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "a";
                                                        port = "nobis";
                                                        project = "perspiciatis";
                                                        region = "accusantium";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dicta";
                                            rrdatas = new String[]{{
                                                add("commodi"),
                                                add("eveniet"),
                                                add("porro"),
                                                add("tempore"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("modi"),
                                                add("voluptates"),
                                                add("fugit"),
                                            }};
                                            weight = 2593.77;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eligendi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "esse";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "sint";
                                                        port = "repellat";
                                                        project = "a";
                                                        region = "animi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "maiores";
                                            rrdatas = new String[]{{
                                                add("nulla"),
                                                add("deserunt"),
                                                add("corporis"),
                                                add("velit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("enim"),
                                                add("officia"),
                                                add("saepe"),
                                                add("eum"),
                                            }};
                                            weight = 9220.94;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officia";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quasi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "eius";
                                                        port = "quisquam";
                                                        project = "eos";
                                                        region = "nobis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "natus";
                                            rrdatas = new String[]{{
                                                add("quia"),
                                                add("magnam"),
                                                add("reprehenderit"),
                                                add("quod"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("corrupti"),
                                                add("amet"),
                                                add("molestiae"),
                                            }};
                                            weight = 2271.56;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "modi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "necessitatibus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "molestias";
                                                        port = "dolore";
                                                        project = "sunt";
                                                        region = "maiores";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "neque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "earum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ipsam";
                                                        port = "eaque";
                                                        project = "exercitationem";
                                                        region = "veniam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nihil";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "nisi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quis";
                                                        port = "quibusdam";
                                                        project = "nemo";
                                                        region = "suscipit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "pariatur";
                                            rrdatas = new String[]{{
                                                add("quidem"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("perferendis"),
                                                add("id"),
                                                add("sapiente"),
                                                add("sed"),
                                            }};
                                            weight = 8235.72;
                                        }}),
                                    }};
                                    kind = "repellat";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("architecto"),
                                add("adipisci"),
                                add("pariatur"),
                                add("harum"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("voluptatibus"),
                                add("iure"),
                            }};
                            ttl = 127087;
                            type = "minus";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "soluta";
                            name = "Jacob Wehner";
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
                                                        kind = "harum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "doloremque";
                                                        port = "expedita";
                                                        project = "corrupti";
                                                        region = "eaque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "deserunt";
                                            location = "aliquid";
                                            rrdatas = new String[]{{
                                                add("magni"),
                                                add("tempora"),
                                                add("possimus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("rerum"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "accusamus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "delectus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quo";
                                                        port = "quos";
                                                        project = "asperiores";
                                                        region = "voluptatum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "iste";
                                            location = "corporis";
                                            rrdatas = new String[]{{
                                                add("illo"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("doloribus"),
                                            }};
                                        }}),
                                    }};
                                    kind = "nostrum";
                                }};
                                kind = "at";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "pariatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "sapiente";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "quae";
                                                            port = "quos";
                                                            project = "aperiam";
                                                            region = "non";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "voluptates";
                                                location = "ad";
                                                rrdatas = new String[]{{
                                                    add("quisquam"),
                                                    add("quas"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("maiores"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aliquid";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "est";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "aliquid";
                                                            port = "consectetur";
                                                            project = "cumque";
                                                            region = "rem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "voluptatum";
                                                location = "ducimus";
                                                rrdatas = new String[]{{
                                                    add("recusandae"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("blanditiis"),
                                                    add("numquam"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "rerum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "tenetur";
                                                            port = "autem";
                                                            project = "quidem";
                                                            region = "totam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "porro";
                                                location = "deserunt";
                                                rrdatas = new String[]{{
                                                    add("nihil"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("animi"),
                                                    add("commodi"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fuga";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "dolore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "aliquam";
                                                            port = "iste";
                                                            project = "ullam";
                                                            region = "eligendi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "placeat";
                                                location = "voluptas";
                                                rrdatas = new String[]{{
                                                    add("unde"),
                                                    add("illo"),
                                                    add("nihil"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("libero"),
                                                }};
                                            }}),
                                        }};
                                        kind = "ipsam";
                                    }};
                                    kind = "quasi";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "dicta";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "facere";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "beatae";
                                                port = "cumque";
                                                project = "delectus";
                                                region = "labore";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "expedita";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "rem";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "officiis";
                                                port = "cum";
                                                project = "pariatur";
                                                region = "sapiente";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quo";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "quod";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "porro";
                                                port = "id";
                                                project = "excepturi";
                                                region = "occaecati";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "libero";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "esse";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "maxime";
                                                port = "accusantium";
                                                project = "soluta";
                                                region = "fugit";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 8662.92;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "veritatis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "laudantium";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "dolor";
                                                        port = "voluptates";
                                                        project = "tempora";
                                                        region = "magni";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rerum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "voluptatem";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "at";
                                                        port = "eum";
                                                        project = "reprehenderit";
                                                        region = "voluptatum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "blanditiis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "atque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "deserunt";
                                                        port = "atque";
                                                        project = "nostrum";
                                                        region = "atque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "architecto";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "enim";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "magni";
                                                        port = "quae";
                                                        project = "quas";
                                                        region = "placeat";
                                                    }}),
                                                }};
                                            }};
                                            kind = "enim";
                                            rrdatas = new String[]{{
                                                add("sapiente"),
                                                add("saepe"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("officia"),
                                                add("natus"),
                                                add("cumque"),
                                                add("natus"),
                                            }};
                                            weight = 3125.11;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quia";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "mollitia";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quis";
                                                        port = "enim";
                                                        project = "eum";
                                                        region = "nemo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "illum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "sit";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "minus";
                                                        port = "asperiores";
                                                        project = "recusandae";
                                                        region = "voluptates";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "praesentium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "fugit";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "aliquid";
                                                        port = "necessitatibus";
                                                        project = "sed";
                                                        region = "deleniti";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "delectus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "aliquam";
                                                        port = "deserunt";
                                                        project = "modi";
                                                        region = "sunt";
                                                    }}),
                                                }};
                                            }};
                                            kind = "impedit";
                                            rrdatas = new String[]{{
                                                add("voluptatum"),
                                                add("ipsa"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("dolorem"),
                                                add("repellat"),
                                                add("aspernatur"),
                                                add("inventore"),
                                            }};
                                            weight = 1932.36;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fuga";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "eaque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "architecto";
                                                        port = "aperiam";
                                                        project = "aspernatur";
                                                        region = "nulla";
                                                    }}),
                                                }};
                                            }};
                                            kind = "enim";
                                            rrdatas = new String[]{{
                                                add("magnam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("numquam"),
                                                add("optio"),
                                                add("nobis"),
                                                add("ex"),
                                            }};
                                            weight = 9980.23;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deleniti";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "hic";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "aliquid";
                                                        port = "sed";
                                                        project = "beatae";
                                                        region = "similique";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ea";
                                            rrdatas = new String[]{{
                                                add("dolore"),
                                                add("tenetur"),
                                                add("dignissimos"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("animi"),
                                                add("laudantium"),
                                            }};
                                            weight = 4610.5;
                                        }}),
                                    }};
                                    kind = "eveniet";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("velit"),
                                add("officiis"),
                                add("eius"),
                                add("rerum"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("dignissimos"),
                                add("ipsam"),
                                add("explicabo"),
                                add("impedit"),
                            }};
                            ttl = 397014;
                            type = "quis";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "facilis";
                            name = "Ms. Leslie Hagenes";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "libero";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "illo";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quos";
                                                        port = "temporibus";
                                                        project = "sint";
                                                        region = "iusto";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "enim";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "aperiam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "laudantium";
                                                        port = "tempora";
                                                        project = "quae";
                                                        region = "omnis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "illum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "tenetur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "modi";
                                                        port = "earum";
                                                        project = "architecto";
                                                        region = "aliquam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "labore";
                                            location = "maiores";
                                            rrdatas = new String[]{{
                                                add("saepe"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("esse"),
                                            }};
                                        }}),
                                    }};
                                    kind = "debitis";
                                }};
                                kind = "facere";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aliquam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "deserunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "reiciendis";
                                                            port = "sequi";
                                                            project = "porro";
                                                            region = "laborum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nobis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "omnis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ipsam";
                                                            port = "officia";
                                                            project = "cupiditate";
                                                            region = "reprehenderit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quia";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "accusantium";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nisi";
                                                            port = "molestiae";
                                                            project = "quia";
                                                            region = "laudantium";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sed";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "iusto";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "eos";
                                                            port = "repellendus";
                                                            project = "nesciunt";
                                                            region = "ipsa";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "sint";
                                                location = "dolore";
                                                rrdatas = new String[]{{
                                                    add("accusantium"),
                                                    add("distinctio"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quam"),
                                                    add("est"),
                                                    add("aliquam"),
                                                    add("delectus"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "quod";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "voluptas";
                                                            port = "non";
                                                            project = "ullam";
                                                            region = "laborum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptas";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "animi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "corporis";
                                                            port = "non";
                                                            project = "necessitatibus";
                                                            region = "distinctio";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "maiores";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "voluptatem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "sequi";
                                                            port = "sunt";
                                                            project = "vitae";
                                                            region = "voluptatibus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "doloremque";
                                                location = "sed";
                                                rrdatas = new String[]{{
                                                    add("rerum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nostrum"),
                                                    add("temporibus"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolor";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "dignissimos";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "itaque";
                                                            port = "vitae";
                                                            project = "est";
                                                            region = "accusantium";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quod";
                                                location = "minus";
                                                rrdatas = new String[]{{
                                                    add("possimus"),
                                                    add("maiores"),
                                                    add("odio"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("sapiente"),
                                                    add("aperiam"),
                                                    add("similique"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "provident";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "repellendus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "alias";
                                                            port = "impedit";
                                                            project = "sequi";
                                                            region = "commodi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "labore";
                                                location = "expedita";
                                                rrdatas = new String[]{{
                                                    add("quisquam"),
                                                    add("sunt"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nulla"),
                                                    add("maiores"),
                                                }};
                                            }}),
                                        }};
                                        kind = "distinctio";
                                    }};
                                    kind = "mollitia";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "accusamus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "quas";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "cum";
                                                port = "dicta";
                                                project = "impedit";
                                                region = "tempora";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "eveniet";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "sed";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "quas";
                                                port = "impedit";
                                                project = "vel";
                                                region = "eligendi";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "recusandae";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "beatae";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "maiores";
                                                port = "itaque";
                                                project = "vero";
                                                region = "quidem";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "illo";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "dignissimos";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "distinctio";
                                                port = "possimus";
                                                project = "cum";
                                                region = "suscipit";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 9064.95;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nihil";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ipsum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "laudantium";
                                                        port = "rerum";
                                                        project = "deserunt";
                                                        region = "odit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ad";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "beatae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "esse";
                                                        port = "magnam";
                                                        project = "odio";
                                                        region = "nulla";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "impedit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "illo";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "laborum";
                                                        port = "illum";
                                                        project = "fugit";
                                                        region = "maxime";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolorum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "nostrum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quibusdam";
                                                        port = "commodi";
                                                        project = "esse";
                                                        region = "explicabo";
                                                    }}),
                                                }};
                                            }};
                                            kind = "consectetur";
                                            rrdatas = new String[]{{
                                                add("optio"),
                                                add("ipsa"),
                                                add("maiores"),
                                                add("exercitationem"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("repudiandae"),
                                                add("aspernatur"),
                                                add("sapiente"),
                                            }};
                                            weight = 2043.73;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "suscipit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "ducimus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "perferendis";
                                                        port = "laudantium";
                                                        project = "iusto";
                                                        region = "corrupti";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "iure";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quaerat";
                                                        port = "amet";
                                                        project = "sapiente";
                                                        region = "corporis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "est";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "quisquam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "laudantium";
                                                        port = "nam";
                                                        project = "nemo";
                                                        region = "enim";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsam";
                                            rrdatas = new String[]{{
                                                add("tempora"),
                                                add("perferendis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("doloremque"),
                                                add("fugiat"),
                                                add("numquam"),
                                            }};
                                            weight = 392.02;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nobis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "porro";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "nisi";
                                                        port = "cumque";
                                                        project = "soluta";
                                                        region = "fugiat";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laboriosam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "enim";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "consectetur";
                                                        port = "necessitatibus";
                                                        project = "maxime";
                                                        region = "cupiditate";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "adipisci";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "magnam";
                                                        port = "repellat";
                                                        project = "omnis";
                                                        region = "explicabo";
                                                    }}),
                                                }};
                                            }};
                                            kind = "vel";
                                            rrdatas = new String[]{{
                                                add("id"),
                                                add("possimus"),
                                                add("fugit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("nostrum"),
                                                add("sequi"),
                                            }};
                                            weight = 5293.1;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "error";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "tempora";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "eius";
                                                        port = "expedita";
                                                        project = "aperiam";
                                                        region = "voluptates";
                                                    }}),
                                                }};
                                            }};
                                            kind = "possimus";
                                            rrdatas = new String[]{{
                                                add("voluptatem"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("corporis"),
                                                add("ea"),
                                                add("eos"),
                                                add("aliquam"),
                                            }};
                                            weight = 5017.68;
                                        }}),
                                    }};
                                    kind = "hic";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("asperiores"),
                                add("autem"),
                                add("nesciunt"),
                                add("cupiditate"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("provident"),
                                add("beatae"),
                                add("ipsa"),
                            }};
                            ttl = 650914;
                            type = "nam";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "assumenda";
                            name = "Grant Rice";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nisi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "provident";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "accusamus";
                                                        port = "ab";
                                                        project = "itaque";
                                                        region = "quisquam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eaque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "qui";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "vitae";
                                                        port = "quidem";
                                                        project = "sequi";
                                                        region = "amet";
                                                    }}),
                                                }};
                                            }};
                                            kind = "exercitationem";
                                            location = "illum";
                                            rrdatas = new String[]{{
                                                add("unde"),
                                                add("similique"),
                                                add("eligendi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("amet"),
                                                add("debitis"),
                                                add("nobis"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "temporibus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "atque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "sit";
                                                        port = "quo";
                                                        project = "veniam";
                                                        region = "aliquam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "provident";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "earum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ipsum";
                                                        port = "alias";
                                                        project = "doloremque";
                                                        region = "tempora";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "perspiciatis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "atque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "ex";
                                                        port = "architecto";
                                                        project = "a";
                                                        region = "laborum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "veritatis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "a";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "accusantium";
                                                        port = "commodi";
                                                        project = "atque";
                                                        region = "totam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "tenetur";
                                            location = "voluptate";
                                            rrdatas = new String[]{{
                                                add("quod"),
                                                add("vitae"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("reiciendis"),
                                                add("quod"),
                                                add("voluptate"),
                                                add("inventore"),
                                            }};
                                        }}),
                                    }};
                                    kind = "facere";
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
                                                            ipAddress = "ex";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "maiores";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "animi";
                                                            port = "sequi";
                                                            project = "eligendi";
                                                            region = "voluptatum";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "perferendis";
                                                location = "laborum";
                                                rrdatas = new String[]{{
                                                    add("nihil"),
                                                    add("tenetur"),
                                                    add("sapiente"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("adipisci"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "optio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "at";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "molestias";
                                                            port = "ipsam";
                                                            project = "esse";
                                                            region = "laborum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "perspiciatis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "eum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quas";
                                                            port = "odio";
                                                            project = "commodi";
                                                            region = "porro";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "aliquid";
                                                location = "mollitia";
                                                rrdatas = new String[]{{
                                                    add("explicabo"),
                                                    add("et"),
                                                    add("nulla"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("natus"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "a";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "unde";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "facere";
                                                            port = "voluptas";
                                                            project = "doloribus";
                                                            region = "recusandae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quisquam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "dignissimos";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "provident";
                                                            port = "dolor";
                                                            project = "sint";
                                                            region = "aperiam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eaque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "laboriosam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "autem";
                                                            port = "assumenda";
                                                            project = "explicabo";
                                                            region = "fugiat";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "doloremque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "alias";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ullam";
                                                            port = "quis";
                                                            project = "velit";
                                                            region = "ratione";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quas";
                                                location = "maxime";
                                                rrdatas = new String[]{{
                                                    add("cumque"),
                                                    add("doloremque"),
                                                    add("totam"),
                                                    add("iure"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("est"),
                                                    add("fugit"),
                                                    add("veritatis"),
                                                    add("necessitatibus"),
                                                }};
                                            }}),
                                        }};
                                        kind = "iste";
                                    }};
                                    kind = "dicta";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "consequuntur";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "quidem";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "beatae";
                                                port = "sunt";
                                                project = "molestias";
                                                region = "beatae";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "autem";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "libero";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "necessitatibus";
                                                port = "ipsum";
                                                project = "impedit";
                                                region = "quos";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 8496.9;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "non";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "consequatur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "repellendus";
                                                        port = "commodi";
                                                        project = "quibusdam";
                                                        region = "consectetur";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptas";
                                            rrdatas = new String[]{{
                                                add("earum"),
                                                add("tenetur"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("dolore"),
                                                add("enim"),
                                                add("ullam"),
                                                add("perspiciatis"),
                                            }};
                                            weight = 37.09;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quibusdam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quia";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "neque";
                                                        port = "quibusdam";
                                                        project = "numquam";
                                                        region = "rem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officiis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "neque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quod";
                                                        port = "dolores";
                                                        project = "placeat";
                                                        region = "excepturi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "recusandae";
                                            rrdatas = new String[]{{
                                                add("dicta"),
                                                add("sapiente"),
                                                add("ipsum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("soluta"),
                                            }};
                                            weight = 8981.55;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "adipisci";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "aperiam";
                                                        port = "dolores";
                                                        project = "illum";
                                                        region = "iusto";
                                                    }}),
                                                }};
                                            }};
                                            kind = "magni";
                                            rrdatas = new String[]{{
                                                add("aliquid"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("voluptate"),
                                                add("vel"),
                                            }};
                                            weight = 3249.99;
                                        }}),
                                    }};
                                    kind = "sit";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("laboriosam"),
                                add("quaerat"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("rem"),
                            }};
                            ttl = 493579;
                            type = "doloremque";
                        }}),
                    }};
                    id = "d9d21f9a-d030-4c4e-8c11-a0836429068b";
                    isServing = false;
                    kind = "laudantium";
                    startTime = "ullam";
                    status = ChangeStatusEnum.PENDING;
                }};;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                clientOperationId = "corporis";
                fields = "accusamus";
                key = "iusto";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "neque";
                uploadProtocol = "quidem";
            }};            

            DnsChangesCreateResponse res = sdk.changes.dnsChangesCreate(req, new DnsChangesCreateSecurity() {{
                option1 = new DnsChangesCreateSecurityOption1("quisquam", "praesentium") {{
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

            DnsChangesGetRequest req = new DnsChangesGetRequest("tempora", "ipsam", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "est";
                clientOperationId = "amet";
                fields = "veritatis";
                key = "error";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "rerum";
                uploadProtocol = "dolorum";
            }};            

            DnsChangesGetResponse res = sdk.changes.dnsChangesGet(req, new DnsChangesGetSecurity() {{
                option1 = new DnsChangesGetSecurityOption1("quibusdam", "earum") {{
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

            DnsChangesListRequest req = new DnsChangesListRequest("excepturi", "numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.MEDIA;
                callback = "animi";
                fields = "voluptatum";
                key = "aliquid";
                maxResults = 469384L;
                oauthToken = "facilis";
                pageToken = "optio";
                prettyPrint = false;
                quotaUser = "incidunt";
                sortBy = DnsChangesListSortByEnum.CHANGE_SEQUENCE;
                sortOrder = "eos";
                uploadType = "magnam";
                uploadProtocol = "dolores";
            }};            

            DnsChangesListResponse res = sdk.changes.dnsChangesList(req, new DnsChangesListSecurity() {{
                option1 = new DnsChangesListSecurityOption1("aliquid", "eum") {{
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
