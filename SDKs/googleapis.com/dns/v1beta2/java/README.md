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
                                                        ipProtocol = "udp";
                                                        kind = "vel";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "deserunt";
                                                        port = "suscipit";
                                                        project = "iure";
                                                        region = "magnam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "debitis";
                                                        ipProtocol = "undefined";
                                                        kind = "delectus";
                                                        loadBalancerType = "none";
                                                        networkUrl = "suscipit";
                                                        port = "molestiae";
                                                        project = "minus";
                                                        region = "placeat";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatum";
                                                        ipProtocol = "tcp";
                                                        kind = "excepturi";
                                                        loadBalancerType = "none";
                                                        networkUrl = "recusandae";
                                                        port = "temporibus";
                                                        project = "ab";
                                                        region = "quis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "veritatis";
                                                        ipProtocol = "tcp";
                                                        kind = "perferendis";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "tcp";
                                                        kind = "fugit";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "hic";
                                                        port = "optio";
                                                        project = "totam";
                                                        region = "beatae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "commodi";
                                                        ipProtocol = "tcp";
                                                        kind = "modi";
                                                        loadBalancerType = "none";
                                                        networkUrl = "impedit";
                                                        port = "cum";
                                                        project = "esse";
                                                        region = "ipsum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "excepturi";
                                                        ipProtocol = "undefined";
                                                        kind = "perferendis";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "udp";
                                                        kind = "est";
                                                        loadBalancerType = "regionalL4ilb";
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
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sapiente";
                                                        ipProtocol = "undefined";
                                                        kind = "mollitia";
                                                        loadBalancerType = "none";
                                                        networkUrl = "culpa";
                                                        port = "consequuntur";
                                                        project = "repellat";
                                                        region = "mollitia";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "occaecati";
                                                        ipProtocol = "undefined";
                                                        kind = "commodi";
                                                        loadBalancerType = "none";
                                                        networkUrl = "molestiae";
                                                        port = "velit";
                                                        project = "error";
                                                        region = "quia";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quis";
                                                        ipProtocol = "undefined";
                                                        kind = "laborum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "enim";
                                                        port = "odit";
                                                        project = "quo";
                                                        region = "sequi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tenetur";
                                                        ipProtocol = "tcp";
                                                        kind = "id";
                                                        loadBalancerType = "regionalL4ilb";
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
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "doloremque";
                                                        ipProtocol = "tcp";
                                                        kind = "ut";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "dicta";
                                                        port = "corporis";
                                                        project = "dolore";
                                                        region = "iusto";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dicta";
                                            location = "harum";
                                            rrdatas = new String[]{{
                                                add("accusamus"),
                                                add("commodi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quae"),
                                                add("ipsum"),
                                                add("quidem"),
                                                add("molestias"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "pariatur";
                                                        ipProtocol = "undefined";
                                                        kind = "praesentium";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "voluptates";
                                                        port = "quasi";
                                                        project = "repudiandae";
                                                        region = "sint";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "veritatis";
                                                        ipProtocol = "udp";
                                                        kind = "incidunt";
                                                        loadBalancerType = "none";
                                                        networkUrl = "consequatur";
                                                        port = "est";
                                                        project = "quibusdam";
                                                        region = "explicabo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deserunt";
                                                        ipProtocol = "udp";
                                                        kind = "quibusdam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "modi";
                                                        port = "qui";
                                                        project = "aliquid";
                                                        region = "cupiditate";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quos";
                                            location = "perferendis";
                                            rrdatas = new String[]{{
                                                add("assumenda"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("alias"),
                                                add("fugit"),
                                            }};
                                        }}),
                                    }};
                                    kind = "dolorum";
                                }};
                                kind = "excepturi";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "tempore";
                                                            ipProtocol = "undefined";
                                                            kind = "delectus";
                                                            loadBalancerType = "none";
                                                            networkUrl = "non";
                                                            port = "eligendi";
                                                            project = "sint";
                                                            region = "aliquid";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "provident";
                                                            ipProtocol = "udp";
                                                            kind = "sint";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "dolor";
                                                            port = "debitis";
                                                            project = "a";
                                                            region = "dolorum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "in";
                                                            ipProtocol = "tcp";
                                                            kind = "illum";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "rerum";
                                                            port = "dicta";
                                                            project = "magnam";
                                                            region = "cumque";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "facere";
                                                location = "ea";
                                                rrdatas = new String[]{{
                                                    add("laborum"),
                                                    add("accusamus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("occaecati"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "accusamus";
                                                            ipProtocol = "udp";
                                                            kind = "quidem";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "nam";
                                                            port = "id";
                                                            project = "blanditiis";
                                                            region = "deleniti";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sapiente";
                                                            ipProtocol = "undefined";
                                                            kind = "deserunt";
                                                            loadBalancerType = "none";
                                                            networkUrl = "vel";
                                                            port = "natus";
                                                            project = "omnis";
                                                            region = "molestiae";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "perferendis";
                                                location = "nihil";
                                                rrdatas = new String[]{{
                                                    add("distinctio"),
                                                    add("id"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("labore"),
                                                    add("suscipit"),
                                                }};
                                            }}),
                                        }};
                                        kind = "natus";
                                    }};
                                    kind = "nobis";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "vero";
                                                ipProtocol = "undefined";
                                                kind = "architecto";
                                                loadBalancerType = "none";
                                                networkUrl = "et";
                                                port = "excepturi";
                                                project = "ullam";
                                                region = "provident";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quos";
                                                ipProtocol = "tcp";
                                                kind = "accusantium";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "reiciendis";
                                                port = "mollitia";
                                                project = "ad";
                                                region = "eum";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 2212.62;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nemo";
                                                        ipProtocol = "undefined";
                                                        kind = "iure";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "debitis";
                                                        port = "eius";
                                                        project = "maxime";
                                                        region = "deleniti";
                                                    }}),
                                                }};
                                            }};
                                            kind = "facilis";
                                            rrdatas = new String[]{{
                                                add("architecto"),
                                                add("architecto"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ullam"),
                                                add("expedita"),
                                                add("nihil"),
                                                add("repellat"),
                                            }};
                                            weight = 8411.4;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "saepe";
                                                        ipProtocol = "udp";
                                                        kind = "accusantium";
                                                        loadBalancerType = "none";
                                                        networkUrl = "praesentium";
                                                        port = "natus";
                                                        project = "magni";
                                                        region = "sunt";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quo";
                                            rrdatas = new String[]{{
                                                add("pariatur"),
                                                add("maxime"),
                                                add("ea"),
                                                add("excepturi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ea"),
                                            }};
                                            weight = 332.22;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "maiores";
                                                        ipProtocol = "udp";
                                                        kind = "ipsam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "autem";
                                                        port = "nam";
                                                        project = "eaque";
                                                        region = "pariatur";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nemo";
                                            rrdatas = new String[]{{
                                                add("perferendis"),
                                                add("fugiat"),
                                                add("amet"),
                                                add("aut"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("corporis"),
                                                add("hic"),
                                                add("libero"),
                                                add("nobis"),
                                            }};
                                            weight = 1716.29;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "totam";
                                                        ipProtocol = "tcp";
                                                        kind = "eaque";
                                                        loadBalancerType = "none";
                                                        networkUrl = "nesciunt";
                                                        port = "eos";
                                                        project = "perferendis";
                                                        region = "dolores";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "minus";
                                                        ipProtocol = "tcp";
                                                        kind = "dolor";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "nostrum";
                                                        port = "hic";
                                                        project = "recusandae";
                                                        region = "omnis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "facilis";
                                            rrdatas = new String[]{{
                                                add("voluptatem"),
                                                add("porro"),
                                                add("consequuntur"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("error"),
                                                add("eaque"),
                                                add("occaecati"),
                                            }};
                                            weight = 6990.98;
                                        }}),
                                    }};
                                    kind = "adipisci";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "modi";
                                                        ipProtocol = "tcp";
                                                        kind = "dolorum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "pariatur";
                                                        port = "provident";
                                                        project = "nobis";
                                                        region = "libero";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "delectus";
                                                        ipProtocol = "undefined";
                                                        kind = "quos";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dolorem";
                                                        port = "dolorem";
                                                        project = "dolor";
                                                        region = "qui";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsum";
                                                        ipProtocol = "udp";
                                                        kind = "excepturi";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "voluptate";
                                                        port = "dignissimos";
                                                        project = "reiciendis";
                                                        region = "amet";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolorum";
                                                        ipProtocol = "undefined";
                                                        kind = "veritatis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ipsa";
                                                        port = "iure";
                                                        project = "odio";
                                                        region = "quaerat";
                                                    }}),
                                                }};
                                            }};
                                            kind = "accusamus";
                                            rrdatas = new String[]{{
                                                add("voluptatibus"),
                                                add("voluptas"),
                                                add("natus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("atque"),
                                            }};
                                            weight = 246.78;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ab";
                                                        ipProtocol = "udp";
                                                        kind = "dolorum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "voluptate";
                                                        port = "dolorum";
                                                        project = "deleniti";
                                                        region = "omnis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "necessitatibus";
                                                        ipProtocol = "udp";
                                                        kind = "asperiores";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ipsum";
                                                        port = "voluptate";
                                                        project = "id";
                                                        region = "saepe";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eius";
                                                        ipProtocol = "undefined";
                                                        kind = "perferendis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "optio";
                                                        port = "accusamus";
                                                        project = "ad";
                                                        region = "saepe";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "suscipit";
                                                        ipProtocol = "tcp";
                                                        kind = "provident";
                                                        loadBalancerType = "none";
                                                        networkUrl = "repellendus";
                                                        port = "totam";
                                                        project = "similique";
                                                        region = "alias";
                                                    }}),
                                                }};
                                            }};
                                            kind = "at";
                                            rrdatas = new String[]{{
                                                add("tempora"),
                                                add("vel"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("officiis"),
                                                add("qui"),
                                                add("dolorum"),
                                                add("a"),
                                            }};
                                            weight = 4561.3;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iusto";
                                                        ipProtocol = "undefined";
                                                        kind = "quisquam";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "amet";
                                                        port = "tempore";
                                                        project = "accusamus";
                                                        region = "numquam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "enim";
                                                        ipProtocol = "undefined";
                                                        kind = "sapiente";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "nihil";
                                                        port = "sit";
                                                        project = "expedita";
                                                        region = "neque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sed";
                                                        ipProtocol = "tcp";
                                                        kind = "libero";
                                                        loadBalancerType = "none";
                                                        networkUrl = "deserunt";
                                                        port = "quam";
                                                        project = "ipsum";
                                                        region = "incidunt";
                                                    }}),
                                                }};
                                            }};
                                            kind = "qui";
                                            rrdatas = new String[]{{
                                                add("maxime"),
                                                add("pariatur"),
                                                add("soluta"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("laborum"),
                                            }};
                                            weight = 5173.79;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aspernatur";
                                                        ipProtocol = "undefined";
                                                        kind = "distinctio";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "aliquid";
                                                        port = "quam";
                                                        project = "molestias";
                                                        region = "temporibus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "qui";
                                                        ipProtocol = "undefined";
                                                        kind = "fugit";
                                                        loadBalancerType = "none";
                                                        networkUrl = "odio";
                                                        port = "sunt";
                                                        project = "ullam";
                                                        region = "nam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "hic";
                                            rrdatas = new String[]{{
                                                add("cumque"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("nobis"),
                                                add("et"),
                                                add("saepe"),
                                            }};
                                            weight = 2174.5;
                                        }}),
                                    }};
                                    kind = "veritatis";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("quos"),
                                add("tempore"),
                                add("cupiditate"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("delectus"),
                            }};
                            ttl = 209157;
                            type = "dolore";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "labore";
                            name = "adipisci";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quae";
                                                        ipProtocol = "undefined";
                                                        kind = "quas";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "consequatur";
                                                        port = "est";
                                                        project = "repellendus";
                                                        region = "porro";
                                                    }}),
                                                }};
                                            }};
                                            kind = "doloribus";
                                            location = "ut";
                                            rrdatas = new String[]{{
                                                add("cupiditate"),
                                                add("qui"),
                                                add("quae"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("odio"),
                                                add("occaecati"),
                                                add("voluptatibus"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vero";
                                                        ipProtocol = "tcp";
                                                        kind = "quis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "delectus";
                                                        port = "voluptate";
                                                        project = "consectetur";
                                                        region = "vero";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tenetur";
                                                        ipProtocol = "tcp";
                                                        kind = "hic";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quod";
                                                        port = "odio";
                                                        project = "similique";
                                                        region = "facilis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vero";
                                                        ipProtocol = "tcp";
                                                        kind = "dolore";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "illum";
                                                        port = "sequi";
                                                        project = "natus";
                                                        region = "impedit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aut";
                                                        ipProtocol = "udp";
                                                        kind = "exercitationem";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "fugit";
                                                        port = "porro";
                                                        project = "maiores";
                                                        region = "doloribus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "iusto";
                                            location = "eligendi";
                                            rrdatas = new String[]{{
                                                add("alias"),
                                                add("officia"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ipsam"),
                                                add("ea"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vel";
                                                        ipProtocol = "udp";
                                                        kind = "magnam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ex";
                                                        port = "laudantium";
                                                        project = "dicta";
                                                        region = "dolor";
                                                    }}),
                                                }};
                                            }};
                                            kind = "maiores";
                                            location = "quasi";
                                            rrdatas = new String[]{{
                                                add("nulla"),
                                                add("excepturi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("nostrum"),
                                                add("sapiente"),
                                                add("quisquam"),
                                                add("saepe"),
                                            }};
                                        }}),
                                    }};
                                    kind = "ea";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "veniam";
                                                        ipProtocol = "tcp";
                                                        kind = "inventore";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ea";
                                                        port = "quo";
                                                        project = "consectetur";
                                                        region = "recusandae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aspernatur";
                                                        ipProtocol = "undefined";
                                                        kind = "eaque";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "libero";
                                                        port = "aut";
                                                        project = "aut";
                                                        region = "deleniti";
                                                    }}),
                                                }};
                                            }};
                                            kind = "impedit";
                                            location = "aliquam";
                                            rrdatas = new String[]{{
                                                add("accusamus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("non"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolorum";
                                                        ipProtocol = "udp";
                                                        kind = "placeat";
                                                        loadBalancerType = "none";
                                                        networkUrl = "eum";
                                                        port = "autem";
                                                        project = "nobis";
                                                        region = "quas";
                                                    }}),
                                                }};
                                            }};
                                            kind = "assumenda";
                                            location = "nulla";
                                            rrdatas = new String[]{{
                                                add("libero"),
                                                add("quasi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("numquam"),
                                                add("explicabo"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsa";
                                                        ipProtocol = "tcp";
                                                        kind = "magnam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "eius";
                                                        port = "esse";
                                                        project = "esse";
                                                        region = "rem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fuga";
                                                        ipProtocol = "tcp";
                                                        kind = "quidem";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ut";
                                                        port = "eum";
                                                        project = "suscipit";
                                                        region = "assumenda";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eos";
                                                        ipProtocol = "tcp";
                                                        kind = "quisquam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ipsa";
                                                        port = "id";
                                                        project = "quidem";
                                                        region = "neque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quo";
                                            location = "illum";
                                            rrdatas = new String[]{{
                                                add("fuga"),
                                                add("eius"),
                                                add("eos"),
                                                add("voluptas"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("cupiditate"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempora";
                                                        ipProtocol = "udp";
                                                        kind = "ipsam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "sequi";
                                                        port = "quo";
                                                        project = "esse";
                                                        region = "recusandae";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aperiam";
                                            location = "distinctio";
                                            rrdatas = new String[]{{
                                                add("dignissimos"),
                                                add("inventore"),
                                                add("nihil"),
                                                add("totam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("aliquam"),
                                                add("odio"),
                                                add("occaecati"),
                                                add("commodi"),
                                            }};
                                        }}),
                                    }};
                                    kind = "sapiente";
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
                                                            ipAddress = "accusantium";
                                                            ipProtocol = "udp";
                                                            kind = "eum";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "praesentium";
                                                            port = "consequuntur";
                                                            project = "deleniti";
                                                            region = "fugit";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fuga";
                                                            ipProtocol = "tcp";
                                                            kind = "incidunt";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "explicabo";
                                                            port = "minima";
                                                            project = "nisi";
                                                            region = "fugit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "sapiente";
                                                location = "consequuntur";
                                                rrdatas = new String[]{{
                                                    add("explicabo"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("occaecati"),
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
                                                            ipProtocol = "undefined";
                                                            kind = "esse";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "nam";
                                                            port = "vero";
                                                            project = "aliquid";
                                                            region = "quasi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "saepe";
                                                            ipProtocol = "tcp";
                                                            kind = "harum";
                                                            loadBalancerType = "none";
                                                            networkUrl = "rerum";
                                                            port = "occaecati";
                                                            project = "minima";
                                                            region = "distinctio";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eligendi";
                                                            ipProtocol = "undefined";
                                                            kind = "culpa";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "adipisci";
                                                            port = "cumque";
                                                            project = "consequuntur";
                                                            region = "consequatur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "minus";
                                                            ipProtocol = "undefined";
                                                            kind = "sapiente";
                                                            loadBalancerType = "none";
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
                                                            ipProtocol = "udp";
                                                            kind = "facere";
                                                            loadBalancerType = "none";
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
                                                ipProtocol = "undefined";
                                                kind = "sapiente";
                                                loadBalancerType = "none";
                                                networkUrl = "ullam";
                                                port = "reprehenderit";
                                                project = "ullam";
                                                region = "nisi";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "aut";
                                                ipProtocol = "tcp";
                                                kind = "qui";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "ex";
                                                port = "deleniti";
                                                project = "itaque";
                                                region = "dolorum";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "architecto";
                                                ipProtocol = "tcp";
                                                kind = "tenetur";
                                                loadBalancerType = "none";
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
                                                        ipProtocol = "tcp";
                                                        kind = "temporibus";
                                                        loadBalancerType = "none";
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
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptas";
                                                        ipProtocol = "undefined";
                                                        kind = "dignissimos";
                                                        loadBalancerType = "none";
                                                        networkUrl = "maiores";
                                                        port = "natus";
                                                        project = "velit";
                                                        region = "voluptatibus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptas";
                                            rrdatas = new String[]{{
                                                add("aperiam"),
                                                add("ea"),
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
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quae";
                                                        ipProtocol = "undefined";
                                                        kind = "porro";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "labore";
                                                        port = "ab";
                                                        project = "adipisci";
                                                        region = "fuga";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "id";
                                                        ipProtocol = "tcp";
                                                        kind = "velit";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "est";
                                                        port = "recusandae";
                                                        project = "totam";
                                                        region = "fugiat";
                                                    }}),
                                                }};
                                            }};
                                            kind = "vel";
                                            rrdatas = new String[]{{
                                                add("quos"),
                                                add("vel"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("possimus"),
                                                add("facilis"),
                                            }};
                                            weight = 7382.27;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "in";
                                                        ipProtocol = "tcp";
                                                        kind = "reiciendis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "nemo";
                                                        port = "recusandae";
                                                        project = "aliquid";
                                                        region = "aperiam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cum";
                                                        ipProtocol = "undefined";
                                                        kind = "in";
                                                        loadBalancerType = "none";
                                                        networkUrl = "earum";
                                                        port = "facere";
                                                        project = "numquam";
                                                        region = "doloribus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "suscipit";
                                            rrdatas = new String[]{{
                                                add("quidem"),
                                                add("saepe"),
                                                add("necessitatibus"),
                                                add("dolore"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("asperiores"),
                                            }};
                                            weight = 2415.45;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "amet";
                                                        ipProtocol = "undefined";
                                                        kind = "dignissimos";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "debitis";
                                                        port = "consectetur";
                                                        project = "corporis";
                                                        region = "harum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "laboriosam";
                                            rrdatas = new String[]{{
                                                add("voluptates"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("vitae"),
                                                add("accusamus"),
                                                add("similique"),
                                            }};
                                            weight = 2724.37;
                                        }}),
                                    }};
                                    kind = "aspernatur";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("voluptas"),
                                add("voluptas"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("nobis"),
                                add("dolorum"),
                            }};
                            ttl = 237807;
                            type = "minus";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "dolores";
                            name = "blanditiis";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aliquam";
                                                        ipProtocol = "udp";
                                                        kind = "temporibus";
                                                        loadBalancerType = "none";
                                                        networkUrl = "adipisci";
                                                        port = "cum";
                                                        project = "blanditiis";
                                                        region = "quas";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "hic";
                                                        ipProtocol = "undefined";
                                                        kind = "culpa";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "pariatur";
                                                        port = "totam";
                                                        project = "hic";
                                                        region = "exercitationem";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nobis";
                                            location = "sit";
                                            rrdatas = new String[]{{
                                                add("sed"),
                                                add("reiciendis"),
                                                add("explicabo"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("facilis"),
                                                add("voluptate"),
                                                add("expedita"),
                                                add("ab"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolore";
                                                        ipProtocol = "udp";
                                                        kind = "sed";
                                                        loadBalancerType = "none";
                                                        networkUrl = "commodi";
                                                        port = "quidem";
                                                        project = "explicabo";
                                                        region = "voluptas";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "unde";
                                                        ipProtocol = "undefined";
                                                        kind = "suscipit";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "debitis";
                                                        port = "illo";
                                                        project = "reiciendis";
                                                        region = "perferendis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "corrupti";
                                                        ipProtocol = "udp";
                                                        kind = "incidunt";
                                                        loadBalancerType = "none";
                                                        networkUrl = "provident";
                                                        port = "eius";
                                                        project = "necessitatibus";
                                                        region = "ipsum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ea";
                                            location = "occaecati";
                                            rrdatas = new String[]{{
                                                add("voluptatibus"),
                                                add("tempora"),
                                                add("tempora"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("reiciendis"),
                                                add("ex"),
                                            }};
                                        }}),
                                    }};
                                    kind = "sit";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "praesentium";
                                                        ipProtocol = "udp";
                                                        kind = "quaerat";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ipsam";
                                                        port = "debitis";
                                                        project = "rem";
                                                        region = "sit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nobis";
                                                        ipProtocol = "tcp";
                                                        kind = "veniam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "recusandae";
                                                        port = "reiciendis";
                                                        project = "nulla";
                                                        region = "magni";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aperiam";
                                                        ipProtocol = "udp";
                                                        kind = "numquam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "in";
                                                        port = "officiis";
                                                        project = "beatae";
                                                        region = "laudantium";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "exercitationem";
                                                        ipProtocol = "tcp";
                                                        kind = "cum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dolorum";
                                                        port = "voluptatum";
                                                        project = "error";
                                                        region = "hic";
                                                    }}),
                                                }};
                                            }};
                                            kind = "expedita";
                                            location = "debitis";
                                            rrdatas = new String[]{{
                                                add("dolorum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("officia"),
                                                add("dolorum"),
                                            }};
                                        }}),
                                    }};
                                    kind = "corrupti";
                                }};
                                kind = "accusamus";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fugit";
                                                            ipProtocol = "undefined";
                                                            kind = "fugiat";
                                                            loadBalancerType = "none";
                                                            networkUrl = "culpa";
                                                            port = "expedita";
                                                            project = "magnam";
                                                            region = "consequatur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "esse";
                                                            ipProtocol = "tcp";
                                                            kind = "sit";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "quas";
                                                            port = "repudiandae";
                                                            project = "corporis";
                                                            region = "et";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "blanditiis";
                                                            ipProtocol = "tcp";
                                                            kind = "sed";
                                                            loadBalancerType = "none";
                                                            networkUrl = "vel";
                                                            port = "nostrum";
                                                            project = "saepe";
                                                            region = "error";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "consequatur";
                                                location = "incidunt";
                                                rrdatas = new String[]{{
                                                    add("dolorem"),
                                                    add("harum"),
                                                    add("dicta"),
                                                    add("architecto"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("labore"),
                                                    add("quidem"),
                                                    add("atque"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nam";
                                                            ipProtocol = "udp";
                                                            kind = "laboriosam";
                                                            loadBalancerType = "none";
                                                            networkUrl = "amet";
                                                            port = "deserunt";
                                                            project = "voluptate";
                                                            region = "unde";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "reiciendis";
                                                            ipProtocol = "tcp";
                                                            kind = "repellendus";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "voluptates";
                                                            port = "perferendis";
                                                            project = "est";
                                                            region = "quidem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "reprehenderit";
                                                            ipProtocol = "udp";
                                                            kind = "fuga";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "mollitia";
                                                            port = "veniam";
                                                            project = "voluptatem";
                                                            region = "quisquam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "repudiandae";
                                                location = "quasi";
                                                rrdatas = new String[]{{
                                                    add("reprehenderit"),
                                                    add("asperiores"),
                                                    add("totam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quidem"),
                                                    add("maxime"),
                                                }};
                                            }}),
                                        }};
                                        kind = "et";
                                    }};
                                    kind = "esse";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "assumenda";
                                                ipProtocol = "tcp";
                                                kind = "atque";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "officiis";
                                                port = "officiis";
                                                project = "accusamus";
                                                region = "natus";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 3283.03;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "maiores";
                                                        ipProtocol = "tcp";
                                                        kind = "at";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "blanditiis";
                                                        port = "suscipit";
                                                        project = "repudiandae";
                                                        region = "atque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "atque";
                                                        ipProtocol = "undefined";
                                                        kind = "recusandae";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "repellendus";
                                                        port = "labore";
                                                        project = "reiciendis";
                                                        region = "doloremque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "repudiandae";
                                            rrdatas = new String[]{{
                                                add("accusantium"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("dolores"),
                                            }};
                                            weight = 3164.88;
                                        }}),
                                    }};
                                    kind = "laboriosam";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestias";
                                                        ipProtocol = "undefined";
                                                        kind = "saepe";
                                                        loadBalancerType = "none";
                                                        networkUrl = "occaecati";
                                                        port = "officiis";
                                                        project = "perspiciatis";
                                                        region = "in";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "adipisci";
                                                        ipProtocol = "udp";
                                                        kind = "occaecati";
                                                        loadBalancerType = "none";
                                                        networkUrl = "fugit";
                                                        port = "id";
                                                        project = "quis";
                                                        region = "reprehenderit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "error";
                                                        ipProtocol = "undefined";
                                                        kind = "corporis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "eveniet";
                                                        port = "non";
                                                        project = "vero";
                                                        region = "doloremque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iure";
                                                        ipProtocol = "undefined";
                                                        kind = "totam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "molestiae";
                                                        port = "eveniet";
                                                        project = "qui";
                                                        region = "cum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "iure";
                                            rrdatas = new String[]{{
                                                add("ratione"),
                                                add("laborum"),
                                                add("distinctio"),
                                                add("voluptatum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("aliquam"),
                                                add("ad"),
                                                add("repellat"),
                                            }};
                                            weight = 30.99;
                                        }}),
                                    }};
                                    kind = "corporis";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("nihil"),
                                add("mollitia"),
                                add("voluptas"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("maiores"),
                            }};
                            ttl = 970222;
                            type = "dolores";
                        }}),
                    }};
                    deletions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "minima";
                            name = "dolore";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quae";
                                                        ipProtocol = "udp";
                                                        kind = "omnis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "molestiae";
                                                        port = "ex";
                                                        project = "ut";
                                                        region = "culpa";
                                                    }}),
                                                }};
                                            }};
                                            kind = "adipisci";
                                            location = "debitis";
                                            rrdatas = new String[]{{
                                                add("eum"),
                                                add("nemo"),
                                                add("recusandae"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("provident"),
                                                add("quis"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "reiciendis";
                                                        ipProtocol = "tcp";
                                                        kind = "aspernatur";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quasi";
                                                        port = "animi";
                                                        project = "nostrum";
                                                        region = "mollitia";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "provident";
                                                        ipProtocol = "udp";
                                                        kind = "animi";
                                                        loadBalancerType = "none";
                                                        networkUrl = "aliquid";
                                                        port = "accusantium";
                                                        project = "repellat";
                                                        region = "doloribus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ullam";
                                            location = "in";
                                            rrdatas = new String[]{{
                                                add("earum"),
                                                add("officia"),
                                                add("laborum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("modi"),
                                                add("voluptatibus"),
                                                add("molestias"),
                                                add("officiis"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cumque";
                                                        ipProtocol = "undefined";
                                                        kind = "rerum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quis";
                                                        port = "inventore";
                                                        project = "fugit";
                                                        region = "cumque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quae";
                                                        ipProtocol = "undefined";
                                                        kind = "velit";
                                                        loadBalancerType = "none";
                                                        networkUrl = "eum";
                                                        port = "eius";
                                                        project = "rem";
                                                        region = "at";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "impedit";
                                                        ipProtocol = "undefined";
                                                        kind = "sapiente";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dicta";
                                                        port = "minima";
                                                        project = "beatae";
                                                        region = "cupiditate";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "provident";
                                                        ipProtocol = "udp";
                                                        kind = "soluta";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "illum";
                                                        port = "eaque";
                                                        project = "earum";
                                                        region = "perspiciatis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "maiores";
                                            location = "debitis";
                                            rrdatas = new String[]{{
                                                add("porro"),
                                                add("suscipit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("fugit"),
                                            }};
                                        }}),
                                    }};
                                    kind = "cumque";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "animi";
                                                        ipProtocol = "udp";
                                                        kind = "nulla";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quasi";
                                                        port = "et";
                                                        project = "ducimus";
                                                        region = "natus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "occaecati";
                                            location = "suscipit";
                                            rrdatas = new String[]{{
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
                                                        ipProtocol = "undefined";
                                                        kind = "tempora";
                                                        loadBalancerType = "none";
                                                        networkUrl = "molestiae";
                                                        port = "dicta";
                                                        project = "iusto";
                                                        region = "esse";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "praesentium";
                                                        ipProtocol = "udp";
                                                        kind = "reiciendis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "architecto";
                                                        port = "fugiat";
                                                        project = "doloremque";
                                                        region = "dicta";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odio";
                                                        ipProtocol = "undefined";
                                                        kind = "esse";
                                                        loadBalancerType = "none";
                                                        networkUrl = "consectetur";
                                                        port = "aliquid";
                                                        project = "ipsa";
                                                        region = "laborum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sunt";
                                                        ipProtocol = "tcp";
                                                        kind = "fugiat";
                                                        loadBalancerType = "regionalL4ilb";
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
                                                        ipProtocol = "tcp";
                                                        kind = "laborum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ad";
                                                        port = "deleniti";
                                                        project = "enim";
                                                        region = "vitae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repellendus";
                                                        ipProtocol = "tcp";
                                                        kind = "quo";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ut";
                                                        port = "ad";
                                                        project = "expedita";
                                                        region = "voluptatem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestias";
                                                        ipProtocol = "udp";
                                                        kind = "aliquid";
                                                        loadBalancerType = "none";
                                                        networkUrl = "voluptatum";
                                                        port = "omnis";
                                                        project = "veritatis";
                                                        region = "rerum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "est";
                                                        ipProtocol = "tcp";
                                                        kind = "voluptatem";
                                                        loadBalancerType = "regionalL4ilb";
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
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "perferendis";
                                                            ipProtocol = "udp";
                                                            kind = "totam";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "quibusdam";
                                                            port = "nam";
                                                            project = "ipsam";
                                                            region = "culpa";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolor";
                                                            ipProtocol = "undefined";
                                                            kind = "inventore";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "veritatis";
                                                            port = "tempora";
                                                            project = "dolor";
                                                            region = "consequatur";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "architecto";
                                                location = "sit";
                                                rrdatas = new String[]{{
                                                    add("fugit"),
                                                    add("ab"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quae"),
                                                    add("dolor"),
                                                    add("fugiat"),
                                                }};
                                            }}),
                                        }};
                                        kind = "ipsam";
                                    }};
                                    kind = "consequuntur";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quas";
                                                ipProtocol = "udp";
                                                kind = "impedit";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "esse";
                                                port = "necessitatibus";
                                                project = "sed";
                                                region = "veniam";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 1995.96;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vel";
                                                        ipProtocol = "tcp";
                                                        kind = "magnam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ab";
                                                        port = "porro";
                                                        project = "autem";
                                                        region = "nobis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laboriosam";
                                                        ipProtocol = "udp";
                                                        kind = "consequuntur";
                                                        loadBalancerType = "none";
                                                        networkUrl = "exercitationem";
                                                        port = "necessitatibus";
                                                        project = "quasi";
                                                        region = "nisi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "at";
                                            rrdatas = new String[]{{
                                                add("est"),
                                                add("harum"),
                                                add("sequi"),
                                                add("doloribus"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("optio"),
                                                add("occaecati"),
                                                add("nemo"),
                                                add("voluptate"),
                                            }};
                                            weight = 5010.63;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptas";
                                                        ipProtocol = "undefined";
                                                        kind = "nemo";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "eius";
                                                        port = "aspernatur";
                                                        project = "ducimus";
                                                        region = "nesciunt";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fuga";
                                                        ipProtocol = "tcp";
                                                        kind = "incidunt";
                                                        loadBalancerType = "none";
                                                        networkUrl = "rem";
                                                        port = "fugiat";
                                                        project = "dicta";
                                                        region = "nisi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequuntur";
                                                        ipProtocol = "undefined";
                                                        kind = "aperiam";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "reiciendis";
                                                        port = "soluta";
                                                        project = "alias";
                                                        region = "omnis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "eos";
                                            rrdatas = new String[]{{
                                                add("iste"),
                                                add("magni"),
                                                add("inventore"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("accusamus"),
                                                add("voluptatibus"),
                                                add("distinctio"),
                                            }};
                                            weight = 6085.93;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "minima";
                                                        ipProtocol = "tcp";
                                                        kind = "maxime";
                                                        loadBalancerType = "none";
                                                        networkUrl = "temporibus";
                                                        port = "quos";
                                                        project = "commodi";
                                                        region = "itaque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "commodi";
                                                        ipProtocol = "tcp";
                                                        kind = "earum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "nam";
                                                        port = "vero";
                                                        project = "voluptatem";
                                                        region = "ipsam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vel";
                                                        ipProtocol = "undefined";
                                                        kind = "quasi";
                                                        loadBalancerType = "none";
                                                        networkUrl = "maiores";
                                                        port = "enim";
                                                        project = "sint";
                                                        region = "nulla";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deserunt";
                                                        ipProtocol = "tcp";
                                                        kind = "nemo";
                                                        loadBalancerType = "none";
                                                        networkUrl = "est";
                                                        port = "quis";
                                                        project = "sint";
                                                        region = "accusamus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "impedit";
                                            rrdatas = new String[]{{
                                                add("necessitatibus"),
                                                add("asperiores"),
                                                add("ex"),
                                                add("voluptas"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("delectus"),
                                                add("quae"),
                                                add("minus"),
                                                add("fuga"),
                                            }};
                                            weight = 6756.89;
                                        }}),
                                    }};
                                    kind = "consectetur";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsum";
                                                        ipProtocol = "udp";
                                                        kind = "magni";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "repudiandae";
                                                        port = "nam";
                                                        project = "dolore";
                                                        region = "iusto";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptate";
                                                        ipProtocol = "undefined";
                                                        kind = "dignissimos";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quo";
                                                        port = "deleniti";
                                                        project = "quibusdam";
                                                        region = "iure";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odit";
                                                        ipProtocol = "udp";
                                                        kind = "vel";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quibusdam";
                                                        port = "inventore";
                                                        project = "facere";
                                                        region = "libero";
                                                    }}),
                                                }};
                                            }};
                                            kind = "architecto";
                                            rrdatas = new String[]{{
                                                add("quia"),
                                                add("porro"),
                                                add("aliquam"),
                                                add("velit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("accusantium"),
                                            }};
                                            weight = 4246.63;
                                        }}),
                                    }};
                                    kind = "ea";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("vero"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("eum"),
                                add("velit"),
                                add("ut"),
                            }};
                            ttl = 596433;
                            type = "earum";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "dicta";
                            name = "impedit";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "itaque";
                                                        ipProtocol = "undefined";
                                                        kind = "nisi";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "velit";
                                                        port = "laborum";
                                                        project = "non";
                                                        region = "dolor";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iusto";
                                                        ipProtocol = "undefined";
                                                        kind = "doloremque";
                                                        loadBalancerType = "none";
                                                        networkUrl = "officia";
                                                        port = "recusandae";
                                                        project = "ea";
                                                        region = "quidem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptas";
                                                        ipProtocol = "udp";
                                                        kind = "placeat";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "expedita";
                                                        port = "deleniti";
                                                        project = "a";
                                                        region = "voluptate";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ullam";
                                            location = "unde";
                                            rrdatas = new String[]{{
                                                add("animi"),
                                                add("impedit"),
                                                add("ipsam"),
                                                add("corporis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("error"),
                                                add("esse"),
                                                add("labore"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vero";
                                                        ipProtocol = "undefined";
                                                        kind = "vitae";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dolorem";
                                                        port = "ad";
                                                        project = "qui";
                                                        region = "iste";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ex";
                                            location = "nemo";
                                            rrdatas = new String[]{{
                                                add("libero"),
                                                add("rem"),
                                                add("dolorum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("fugit"),
                                                add("alias"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vel";
                                                        ipProtocol = "undefined";
                                                        kind = "quae";
                                                        loadBalancerType = "none";
                                                        networkUrl = "neque";
                                                        port = "exercitationem";
                                                        project = "itaque";
                                                        region = "et";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsum";
                                            location = "unde";
                                            rrdatas = new String[]{{
                                                add("distinctio"),
                                                add("maxime"),
                                                add("quia"),
                                                add("quia"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("omnis"),
                                                add("libero"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "id";
                                                        ipProtocol = "udp";
                                                        kind = "fugiat";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quos";
                                                        port = "placeat";
                                                        project = "sit";
                                                        region = "iusto";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsa";
                                            location = "voluptates";
                                            rrdatas = new String[]{{
                                                add("aperiam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("dolore"),
                                                add("eligendi"),
                                                add("distinctio"),
                                            }};
                                        }}),
                                    }};
                                    kind = "voluptatem";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolores";
                                                        ipProtocol = "udp";
                                                        kind = "beatae";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "facere";
                                                        port = "corrupti";
                                                        project = "molestiae";
                                                        region = "provident";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "accusamus";
                                                        ipProtocol = "udp";
                                                        kind = "tempore";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ea";
                                                        port = "autem";
                                                        project = "ipsam";
                                                        region = "rerum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "laudantium";
                                            location = "corporis";
                                            rrdatas = new String[]{{
                                                add("voluptatibus"),
                                                add("cum"),
                                                add("at"),
                                                add("alias"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quidem"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repudiandae";
                                                        ipProtocol = "undefined";
                                                        kind = "expedita";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "eos";
                                                        port = "quibusdam";
                                                        project = "odio";
                                                        region = "praesentium";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odit";
                                                        ipProtocol = "undefined";
                                                        kind = "corporis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "earum";
                                                        port = "adipisci";
                                                        project = "recusandae";
                                                        region = "similique";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ut";
                                                        ipProtocol = "udp";
                                                        kind = "quis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "unde";
                                                        port = "molestiae";
                                                        project = "delectus";
                                                        region = "cupiditate";
                                                    }}),
                                                }};
                                            }};
                                            kind = "fugit";
                                            location = "numquam";
                                            rrdatas = new String[]{{
                                                add("nesciunt"),
                                                add("at"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("dignissimos"),
                                                add("optio"),
                                                add("necessitatibus"),
                                            }};
                                        }}),
                                    }};
                                    kind = "corporis";
                                }};
                                kind = "qui";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "cupiditate";
                                                            ipProtocol = "undefined";
                                                            kind = "placeat";
                                                            loadBalancerType = "none";
                                                            networkUrl = "neque";
                                                            port = "in";
                                                            project = "minus";
                                                            region = "eum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "modi";
                                                            ipProtocol = "tcp";
                                                            kind = "magnam";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "maiores";
                                                            port = "tempore";
                                                            project = "aperiam";
                                                            region = "libero";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ratione";
                                                            ipProtocol = "undefined";
                                                            kind = "totam";
                                                            loadBalancerType = "regionalL4ilb";
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
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "aperiam";
                                                            ipProtocol = "tcp";
                                                            kind = "minima";
                                                            loadBalancerType = "none";
                                                            networkUrl = "ducimus";
                                                            port = "excepturi";
                                                            project = "dolores";
                                                            region = "error";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "veritatis";
                                                            ipProtocol = "tcp";
                                                            kind = "voluptate";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "itaque";
                                                            port = "similique";
                                                            project = "optio";
                                                            region = "ex";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quaerat";
                                                location = "commodi";
                                                rrdatas = new String[]{{
                                                    add("placeat"),
                                                    add("quidem"),
                                                    add("exercitationem"),
                                                    add("quam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("modi"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sint";
                                                            ipProtocol = "udp";
                                                            kind = "sequi";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "cum";
                                                            port = "dicta";
                                                            project = "earum";
                                                            region = "veniam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "animi";
                                                location = "dolores";
                                                rrdatas = new String[]{{
                                                    add("dicta"),
                                                    add("consequuntur"),
                                                    add("necessitatibus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ipsa"),
                                                    add("ducimus"),
                                                    add("maiores"),
                                                }};
                                            }}),
                                        }};
                                        kind = "veritatis";
                                    }};
                                    kind = "quasi";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "pariatur";
                                                ipProtocol = "udp";
                                                kind = "excepturi";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "nemo";
                                                port = "aliquam";
                                                project = "nostrum";
                                                region = "doloribus";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "eligendi";
                                                ipProtocol = "tcp";
                                                kind = "enim";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "animi";
                                                port = "quas";
                                                project = "totam";
                                                region = "molestias";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 4849.66;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "architecto";
                                                        ipProtocol = "tcp";
                                                        kind = "iste";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "tempore";
                                                        port = "libero";
                                                        project = "velit";
                                                        region = "doloremque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "delectus";
                                                        ipProtocol = "udp";
                                                        kind = "cum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "adipisci";
                                                        port = "saepe";
                                                        project = "deserunt";
                                                        region = "doloremque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quis";
                                                        ipProtocol = "undefined";
                                                        kind = "libero";
                                                        loadBalancerType = "none";
                                                        networkUrl = "cupiditate";
                                                        port = "molestiae";
                                                        project = "eligendi";
                                                        region = "possimus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "non";
                                                        ipProtocol = "undefined";
                                                        kind = "itaque";
                                                        loadBalancerType = "none";
                                                        networkUrl = "asperiores";
                                                        port = "veniam";
                                                        project = "consequuntur";
                                                        region = "facere";
                                                    }}),
                                                }};
                                            }};
                                            kind = "laudantium";
                                            rrdatas = new String[]{{
                                                add("pariatur"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("exercitationem"),
                                            }};
                                            weight = 688.52;
                                        }}),
                                    }};
                                    kind = "velit";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nisi";
                                                        ipProtocol = "udp";
                                                        kind = "quaerat";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "distinctio";
                                                        port = "nisi";
                                                        project = "quis";
                                                        region = "nisi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "libero";
                                                        ipProtocol = "udp";
                                                        kind = "facere";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ipsum";
                                                        port = "ad";
                                                        project = "voluptatibus";
                                                        region = "voluptatibus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequuntur";
                                                        ipProtocol = "udp";
                                                        kind = "labore";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "eos";
                                                        port = "reprehenderit";
                                                        project = "nostrum";
                                                        region = "neque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "iusto";
                                            rrdatas = new String[]{{
                                                add("rem"),
                                                add("eligendi"),
                                                add("fugiat"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("officiis"),
                                                add("ducimus"),
                                                add("dolor"),
                                            }};
                                            weight = 1180.41;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "porro";
                                                        ipProtocol = "undefined";
                                                        kind = "dignissimos";
                                                        loadBalancerType = "none";
                                                        networkUrl = "fugiat";
                                                        port = "ad";
                                                        project = "aspernatur";
                                                        region = "enim";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "delectus";
                                                        ipProtocol = "tcp";
                                                        kind = "dignissimos";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "illo";
                                                        port = "ab";
                                                        project = "incidunt";
                                                        region = "accusamus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "saepe";
                                                        ipProtocol = "udp";
                                                        kind = "veniam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "reiciendis";
                                                        port = "earum";
                                                        project = "reprehenderit";
                                                        region = "praesentium";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nemo";
                                            rrdatas = new String[]{{
                                                add("quisquam"),
                                                add("sequi"),
                                                add("nihil"),
                                                add("deleniti"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("labore"),
                                            }};
                                            weight = 8288.41;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quisquam";
                                                        ipProtocol = "tcp";
                                                        kind = "laudantium";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "consequatur";
                                                        port = "maxime";
                                                        project = "aspernatur";
                                                        region = "nam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "expedita";
                                                        ipProtocol = "tcp";
                                                        kind = "provident";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "rerum";
                                                        port = "dignissimos";
                                                        project = "corporis";
                                                        region = "vero";
                                                    }}),
                                                }};
                                            }};
                                            kind = "similique";
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
                                            weight = 3228.29;
                                        }}),
                                    }};
                                    kind = "quae";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("illum"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("quidem"),
                                add("cum"),
                                add("amet"),
                            }};
                            ttl = 97676;
                            type = "dicta";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "laudantium";
                            name = "doloremque";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "amet";
                                                        ipProtocol = "tcp";
                                                        kind = "dolorum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "provident";
                                                        port = "repudiandae";
                                                        project = "consequatur";
                                                        region = "nemo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = "udp";
                                                        kind = "facilis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "aperiam";
                                                        port = "sint";
                                                        project = "accusamus";
                                                        region = "eos";
                                                    }}),
                                                }};
                                            }};
                                            kind = "totam";
                                            location = "dicta";
                                            rrdatas = new String[]{{
                                                add("velit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("sunt"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolor";
                                                        ipProtocol = "tcp";
                                                        kind = "atque";
                                                        loadBalancerType = "none";
                                                        networkUrl = "at";
                                                        port = "labore";
                                                        project = "minus";
                                                        region = "esse";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatem";
                                                        ipProtocol = "undefined";
                                                        kind = "rerum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "aperiam";
                                                        port = "dignissimos";
                                                        project = "repellat";
                                                        region = "velit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "porro";
                                                        ipProtocol = "tcp";
                                                        kind = "consectetur";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "dignissimos";
                                                        port = "consectetur";
                                                        project = "soluta";
                                                        region = "natus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "temporibus";
                                                        ipProtocol = "tcp";
                                                        kind = "amet";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "aspernatur";
                                                        port = "quo";
                                                        project = "itaque";
                                                        region = "illum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "laborum";
                                            location = "dignissimos";
                                            rrdatas = new String[]{{
                                                add("qui"),
                                                add("consectetur"),
                                                add("repellat"),
                                                add("explicabo"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("exercitationem"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "non";
                                                        ipProtocol = "undefined";
                                                        kind = "illo";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "deserunt";
                                                        port = "delectus";
                                                        project = "non";
                                                        region = "distinctio";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "in";
                                                        ipProtocol = "tcp";
                                                        kind = "labore";
                                                        loadBalancerType = "none";
                                                        networkUrl = "repudiandae";
                                                        port = "modi";
                                                        project = "in";
                                                        region = "explicabo";
                                                    }}),
                                                }};
                                            }};
                                            kind = "accusamus";
                                            location = "rem";
                                            rrdatas = new String[]{{
                                                add("odit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("enim"),
                                                add("voluptate"),
                                                add("similique"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "libero";
                                                        ipProtocol = "undefined";
                                                        kind = "sit";
                                                        loadBalancerType = "none";
                                                        networkUrl = "eum";
                                                        port = "nesciunt";
                                                        project = "mollitia";
                                                        region = "dignissimos";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fugiat";
                                                        ipProtocol = "tcp";
                                                        kind = "molestiae";
                                                        loadBalancerType = "none";
                                                        networkUrl = "reiciendis";
                                                        port = "ab";
                                                        project = "modi";
                                                        region = "aut";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aut";
                                            location = "eveniet";
                                            rrdatas = new String[]{{
                                                add("commodi"),
                                                add("numquam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("possimus"),
                                                add("voluptate"),
                                                add("consectetur"),
                                            }};
                                        }}),
                                    }};
                                    kind = "nesciunt";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "minus";
                                                        ipProtocol = "undefined";
                                                        kind = "distinctio";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quas";
                                                        port = "et";
                                                        project = "facilis";
                                                        region = "amet";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "autem";
                                                        ipProtocol = "udp";
                                                        kind = "alias";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "aut";
                                                        port = "quos";
                                                        project = "laudantium";
                                                        region = "repellendus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "veritatis";
                                                        ipProtocol = "undefined";
                                                        kind = "eaque";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "delectus";
                                                        port = "mollitia";
                                                        project = "nulla";
                                                        region = "officia";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sed";
                                                        ipProtocol = "undefined";
                                                        kind = "alias";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "hic";
                                                        port = "voluptatem";
                                                        project = "incidunt";
                                                        region = "qui";
                                                    }}),
                                                }};
                                            }};
                                            kind = "qui";
                                            location = "necessitatibus";
                                            rrdatas = new String[]{{
                                                add("explicabo"),
                                                add("beatae"),
                                                add("aliquid"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("optio"),
                                                add("voluptatibus"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officia";
                                                        ipProtocol = "udp";
                                                        kind = "totam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "aliquid";
                                                        port = "ea";
                                                        project = "impedit";
                                                        region = "ducimus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odit";
                                                        ipProtocol = "undefined";
                                                        kind = "reiciendis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "nulla";
                                                        port = "laborum";
                                                        project = "natus";
                                                        region = "accusamus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "doloremque";
                                                        ipProtocol = "tcp";
                                                        kind = "rerum";
                                                        loadBalancerType = "regionalL4ilb";
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
                                    }};
                                    kind = "enim";
                                }};
                                kind = "optio";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facilis";
                                                            ipProtocol = "udp";
                                                            kind = "a";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "dicta";
                                                            port = "quos";
                                                            project = "ullam";
                                                            region = "dolore";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "modi";
                                                location = "itaque";
                                                rrdatas = new String[]{{
                                                    add("modi"),
                                                    add("consequuntur"),
                                                    add("assumenda"),
                                                    add("vero"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("impedit"),
                                                    add("porro"),
                                                    add("accusamus"),
                                                    add("totam"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ab";
                                                            ipProtocol = "tcp";
                                                            kind = "nihil";
                                                            loadBalancerType = "none";
                                                            networkUrl = "iure";
                                                            port = "odio";
                                                            project = "nesciunt";
                                                            region = "debitis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vel";
                                                            ipProtocol = "undefined";
                                                            kind = "corporis";
                                                            loadBalancerType = "none";
                                                            networkUrl = "consequuntur";
                                                            port = "officia";
                                                            project = "reprehenderit";
                                                            region = "distinctio";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eius";
                                                            ipProtocol = "undefined";
                                                            kind = "rem";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "accusantium";
                                                            port = "veniam";
                                                            project = "saepe";
                                                            region = "neque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facere";
                                                            ipProtocol = "undefined";
                                                            kind = "quos";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "fugiat";
                                                            port = "est";
                                                            project = "delectus";
                                                            region = "velit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "vitae";
                                                location = "nesciunt";
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
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "cupiditate";
                                                            ipProtocol = "udp";
                                                            kind = "alias";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "nesciunt";
                                                            port = "commodi";
                                                            project = "sapiente";
                                                            region = "consequuntur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "veniam";
                                                            ipProtocol = "udp";
                                                            kind = "officia";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "ut";
                                                            port = "numquam";
                                                            project = "tenetur";
                                                            region = "adipisci";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "libero";
                                                location = "in";
                                                rrdatas = new String[]{{
                                                    add("ex"),
                                                    add("minus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("beatae"),
                                                }};
                                            }}),
                                        }};
                                        kind = "hic";
                                    }};
                                    kind = "nisi";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "dolor";
                                                ipProtocol = "tcp";
                                                kind = "fuga";
                                                loadBalancerType = "none";
                                                networkUrl = "architecto";
                                                port = "qui";
                                                project = "aliquid";
                                                region = "magni";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "incidunt";
                                                ipProtocol = "undefined";
                                                kind = "praesentium";
                                                loadBalancerType = "none";
                                                networkUrl = "exercitationem";
                                                port = "expedita";
                                                project = "facilis";
                                                region = "impedit";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "sit";
                                                ipProtocol = "tcp";
                                                kind = "culpa";
                                                loadBalancerType = "none";
                                                networkUrl = "amet";
                                                port = "deserunt";
                                                project = "modi";
                                                region = "veniam";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quod";
                                                ipProtocol = "udp";
                                                kind = "a";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "enim";
                                                port = "doloribus";
                                                project = "assumenda";
                                                region = "officiis";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 1039.9;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsa";
                                                        ipProtocol = "udp";
                                                        kind = "necessitatibus";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dicta";
                                                        port = "vel";
                                                        project = "perspiciatis";
                                                        region = "debitis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ullam";
                                                        ipProtocol = "undefined";
                                                        kind = "accusantium";
                                                        loadBalancerType = "none";
                                                        networkUrl = "veritatis";
                                                        port = "provident";
                                                        project = "cumque";
                                                        region = "iure";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quibusdam";
                                                        ipProtocol = "udp";
                                                        kind = "nemo";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "velit";
                                                        port = "magnam";
                                                        project = "dignissimos";
                                                        region = "laboriosam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sed";
                                            rrdatas = new String[]{{
                                                add("natus"),
                                                add("provident"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("doloribus"),
                                                add("facilis"),
                                                add("quidem"),
                                            }};
                                            weight = 9320.8;
                                        }}),
                                    }};
                                    kind = "laboriosam";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "perspiciatis";
                                                        ipProtocol = "udp";
                                                        kind = "cum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "libero";
                                                        port = "nam";
                                                        project = "incidunt";
                                                        region = "recusandae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quod";
                                                        ipProtocol = "tcp";
                                                        kind = "saepe";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "undefined";
                                                        kind = "maxime";
                                                        loadBalancerType = "none";
                                                        networkUrl = "alias";
                                                        port = "suscipit";
                                                        project = "deserunt";
                                                        region = "molestias";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laborum";
                                                        ipProtocol = "udp";
                                                        kind = "occaecati";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quo";
                                                        port = "perferendis";
                                                        project = "fugit";
                                                        region = "aliquid";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magnam";
                                                        ipProtocol = "undefined";
                                                        kind = "eligendi";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "nostrum";
                                                        port = "officiis";
                                                        project = "unde";
                                                        region = "nulla";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "error";
                                                        ipProtocol = "tcp";
                                                        kind = "magnam";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "undefined";
                                                        kind = "architecto";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "porro";
                                                        port = "blanditiis";
                                                        project = "quae";
                                                        region = "magni";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officiis";
                                                        ipProtocol = "undefined";
                                                        kind = "necessitatibus";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ipsa";
                                                        port = "excepturi";
                                                        project = "a";
                                                        region = "maiores";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laudantium";
                                                        ipProtocol = "udp";
                                                        kind = "alias";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "rem";
                                                        port = "dicta";
                                                        project = "suscipit";
                                                        region = "earum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "doloribus";
                                                        ipProtocol = "undefined";
                                                        kind = "eius";
                                                        loadBalancerType = "none";
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
                    }};
                    id = "quas";
                    isServing = false;
                    kind = "veritatis";
                    startTime = "ullam";
                    status = "pending";
                }};
                accessToken = "similique";
                alt = "json";
                callback = "quam";
                clientOperationId = "magni";
                fields = "deserunt";
                key = "delectus";
                managedZone = "omnis";
                oauthToken = "sed";
                prettyPrint = false;
                project = "nesciunt";
                quotaUser = "maxime";
                uploadType = "quis";
                uploadProtocol = "cupiditate";
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### changes

* `dnsChangesCreate` - Atomically updates the ResourceRecordSet collection.
* `dnsChangesGet` - Fetches the representation of an existing Change.
* `dnsChangesList` - Enumerates Changes to a ResourceRecordSet collection.

### dnsKeys

* `dnsDnsKeysGet` - Fetches the representation of an existing DnsKey.
* `dnsDnsKeysList` - Enumerates DnsKeys to a ResourceRecordSet collection.

### managedZoneOperations

* `dnsManagedZoneOperationsGet` - Fetches the representation of an existing Operation.
* `dnsManagedZoneOperationsList` - Enumerates Operations for the given ManagedZone.

### managedZones

* `dnsManagedZonesCreate` - Creates a new ManagedZone.
* `dnsManagedZonesDelete` - Deletes a previously created ManagedZone.
* `dnsManagedZonesGet` - Fetches the representation of an existing ManagedZone.
* `dnsManagedZonesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `dnsManagedZonesList` - Enumerates ManagedZones that have been created but not yet deleted.
* `dnsManagedZonesPatch` - Applies a partial update to an existing ManagedZone.
* `dnsManagedZonesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `dnsManagedZonesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `dnsManagedZonesUpdate` - Updates an existing ManagedZone.

### policies

* `dnsPoliciesCreate` - Creates a new Policy.
* `dnsPoliciesDelete` - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
* `dnsPoliciesGet` - Fetches the representation of an existing Policy.
* `dnsPoliciesList` - Enumerates all Policies associated with a project.
* `dnsPoliciesPatch` - Applies a partial update to an existing Policy.
* `dnsPoliciesUpdate` - Updates an existing Policy.

### projects

* `dnsProjectsGet` - Fetches the representation of an existing Project.

### resourceRecordSets

* `dnsResourceRecordSetsCreate` - Creates a new ResourceRecordSet.
* `dnsResourceRecordSetsDelete` - Deletes a previously created ResourceRecordSet.
* `dnsResourceRecordSetsGet` - Fetches the representation of an existing ResourceRecordSet.
* `dnsResourceRecordSetsList` - Enumerates ResourceRecordSets that you have created but not yet deleted.
* `dnsResourceRecordSetsPatch` - Applies a partial update to an existing ResourceRecordSet.

### responsePolicies

* `dnsResponsePoliciesCreate` - Creates a new Response Policy
* `dnsResponsePoliciesDelete` - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
* `dnsResponsePoliciesGet` - Fetches the representation of an existing Response Policy.
* `dnsResponsePoliciesList` - Enumerates all Response Policies associated with a project.
* `dnsResponsePoliciesPatch` - Applies a partial update to an existing Response Policy.
* `dnsResponsePoliciesUpdate` - Updates an existing Response Policy.

### responsePolicyRules

* `dnsResponsePolicyRulesCreate` - Creates a new Response Policy Rule.
* `dnsResponsePolicyRulesDelete` - Deletes a previously created Response Policy Rule.
* `dnsResponsePolicyRulesGet` - Fetches the representation of an existing Response Policy Rule.
* `dnsResponsePolicyRulesList` - Enumerates all Response Policy Rules associated with a project.
* `dnsResponsePolicyRulesPatch` - Applies a partial update to an existing Response Policy Rule.
* `dnsResponsePolicyRulesUpdate` - Updates an existing Response Policy Rule.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
