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
                                                            ipProtocol = "tcp";
                                                            kind = "dolorem";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "consequuntur";
                                                            port = "repellat";
                                                            project = "mollitia";
                                                            region = "occaecati";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "numquam";
                                                            ipProtocol = "tcp";
                                                            kind = "quam";
                                                            loadBalancerType = "none";
                                                            networkUrl = "velit";
                                                            port = "error";
                                                            project = "quia";
                                                            region = "quis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vitae";
                                                            ipProtocol = "udp";
                                                            kind = "animi";
                                                            loadBalancerType = "none";
                                                            networkUrl = "odit";
                                                            port = "quo";
                                                            project = "sequi";
                                                            region = "tenetur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ipsam";
                                                            ipProtocol = "tcp";
                                                            kind = "possimus";
                                                            loadBalancerType = "none";
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
                                                            ipProtocol = "undefined";
                                                            kind = "doloremque";
                                                            loadBalancerType = "none";
                                                            networkUrl = "ut";
                                                            port = "maiores";
                                                            project = "dicta";
                                                            region = "corporis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolore";
                                                            ipProtocol = "tcp";
                                                            kind = "dicta";
                                                            loadBalancerType = "regionalL4ilb";
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
                                                            ipProtocol = "udp";
                                                            kind = "sint";
                                                            loadBalancerType = "none";
                                                            networkUrl = "itaque";
                                                            port = "incidunt";
                                                            project = "enim";
                                                            region = "consequatur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "est";
                                                            ipProtocol = "udp";
                                                            kind = "explicabo";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "distinctio";
                                                            port = "quibusdam";
                                                            project = "labore";
                                                            region = "modi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "qui";
                                                            ipProtocol = "tcp";
                                                            kind = "cupiditate";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "perferendis";
                                                            port = "magni";
                                                            project = "assumenda";
                                                            region = "ipsam";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "alias";
                                                            ipProtocol = "undefined";
                                                            kind = "dolorum";
                                                            loadBalancerType = "regionalL4ilb";
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
                                                            ipProtocol = "undefined";
                                                            kind = "debitis";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "dolorum";
                                                            port = "in";
                                                            project = "in";
                                                            region = "illum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "maiores";
                                                            ipProtocol = "udp";
                                                            kind = "dicta";
                                                            loadBalancerType = "none";
                                                            networkUrl = "cumque";
                                                            port = "facere";
                                                            project = "ea";
                                                            region = "aliquid";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "laborum";
                                                            ipProtocol = "udp";
                                                            kind = "non";
                                                            loadBalancerType = "regionalL4ilb";
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
                                                ipProtocol = "tcp";
                                                kind = "perferendis";
                                                loadBalancerType = "none";
                                                networkUrl = "magnam";
                                                port = "distinctio";
                                                project = "id";
                                                region = "labore";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "labore";
                                                ipProtocol = "tcp";
                                                kind = "natus";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "eum";
                                                port = "vero";
                                                project = "aspernatur";
                                                region = "architecto";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "magnam";
                                                ipProtocol = "undefined";
                                                kind = "excepturi";
                                                loadBalancerType = "none";
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
                                                        ipProtocol = "tcp";
                                                        kind = "dolor";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "odit";
                                                        port = "nemo";
                                                        project = "quasi";
                                                        region = "iure";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "doloribus";
                                                        ipProtocol = "udp";
                                                        kind = "eius";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "deleniti";
                                                        port = "facilis";
                                                        project = "in";
                                                        region = "architecto";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "architecto";
                                                        ipProtocol = "udp";
                                                        kind = "ullam";
                                                        loadBalancerType = "regionalL4ilb";
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
                                                        ipProtocol = "udp";
                                                        kind = "ea";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "odit";
                                                        port = "ea";
                                                        project = "accusantium";
                                                        region = "ab";
                                                    }}),
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
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nemo";
                                                        ipProtocol = "udp";
                                                        kind = "perferendis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "amet";
                                                        port = "aut";
                                                        project = "cumque";
                                                        region = "corporis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "hic";
                                                        ipProtocol = "udp";
                                                        kind = "nobis";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "udp";
                                                        kind = "nostrum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "recusandae";
                                                        port = "omnis";
                                                        project = "facilis";
                                                        region = "perspiciatis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatem";
                                                        ipProtocol = "udp";
                                                        kind = "consequuntur";
                                                        loadBalancerType = "regionalL4ilb";
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
                                                        ipProtocol = "tcp";
                                                        kind = "aliquid";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dolorem";
                                                        port = "dolor";
                                                        project = "qui";
                                                        region = "ipsum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "hic";
                                                        ipProtocol = "tcp";
                                                        kind = "cum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dignissimos";
                                                        port = "reiciendis";
                                                        project = "amet";
                                                        region = "dolorum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "numquam";
                                                        ipProtocol = "undefined";
                                                        kind = "ipsa";
                                                        loadBalancerType = "none";
                                                        networkUrl = "iure";
                                                        port = "odio";
                                                        project = "quaerat";
                                                        region = "accusamus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quidem";
                                                        ipProtocol = "udp";
                                                        kind = "voluptas";
                                                        loadBalancerType = "regionalL4ilb";
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
                                                        ipProtocol = "tcp";
                                                        kind = "provident";
                                                        loadBalancerType = "none";
                                                        networkUrl = "repellendus";
                                                        port = "totam";
                                                        project = "similique";
                                                        region = "alias";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "at";
                                                        ipProtocol = "undefined";
                                                        kind = "tempora";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quod";
                                                        port = "officiis";
                                                        project = "qui";
                                                        region = "dolorum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "a";
                                                        ipProtocol = "tcp";
                                                        kind = "harum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ipsum";
                                                        port = "quisquam";
                                                        project = "tenetur";
                                                        region = "amet";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempore";
                                                        ipProtocol = "udp";
                                                        kind = "numquam";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "undefined";
                                                        kind = "incidunt";
                                                        loadBalancerType = "none";
                                                        networkUrl = "cupiditate";
                                                        port = "maxime";
                                                        project = "pariatur";
                                                        region = "soluta";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dicta";
                                                        ipProtocol = "udp";
                                                        kind = "totam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "aspernatur";
                                                        port = "dolores";
                                                        project = "distinctio";
                                                        region = "facilis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aliquid";
                                                        ipProtocol = "tcp";
                                                        kind = "molestias";
                                                        loadBalancerType = "regionalL4ilb";
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
                                                            ipProtocol = "undefined";
                                                            kind = "nobis";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "tempore";
                                                            port = "cupiditate";
                                                            project = "aperiam";
                                                            region = "delectus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolorem";
                                                            ipProtocol = "undefined";
                                                            kind = "labore";
                                                            loadBalancerType = "none";
                                                            networkUrl = "dolorum";
                                                            port = "architecto";
                                                            project = "quae";
                                                            region = "aut";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quas";
                                                            ipProtocol = "udp";
                                                            kind = "consequatur";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "repellendus";
                                                            port = "porro";
                                                            project = "doloribus";
                                                            region = "ut";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facilis";
                                                            ipProtocol = "tcp";
                                                            kind = "qui";
                                                            loadBalancerType = "none";
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
                                                ipProtocol = "udp";
                                                kind = "odio";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "facilis";
                                                port = "vero";
                                                project = "ducimus";
                                                region = "dolore";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quibusdam";
                                                ipProtocol = "udp";
                                                kind = "sequi";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "impedit";
                                                port = "aut";
                                                project = "voluptatibus";
                                                region = "exercitationem";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "nulla";
                                                ipProtocol = "undefined";
                                                kind = "porro";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "doloribus";
                                                port = "iusto";
                                                project = "eligendi";
                                                region = "ducimus";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "alias";
                                                ipProtocol = "tcp";
                                                kind = "tempora";
                                                loadBalancerType = "none";
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
                                                        ipProtocol = "undefined";
                                                        kind = "dolor";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quasi";
                                                        port = "ex";
                                                        project = "nulla";
                                                        region = "excepturi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatibus";
                                                        ipProtocol = "tcp";
                                                        kind = "sapiente";
                                                        loadBalancerType = "regionalL4ilb";
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
                                                        ipProtocol = "udp";
                                                        kind = "laborum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "velit";
                                                        port = "eum";
                                                        project = "autem";
                                                        region = "nobis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quas";
                                                        ipProtocol = "udp";
                                                        kind = "nulla";
                                                        loadBalancerType = "none";
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
                                                            ipProtocol = "udp";
                                                            kind = "fugiat";
                                                            loadBalancerType = "none";
                                                            networkUrl = "eum";
                                                            port = "suscipit";
                                                            project = "assumenda";
                                                            region = "eos";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "praesentium";
                                                            ipProtocol = "udp";
                                                            kind = "veritatis";
                                                            loadBalancerType = "none";
                                                            networkUrl = "id";
                                                            port = "quidem";
                                                            project = "neque";
                                                            region = "quo";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "illum";
                                                            ipProtocol = "udp";
                                                            kind = "fuga";
                                                            loadBalancerType = "none";
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
                                                            ipProtocol = "tcp";
                                                            kind = "inventore";
                                                            loadBalancerType = "none";
                                                            networkUrl = "totam";
                                                            port = "accusamus";
                                                            project = "aliquam";
                                                            region = "odio";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "occaecati";
                                                            ipProtocol = "tcp";
                                                            kind = "sapiente";
                                                            loadBalancerType = "none";
                                                            networkUrl = "deserunt";
                                                            port = "molestiae";
                                                            project = "accusantium";
                                                            region = "porro";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eum";
                                                            ipProtocol = "tcp";
                                                            kind = "praesentium";
                                                            loadBalancerType = "none";
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
                                                            ipProtocol = "undefined";
                                                            kind = "saepe";
                                                            loadBalancerType = "regionalL4ilb";
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
                                                ipProtocol = "undefined";
                                                kind = "distinctio";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "sit";
                                                port = "culpa";
                                                project = "tempore";
                                                region = "adipisci";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "cumque";
                                                ipProtocol = "undefined";
                                                kind = "consequatur";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "quaerat";
                                                port = "sapiente";
                                                project = "consectetur";
                                                region = "esse";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "blanditiis";
                                                ipProtocol = "tcp";
                                                kind = "a";
                                                loadBalancerType = "regionalL4ilb";
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
                                                        ipProtocol = "undefined";
                                                        kind = "eveniet";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "facere";
                                                        port = "veritatis";
                                                        project = "consequuntur";
                                                        region = "quasi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "similique";
                                                        ipProtocol = "tcp";
                                                        kind = "aliquid";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quae";
                                                        port = "earum";
                                                        project = "vel";
                                                        region = "in";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eius";
                                                        ipProtocol = "udp";
                                                        kind = "illum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "accusantium";
                                                        port = "aliquam";
                                                        project = "sapiente";
                                                        region = "dicta";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ullam";
                                                        ipProtocol = "tcp";
                                                        kind = "ullam";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "undefined";
                                                        kind = "veritatis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "adipisci";
                                                        port = "iste";
                                                        project = "temporibus";
                                                        region = "accusantium";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rem";
                                                        ipProtocol = "undefined";
                                                        kind = "laudantium";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "undefined";
                                                        kind = "maiores";
                                                        loadBalancerType = "regionalL4ilb";
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
                                                        ipProtocol = "udp";
                                                        kind = "vel";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quos";
                                                        port = "vel";
                                                        project = "labore";
                                                        region = "possimus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facilis";
                                                        ipProtocol = "udp";
                                                        kind = "commodi";
                                                        loadBalancerType = "none";
                                                        networkUrl = "corporis";
                                                        port = "reiciendis";
                                                        project = "assumenda";
                                                        region = "nemo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = "tcp";
                                                        kind = "aperiam";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "consectetur";
                                                        port = "in";
                                                        project = "exercitationem";
                                                        region = "earum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facere";
                                                        ipProtocol = "undefined";
                                                        kind = "doloribus";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "udp";
                                                        kind = "laboriosam";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "undefined";
                                                        kind = "minus";
                                                        loadBalancerType = "none";
                                                        networkUrl = "blanditiis";
                                                        port = "in";
                                                        project = "dolore";
                                                        region = "aliquam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officiis";
                                                        ipProtocol = "udp";
                                                        kind = "ullam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "cum";
                                                        port = "blanditiis";
                                                        project = "quas";
                                                        region = "hic";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nesciunt";
                                                        ipProtocol = "tcp";
                                                        kind = "corrupti";
                                                        loadBalancerType = "regionalL4ilb";
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
                                                            ipProtocol = "undefined";
                                                            kind = "laborum";
                                                            loadBalancerType = "none";
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
                                                            ipProtocol = "undefined";
                                                            kind = "sed";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "eius";
                                                            port = "necessitatibus";
                                                            project = "ipsum";
                                                            region = "ea";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "occaecati";
                                                            ipProtocol = "tcp";
                                                            kind = "voluptatibus";
                                                            loadBalancerType = "none";
                                                            networkUrl = "tempora";
                                                            port = "voluptate";
                                                            project = "reiciendis";
                                                            region = "ex";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = "undefined";
                                                            kind = "officiis";
                                                            loadBalancerType = "regionalL4ilb";
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
                                                            ipProtocol = "undefined";
                                                            kind = "aperiam";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "numquam";
                                                            port = "veniam";
                                                            project = "in";
                                                            region = "officiis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "beatae";
                                                            ipProtocol = "tcp";
                                                            kind = "exercitationem";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "cum";
                                                            port = "laboriosam";
                                                            project = "dolorum";
                                                            region = "voluptatum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "error";
                                                            ipProtocol = "udp";
                                                            kind = "expedita";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "neque";
                                                            port = "dolorum";
                                                            project = "nostrum";
                                                            region = "officia";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolorum";
                                                            ipProtocol = "tcp";
                                                            kind = "accusamus";
                                                            loadBalancerType = "none";
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
                                                ipProtocol = "tcp";
                                                kind = "ex";
                                                loadBalancerType = "none";
                                                networkUrl = "sit";
                                                port = "vel";
                                                project = "nostrum";
                                                region = "saepe";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "error";
                                                ipProtocol = "undefined";
                                                kind = "incidunt";
                                                loadBalancerType = "regionalL4ilb";
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
                                                        ipProtocol = "udp";
                                                        kind = "nam";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "laboriosam";
                                                        port = "alias";
                                                        project = "amet";
                                                        region = "deserunt";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptate";
                                                        ipProtocol = "tcp";
                                                        kind = "reiciendis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "repellendus";
                                                        port = "delectus";
                                                        project = "voluptates";
                                                        region = "perferendis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "est";
                                                        ipProtocol = "udp";
                                                        kind = "reprehenderit";
                                                        loadBalancerType = "regionalL4ilb";
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
                                                        ipProtocol = "udp";
                                                        kind = "ea";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "error";
                                                        port = "officiis";
                                                        project = "officiis";
                                                        region = "accusamus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "natus";
                                                        ipProtocol = "undefined";
                                                        kind = "aspernatur";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "undefined";
                                                        kind = "occaecati";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "perspiciatis";
                                                        port = "in";
                                                        project = "adipisci";
                                                        region = "eveniet";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "occaecati";
                                                        ipProtocol = "undefined";
                                                        kind = "fugit";
                                                        loadBalancerType = "regionalL4ilb";
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
                                                        ipProtocol = "udp";
                                                        kind = "qui";
                                                        loadBalancerType = "regionalL4ilb";
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
                                                        ipProtocol = "tcp";
                                                        kind = "voluptas";
                                                        loadBalancerType = "none";
                                                        networkUrl = "maiores";
                                                        port = "reiciendis";
                                                        project = "dolores";
                                                        region = "id";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "minima";
                                                        ipProtocol = "undefined";
                                                        kind = "dolorum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quae";
                                                        port = "recusandae";
                                                        project = "omnis";
                                                        region = "quaerat";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = "tcp";
                                                        kind = "ut";
                                                        loadBalancerType = "regionalL4ilb";
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
                                                            ipProtocol = "tcp";
                                                            kind = "provident";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "animi";
                                                            port = "ex";
                                                            project = "aliquid";
                                                            region = "accusantium";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "repellat";
                                                            ipProtocol = "udp";
                                                            kind = "ullam";
                                                            loadBalancerType = "none";
                                                            networkUrl = "nam";
                                                            port = "earum";
                                                            project = "officia";
                                                            region = "laborum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "placeat";
                                                            ipProtocol = "undefined";
                                                            kind = "voluptatibus";
                                                            loadBalancerType = "regionalL4ilb";
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
                                                ipProtocol = "udp";
                                                kind = "eos";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "eum";
                                                port = "dicta";
                                                project = "minima";
                                                region = "beatae";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "cupiditate";
                                                ipProtocol = "tcp";
                                                kind = "earum";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "hic";
                                                port = "illum";
                                                project = "eaque";
                                                region = "earum";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "perspiciatis";
                                                ipProtocol = "udp";
                                                kind = "debitis";
                                                loadBalancerType = "none";
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
                                                        ipProtocol = "undefined";
                                                        kind = "nihil";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dicta";
                                                        port = "iusto";
                                                        project = "esse";
                                                        region = "praesentium";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "maiores";
                                                        ipProtocol = "udp";
                                                        kind = "vel";
                                                        loadBalancerType = "none";
                                                        networkUrl = "fugiat";
                                                        port = "doloremque";
                                                        project = "dicta";
                                                        region = "odio";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempora";
                                                        ipProtocol = "tcp";
                                                        kind = "ex";
                                                        loadBalancerType = "none";
                                                        networkUrl = "aliquid";
                                                        port = "ipsa";
                                                        project = "laborum";
                                                        region = "sunt";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nostrum";
                                                        ipProtocol = "udp";
                                                        kind = "expedita";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "udp";
                                                        kind = "libero";
                                                        loadBalancerType = "none";
                                                        networkUrl = "deleniti";
                                                        port = "enim";
                                                        project = "vitae";
                                                        region = "repellendus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ex";
                                                        ipProtocol = "udp";
                                                        kind = "ex";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ad";
                                                        port = "expedita";
                                                        project = "voluptatem";
                                                        region = "molestias";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cum";
                                                        ipProtocol = "tcp";
                                                        kind = "beatae";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "omnis";
                                                        port = "veritatis";
                                                        project = "rerum";
                                                        region = "est";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "culpa";
                                                        ipProtocol = "undefined";
                                                        kind = "sapiente";
                                                        loadBalancerType = "regionalL4ilb";
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
                    status = "done";
                }};
                accessToken = "dolor";
                alt = "json";
                callback = "inventore";
                clientOperationId = "deleniti";
                fields = "veritatis";
                key = "tempora";
                managedZone = "dolor";
                oauthToken = "consequatur";
                prettyPrint = false;
                project = "architecto";
                quotaUser = "sit";
                uploadType = "modi";
                uploadProtocol = "fugit";
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
