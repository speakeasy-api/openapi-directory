<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DnsChangesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DnsChangesCreateSecurityOption2;
import org.openapis.openapi.models.operations.DnsChangesCreateSecurity;
import org.openapis.openapi.models.operations.DnsChangesCreateRequest;
import org.openapis.openapi.models.operations.DnsChangesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChangeStatusEnum;
import org.openapis.openapi.models.shared.Change;
import org.openapis.openapi.models.shared.ResourceRecordSet;
import org.openapis.openapi.models.shared.RRSetRoutingPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyHealthCheckTargets;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyPrimaryBackupPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsChangesCreateRequest req = new DnsChangesCreateRequest() {{
                dollarXgafv = "2";
                change = new Change() {{
                    additions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "distinctio";
                            name = "quibusdam";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "corrupti";
                                                        ipProtocol = "UDP";
                                                        kind = "vel";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "deserunt";
                                                        port = "suscipit";
                                                        project = "iure";
                                                        region = "magnam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "debitis";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "delectus";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "suscipit";
                                                        port = "molestiae";
                                                        project = "minus";
                                                        region = "placeat";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatum";
                                                        ipProtocol = "TCP";
                                                        kind = "excepturi";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "recusandae";
                                                        port = "temporibus";
                                                        project = "ab";
                                                        region = "quis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "veritatis";
                                                        ipProtocol = "TCP";
                                                        kind = "perferendis";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "repellendus";
                                                        port = "sapiente";
                                                        project = "quo";
                                                        region = "odit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "at";
                                            location = "at";
                                            rrdatas = new String[]{{
                                                add("molestiae"),
                                                add("quod"),
                                                add("quod"),
                                                add("esse"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("porro"),
                                                add("dolorum"),
                                                add("dicta"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officia";
                                                        ipProtocol = "TCP";
                                                        kind = "fugit";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "hic";
                                                        port = "optio";
                                                        project = "totam";
                                                        region = "beatae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "commodi";
                                                        ipProtocol = "TCP";
                                                        kind = "modi";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "impedit";
                                                        port = "cum";
                                                        project = "esse";
                                                        region = "ipsum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "excepturi";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "perferendis";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "natus";
                                                        port = "sed";
                                                        project = "iste";
                                                        region = "dolor";
                                                    }}),
                                                }};
                                            }};
                                            kind = "natus";
                                            location = "laboriosam";
                                            rrdatas = new String[]{{
                                                add("saepe"),
                                                add("fuga"),
                                                add("in"),
                                                add("corporis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("iure"),
                                                add("saepe"),
                                                add("quidem"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsa";
                                                        ipProtocol = "UDP";
                                                        kind = "est";
                                                        loadBalancerType = "REGIONAL_L4ILB";
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
                                    }};
                                    kind = "iure";
                                }};
                                kind = "culpa";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "architecto";
                                                            ipProtocol = "TCP";
                                                            kind = "dolorem";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "consequuntur";
                                                            port = "repellat";
                                                            project = "mollitia";
                                                            region = "occaecati";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "numquam";
                                                            ipProtocol = "TCP";
                                                            kind = "quam";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "velit";
                                                            port = "error";
                                                            project = "quia";
                                                            region = "quis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vitae";
                                                            ipProtocol = "UDP";
                                                            kind = "animi";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "odit";
                                                            port = "quo";
                                                            project = "sequi";
                                                            region = "tenetur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ipsam";
                                                            ipProtocol = "TCP";
                                                            kind = "possimus";
                                                            loadBalancerType = "NONE";
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
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "cum";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "doloremque";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "ut";
                                                            port = "maiores";
                                                            project = "dicta";
                                                            region = "corporis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolore";
                                                            ipProtocol = "TCP";
                                                            kind = "dicta";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "enim";
                                                            port = "accusamus";
                                                            project = "commodi";
                                                            region = "repudiandae";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quae";
                                                location = "ipsum";
                                                rrdatas = new String[]{{
                                                    add("molestias"),
                                                    add("excepturi"),
                                                    add("pariatur"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("praesentium"),
                                                    add("rem"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quasi";
                                                            ipProtocol = "UDP";
                                                            kind = "sint";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "itaque";
                                                            port = "incidunt";
                                                            project = "enim";
                                                            region = "consequatur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "est";
                                                            ipProtocol = "UDP";
                                                            kind = "explicabo";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "distinctio";
                                                            port = "quibusdam";
                                                            project = "labore";
                                                            region = "modi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "qui";
                                                            ipProtocol = "TCP";
                                                            kind = "cupiditate";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "perferendis";
                                                            port = "magni";
                                                            project = "assumenda";
                                                            region = "ipsam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "alias";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "dolorum";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "tempora";
                                                            port = "facilis";
                                                            project = "tempore";
                                                            region = "labore";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "delectus";
                                                location = "eum";
                                                rrdatas = new String[]{{
                                                    add("eligendi"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("aliquid"),
                                                    add("provident"),
                                                    add("necessitatibus"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "officia";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "debitis";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "dolorum";
                                                            port = "in";
                                                            project = "in";
                                                            region = "illum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "maiores";
                                                            ipProtocol = "UDP";
                                                            kind = "dicta";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "cumque";
                                                            port = "facere";
                                                            project = "ea";
                                                            region = "aliquid";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "laborum";
                                                            ipProtocol = "UDP";
                                                            kind = "non";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "enim";
                                                            port = "accusamus";
                                                            project = "delectus";
                                                            region = "quidem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "provident";
                                                location = "nam";
                                                rrdatas = new String[]{{
                                                    add("blanditiis"),
                                                    add("deleniti"),
                                                    add("sapiente"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("deserunt"),
                                                }};
                                            }}),
                                        }};
                                        kind = "nisi";
                                    }};
                                    kind = "vel";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "omnis";
                                                ipProtocol = "TCP";
                                                kind = "perferendis";
                                                loadBalancerType = "NONE";
                                                networkUrl = "magnam";
                                                port = "distinctio";
                                                project = "id";
                                                region = "labore";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "labore";
                                                ipProtocol = "TCP";
                                                kind = "natus";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "eum";
                                                port = "vero";
                                                project = "aspernatur";
                                                region = "architecto";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "magnam";
                                                ipProtocol = "UNDEFINED";
                                                kind = "excepturi";
                                                loadBalancerType = "NONE";
                                                networkUrl = "provident";
                                                port = "quos";
                                                project = "sint";
                                                region = "accusantium";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 6532.01;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ad";
                                                        ipProtocol = "TCP";
                                                        kind = "dolor";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "odit";
                                                        port = "nemo";
                                                        project = "quasi";
                                                        region = "iure";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "doloribus";
                                                        ipProtocol = "UDP";
                                                        kind = "eius";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "deleniti";
                                                        port = "facilis";
                                                        project = "in";
                                                        region = "architecto";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "architecto";
                                                        ipProtocol = "UDP";
                                                        kind = "ullam";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "nihil";
                                                        port = "repellat";
                                                        project = "quibusdam";
                                                        region = "sed";
                                                    }}),
                                                }};
                                            }};
                                            kind = "saepe";
                                            rrdatas = new String[]{{
                                                add("accusantium"),
                                                add("consequuntur"),
                                                add("praesentium"),
                                                add("natus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("sunt"),
                                            }};
                                            weight = 7790.51;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "pariatur";
                                                        ipProtocol = "UDP";
                                                        kind = "ea";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "odit";
                                                        port = "ea";
                                                        project = "accusantium";
                                                        region = "ab";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "maiores";
                                                        ipProtocol = "UDP";
                                                        kind = "ipsam";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "autem";
                                                        port = "nam";
                                                        project = "eaque";
                                                        region = "pariatur";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nemo";
                                                        ipProtocol = "UDP";
                                                        kind = "perferendis";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "amet";
                                                        port = "aut";
                                                        project = "cumque";
                                                        region = "corporis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "hic";
                                                        ipProtocol = "UDP";
                                                        kind = "nobis";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "quis";
                                                        port = "totam";
                                                        project = "dignissimos";
                                                        region = "eaque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quis";
                                            rrdatas = new String[]{{
                                                add("eos"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("dolores"),
                                            }};
                                            weight = 7936.98;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolor";
                                                        ipProtocol = "UDP";
                                                        kind = "nostrum";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "recusandae";
                                                        port = "omnis";
                                                        project = "facilis";
                                                        region = "perspiciatis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatem";
                                                        ipProtocol = "UDP";
                                                        kind = "consequuntur";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "error";
                                                        port = "eaque";
                                                        project = "occaecati";
                                                        region = "rerum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "adipisci";
                                            rrdatas = new String[]{{
                                                add("earum"),
                                                add("modi"),
                                                add("iste"),
                                                add("dolorum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("pariatur"),
                                                add("provident"),
                                                add("nobis"),
                                            }};
                                            weight = 7301.22;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quaerat";
                                                        ipProtocol = "TCP";
                                                        kind = "aliquid";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "dolorem";
                                                        port = "dolor";
                                                        project = "qui";
                                                        region = "ipsum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "hic";
                                                        ipProtocol = "TCP";
                                                        kind = "cum";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "dignissimos";
                                                        port = "reiciendis";
                                                        project = "amet";
                                                        region = "dolorum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "numquam";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "ipsa";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "iure";
                                                        port = "odio";
                                                        project = "quaerat";
                                                        region = "accusamus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quidem";
                                                        ipProtocol = "UDP";
                                                        kind = "voluptas";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "eos";
                                                        port = "atque";
                                                        project = "sit";
                                                        region = "fugiat";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ab";
                                            rrdatas = new String[]{{
                                                add("dolorum"),
                                                add("iusto"),
                                                add("voluptate"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("deleniti"),
                                                add("omnis"),
                                                add("necessitatibus"),
                                            }};
                                            weight = 7146.97;
                                        }}),
                                    }};
                                    kind = "asperiores";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("ipsum"),
                                add("voluptate"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("saepe"),
                                add("eius"),
                                add("aspernatur"),
                            }};
                            ttl = 20651;
                            type = "amet";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "optio";
                            name = "accusamus";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "suscipit";
                                                        ipProtocol = "TCP";
                                                        kind = "provident";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "repellendus";
                                                        port = "totam";
                                                        project = "similique";
                                                        region = "alias";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "at";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "tempora";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "quod";
                                                        port = "officiis";
                                                        project = "qui";
                                                        region = "dolorum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "a";
                                                        ipProtocol = "TCP";
                                                        kind = "harum";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "ipsum";
                                                        port = "quisquam";
                                                        project = "tenetur";
                                                        region = "amet";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempore";
                                                        ipProtocol = "UDP";
                                                        kind = "numquam";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "dolorem";
                                                        port = "sapiente";
                                                        project = "totam";
                                                        region = "nihil";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sit";
                                            location = "expedita";
                                            rrdatas = new String[]{{
                                                add("sed"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("libero"),
                                                add("voluptas"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quam";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "incidunt";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "cupiditate";
                                                        port = "maxime";
                                                        project = "pariatur";
                                                        region = "soluta";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dicta";
                                                        ipProtocol = "UDP";
                                                        kind = "totam";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "aspernatur";
                                                        port = "dolores";
                                                        project = "distinctio";
                                                        region = "facilis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aliquid";
                                                        ipProtocol = "TCP";
                                                        kind = "molestias";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "qui";
                                                        port = "neque";
                                                        project = "fugit";
                                                        region = "magni";
                                                    }}),
                                                }};
                                            }};
                                            kind = "odio";
                                            location = "sunt";
                                            rrdatas = new String[]{{
                                                add("nam"),
                                                add("hic"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("cumque"),
                                            }};
                                        }}),
                                    }};
                                    kind = "soluta";
                                }};
                                kind = "nobis";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ipsum";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "nobis";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "tempore";
                                                            port = "cupiditate";
                                                            project = "aperiam";
                                                            region = "delectus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolorem";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "labore";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "dolorum";
                                                            port = "architecto";
                                                            project = "quae";
                                                            region = "aut";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quas";
                                                            ipProtocol = "UDP";
                                                            kind = "consequatur";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "repellendus";
                                                            port = "porro";
                                                            project = "doloribus";
                                                            region = "ut";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facilis";
                                                            ipProtocol = "TCP";
                                                            kind = "qui";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "laudantium";
                                                            port = "odio";
                                                            project = "occaecati";
                                                            region = "voluptatibus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quisquam";
                                                location = "vero";
                                                rrdatas = new String[]{{
                                                    add("quis"),
                                                    add("ipsum"),
                                                    add("delectus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("consectetur"),
                                                    add("vero"),
                                                }};
                                            }}),
                                        }};
                                        kind = "tenetur";
                                    }};
                                    kind = "dignissimos";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "distinctio";
                                                ipProtocol = "UDP";
                                                kind = "odio";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "facilis";
                                                port = "vero";
                                                project = "ducimus";
                                                region = "dolore";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quibusdam";
                                                ipProtocol = "UDP";
                                                kind = "sequi";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "impedit";
                                                port = "aut";
                                                project = "voluptatibus";
                                                region = "exercitationem";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "nulla";
                                                ipProtocol = "UNDEFINED";
                                                kind = "porro";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "doloribus";
                                                port = "iusto";
                                                project = "eligendi";
                                                region = "ducimus";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "alias";
                                                ipProtocol = "TCP";
                                                kind = "tempora";
                                                loadBalancerType = "NONE";
                                                networkUrl = "ea";
                                                port = "aspernatur";
                                                project = "vel";
                                                region = "possimus";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 2978.42;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laudantium";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "dolor";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "quasi";
                                                        port = "ex";
                                                        project = "nulla";
                                                        region = "excepturi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatibus";
                                                        ipProtocol = "TCP";
                                                        kind = "sapiente";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "saepe";
                                                        port = "ea";
                                                        project = "impedit";
                                                        region = "corporis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "veniam";
                                            rrdatas = new String[]{{
                                                add("inventore"),
                                                add("magnam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quo"),
                                                add("consectetur"),
                                            }};
                                            weight = 9262.13;
                                        }}),
                                    }};
                                    kind = "aspernatur";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("eaque"),
                                add("a"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("aut"),
                                add("aut"),
                                add("deleniti"),
                            }};
                            ttl = 770581;
                            type = "aliquam";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "fugit";
                            name = "accusamus";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "et";
                                                        ipProtocol = "UDP";
                                                        kind = "laborum";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "velit";
                                                        port = "eum";
                                                        project = "autem";
                                                        region = "nobis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quas";
                                                        ipProtocol = "UDP";
                                                        kind = "nulla";
                                                        loadBalancerType = "NONE";
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
                                                            ipProtocol = "UDP";
                                                            kind = "fugiat";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "eum";
                                                            port = "suscipit";
                                                            project = "assumenda";
                                                            region = "eos";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "praesentium";
                                                            ipProtocol = "UDP";
                                                            kind = "veritatis";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "id";
                                                            port = "quidem";
                                                            project = "neque";
                                                            region = "quo";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "illum";
                                                            ipProtocol = "UDP";
                                                            kind = "fuga";
                                                            loadBalancerType = "NONE";
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
                                                            ipProtocol = "TCP";
                                                            kind = "inventore";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "totam";
                                                            port = "accusamus";
                                                            project = "aliquam";
                                                            region = "odio";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "occaecati";
                                                            ipProtocol = "TCP";
                                                            kind = "sapiente";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "deserunt";
                                                            port = "molestiae";
                                                            project = "accusantium";
                                                            region = "porro";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eum";
                                                            ipProtocol = "TCP";
                                                            kind = "praesentium";
                                                            loadBalancerType = "NONE";
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
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "saepe";
                                                            loadBalancerType = "REGIONAL_L4ILB";
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
                                                ipProtocol = "UNDEFINED";
                                                kind = "distinctio";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "sit";
                                                port = "culpa";
                                                project = "tempore";
                                                region = "adipisci";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "cumque";
                                                ipProtocol = "UNDEFINED";
                                                kind = "consequatur";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "quaerat";
                                                port = "sapiente";
                                                project = "consectetur";
                                                region = "esse";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "blanditiis";
                                                ipProtocol = "TCP";
                                                kind = "a";
                                                loadBalancerType = "REGIONAL_L4ILB";
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
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "eveniet";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "facere";
                                                        port = "veritatis";
                                                        project = "consequuntur";
                                                        region = "quasi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "similique";
                                                        ipProtocol = "TCP";
                                                        kind = "aliquid";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "quae";
                                                        port = "earum";
                                                        project = "vel";
                                                        region = "in";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eius";
                                                        ipProtocol = "UDP";
                                                        kind = "illum";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "accusantium";
                                                        port = "aliquam";
                                                        project = "sapiente";
                                                        region = "dicta";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ullam";
                                                        ipProtocol = "TCP";
                                                        kind = "ullam";
                                                        loadBalancerType = "NONE";
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
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "veritatis";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "adipisci";
                                                        port = "iste";
                                                        project = "temporibus";
                                                        region = "accusantium";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rem";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "laudantium";
                                                        loadBalancerType = "NONE";
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
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "maiores";
                                                        loadBalancerType = "REGIONAL_L4ILB";
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
                            name = "culpa";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "totam";
                                                        ipProtocol = "UDP";
                                                        kind = "vel";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "quos";
                                                        port = "vel";
                                                        project = "labore";
                                                        region = "possimus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facilis";
                                                        ipProtocol = "UDP";
                                                        kind = "commodi";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "corporis";
                                                        port = "reiciendis";
                                                        project = "assumenda";
                                                        region = "nemo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = "TCP";
                                                        kind = "aperiam";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "consectetur";
                                                        port = "in";
                                                        project = "exercitationem";
                                                        region = "earum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facere";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "doloribus";
                                                        loadBalancerType = "NONE";
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
                                                        ipProtocol = "UDP";
                                                        kind = "laboriosam";
                                                        loadBalancerType = "NONE";
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
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "minus";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "blanditiis";
                                                        port = "in";
                                                        project = "dolore";
                                                        region = "aliquam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officiis";
                                                        ipProtocol = "UDP";
                                                        kind = "ullam";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "cum";
                                                        port = "blanditiis";
                                                        project = "quas";
                                                        region = "hic";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nesciunt";
                                                        ipProtocol = "TCP";
                                                        kind = "corrupti";
                                                        loadBalancerType = "REGIONAL_L4ILB";
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
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "laborum";
                                                            loadBalancerType = "NONE";
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
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "sed";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "eius";
                                                            port = "necessitatibus";
                                                            project = "ipsum";
                                                            region = "ea";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "occaecati";
                                                            ipProtocol = "TCP";
                                                            kind = "voluptatibus";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "tempora";
                                                            port = "voluptate";
                                                            project = "reiciendis";
                                                            region = "ex";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "officiis";
                                                            loadBalancerType = "REGIONAL_L4ILB";
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
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "aperiam";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "numquam";
                                                            port = "veniam";
                                                            project = "in";
                                                            region = "officiis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "beatae";
                                                            ipProtocol = "TCP";
                                                            kind = "exercitationem";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "cum";
                                                            port = "laboriosam";
                                                            project = "dolorum";
                                                            region = "voluptatum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "error";
                                                            ipProtocol = "UDP";
                                                            kind = "expedita";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "neque";
                                                            port = "dolorum";
                                                            project = "nostrum";
                                                            region = "officia";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolorum";
                                                            ipProtocol = "TCP";
                                                            kind = "accusamus";
                                                            loadBalancerType = "NONE";
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
                                                ipProtocol = "TCP";
                                                kind = "ex";
                                                loadBalancerType = "NONE";
                                                networkUrl = "sit";
                                                port = "vel";
                                                project = "nostrum";
                                                region = "saepe";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "error";
                                                ipProtocol = "UNDEFINED";
                                                kind = "incidunt";
                                                loadBalancerType = "REGIONAL_L4ILB";
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
                                                        ipProtocol = "UDP";
                                                        kind = "nam";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "laboriosam";
                                                        port = "alias";
                                                        project = "amet";
                                                        region = "deserunt";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptate";
                                                        ipProtocol = "TCP";
                                                        kind = "reiciendis";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "repellendus";
                                                        port = "delectus";
                                                        project = "voluptates";
                                                        region = "perferendis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "est";
                                                        ipProtocol = "UDP";
                                                        kind = "reprehenderit";
                                                        loadBalancerType = "REGIONAL_L4ILB";
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
                                                        ipProtocol = "UDP";
                                                        kind = "ea";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "error";
                                                        port = "officiis";
                                                        project = "officiis";
                                                        region = "accusamus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "natus";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "aspernatur";
                                                        loadBalancerType = "NONE";
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
                            name = "a";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "saepe";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "occaecati";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "perspiciatis";
                                                        port = "in";
                                                        project = "adipisci";
                                                        region = "eveniet";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "occaecati";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "fugit";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "quis";
                                                        port = "reprehenderit";
                                                        project = "error";
                                                        region = "illo";
                                                    }}),
                                                }};
                                            }};
                                            kind = "corporis";
                                            location = "quidem";
                                            rrdatas = new String[]{{
                                                add("non"),
                                                add("vero"),
                                                add("doloremque"),
                                                add("iure"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("totam"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = "UDP";
                                                        kind = "qui";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "iure";
                                                        port = "necessitatibus";
                                                        project = "ratione";
                                                        region = "laborum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "distinctio";
                                            location = "voluptatum";
                                            rrdatas = new String[]{{
                                                add("aliquam"),
                                                add("ad"),
                                                add("repellat"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("corporis"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nihil";
                                                        ipProtocol = "TCP";
                                                        kind = "voluptas";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "maiores";
                                                        port = "reiciendis";
                                                        project = "dolores";
                                                        region = "id";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "minima";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "dolorum";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "quae";
                                                        port = "recusandae";
                                                        project = "omnis";
                                                        region = "quaerat";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = "TCP";
                                                        kind = "ut";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "adipisci";
                                                        port = "debitis";
                                                        project = "laudantium";
                                                        region = "eum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nemo";
                                            location = "recusandae";
                                            rrdatas = new String[]{{
                                                add("provident"),
                                                add("quis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("reiciendis"),
                                                add("provident"),
                                            }};
                                        }}),
                                    }};
                                    kind = "aspernatur";
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
                                                            ipAddress = "nostrum";
                                                            ipProtocol = "TCP";
                                                            kind = "provident";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "animi";
                                                            port = "ex";
                                                            project = "aliquid";
                                                            region = "accusantium";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repellat";
                                                            ipProtocol = "UDP";
                                                            kind = "ullam";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "nam";
                                                            port = "earum";
                                                            project = "officia";
                                                            region = "laborum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "placeat";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "voluptatibus";
                                                            loadBalancerType = "REGIONAL_L4ILB";
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
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "at";
                                                ipProtocol = "UDP";
                                                kind = "eos";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "eum";
                                                port = "dicta";
                                                project = "minima";
                                                region = "beatae";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "cupiditate";
                                                ipProtocol = "TCP";
                                                kind = "earum";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "hic";
                                                port = "illum";
                                                project = "eaque";
                                                region = "earum";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "perspiciatis";
                                                ipProtocol = "UDP";
                                                kind = "debitis";
                                                loadBalancerType = "NONE";
                                                networkUrl = "porro";
                                                port = "suscipit";
                                                project = "dolorem";
                                                region = "fugit";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 7649.95;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "animi";
                                                        ipProtocol = "UDP";
                                                        kind = "nulla";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "quasi";
                                                        port = "et";
                                                        project = "ducimus";
                                                        region = "natus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "occaecati";
                                            rrdatas = new String[]{{
                                                add("adipisci"),
                                                add("quasi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("doloribus"),
                                            }};
                                            weight = 8595.81;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsa";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "nihil";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "dicta";
                                                        port = "iusto";
                                                        project = "esse";
                                                        region = "praesentium";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "maiores";
                                                        ipProtocol = "UDP";
                                                        kind = "vel";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "fugiat";
                                                        port = "doloremque";
                                                        project = "dicta";
                                                        region = "odio";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempora";
                                                        ipProtocol = "TCP";
                                                        kind = "ex";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "aliquid";
                                                        port = "ipsa";
                                                        project = "laborum";
                                                        region = "sunt";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nostrum";
                                                        ipProtocol = "UDP";
                                                        kind = "expedita";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "officia";
                                                        port = "suscipit";
                                                        project = "aliquid";
                                                        region = "perferendis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "eum";
                                            rrdatas = new String[]{{
                                                add("iste"),
                                                add("id"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("error"),
                                            }};
                                            weight = 8224.07;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "mollitia";
                                                        ipProtocol = "UDP";
                                                        kind = "libero";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "deleniti";
                                                        port = "enim";
                                                        project = "vitae";
                                                        region = "repellendus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ex";
                                                        ipProtocol = "UDP";
                                                        kind = "ex";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "ad";
                                                        port = "expedita";
                                                        project = "voluptatem";
                                                        region = "molestias";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cum";
                                                        ipProtocol = "TCP";
                                                        kind = "beatae";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "omnis";
                                                        port = "veritatis";
                                                        project = "rerum";
                                                        region = "est";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "culpa";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "sapiente";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "architecto";
                                                        port = "fuga";
                                                        project = "pariatur";
                                                        region = "debitis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptatem";
                                            rrdatas = new String[]{{
                                                add("deleniti"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ex"),
                                                add("sapiente"),
                                                add("rem"),
                                                add("minus"),
                                            }};
                                            weight = 3651;
                                        }}),
                                    }};
                                    kind = "asperiores";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("ullam"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("illum"),
                            }};
                            ttl = 518150;
                            type = "impedit";
                        }}),
                    }};
                    id = "quibusdam";
                    isServing = false;
                    kind = "nam";
                    startTime = "ipsam";
                    status = "DONE";
                }};
                accessToken = "dolor";
                alt = "json";
                callback = "inventore";
                clientOperationId = "deleniti";
                fields = "veritatis";
                key = "tempora";
                location = "dolor";
                managedZone = "consequatur";
                oauthToken = "architecto";
                prettyPrint = false;
                project = "sit";
                quotaUser = "modi";
                uploadType = "fugit";
                uploadProtocol = "ab";
            }}            

            DnsChangesCreateResponse res = sdk.changes.dnsChangesCreate(req, new DnsChangesCreateSecurity() {{
                option1 = new DnsChangesCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.change.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->