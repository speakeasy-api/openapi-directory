# resourceRecordSets

### Available Operations

* [dnsResourceRecordSetsCreate](#dnsresourcerecordsetscreate) - Creates a new ResourceRecordSet.
* [dnsResourceRecordSetsDelete](#dnsresourcerecordsetsdelete) - Deletes a previously created ResourceRecordSet.
* [dnsResourceRecordSetsGet](#dnsresourcerecordsetsget) - Fetches the representation of an existing ResourceRecordSet.
* [dnsResourceRecordSetsList](#dnsresourcerecordsetslist) - Enumerates ResourceRecordSets that you have created but not yet deleted.
* [dnsResourceRecordSetsPatch](#dnsresourcerecordsetspatch) - Applies a partial update to an existing ResourceRecordSet.

## dnsResourceRecordSetsCreate

Creates a new ResourceRecordSet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsCreateRequest;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsCreateResponse;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsCreateSecurity;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsCreateSecurityOption2;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResourceRecordSetsCreateRequest req = new DnsResourceRecordSetsCreateRequest("quos", "atque") {{
                dollarXgafv = XgafvEnum.TWO;
                resourceRecordSet = new ResourceRecordSet() {{
                    kind = "sunt";
                    name = "Dan Kautzer";
                    routingPolicy = new RRSetRoutingPolicy() {{
                        geo = new RRSetRoutingPolicyGeoPolicy() {{
                            enableFencing = false;
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "culpa";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "laudantium";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "odit";
                                                port = "officiis";
                                                project = "mollitia";
                                                region = "libero";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "fugiat";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "et";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "eligendi";
                                                port = "nesciunt";
                                                project = "harum";
                                                region = "aperiam";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "pariatur";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "architecto";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "aliquam";
                                                port = "ut";
                                                project = "quidem";
                                                region = "doloribus";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "sit";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "tempore";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "nulla";
                                                port = "corrupti";
                                                project = "voluptate";
                                                region = "alias";
                                            }}),
                                        }};
                                    }};
                                    kind = "iure";
                                    location = "temporibus";
                                    rrdatas = new String[]{{
                                        add("ea"),
                                        add("alias"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("qui"),
                                        add("libero"),
                                        add("maiores"),
                                    }};
                                }}),
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "pariatur";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "modi";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "delectus";
                                                port = "delectus";
                                                project = "nemo";
                                                region = "at";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "magnam";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "sed";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "saepe";
                                                port = "labore";
                                                project = "doloribus";
                                                region = "facilis";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "minima";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "facilis";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "quis";
                                                port = "fugiat";
                                                project = "beatae";
                                                region = "dignissimos";
                                            }}),
                                        }};
                                    }};
                                    kind = "nisi";
                                    location = "consectetur";
                                    rrdatas = new String[]{{
                                        add("delectus"),
                                        add("sunt"),
                                        add("repudiandae"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("distinctio"),
                                        add("ducimus"),
                                        add("atque"),
                                        add("consectetur"),
                                    }};
                                }}),
                            }};
                            kind = "nemo";
                        }};;
                        geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                            enableFencing = false;
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "minus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "minima";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "rerum";
                                                port = "praesentium";
                                                project = "vel";
                                                region = "doloremque";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "delectus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "impedit";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "ullam";
                                                port = "praesentium";
                                                project = "perferendis";
                                                region = "soluta";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "animi";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "nesciunt";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "sunt";
                                                port = "aperiam";
                                                project = "itaque";
                                                region = "quaerat";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "repellat";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "tempora";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "magnam";
                                                port = "voluptate";
                                                project = "magni";
                                                region = "excepturi";
                                            }}),
                                        }};
                                    }};
                                    kind = "esse";
                                    location = "cumque";
                                    rrdatas = new String[]{{
                                        add("non"),
                                        add("rerum"),
                                        add("illo"),
                                        add("illum"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("amet"),
                                        add("expedita"),
                                        add("libero"),
                                        add("impedit"),
                                    }};
                                }}),
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "dolores";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "nihil";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "voluptate";
                                                port = "aliquid";
                                                project = "blanditiis";
                                                region = "labore";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "repudiandae";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "asperiores";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "voluptatem";
                                                port = "beatae";
                                                project = "qui";
                                                region = "laboriosam";
                                            }}),
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
                            }};
                            kind = "quisquam";
                        }};;
                        kind = "sint";
                        primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                            backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                enableFencing = false;
                                items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "et";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "reiciendis";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "itaque";
                                                    port = "iste";
                                                    project = "quod";
                                                    region = "quidem";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "temporibus";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "natus";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "repudiandae";
                                                    port = "earum";
                                                    project = "commodi";
                                                    region = "veniam";
                                                }}),
                                            }};
                                        }};
                                        kind = "debitis";
                                        location = "doloremque";
                                        rrdatas = new String[]{{
                                            add("aliquid"),
                                            add("porro"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("molestiae"),
                                            add("mollitia"),
                                            add("quidem"),
                                            add("delectus"),
                                        }};
                                    }}),
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "beatae";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "eveniet";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "ipsam";
                                                    port = "porro";
                                                    project = "molestiae";
                                                    region = "inventore";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "vel";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "dicta";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "non";
                                                    port = "dolore";
                                                    project = "soluta";
                                                    region = "occaecati";
                                                }}),
                                            }};
                                        }};
                                        kind = "sit";
                                        location = "asperiores";
                                        rrdatas = new String[]{{
                                            add("officiis"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("occaecati"),
                                        }};
                                    }}),
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "ab";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "possimus";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "a";
                                                    port = "cumque";
                                                    project = "explicabo";
                                                    region = "delectus";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "natus";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "fugit";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "vitae";
                                                    port = "consequatur";
                                                    project = "nemo";
                                                    region = "provident";
                                                }}),
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
                                            }};
                                        }};
                                        kind = "blanditiis";
                                        location = "magnam";
                                        rrdatas = new String[]{{
                                            add("fugiat"),
                                            add("laboriosam"),
                                            add("id"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("assumenda"),
                                            add("quaerat"),
                                            add("id"),
                                            add("eveniet"),
                                        }};
                                    }}),
                                }};
                                kind = "optio";
                            }};;
                            kind = "soluta";
                            primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                        ipAddress = "nemo";
                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                        kind = "esse";
                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                        networkUrl = "at";
                                        port = "excepturi";
                                        project = "eos";
                                        region = "odit";
                                    }}),
                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                        ipAddress = "quia";
                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                        kind = "excepturi";
                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                        networkUrl = "maiores";
                                        port = "exercitationem";
                                        project = "ducimus";
                                        region = "dolore";
                                    }}),
                                }};
                            }};;
                            trickleTraffic = 6152.06;
                        }};;
                        wrr = new RRSetRoutingPolicyWrrPolicy() {{
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "id";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "sapiente";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "aspernatur";
                                                port = "vero";
                                                project = "odio";
                                                region = "eum";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quasi";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "accusantium";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "id";
                                                port = "tempora";
                                                project = "pariatur";
                                                region = "labore";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quis";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "vero";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "dicta";
                                                port = "sit";
                                                project = "adipisci";
                                                region = "inventore";
                                            }}),
                                        }};
                                    }};
                                    kind = "saepe";
                                    rrdatas = new String[]{{
                                        add("praesentium"),
                                        add("perspiciatis"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("hic"),
                                        add("accusantium"),
                                        add("minus"),
                                    }};
                                    weight = 1283.9;
                                }}),
                            }};
                            kind = "accusantium";
                        }};;
                        wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "saepe";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "aspernatur";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "illum";
                                                port = "veniam";
                                                project = "exercitationem";
                                                region = "quod";
                                            }}),
                                        }};
                                    }};
                                    kind = "quod";
                                    rrdatas = new String[]{{
                                        add("nemo"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("modi"),
                                        add("similique"),
                                        add("quasi"),
                                    }};
                                    weight = 5164.82;
                                }}),
                            }};
                            kind = "ut";
                        }};;
                    }};;
                    rrdatas = new String[]{{
                        add("nihil"),
                        add("voluptas"),
                        add("facere"),
                        add("omnis"),
                    }};
                    signatureRrdatas = new String[]{{
                        add("vitae"),
                        add("reiciendis"),
                    }};
                    ttl = 766501;
                    type = "atque";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.JSON;
                callback = "eligendi";
                clientOperationId = "commodi";
                fields = "enim";
                key = "harum";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "in";
                uploadProtocol = "rerum";
            }};            

            DnsResourceRecordSetsCreateResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsCreate(req, new DnsResourceRecordSetsCreateSecurity() {{
                option1 = new DnsResourceRecordSetsCreateSecurityOption1("distinctio", "blanditiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourceRecordSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResourceRecordSetsDelete

Deletes a previously created ResourceRecordSet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsDeleteRequest;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsDeleteResponse;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsDeleteSecurity;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResourceRecordSetsDeleteRequest req = new DnsResourceRecordSetsDeleteRequest("saepe", "sit", "optio", "impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quas";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                clientOperationId = "quas";
                fields = "molestiae";
                key = "officiis";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "accusamus";
                uploadProtocol = "consequatur";
            }};            

            DnsResourceRecordSetsDeleteResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsDelete(req, new DnsResourceRecordSetsDeleteSecurity() {{
                option1 = new DnsResourceRecordSetsDeleteSecurityOption1("ut", "laborum") {{
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

## dnsResourceRecordSetsGet

Fetches the representation of an existing ResourceRecordSet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetRequest;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetResponse;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetSecurity;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetSecurityOption1;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetSecurityOption2;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetSecurityOption3;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResourceRecordSetsGetRequest req = new DnsResourceRecordSetsGetRequest("hic", "sed", "corrupti", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quibusdam";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                clientOperationId = "quidem";
                fields = "labore";
                key = "commodi";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "quasi";
                uploadProtocol = "quo";
            }};            

            DnsResourceRecordSetsGetResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsGet(req, new DnsResourceRecordSetsGetSecurity() {{
                option1 = new DnsResourceRecordSetsGetSecurityOption1("voluptatibus", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourceRecordSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResourceRecordSetsList

Enumerates ResourceRecordSets that you have created but not yet deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListRequest;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListResponse;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListSecurity;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListSecurityOption1;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListSecurityOption2;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListSecurityOption3;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResourceRecordSetsListRequest req = new DnsResourceRecordSetsListRequest("ea", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                alt = AltEnum.MEDIA;
                callback = "assumenda";
                fields = "culpa";
                key = "ipsa";
                maxResults = 78158L;
                name = "Mr. Janet Mueller";
                oauthToken = "unde";
                pageToken = "ex";
                prettyPrint = false;
                quotaUser = "quaerat";
                type = "aliquid";
                uploadType = "eum";
                uploadProtocol = "quaerat";
            }};            

            DnsResourceRecordSetsListResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsList(req, new DnsResourceRecordSetsListSecurity() {{
                option1 = new DnsResourceRecordSetsListSecurityOption1("enim", "cumque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourceRecordSetsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResourceRecordSetsPatch

Applies a partial update to an existing ResourceRecordSet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsPatchRequest;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsPatchResponse;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsPatchSecurity;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsPatchSecurityOption1;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsPatchSecurityOption2;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResourceRecordSetsPatchRequest req = new DnsResourceRecordSetsPatchRequest("ab", "quibusdam", "blanditiis", "et") {{
                dollarXgafv = XgafvEnum.TWO;
                resourceRecordSet = new ResourceRecordSet() {{
                    kind = "explicabo";
                    name = "Thomas Gusikowski";
                    routingPolicy = new RRSetRoutingPolicy() {{
                        geo = new RRSetRoutingPolicyGeoPolicy() {{
                            enableFencing = false;
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "iste";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "iusto";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "reiciendis";
                                                port = "a";
                                                project = "consequatur";
                                                region = "voluptates";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "dolorum";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "eos";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "vel";
                                                port = "placeat";
                                                project = "libero";
                                                region = "saepe";
                                            }}),
                                        }};
                                    }};
                                    kind = "ipsa";
                                    location = "dignissimos";
                                    rrdatas = new String[]{{
                                        add("harum"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("ab"),
                                        add("ex"),
                                        add("dolor"),
                                        add("officiis"),
                                    }};
                                }}),
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quam";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "harum";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "libero";
                                                port = "ipsa";
                                                project = "blanditiis";
                                                region = "aliquam";
                                            }}),
                                        }};
                                    }};
                                    kind = "vero";
                                    location = "dolorum";
                                    rrdatas = new String[]{{
                                        add("occaecati"),
                                        add("consequuntur"),
                                        add("veniam"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("repellendus"),
                                        add("eaque"),
                                    }};
                                }}),
                            }};
                            kind = "incidunt";
                        }};;
                        geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                            enableFencing = false;
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ipsa";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "incidunt";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "laborum";
                                                port = "in";
                                                project = "numquam";
                                                region = "quia";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "repellendus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "ut";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "cupiditate";
                                                port = "nisi";
                                                project = "placeat";
                                                region = "tempore";
                                            }}),
                                        }};
                                    }};
                                    kind = "facere";
                                    location = "earum";
                                    rrdatas = new String[]{{
                                        add("impedit"),
                                        add("reiciendis"),
                                        add("ex"),
                                        add("tempore"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("provident"),
                                        add("soluta"),
                                        add("maxime"),
                                    }};
                                }}),
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "dolores";
                                                port = "iste";
                                                project = "labore";
                                                region = "porro";
                                            }}),
                                        }};
                                    }};
                                    kind = "eaque";
                                    location = "ea";
                                    rrdatas = new String[]{{
                                        add("nobis"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("ea"),
                                    }};
                                }}),
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "et";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "quos";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "voluptate";
                                                port = "autem";
                                                project = "numquam";
                                                region = "voluptates";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "debitis";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "suscipit";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "doloremque";
                                                port = "porro";
                                                project = "suscipit";
                                                region = "temporibus";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "vel";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "nulla";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "quod";
                                                port = "in";
                                                project = "nesciunt";
                                                region = "temporibus";
                                            }}),
                                        }};
                                    }};
                                    kind = "temporibus";
                                    location = "eum";
                                    rrdatas = new String[]{{
                                        add("ut"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("dignissimos"),
                                        add("illo"),
                                    }};
                                }}),
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ipsa";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "dolorum";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "recusandae";
                                                port = "deleniti";
                                                project = "dignissimos";
                                                region = "doloremque";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quibusdam";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "minus";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "id";
                                                port = "architecto";
                                                project = "maiores";
                                                region = "perspiciatis";
                                            }}),
                                        }};
                                    }};
                                    kind = "quod";
                                    location = "magni";
                                    rrdatas = new String[]{{
                                        add("fugit"),
                                        add("quisquam"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("quidem"),
                                        add("iure"),
                                    }};
                                }}),
                            }};
                            kind = "aliquid";
                        }};;
                        kind = "culpa";
                        primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                            backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                enableFencing = false;
                                items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "ipsum";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "quod";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "non";
                                                    port = "facere";
                                                    project = "repellat";
                                                    region = "exercitationem";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "quidem";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "molestiae";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "excepturi";
                                                    port = "voluptatum";
                                                    project = "iste";
                                                    region = "eaque";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "reiciendis";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "consequuntur";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "tempora";
                                                    port = "nobis";
                                                    project = "expedita";
                                                    region = "modi";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "adipisci";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "at";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "exercitationem";
                                                    port = "tempore";
                                                    project = "eos";
                                                    region = "laboriosam";
                                                }}),
                                            }};
                                        }};
                                        kind = "aperiam";
                                        location = "minima";
                                        rrdatas = new String[]{{
                                            add("dicta"),
                                            add("assumenda"),
                                            add("reprehenderit"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("ad"),
                                            add("voluptates"),
                                        }};
                                    }}),
                                }};
                                kind = "sequi";
                            }};;
                            kind = "eligendi";
                            primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                        ipAddress = "quae";
                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                        kind = "sint";
                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                        networkUrl = "excepturi";
                                        port = "porro";
                                        project = "nesciunt";
                                        region = "maiores";
                                    }}),
                                }};
                            }};;
                            trickleTraffic = 3345.44;
                        }};;
                        wrr = new RRSetRoutingPolicyWrrPolicy() {{
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "officiis";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "itaque";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "corporis";
                                                port = "consequuntur";
                                                project = "odio";
                                                region = "suscipit";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quis";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "beatae";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "ex";
                                                port = "consequuntur";
                                                project = "delectus";
                                                region = "nobis";
                                            }}),
                                        }};
                                    }};
                                    kind = "possimus";
                                    rrdatas = new String[]{{
                                        add("optio"),
                                        add("debitis"),
                                        add("architecto"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("consequatur"),
                                        add("sunt"),
                                        add("odit"),
                                        add("inventore"),
                                    }};
                                    weight = 3888.89;
                                }}),
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "repudiandae";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "aspernatur";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "sint";
                                                port = "accusamus";
                                                project = "deleniti";
                                                region = "earum";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "consequuntur";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "minus";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "accusantium";
                                                port = "nulla";
                                                project = "inventore";
                                                region = "omnis";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quibusdam";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "nostrum";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "doloribus";
                                                port = "magnam";
                                                project = "adipisci";
                                                region = "natus";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "necessitatibus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "sint";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "nisi";
                                                port = "commodi";
                                                project = "impedit";
                                                region = "facilis";
                                            }}),
                                        }};
                                    }};
                                    kind = "temporibus";
                                    rrdatas = new String[]{{
                                        add("quaerat"),
                                        add("delectus"),
                                        add("molestiae"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("laborum"),
                                        add("odit"),
                                        add("rerum"),
                                    }};
                                    weight = 1612.18;
                                }}),
                            }};
                            kind = "magnam";
                        }};;
                        wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ratione";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "perspiciatis";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "temporibus";
                                                port = "et";
                                                project = "debitis";
                                                region = "nisi";
                                            }}),
                                        }};
                                    }};
                                    kind = "aliquid";
                                    rrdatas = new String[]{{
                                        add("quas"),
                                        add("repellat"),
                                        add("placeat"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("quaerat"),
                                        add("veniam"),
                                        add("perspiciatis"),
                                        add("commodi"),
                                    }};
                                    weight = 1740.82;
                                }}),
                            }};
                            kind = "dicta";
                        }};;
                    }};;
                    rrdatas = new String[]{{
                        add("maxime"),
                        add("dolores"),
                    }};
                    signatureRrdatas = new String[]{{
                        add("quam"),
                        add("molestiae"),
                        add("aliquid"),
                    }};
                    ttl = 454705;
                    type = "eum";
                }};;
                accessToken = "consectetur";
                alt = AltEnum.JSON;
                callback = "tempora";
                clientOperationId = "aspernatur";
                fields = "ad";
                key = "incidunt";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "atque";
                uploadProtocol = "tempore";
            }};            

            DnsResourceRecordSetsPatchResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsPatch(req, new DnsResourceRecordSetsPatchSecurity() {{
                option1 = new DnsResourceRecordSetsPatchSecurityOption1("asperiores", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourceRecordSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
