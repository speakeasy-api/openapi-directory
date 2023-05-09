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

            DnsChangesCreateRequest req = new DnsChangesCreateRequest("dolorem", "modi") {{
                dollarXgafv = XgafvEnum.ONE;
                change = new Change() {{
                    additions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "vero";
                            name = "Dr. Elvira Robel";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                }};
                                            }};
                                            kind = "veritatis";
                                            location = "quasi";
                                            rrdatas = new String[]{{
                                                add("pariatur"),
                                                add("libero"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("occaecati"),
                                                add("nemo"),
                                                add("aliquam"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "doloribus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "sint";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "hic";
                                                        port = "animi";
                                                        project = "quas";
                                                        region = "totam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestias";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "eaque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "architecto";
                                                        port = "quos";
                                                        project = "iste";
                                                        region = "assumenda";
                                                    }}),
                                                }};
                                            }};
                                            kind = "tempore";
                                            location = "libero";
                                            rrdatas = new String[]{{
                                                add("doloremque"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("impedit"),
                                                add("cum"),
                                                add("ipsum"),
                                                add("adipisci"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deserunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "libero";
                                                        port = "architecto";
                                                        project = "cupiditate";
                                                        region = "molestiae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eligendi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "non";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "itaque";
                                                        port = "sed";
                                                        project = "asperiores";
                                                        region = "veniam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequuntur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "laudantium";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "pariatur";
                                                        port = "amet";
                                                        project = "exercitationem";
                                                        region = "ab";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "velit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "tempore";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "voluptatibus";
                                                        port = "quaerat";
                                                        project = "blanditiis";
                                                        region = "distinctio";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nisi";
                                            location = "quis";
                                            rrdatas = new String[]{{
                                                add("libero"),
                                                add("minus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("facilis"),
                                                add("ipsum"),
                                                add("ad"),
                                                add("voluptatibus"),
                                            }};
                                        }}),
                                    }};
                                    kind = "voluptatibus";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "labore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "eos";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nostrum";
                                                        port = "neque";
                                                        project = "iusto";
                                                        region = "est";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "fugiat";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "officiis";
                                                        port = "ducimus";
                                                        project = "dolor";
                                                        region = "dicta";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "error";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "vitae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "esse";
                                                        port = "fugiat";
                                                        project = "ad";
                                                        region = "aspernatur";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "enim";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "iusto";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "libero";
                                                        port = "illo";
                                                        project = "ab";
                                                        region = "incidunt";
                                                    }}),
                                                }};
                                            }};
                                            kind = "accusamus";
                                            location = "saepe";
                                            rrdatas = new String[]{{
                                                add("veniam"),
                                                add("eos"),
                                                add("reiciendis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("reprehenderit"),
                                                add("praesentium"),
                                                add("nemo"),
                                                add("repellat"),
                                            }};
                                        }}),
                                    }};
                                    kind = "quisquam";
                                }};
                                kind = "sequi";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "illo";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "assumenda";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quisquam";
                                                            port = "provident";
                                                            project = "laudantium";
                                                            region = "repudiandae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "consequatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "aspernatur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "expedita";
                                                            port = "quas";
                                                            project = "provident";
                                                            region = "repudiandae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "rerum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "corporis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "similique";
                                                            port = "repellendus";
                                                            project = "iure";
                                                            region = "dolorem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "commodi";
                                                location = "impedit";
                                                rrdatas = new String[]{{
                                                    add("aut"),
                                                    add("voluptatem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quae"),
                                                    add("amet"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "praesentium";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "cum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quasi";
                                                            port = "dicta";
                                                            project = "laudantium";
                                                            region = "doloremque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "earum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "amet";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "dolorum";
                                                            port = "necessitatibus";
                                                            project = "provident";
                                                            region = "repudiandae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "consequatur";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "molestiae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "facilis";
                                                            port = "corrupti";
                                                            project = "aperiam";
                                                            region = "sint";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "accusamus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "totam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "voluptatem";
                                                            port = "velit";
                                                            project = "dolor";
                                                            region = "sunt";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "a";
                                                location = "dolor";
                                                rrdatas = new String[]{{
                                                    add("atque"),
                                                    add("beatae"),
                                                    add("at"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("minus"),
                                                    add("esse"),
                                                }};
                                            }}),
                                        }};
                                        kind = "voluptatem";
                                    }};
                                    kind = "perferendis";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ea";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "dignissimos";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "velit";
                                                port = "porro";
                                                project = "provident";
                                                region = "consectetur";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "eligendi";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "consectetur";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "natus";
                                                port = "temporibus";
                                                project = "officia";
                                                region = "amet";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "tenetur";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "quo";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "illum";
                                                port = "laborum";
                                                project = "dignissimos";
                                                region = "vero";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 1853.48;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "explicabo";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "exercitationem";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "non";
                                                        port = "ab";
                                                        project = "illo";
                                                        region = "hic";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deserunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "non";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "in";
                                                        port = "exercitationem";
                                                        project = "labore";
                                                        region = "numquam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repudiandae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "in";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "accusamus";
                                                        port = "rem";
                                                        project = "aperiam";
                                                        region = "odit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deleniti";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "voluptate";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "minima";
                                                        port = "libero";
                                                        project = "magnam";
                                                        region = "sit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "modi";
                                            rrdatas = new String[]{{
                                                add("nesciunt"),
                                                add("mollitia"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("fugiat"),
                                                add("nostrum"),
                                            }};
                                            weight = 4753.25;
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
                                                        ipAddress = "modi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "aut";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "odio";
                                                        port = "commodi";
                                                        project = "numquam";
                                                        region = "dolorum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "possimus";
                                            rrdatas = new String[]{{
                                                add("consectetur"),
                                                add("nesciunt"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("itaque"),
                                                add("minus"),
                                            }};
                                            weight = 1226.62;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iusto";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "et";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "amet";
                                                        port = "autem";
                                                        project = "fuga";
                                                        region = "alias";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quos";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "repellendus";
                                                        port = "veritatis";
                                                        project = "quae";
                                                        region = "eaque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "saepe";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "mollitia";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "officia";
                                                        port = "sed";
                                                        project = "voluptatem";
                                                        region = "alias";
                                                    }}),
                                                }};
                                            }};
                                            kind = "eveniet";
                                            rrdatas = new String[]{{
                                                add("voluptatem"),
                                                add("incidunt"),
                                                add("qui"),
                                                add("qui"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("harum"),
                                                add("explicabo"),
                                                add("beatae"),
                                                add("aliquid"),
                                            }};
                                            weight = 2646.49;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatibus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "officia";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "totam";
                                                        port = "sequi";
                                                        project = "aliquid";
                                                        region = "ea";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "impedit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "odit";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "reiciendis";
                                                        port = "repellat";
                                                        project = "nulla";
                                                        region = "laborum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "natus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "doloremque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "rerum";
                                                        port = "recusandae";
                                                        project = "voluptates";
                                                        region = "non";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ullam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "dicta";
                                                        port = "voluptatibus";
                                                        project = "eligendi";
                                                        region = "quae";
                                                    }}),
                                                }};
                                            }};
                                            kind = "officiis";
                                            rrdatas = new String[]{{
                                                add("architecto"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("optio"),
                                                add("rem"),
                                            }};
                                            weight = 170.6;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "reiciendis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "iste";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quos";
                                                        port = "ullam";
                                                        project = "dolore";
                                                        region = "modi";
                                                    }}),
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
                                    }};
                                    kind = "consequuntur";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("reprehenderit"),
                                add("distinctio"),
                                add("eius"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("rem"),
                            }};
                            ttl = 978154;
                            type = "accusantium";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "veniam";
                            name = "Luis Schumm";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
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
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quisquam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ducimus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "minima";
                                                        port = "architecto";
                                                        project = "qui";
                                                        region = "aliquid";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magni";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "adipisci";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "dolor";
                                                        port = "exercitationem";
                                                        project = "expedita";
                                                        region = "facilis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "impedit";
                                            location = "sit";
                                            rrdatas = new String[]{{
                                                add("culpa"),
                                                add("consequuntur"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("deserunt"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "veniam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "itaque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quisquam";
                                                        port = "enim";
                                                        project = "doloribus";
                                                        region = "assumenda";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officiis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "alias";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "ipsa";
                                                        port = "nobis";
                                                        project = "necessitatibus";
                                                        region = "quia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dicta";
                                            location = "vel";
                                            rrdatas = new String[]{{
                                                add("debitis"),
                                                add("ullam"),
                                                add("architecto"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("perferendis"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "provident";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "iure";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quod";
                                                        port = "nemo";
                                                        project = "recusandae";
                                                        region = "velit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "magnam";
                                            location = "dignissimos";
                                            rrdatas = new String[]{{
                                                add("sed"),
                                                add("odio"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("provident"),
                                                add("cum"),
                                                add("doloribus"),
                                            }};
                                        }}),
                                    }};
                                    kind = "facilis";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laboriosam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "modi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "hic";
                                                        port = "cum";
                                                        project = "aspernatur";
                                                        region = "libero";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "recusandae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "id";
                                                        port = "saepe";
                                                        project = "autem";
                                                        region = "quo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nesciunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "nemo";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "facilis";
                                                        port = "non";
                                                        project = "mollitia";
                                                        region = "assumenda";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "pariatur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "facere";
                                                        port = "laborum";
                                                        project = "eveniet";
                                                        region = "laborum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "incidunt";
                                            location = "maxime";
                                            rrdatas = new String[]{{
                                                add("alias"),
                                                add("suscipit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("molestias"),
                                                add("laborum"),
                                                add("est"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "labore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "perferendis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "aliquid";
                                                        port = "magnam";
                                                        project = "quaerat";
                                                        region = "eligendi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "hic";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "officiis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "nulla";
                                                        port = "error";
                                                        project = "mollitia";
                                                        region = "magnam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nostrum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "corrupti";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "facere";
                                                        port = "impedit";
                                                        project = "quasi";
                                                        region = "deserunt";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quod";
                                            location = "laboriosam";
                                            rrdatas = new String[]{{
                                                add("voluptatem"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("necessitatibus"),
                                                add("maxime"),
                                                add("consequatur"),
                                                add("eaque"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "similique";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "blanditiis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "magni";
                                                        port = "officiis";
                                                        project = "sed";
                                                        region = "necessitatibus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "impedit";
                                            location = "ipsa";
                                            rrdatas = new String[]{{
                                                add("a"),
                                                add("maiores"),
                                                add("laudantium"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("alias"),
                                                add("asperiores"),
                                                add("rem"),
                                                add("dicta"),
                                            }};
                                        }}),
                                    }};
                                    kind = "suscipit";
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
                                                            ipAddress = "eius";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "in";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "quasi";
                                                            port = "neque";
                                                            project = "vero";
                                                            region = "excepturi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "accusantium";
                                                location = "qui";
                                                rrdatas = new String[]{{
                                                    add("beatae"),
                                                    add("incidunt"),
                                                    add("dicta"),
                                                    add("odit"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("rerum"),
                                                    add("alias"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vel";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "id";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ex";
                                                            port = "quas";
                                                            project = "veritatis";
                                                            region = "ullam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "incidunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "magni";
                                                            port = "deserunt";
                                                            project = "delectus";
                                                            region = "omnis";
                                                        }}),
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
                                                    }};
                                                }};
                                                kind = "laudantium";
                                                location = "velit";
                                                rrdatas = new String[]{{
                                                    add("amet"),
                                                    add("nemo"),
                                                    add("ipsa"),
                                                    add("quisquam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quas"),
                                                    add("molestiae"),
                                                    add("aliquid"),
                                                    add("asperiores"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nobis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "accusantium";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "minus";
                                                            port = "commodi";
                                                            project = "eveniet";
                                                            region = "porro";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "tempore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "modi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "fugit";
                                                            port = "eius";
                                                            project = "sequi";
                                                            region = "eligendi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "asperiores";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "blanditiis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "repellat";
                                                            port = "a";
                                                            project = "animi";
                                                            region = "maiores";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "itaque";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "deserunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "velit";
                                                            port = "officiis";
                                                            project = "enim";
                                                            region = "officia";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "saepe";
                                                location = "eum";
                                                rrdatas = new String[]{{
                                                    add("accusantium"),
                                                    add("officia"),
                                                    add("impedit"),
                                                    add("quasi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("eius"),
                                                    add("quisquam"),
                                                    add("eos"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "natus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "quia";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "reprehenderit";
                                                            port = "quod";
                                                            project = "quos";
                                                            region = "corrupti";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "amet";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "amet";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "modi";
                                                            port = "perferendis";
                                                            project = "necessitatibus";
                                                            region = "architecto";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "molestias";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
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
                                        }};
                                        kind = "quis";
                                    }};
                                    kind = "quibusdam";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "suscipit";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "sit";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "repellendus";
                                                port = "perferendis";
                                                project = "id";
                                                region = "sapiente";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "sed";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "repellat";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "architecto";
                                                port = "adipisci";
                                                project = "pariatur";
                                                region = "harum";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 2942.66;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "explicabo";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "soluta";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "velit";
                                                        port = "earum";
                                                        project = "praesentium";
                                                        region = "error";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "non";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "mollitia";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "harum";
                                                        port = "cumque";
                                                        project = "doloremque";
                                                        region = "expedita";
                                                    }}),
                                                }};
                                            }};
                                            kind = "corrupti";
                                            rrdatas = new String[]{{
                                                add("deserunt"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("excepturi"),
                                                add("magni"),
                                            }};
                                            weight = 2736.77;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolor";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "sed";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "optio";
                                                        port = "delectus";
                                                        project = "minus";
                                                        region = "quo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quos";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "voluptatum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "corporis";
                                                        port = "accusantium";
                                                        project = "illo";
                                                        region = "aut";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "doloribus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "at";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "neque";
                                                        port = "pariatur";
                                                        project = "vel";
                                                        region = "sapiente";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "mollitia";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quos";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "non";
                                                        port = "voluptates";
                                                        project = "ad";
                                                        region = "aliquam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quisquam";
                                            rrdatas = new String[]{{
                                                add("consequuntur"),
                                                add("maiores"),
                                                add("inventore"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("laudantium"),
                                                add("est"),
                                            }};
                                            weight = 2213.29;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consectetur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "rem";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "ducimus";
                                                        port = "adipisci";
                                                        project = "recusandae";
                                                        region = "tempora";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "blanditiis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "sequi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "sit";
                                                        port = "rerum";
                                                        project = "veritatis";
                                                        region = "tenetur";
                                                    }}),
                                                }};
                                            }};
                                            kind = "autem";
                                            rrdatas = new String[]{{
                                                add("totam"),
                                                add("porro"),
                                                add("deserunt"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("nihil"),
                                            }};
                                            weight = 3740.62;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "commodi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "fuga";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "dolore";
                                                        port = "maxime";
                                                        project = "aliquam";
                                                        region = "iste";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ullam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "placeat";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "occaecati";
                                                        port = "unde";
                                                        project = "illo";
                                                        region = "nihil";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "inventore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "ipsam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "cumque";
                                                        port = "dicta";
                                                        project = "harum";
                                                        region = "facere";
                                                    }}),
                                                }};
                                            }};
                                            kind = "facilis";
                                            rrdatas = new String[]{{
                                                add("cumque"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("labore"),
                                                add("expedita"),
                                                add("corrupti"),
                                                add("rem"),
                                            }};
                                            weight = 5433.53;
                                        }}),
                                    }};
                                    kind = "officiis";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sapiente";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "incidunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "minus";
                                                        port = "porro";
                                                        project = "id";
                                                        region = "excepturi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "occaecati";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quo";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "hic";
                                                        port = "maxime";
                                                        project = "accusantium";
                                                        region = "soluta";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fugit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "eligendi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "veritatis";
                                                        port = "aut";
                                                        project = "laudantium";
                                                        region = "iusto";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolor";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "tempora";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "rerum";
                                                        port = "doloremque";
                                                        project = "voluptatem";
                                                        region = "eum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "at";
                                            rrdatas = new String[]{{
                                                add("reprehenderit"),
                                                add("voluptatum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("nihil"),
                                                add("atque"),
                                                add("rerum"),
                                            }};
                                            weight = 6455.44;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nostrum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "architecto";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "enim";
                                                        port = "rem";
                                                        project = "magni";
                                                        region = "quae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quas";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "enim";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "sapiente";
                                                        port = "saepe";
                                                        project = "delectus";
                                                        region = "officia";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "natus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "natus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "doloribus";
                                                        port = "quia";
                                                        project = "officiis";
                                                        region = "mollitia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "cumque";
                                            rrdatas = new String[]{{
                                                add("enim"),
                                                add("eum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("illum"),
                                                add("nesciunt"),
                                            }};
                                            weight = 223.31;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "minus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "recusandae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "praesentium";
                                                        port = "dicta";
                                                        project = "fugit";
                                                        region = "sit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aliquid";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "sed";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "sunt";
                                                        port = "nesciunt";
                                                        project = "delectus";
                                                        region = "laborum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aliquam";
                                            rrdatas = new String[]{{
                                                add("modi"),
                                                add("sunt"),
                                                add("impedit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("voluptatum"),
                                                add("ipsa"),
                                            }};
                                            weight = 8729.91;
                                        }}),
                                    }};
                                    kind = "dolorem";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("aspernatur"),
                                add("inventore"),
                                add("sequi"),
                                add("fugit"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("hic"),
                                add("eaque"),
                                add("dolorem"),
                            }};
                            ttl = 101854;
                            type = "aperiam";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "aspernatur";
                            name = "Bill Bins";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nobis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "repellat";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "deleniti";
                                                        port = "expedita";
                                                        project = "hic";
                                                        region = "excepturi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aliquid";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "beatae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "ea";
                                                        port = "animi";
                                                        project = "dolore";
                                                        region = "tenetur";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dignissimos";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "animi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "esse";
                                                        port = "eveniet";
                                                        project = "earum";
                                                        region = "velit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officiis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "rerum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "dignissimos";
                                                        port = "ipsam";
                                                        project = "explicabo";
                                                        region = "impedit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aliquid";
                                            location = "quis";
                                            rrdatas = new String[]{{
                                                add("ipsum"),
                                                add("ut"),
                                                add("quaerat"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("praesentium"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolor";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "libero";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "illo";
                                                        port = "minus";
                                                        project = "quos";
                                                        region = "temporibus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sint";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "enim";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "aperiam";
                                                        port = "voluptates";
                                                        project = "laudantium";
                                                        region = "tempora";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "illum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "tenetur";
                                                        port = "deleniti";
                                                        project = "modi";
                                                        region = "earum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "architecto";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "labore";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "sequi";
                                                        port = "saepe";
                                                        project = "consequatur";
                                                        region = "esse";
                                                    }}),
                                                }};
                                            }};
                                            kind = "debitis";
                                            location = "facere";
                                            rrdatas = new String[]{{
                                                add("cumque"),
                                                add("aliquam"),
                                                add("dolorum"),
                                                add("deserunt"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("reiciendis"),
                                                add("sequi"),
                                            }};
                                        }}),
                                    }};
                                    kind = "porro";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quibusdam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "aut";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "officia";
                                                        port = "cupiditate";
                                                        project = "reprehenderit";
                                                        region = "quia";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "necessitatibus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ad";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "molestiae";
                                                        port = "quia";
                                                        project = "laudantium";
                                                        region = "sed";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "expedita";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "repellendus";
                                                        port = "nesciunt";
                                                        project = "ipsa";
                                                        region = "sint";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dolore";
                                            location = "esse";
                                            rrdatas = new String[]{{
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
                                    }};
                                    kind = "nesciunt";
                                }};
                                kind = "provident";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "unde";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "impedit";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "commodi";
                                                            port = "labore";
                                                            project = "expedita";
                                                            region = "in";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quisquam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "enim";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "maiores";
                                                            port = "distinctio";
                                                            project = "mollitia";
                                                            region = "impedit";
                                                        }}),
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
                                                    }};
                                                }};
                                                kind = "recusandae";
                                                location = "ex";
                                                rrdatas = new String[]{{
                                                    add("veritatis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("itaque"),
                                                    add("vero"),
                                                    add("quidem"),
                                                    add("illo"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dignissimos";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "distinctio";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "cum";
                                                            port = "suscipit";
                                                            project = "saepe";
                                                            region = "earum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quod";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "quaerat";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "ducimus";
                                                            port = "laudantium";
                                                            project = "rerum";
                                                            region = "deserunt";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "odit";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "sequi";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "iusto";
                                                            port = "esse";
                                                            project = "magnam";
                                                            region = "odio";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nulla";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "cupiditate";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "exercitationem";
                                                            port = "laborum";
                                                            project = "illum";
                                                            region = "fugit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "maxime";
                                                location = "dolorum";
                                                rrdatas = new String[]{{
                                                    add("nostrum"),
                                                    add("illum"),
                                                    add("quibusdam"),
                                                    add("commodi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("explicabo"),
                                                    add("consectetur"),
                                                }};
                                            }}),
                                        }};
                                        kind = "temporibus";
                                    }};
                                    kind = "optio";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "maiores";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "culpa";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "aspernatur";
                                                port = "sapiente";
                                                project = "neque";
                                                region = "officia";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 3796.61;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "doloremque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "laudantium";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "corrupti";
                                                        port = "molestiae";
                                                        project = "quis";
                                                        region = "iure";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ab";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "amet";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "corporis";
                                                        port = "est";
                                                        project = "iure";
                                                        region = "quisquam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "provident";
                                            rrdatas = new String[]{{
                                                add("nam"),
                                                add("nemo"),
                                                add("enim"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("minima"),
                                                add("tempora"),
                                            }};
                                            weight = 196.91;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "doloremque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "numquam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "cum";
                                                        port = "nobis";
                                                        project = "similique";
                                                        region = "porro";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "impedit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "cumque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "fugiat";
                                                        port = "laboriosam";
                                                        project = "nam";
                                                        region = "enim";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "maiores";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "necessitatibus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "cupiditate";
                                                        port = "voluptatem";
                                                        project = "provident";
                                                        region = "adipisci";
                                                    }}),
                                                }};
                                            }};
                                            kind = "accusantium";
                                            rrdatas = new String[]{{
                                                add("repellat"),
                                                add("omnis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("vel"),
                                            }};
                                            weight = 7403.47;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "possimus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ipsam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "sequi";
                                                        port = "voluptatum";
                                                        project = "quasi";
                                                        region = "error";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nobis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "voluptate";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "expedita";
                                                        port = "aperiam";
                                                        project = "voluptates";
                                                        region = "possimus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fugit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "repudiandae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ea";
                                                        port = "eos";
                                                        project = "aliquam";
                                                        region = "blanditiis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "hic";
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
                                            weight = 6509.14;
                                        }}),
                                    }};
                                    kind = "nam";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fuga";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "commodi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "suscipit";
                                                        port = "voluptate";
                                                        project = "nisi";
                                                        region = "aliquid";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "provident";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "accusamus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "itaque";
                                                        port = "quisquam";
                                                        project = "eaque";
                                                        region = "alias";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "qui";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "vitae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "sequi";
                                                        port = "amet";
                                                        project = "exercitationem";
                                                        region = "illum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "praesentium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "similique";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "tempore";
                                                        port = "amet";
                                                        project = "debitis";
                                                        region = "nobis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "asperiores";
                                            rrdatas = new String[]{{
                                                add("id"),
                                                add("atque"),
                                                add("quibusdam"),
                                                add("sit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("veniam"),
                                                add("aliquam"),
                                                add("provident"),
                                                add("vero"),
                                            }};
                                            weight = 9380.94;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "doloremque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "perspiciatis";
                                                        port = "quam";
                                                        project = "atque";
                                                        region = "officia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ex";
                                            rrdatas = new String[]{{
                                                add("a"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("veritatis"),
                                                add("quod"),
                                                add("a"),
                                            }};
                                            weight = 1853.13;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "commodi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "totam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "voluptate";
                                                        port = "quam";
                                                        project = "quod";
                                                        region = "vitae";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sapiente";
                                            rrdatas = new String[]{{
                                                add("quod"),
                                                add("voluptate"),
                                                add("inventore"),
                                                add("facere"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("fuga"),
                                                add("ab"),
                                                add("ex"),
                                                add("consectetur"),
                                            }};
                                            weight = 9824.09;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "animi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "eligendi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "perferendis";
                                                        port = "laborum";
                                                        project = "omnis";
                                                        region = "nihil";
                                                    }}),
                                                }};
                                            }};
                                            kind = "tenetur";
                                            rrdatas = new String[]{{
                                                add("velit"),
                                                add("adipisci"),
                                                add("non"),
                                                add("optio"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("at"),
                                                add("tenetur"),
                                                add("molestias"),
                                                add("ipsam"),
                                            }};
                                            weight = 4562.22;
                                        }}),
                                    }};
                                    kind = "laborum";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("voluptates"),
                                add("eum"),
                                add("quasi"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("odio"),
                                add("commodi"),
                                add("porro"),
                            }};
                            ttl = 400470;
                            type = "mollitia";
                        }}),
                    }};
                    deletions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "explicabo";
                            name = "Christie Cummerata";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "unde";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "facere";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "doloribus";
                                                        port = "recusandae";
                                                        project = "quisquam";
                                                        region = "facere";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dignissimos";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "provident";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "sint";
                                                        port = "aperiam";
                                                        project = "eaque";
                                                        region = "eum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laboriosam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "autem";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "explicabo";
                                                        port = "fugiat";
                                                        project = "doloremque";
                                                        region = "voluptatem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "alias";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "ullam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "velit";
                                                        port = "ratione";
                                                        project = "quas";
                                                        region = "maxime";
                                                    }}),
                                                }};
                                            }};
                                            kind = "recusandae";
                                            location = "cumque";
                                            rrdatas = new String[]{{
                                                add("totam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("maiores"),
                                                add("est"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "veritatis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "iste";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ipsam";
                                                        port = "consequuntur";
                                                        project = "cumque";
                                                        region = "quidem";
                                                    }}),
                                                }};
                                            }};
                                            kind = "non";
                                            location = "beatae";
                                            rrdatas = new String[]{{
                                                add("molestias"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("autem"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "libero";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "necessitatibus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "impedit";
                                                        port = "quos";
                                                        project = "illum";
                                                        region = "distinctio";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quaerat";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "laudantium";
                                                        port = "repellendus";
                                                        project = "commodi";
                                                        region = "quibusdam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "consectetur";
                                            location = "voluptas";
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
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ex";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "dicta";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "commodi";
                                                        port = "neque";
                                                        project = "quibusdam";
                                                        region = "numquam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "rem";
                                            location = "officiis";
                                            rrdatas = new String[]{{
                                                add("neque"),
                                                add("corporis"),
                                                add("quod"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("placeat"),
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
                                                        ipAddress = "dicta";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "ipsum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "soluta";
                                                        port = "necessitatibus";
                                                        project = "sequi";
                                                        region = "recusandae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "labore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "magni";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "dolores";
                                                        port = "illum";
                                                        project = "iusto";
                                                        region = "magni";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "beatae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "ad";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "vel";
                                                        port = "minima";
                                                        project = "sit";
                                                        region = "vel";
                                                    }}),
                                                }};
                                            }};
                                            kind = "laboriosam";
                                            location = "quaerat";
                                            rrdatas = new String[]{{
                                                add("rem"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("doloremque"),
                                                add("assumenda"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facere";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "inventore";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "unde";
                                                        port = "deserunt";
                                                        project = "repellendus";
                                                        region = "consequatur";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "adipisci";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "optio";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "debitis";
                                                        port = "cumque";
                                                        project = "maxime";
                                                        region = "et";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "beatae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "consequatur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "ratione";
                                                        port = "iure";
                                                        project = "tempora";
                                                        region = "eos";
                                                    }}),
                                                }};
                                            }};
                                            kind = "natus";
                                            location = "voluptatem";
                                            rrdatas = new String[]{{
                                                add("laudantium"),
                                                add("facilis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ullam"),
                                                add("aut"),
                                                add("quia"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quaerat";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "accusamus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "sapiente";
                                                        port = "esse";
                                                        project = "neque";
                                                        region = "quidem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quisquam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "tempora";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "officiis";
                                                        port = "sequi";
                                                        project = "magni";
                                                        region = "voluptatem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "est";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "veritatis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "voluptatibus";
                                                        port = "numquam";
                                                        project = "rerum";
                                                        region = "dolorum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quibusdam";
                                            location = "earum";
                                            rrdatas = new String[]{{
                                                add("numquam"),
                                                add("molestiae"),
                                                add("impedit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("animi"),
                                                add("voluptatum"),
                                                add("aliquid"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facilis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "incidunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "magnam";
                                                        port = "dolores";
                                                        project = "aliquid";
                                                        region = "eum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vel";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quos";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "suscipit";
                                                        port = "quibusdam";
                                                        project = "fugiat";
                                                        region = "impedit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "culpa";
                                            location = "atque";
                                            rrdatas = new String[]{{
                                                add("maiores"),
                                                add("nemo"),
                                                add("illo"),
                                                add("doloribus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("expedita"),
                                                add("modi"),
                                                add("cumque"),
                                                add("ipsam"),
                                            }};
                                        }}),
                                    }};
                                    kind = "occaecati";
                                }};
                                kind = "ipsum";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quasi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "quo";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "mollitia";
                                                            port = "id";
                                                            project = "quibusdam";
                                                            region = "ipsa";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "accusamus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "quam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "delectus";
                                                            port = "saepe";
                                                            project = "facere";
                                                            region = "nobis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "at";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "aut";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "tenetur";
                                                            port = "incidunt";
                                                            project = "numquam";
                                                            region = "corrupti";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "similique";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "esse";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "iste";
                                                            port = "amet";
                                                            project = "occaecati";
                                                            region = "aut";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "impedit";
                                                location = "minima";
                                                rrdatas = new String[]{{
                                                    add("blanditiis"),
                                                    add("quas"),
                                                    add("voluptatem"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quas"),
                                                    add("ipsum"),
                                                    add("vero"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facilis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "error";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "a";
                                                            port = "consectetur";
                                                            project = "sapiente";
                                                            region = "voluptatibus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "assumenda";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "omnis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "odio";
                                                            port = "voluptatibus";
                                                            project = "aut";
                                                            region = "quam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "omnis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "asperiores";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "facere";
                                                            port = "neque";
                                                            project = "quis";
                                                            region = "in";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "sed";
                                                location = "non";
                                                rrdatas = new String[]{{
                                                    add("fugiat"),
                                                    add("soluta"),
                                                    add("ipsa"),
                                                    add("reiciendis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("vero"),
                                                    add("eos"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quasi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "praesentium";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "fugiat";
                                                            port = "enim";
                                                            project = "iure";
                                                            region = "laudantium";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "modi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "accusamus";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "repudiandae";
                                                            port = "quibusdam";
                                                            project = "praesentium";
                                                            region = "enim";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "animi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "quae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nostrum";
                                                            port = "eveniet";
                                                            project = "laboriosam";
                                                            region = "ratione";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "blanditiis";
                                                location = "quidem";
                                                rrdatas = new String[]{{
                                                    add("reiciendis"),
                                                    add("placeat"),
                                                    add("dolores"),
                                                    add("consequatur"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quia"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptas";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "laudantium";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "omnis";
                                                            port = "omnis";
                                                            project = "fugit";
                                                            region = "dolorem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quidem";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "debitis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "dolor";
                                                            port = "ad";
                                                            project = "atque";
                                                            region = "ut";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "asperiores";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "deserunt";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "et";
                                                            port = "eos";
                                                            project = "impedit";
                                                            region = "ex";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "praesentium";
                                                location = "natus";
                                                rrdatas = new String[]{{
                                                    add("tenetur"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("aspernatur"),
                                                    add("eligendi"),
                                                    add("repudiandae"),
                                                }};
                                            }}),
                                        }};
                                        kind = "dicta";
                                    }};
                                    kind = "inventore";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "iusto";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "voluptate";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "dolorem";
                                                port = "eaque";
                                                project = "exercitationem";
                                                region = "amet";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "voluptate";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "pariatur";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "a";
                                                port = "fuga";
                                                project = "totam";
                                                region = "cupiditate";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 8701;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "voluptates";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quis";
                                                        port = "commodi";
                                                        project = "vel";
                                                        region = "rem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aliquid";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "perspiciatis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "itaque";
                                                        port = "unde";
                                                        project = "cumque";
                                                        region = "dolor";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repellendus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "minus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "a";
                                                        port = "beatae";
                                                        project = "vitae";
                                                        region = "veritatis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "facere";
                                            rrdatas = new String[]{{
                                                add("laborum"),
                                                add("dicta"),
                                                add("voluptatem"),
                                                add("odit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("pariatur"),
                                                add("enim"),
                                            }};
                                            weight = 2542.88;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "est";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "facere";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "omnis";
                                                        port = "alias";
                                                        project = "sapiente";
                                                        region = "officiis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "expedita";
                                            rrdatas = new String[]{{
                                                add("vitae"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quas"),
                                                add("ipsa"),
                                            }};
                                            weight = 7181.87;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quod";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "sit";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "distinctio";
                                                        port = "distinctio";
                                                        project = "assumenda";
                                                        region = "illum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "soluta";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "laudantium";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "esse";
                                                        port = "doloremque";
                                                        project = "corrupti";
                                                        region = "reiciendis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facilis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "repudiandae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "natus";
                                                        port = "ab";
                                                        project = "officiis";
                                                        region = "eum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rerum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "ab";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "blanditiis";
                                                        port = "porro";
                                                        project = "labore";
                                                        region = "impedit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ut";
                                            rrdatas = new String[]{{
                                                add("ullam"),
                                                add("numquam"),
                                                add("enim"),
                                                add("cupiditate"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("itaque"),
                                                add("fuga"),
                                                add("consectetur"),
                                            }};
                                            weight = 2687.49;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "explicabo";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "ipsa";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "sint";
                                                        port = "nobis";
                                                        project = "qui";
                                                        region = "accusantium";
                                                    }}),
                                                }};
                                            }};
                                            kind = "consequatur";
                                            rrdatas = new String[]{{
                                                add("recusandae"),
                                                add("voluptate"),
                                                add("deleniti"),
                                                add("est"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("expedita"),
                                            }};
                                            weight = 8429.21;
                                        }}),
                                    }};
                                    kind = "quos";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "in";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "doloremque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "dicta";
                                                        port = "architecto";
                                                        project = "suscipit";
                                                        region = "eligendi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officiis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "fugit";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "possimus";
                                                        port = "quaerat";
                                                        project = "aut";
                                                        region = "natus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "esse";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "deserunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ipsa";
                                                        port = "debitis";
                                                        project = "iste";
                                                        region = "deserunt";
                                                    }}),
                                                }};
                                            }};
                                            kind = "hic";
                                            rrdatas = new String[]{{
                                                add("consequuntur"),
                                                add("ipsam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quia"),
                                                add("omnis"),
                                                add("dicta"),
                                            }};
                                            weight = 1851.16;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequatur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "consequatur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "voluptatum";
                                                        port = "velit";
                                                        project = "hic";
                                                        region = "ullam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "deserunt";
                                            rrdatas = new String[]{{
                                                add("distinctio"),
                                                add("iusto"),
                                                add("dignissimos"),
                                                add("provident"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("assumenda"),
                                                add("sunt"),
                                                add("odit"),
                                            }};
                                            weight = 8768.21;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "optio";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "repellat";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "magnam";
                                                        port = "perspiciatis";
                                                        project = "amet";
                                                        region = "corrupti";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "delectus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "porro";
                                                        port = "quaerat";
                                                        project = "magni";
                                                        region = "cumque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quos";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "commodi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "sed";
                                                        port = "minus";
                                                        project = "consequuntur";
                                                        region = "possimus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "delectus";
                                            rrdatas = new String[]{{
                                                add("aliquam"),
                                                add("eligendi"),
                                                add("hic"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("illo"),
                                                add("nobis"),
                                                add("esse"),
                                                add("nisi"),
                                            }};
                                            weight = 1296.19;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "alias";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quos";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "vitae";
                                                        port = "maiores";
                                                        project = "nam";
                                                        region = "architecto";
                                                    }}),
                                                }};
                                            }};
                                            kind = "rerum";
                                            rrdatas = new String[]{{
                                                add("eos"),
                                                add("dolorem"),
                                                add("hic"),
                                                add("repellendus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ab"),
                                                add("magnam"),
                                                add("pariatur"),
                                            }};
                                            weight = 7092.34;
                                        }}),
                                    }};
                                    kind = "autem";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("recusandae"),
                                add("nostrum"),
                                add("officia"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("laudantium"),
                                add("corporis"),
                            }};
                            ttl = 567241;
                            type = "natus";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "deleniti";
                            name = "Adam D'Amore";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "temporibus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "quae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "a";
                                                        port = "minus";
                                                        project = "sed";
                                                        region = "nam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quia";
                                            location = "iusto";
                                            rrdatas = new String[]{{
                                                add("deserunt"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("blanditiis"),
                                            }};
                                        }}),
                                    }};
                                    kind = "sint";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "rem";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "non";
                                                        port = "recusandae";
                                                        project = "omnis";
                                                        region = "ipsa";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aliquam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "occaecati";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "magni";
                                                        port = "consequuntur";
                                                        project = "consequuntur";
                                                        region = "eius";
                                                    }}),
                                                }};
                                            }};
                                            kind = "commodi";
                                            location = "ipsam";
                                            rrdatas = new String[]{{
                                                add("cupiditate"),
                                                add("modi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("explicabo"),
                                                add("modi"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odio";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "voluptatum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "delectus";
                                                        port = "quam";
                                                        project = "dolorum";
                                                        region = "libero";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ratione";
                                            location = "molestiae";
                                            rrdatas = new String[]{{
                                                add("saepe"),
                                                add("maiores"),
                                                add("accusantium"),
                                                add("sed"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("consequuntur"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vitae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "labore";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quidem";
                                                        port = "exercitationem";
                                                        project = "veniam";
                                                        region = "modi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quasi";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "similique";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quo";
                                                        port = "suscipit";
                                                        project = "ex";
                                                        region = "sint";
                                                    }}),
                                                }};
                                            }};
                                            kind = "est";
                                            location = "doloribus";
                                            rrdatas = new String[]{{
                                                add("alias"),
                                                add("deserunt"),
                                                add("fugit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quo"),
                                                add("molestiae"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facere";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "cupiditate";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quasi";
                                                        port = "maiores";
                                                        project = "voluptatem";
                                                        region = "aliquid";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laudantium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "corrupti";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "facere";
                                                        port = "ea";
                                                        project = "libero";
                                                        region = "nam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "amet";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "minus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "similique";
                                                        port = "fuga";
                                                        project = "consectetur";
                                                        region = "labore";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laudantium";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "adipisci";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nam";
                                                        port = "voluptatibus";
                                                        project = "magnam";
                                                        region = "aperiam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ducimus";
                                            location = "itaque";
                                            rrdatas = new String[]{{
                                                add("numquam"),
                                                add("doloribus"),
                                                add("eligendi"),
                                                add("sapiente"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("impedit"),
                                            }};
                                        }}),
                                    }};
                                    kind = "numquam";
                                }};
                                kind = "aspernatur";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "vitae";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "nisi";
                                                            port = "consequuntur";
                                                            project = "voluptas";
                                                            region = "ratione";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "excepturi";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "est";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quibusdam";
                                                            port = "impedit";
                                                            project = "ducimus";
                                                            region = "nisi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nisi";
                                                location = "dolor";
                                                rrdatas = new String[]{{
                                                    add("dolore"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("maxime"),
                                                    add("expedita"),
                                                    add("accusantium"),
                                                    add("ea"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "totam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "est";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "consequuntur";
                                                            port = "repellendus";
                                                            project = "sit";
                                                            region = "dolores";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "enim";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "perspiciatis";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "odio";
                                                            port = "alias";
                                                            project = "quidem";
                                                            region = "deleniti";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "possimus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "odio";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "aspernatur";
                                                            port = "at";
                                                            project = "illum";
                                                            region = "praesentium";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sint";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "cum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "facilis";
                                                            port = "placeat";
                                                            project = "reiciendis";
                                                            region = "dolores";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolore";
                                                location = "pariatur";
                                                rrdatas = new String[]{{
                                                    add("cupiditate"),
                                                    add("nemo"),
                                                    add("natus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("provident"),
                                                    add("amet"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nostrum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "tenetur";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "dolore";
                                                            port = "ullam";
                                                            project = "velit";
                                                            region = "adipisci";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "cupiditate";
                                                location = "occaecati";
                                                rrdatas = new String[]{{
                                                    add("fugiat"),
                                                    add("molestiae"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("repellendus"),
                                                    add("saepe"),
                                                    add("amet"),
                                                }};
                                            }}),
                                        }};
                                        kind = "distinctio";
                                    }};
                                    kind = "vel";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "iste";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "corrupti";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "voluptatibus";
                                                port = "ullam";
                                                project = "dolorum";
                                                region = "soluta";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "cum";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "delectus";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "commodi";
                                                port = "fugit";
                                                project = "ullam";
                                                region = "ullam";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "doloremque";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "qui";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "adipisci";
                                                port = "totam";
                                                project = "qui";
                                                region = "deserunt";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "eligendi";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "deleniti";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "est";
                                                port = "reiciendis";
                                                project = "possimus";
                                                region = "odit";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 2307.74;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facilis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "deserunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ipsam";
                                                        port = "voluptatem";
                                                        project = "illo";
                                                        region = "iure";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "incidunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "asperiores";
                                                        port = "veniam";
                                                        project = "quidem";
                                                        region = "asperiores";
                                                    }}),
                                                }};
                                            }};
                                            kind = "eum";
                                            rrdatas = new String[]{{
                                                add("repudiandae"),
                                                add("nemo"),
                                                add("molestias"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("expedita"),
                                            }};
                                            weight = 7878.5;
                                        }}),
                                    }};
                                    kind = "praesentium";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repudiandae";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "ipsum";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "vitae";
                                                        port = "fugit";
                                                        project = "nam";
                                                        region = "ex";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "neque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "eos";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ad";
                                                        port = "a";
                                                        project = "facere";
                                                        region = "id";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "atque";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "aperiam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quam";
                                                        port = "modi";
                                                        project = "fuga";
                                                        region = "iure";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deleniti";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "sint";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "dolor";
                                                        port = "ad";
                                                        project = "illum";
                                                        region = "sit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "molestias";
                                            rrdatas = new String[]{{
                                                add("expedita"),
                                                add("voluptas"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ea"),
                                                add("vel"),
                                                add("delectus"),
                                                add("accusamus"),
                                            }};
                                            weight = 9700.97;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sed";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "voluptates";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "maiores";
                                                        port = "quaerat";
                                                        project = "numquam";
                                                        region = "non";
                                                    }}),
                                                }};
                                            }};
                                            kind = "cum";
                                            rrdatas = new String[]{{
                                                add("dolores"),
                                                add("enim"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("libero"),
                                                add("omnis"),
                                            }};
                                            weight = 5691.96;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quisquam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "repellendus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "quibusdam";
                                                        port = "est";
                                                        project = "commodi";
                                                        region = "similique";
                                                    }}),
                                                }};
                                            }};
                                            kind = "autem";
                                            rrdatas = new String[]{{
                                                add("recusandae"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("id"),
                                                add("odit"),
                                                add("inventore"),
                                                add("iste"),
                                            }};
                                            weight = 5421.87;
                                        }}),
                                    }};
                                    kind = "explicabo";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("atque"),
                                add("doloribus"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("aut"),
                                add("similique"),
                                add("iste"),
                                add("eveniet"),
                            }};
                            ttl = 723623;
                            type = "animi";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "labore";
                            name = "Shari Konopelski";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "perferendis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "excepturi";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "dolore";
                                                        port = "voluptatem";
                                                        project = "illum";
                                                        region = "laboriosam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "culpa";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "atque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "vitae";
                                                        port = "quisquam";
                                                        project = "atque";
                                                        region = "nihil";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "culpa";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "a";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "cupiditate";
                                                        port = "suscipit";
                                                        project = "reiciendis";
                                                        region = "repellendus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "delectus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "mollitia";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "praesentium";
                                                        port = "neque";
                                                        project = "quam";
                                                        region = "animi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "debitis";
                                            location = "voluptatum";
                                            rrdatas = new String[]{{
                                                add("quisquam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("cumque"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sint";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "occaecati";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "tempore";
                                                        port = "officia";
                                                        project = "iste";
                                                        region = "unde";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quas";
                                            location = "laboriosam";
                                            rrdatas = new String[]{{
                                                add("voluptatum"),
                                                add("sapiente"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("dolor"),
                                                add("hic"),
                                                add("iure"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "autem";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "cupiditate";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "fuga";
                                                        port = "a";
                                                        project = "dolor";
                                                        region = "voluptatum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestias";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "repudiandae";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "consectetur";
                                                        port = "autem";
                                                        project = "vitae";
                                                        region = "numquam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "incidunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quos";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "voluptate";
                                                        port = "error";
                                                        project = "reprehenderit";
                                                        region = "reprehenderit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "animi";
                                            location = "consequatur";
                                            rrdatas = new String[]{{
                                                add("delectus"),
                                                add("qui"),
                                                add("delectus"),
                                                add("exercitationem"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("laboriosam"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sed";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "debitis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "itaque";
                                                        port = "eveniet";
                                                        project = "repellat";
                                                        region = "cupiditate";
                                                    }}),
                                                }};
                                            }};
                                            kind = "adipisci";
                                            location = "aliquam";
                                            rrdatas = new String[]{{
                                                add("veniam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("necessitatibus"),
                                            }};
                                        }}),
                                    }};
                                    kind = "possimus";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "explicabo";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "non";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "incidunt";
                                                        port = "quod";
                                                        project = "sunt";
                                                        region = "ullam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "voluptates";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "est";
                                                        port = "in";
                                                        project = "illo";
                                                        region = "voluptate";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequatur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "incidunt";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nemo";
                                                        port = "est";
                                                        project = "quo";
                                                        region = "maxime";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "delectus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "laboriosam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "fuga";
                                                        port = "officia";
                                                        project = "repellat";
                                                        region = "cupiditate";
                                                    }}),
                                                }};
                                            }};
                                            kind = "soluta";
                                            location = "tempore";
                                            rrdatas = new String[]{{
                                                add("fugiat"),
                                                add("inventore"),
                                                add("atque"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("sapiente"),
                                                add("voluptates"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nesciunt";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "quibusdam";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "quidem";
                                                        port = "delectus";
                                                        project = "nemo";
                                                        region = "cumque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatum";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "atque";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "expedita";
                                                        port = "rerum";
                                                        project = "totam";
                                                        region = "quod";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aspernatur";
                                            location = "eaque";
                                            rrdatas = new String[]{{
                                                add("nam"),
                                                add("ex"),
                                                add("odio"),
                                                add("delectus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ut"),
                                                add("distinctio"),
                                                add("eius"),
                                                add("eos"),
                                            }};
                                        }}),
                                    }};
                                    kind = "veniam";
                                }};
                                kind = "repudiandae";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "debitis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "eos";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "incidunt";
                                                            port = "porro";
                                                            project = "occaecati";
                                                            region = "reiciendis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptate";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "in";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "possimus";
                                                            port = "tenetur";
                                                            project = "recusandae";
                                                            region = "expedita";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iusto";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "harum";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "quod";
                                                            port = "ratione";
                                                            project = "totam";
                                                            region = "vero";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolore";
                                                location = "nam";
                                                rrdatas = new String[]{{
                                                    add("maiores"),
                                                    add("cupiditate"),
                                                    add("illo"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("enim"),
                                                    add("eaque"),
                                                    add("ex"),
                                                    add("eveniet"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "deleniti";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "aut";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "nostrum";
                                                            port = "tempora";
                                                            project = "nam";
                                                            region = "numquam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "odio";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "maiores";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "autem";
                                                            port = "earum";
                                                            project = "minima";
                                                            region = "ex";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "possimus";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                            kind = "corrupti";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "fuga";
                                                            port = "sequi";
                                                            project = "maxime";
                                                            region = "numquam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "laborum";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "autem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "sunt";
                                                            port = "rerum";
                                                            project = "occaecati";
                                                            region = "provident";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "necessitatibus";
                                                location = "fugit";
                                                rrdatas = new String[]{{
                                                    add("optio"),
                                                    add("eveniet"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("blanditiis"),
                                                    add("a"),
                                                    add("natus"),
                                                    add("sapiente"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facilis";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "dolore";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "accusantium";
                                                            port = "maiores";
                                                            project = "nisi";
                                                            region = "velit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "tempore";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "hic";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                            networkUrl = "vitae";
                                                            port = "iusto";
                                                            project = "atque";
                                                            region = "velit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "molestiae";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                            kind = "aperiam";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "mollitia";
                                                            port = "asperiores";
                                                            project = "at";
                                                            region = "quibusdam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quam";
                                                            ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                            kind = "rem";
                                                            loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                            networkUrl = "eos";
                                                            port = "labore";
                                                            project = "sunt";
                                                            region = "blanditiis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "iste";
                                                location = "accusamus";
                                                rrdatas = new String[]{{
                                                    add("incidunt"),
                                                    add("labore"),
                                                    add("blanditiis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("consectetur"),
                                                    add("sapiente"),
                                                }};
                                            }}),
                                        }};
                                        kind = "quis";
                                    }};
                                    kind = "accusantium";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "consectetur";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "architecto";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "possimus";
                                                port = "tempore";
                                                project = "asperiores";
                                                region = "quasi";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 1597.29;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "debitis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "veritatis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "magni";
                                                        port = "itaque";
                                                        project = "error";
                                                        region = "expedita";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "error";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "temporibus";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "earum";
                                                        port = "minima";
                                                        project = "odit";
                                                        region = "odit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eius";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "vel";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "alias";
                                                        port = "itaque";
                                                        project = "ab";
                                                        region = "sunt";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "amet";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "iusto";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "non";
                                                        port = "esse";
                                                        project = "vero";
                                                        region = "eligendi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "minima";
                                            rrdatas = new String[]{{
                                                add("recusandae"),
                                                add("architecto"),
                                                add("voluptatibus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("in"),
                                                add("repellat"),
                                            }};
                                            weight = 2271.29;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolore";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "quo";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "tempora";
                                                        port = "libero";
                                                        project = "suscipit";
                                                        region = "illum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iusto";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "sint";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "repellat";
                                                        port = "sapiente";
                                                        project = "consectetur";
                                                        region = "eligendi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ullam";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "eius";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "corporis";
                                                        port = "perferendis";
                                                        project = "architecto";
                                                        region = "amet";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "corporis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "officiis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "magnam";
                                                        port = "maiores";
                                                        project = "ipsam";
                                                        region = "dicta";
                                                    }}),
                                                }};
                                            }};
                                            kind = "hic";
                                            rrdatas = new String[]{{
                                                add("libero"),
                                                add("consequatur"),
                                                add("totam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quo"),
                                                add("dolor"),
                                            }};
                                            weight = 1231.79;
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
                                                        ipAddress = "dicta";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "consectetur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "odit";
                                                        port = "incidunt";
                                                        project = "corporis";
                                                        region = "quaerat";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "suscipit";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                        kind = "tenetur";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "modi";
                                                        port = "corrupti";
                                                        project = "nihil";
                                                        region = "eius";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "placeat";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "facere";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "nobis";
                                                        port = "porro";
                                                        project = "labore";
                                                        region = "perspiciatis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ducimus";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "qui";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "ratione";
                                                        port = "saepe";
                                                        project = "iure";
                                                        region = "aliquid";
                                                    }}),
                                                }};
                                            }};
                                            kind = "cum";
                                            rrdatas = new String[]{{
                                                add("rem"),
                                                add("voluptatibus"),
                                                add("officiis"),
                                                add("corporis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("aut"),
                                                add("voluptatem"),
                                                add("libero"),
                                                add("excepturi"),
                                            }};
                                            weight = 4854.38;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officiis";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                        kind = "magni";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "velit";
                                                        port = "voluptatum";
                                                        project = "nihil";
                                                        region = "neque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aspernatur";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "corporis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                        networkUrl = "aut";
                                                        port = "impedit";
                                                        project = "quod";
                                                        region = "quo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "architecto";
                                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                        kind = "perspiciatis";
                                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                        networkUrl = "eius";
                                                        port = "aperiam";
                                                        project = "voluptatem";
                                                        region = "non";
                                                    }}),
                                                }};
                                            }};
                                            kind = "beatae";
                                            rrdatas = new String[]{{
                                                add("rerum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("debitis"),
                                            }};
                                            weight = 3391.18;
                                        }}),
                                    }};
                                    kind = "eaque";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("ut"),
                                add("delectus"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("ullam"),
                                add("maiores"),
                            }};
                            ttl = 894173;
                            type = "reprehenderit";
                        }}),
                    }};
                    id = "2dc4077d-0cc3-4f40-8efc-15ceb4d6e1ea";
                    isServing = false;
                    kind = "necessitatibus";
                    startTime = "voluptatem";
                    status = ChangeStatusEnum.DONE;
                }};;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "fuga";
                clientOperationId = "itaque";
                fields = "possimus";
                key = "tenetur";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "eligendi";
                uploadProtocol = "id";
            }};            

            DnsChangesCreateResponse res = sdk.changes.dnsChangesCreate(req, new DnsChangesCreateSecurity() {{
                option1 = new DnsChangesCreateSecurityOption1("distinctio", "corporis") {{
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

            DnsChangesGetRequest req = new DnsChangesGetRequest("quas", "soluta", "cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "et";
                alt = AltEnum.PROTO;
                callback = "unde";
                clientOperationId = "sed";
                fields = "suscipit";
                key = "facere";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "quaerat";
                uploadProtocol = "corrupti";
            }};            

            DnsChangesGetResponse res = sdk.changes.dnsChangesGet(req, new DnsChangesGetSecurity() {{
                option1 = new DnsChangesGetSecurityOption1("sint", "eius") {{
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

            DnsChangesListRequest req = new DnsChangesListRequest("vel", "quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "inventore";
                key = "optio";
                maxResults = 748656L;
                oauthToken = "recusandae";
                pageToken = "commodi";
                prettyPrint = false;
                quotaUser = "possimus";
                sortBy = DnsChangesListSortByEnum.CHANGE_SEQUENCE;
                sortOrder = "provident";
                uploadType = "veniam";
                uploadProtocol = "sit";
            }};            

            DnsChangesListResponse res = sdk.changes.dnsChangesList(req, new DnsChangesListSecurity() {{
                option1 = new DnsChangesListSecurityOption1("fugit", "a") {{
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
