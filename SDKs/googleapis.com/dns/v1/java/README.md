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
import org.openapis.openapi.models.operations.DnsChangesCreatePathParams;
import org.openapis.openapi.models.operations.DnsChangesCreateQueryParams;
import org.openapis.openapi.models.operations.DnsChangesCreateRequest;
import org.openapis.openapi.models.operations.DnsChangesCreateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsChangesCreateRequest req = new DnsChangesCreateRequest() {{
                security = new DnsChangesCreateSecurity() {{
                    option1 = new DnsChangesCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DnsChangesCreatePathParams() {{
                    managedZone = "corrupti";
                    project = "provident";
                }};
                queryParams = new DnsChangesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quibusdam";
                    alt = "media";
                    callback = "nulla";
                    clientOperationId = "corrupti";
                    fields = "illum";
                    key = "vel";
                    oauthToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new Change() {{
                    additions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "debitis";
                            name = "ipsa";
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
                                                        kind = "minus";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "voluptatum";
                                                        port = "iusto";
                                                        project = "excepturi";
                                                        region = "nisi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = "udp";
                                                        kind = "ab";
                                                        loadBalancerType = "none";
                                                        networkUrl = "veritatis";
                                                        port = "deserunt";
                                                        project = "perferendis";
                                                        region = "ipsam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "repellendus";
                                            location = "sapiente";
                                            rrdatas = new String[]{{
                                                add("odit"),
                                                add("at"),
                                                add("at"),
                                                add("maiores"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quod"),
                                                add("quod"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "totam";
                                                        ipProtocol = "udp";
                                                        kind = "dolorum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "nam";
                                                        port = "officia";
                                                        project = "occaecati";
                                                        region = "fugit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deleniti";
                                                        ipProtocol = "udp";
                                                        kind = "optio";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "beatae";
                                                        port = "commodi";
                                                        project = "molestiae";
                                                        region = "modi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "qui";
                                            location = "impedit";
                                            rrdatas = new String[]{{
                                                add("esse"),
                                                add("ipsum"),
                                                add("excepturi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("perferendis"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "natus";
                                                        ipProtocol = "undefined";
                                                        kind = "iste";
                                                        loadBalancerType = "none";
                                                        networkUrl = "natus";
                                                        port = "laboriosam";
                                                        project = "hic";
                                                        region = "saepe";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fuga";
                                                        ipProtocol = "tcp";
                                                        kind = "corporis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "iure";
                                                        port = "saepe";
                                                        project = "quidem";
                                                        region = "architecto";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsa";
                                            location = "reiciendis";
                                            rrdatas = new String[]{{
                                                add("mollitia"),
                                                add("laborum"),
                                                add("dolores"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("corporis"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nobis";
                                                        ipProtocol = "undefined";
                                                        kind = "omnis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "minima";
                                                        port = "excepturi";
                                                        project = "accusantium";
                                                        region = "iure";
                                                    }}),
                                                }};
                                            }};
                                            kind = "culpa";
                                            location = "doloribus";
                                            rrdatas = new String[]{{
                                                add("architecto"),
                                                add("mollitia"),
                                                add("dolorem"),
                                                add("culpa"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("repellat"),
                                            }};
                                        }}),
                                    }};
                                    kind = "mollitia";
                                }};
                                kind = "occaecati";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quam";
                                                            ipProtocol = "tcp";
                                                            kind = "velit";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "quia";
                                                            port = "quis";
                                                            project = "vitae";
                                                            region = "laborum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "animi";
                                                            ipProtocol = "undefined";
                                                            kind = "odit";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "sequi";
                                                            port = "tenetur";
                                                            project = "ipsam";
                                                            region = "id";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "possimus";
                                                location = "aut";
                                                rrdatas = new String[]{{
                                                    add("error"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("laborum"),
                                                    add("quasi"),
                                                    add("reiciendis"),
                                                    add("voluptatibus"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nihil";
                                                            ipProtocol = "tcp";
                                                            kind = "voluptatibus";
                                                            loadBalancerType = "none";
                                                            networkUrl = "omnis";
                                                            port = "voluptate";
                                                            project = "cum";
                                                            region = "perferendis";
                                                        }}),
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
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dicta";
                                                            ipProtocol = "udp";
                                                            kind = "enim";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "commodi";
                                                            port = "repudiandae";
                                                            project = "quae";
                                                            region = "ipsum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quidem";
                                                            ipProtocol = "tcp";
                                                            kind = "excepturi";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "modi";
                                                            port = "praesentium";
                                                            project = "rem";
                                                            region = "voluptates";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quasi";
                                                location = "repudiandae";
                                                rrdatas = new String[]{{
                                                    add("veritatis"),
                                                    add("itaque"),
                                                    add("incidunt"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("consequatur"),
                                                    add("est"),
                                                }};
                                            }}),
                                        }};
                                        kind = "quibusdam";
                                    }};
                                    kind = "explicabo";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "distinctio";
                                                ipProtocol = "udp";
                                                kind = "labore";
                                                loadBalancerType = "none";
                                                networkUrl = "qui";
                                                port = "aliquid";
                                                project = "cupiditate";
                                                region = "quos";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "perferendis";
                                                ipProtocol = "undefined";
                                                kind = "assumenda";
                                                loadBalancerType = "none";
                                                networkUrl = "alias";
                                                port = "fugit";
                                                project = "dolorum";
                                                region = "excepturi";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "tempora";
                                                ipProtocol = "udp";
                                                kind = "tempore";
                                                loadBalancerType = "none";
                                                networkUrl = "delectus";
                                                port = "eum";
                                                project = "non";
                                                region = "eligendi";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 5761.57;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "necessitatibus";
                                                        ipProtocol = "tcp";
                                                        kind = "officia";
                                                        loadBalancerType = "none";
                                                        networkUrl = "debitis";
                                                        port = "a";
                                                        project = "dolorum";
                                                        region = "in";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "in";
                                                        ipProtocol = "udp";
                                                        kind = "maiores";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "dicta";
                                                        port = "magnam";
                                                        project = "cumque";
                                                        region = "facere";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ea";
                                                        ipProtocol = "tcp";
                                                        kind = "laborum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "non";
                                                        port = "occaecati";
                                                        project = "enim";
                                                        region = "accusamus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "delectus";
                                            rrdatas = new String[]{{
                                                add("provident"),
                                                add("nam"),
                                                add("id"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("deleniti"),
                                                add("sapiente"),
                                                add("amet"),
                                            }};
                                            weight = 6439.9;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vel";
                                                        ipProtocol = "tcp";
                                                        kind = "omnis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "perferendis";
                                                        port = "nihil";
                                                        project = "magnam";
                                                        region = "distinctio";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "id";
                                                        ipProtocol = "undefined";
                                                        kind = "labore";
                                                        loadBalancerType = "none";
                                                        networkUrl = "natus";
                                                        port = "nobis";
                                                        project = "eum";
                                                        region = "vero";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aspernatur";
                                            rrdatas = new String[]{{
                                                add("magnam"),
                                            }};
                                            signatureRrdatas = new String[]{{
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
                            name = "quasi";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "debitis";
                                                        ipProtocol = "undefined";
                                                        kind = "maxime";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "facilis";
                                                        port = "in";
                                                        project = "architecto";
                                                        region = "architecto";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repudiandae";
                                                        ipProtocol = "tcp";
                                                        kind = "expedita";
                                                        loadBalancerType = "none";
                                                        networkUrl = "repellat";
                                                        port = "quibusdam";
                                                        project = "sed";
                                                        region = "saepe";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "pariatur";
                                                        ipProtocol = "undefined";
                                                        kind = "consequuntur";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "natus";
                                                        port = "magni";
                                                        project = "sunt";
                                                        region = "quo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "illum";
                                                        ipProtocol = "udp";
                                                        kind = "maxime";
                                                        loadBalancerType = "none";
                                                        networkUrl = "excepturi";
                                                        port = "odit";
                                                        project = "ea";
                                                        region = "accusantium";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ab";
                                            location = "maiores";
                                            rrdatas = new String[]{{
                                                add("ipsam"),
                                                add("voluptate"),
                                                add("autem"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("eaque"),
                                                add("pariatur"),
                                                add("nemo"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "perferendis";
                                                        ipProtocol = "udp";
                                                        kind = "amet";
                                                        loadBalancerType = "none";
                                                        networkUrl = "cumque";
                                                        port = "corporis";
                                                        project = "hic";
                                                        region = "libero";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nobis";
                                                        ipProtocol = "undefined";
                                                        kind = "quis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "dignissimos";
                                                        port = "eaque";
                                                        project = "quis";
                                                        region = "nesciunt";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eos";
                                                        ipProtocol = "undefined";
                                                        kind = "dolores";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quam";
                                                        port = "dolor";
                                                        project = "vero";
                                                        region = "nostrum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "hic";
                                                        ipProtocol = "udp";
                                                        kind = "omnis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "perspiciatis";
                                                        port = "voluptatem";
                                                        project = "porro";
                                                        region = "consequuntur";
                                                    }}),
                                                }};
                                            }};
                                            kind = "blanditiis";
                                            location = "error";
                                            rrdatas = new String[]{{
                                                add("occaecati"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("adipisci"),
                                                add("asperiores"),
                                                add("earum"),
                                            }};
                                        }}),
                                    }};
                                    kind = "modi";
                                }};
                                kind = "iste";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "pariatur";
                                                            ipProtocol = "tcp";
                                                            kind = "nobis";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "delectus";
                                                            port = "quaerat";
                                                            project = "quos";
                                                            region = "aliquid";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolorem";
                                                            ipProtocol = "undefined";
                                                            kind = "dolor";
                                                            loadBalancerType = "none";
                                                            networkUrl = "ipsum";
                                                            port = "hic";
                                                            project = "excepturi";
                                                            region = "cum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptate";
                                                            ipProtocol = "tcp";
                                                            kind = "reiciendis";
                                                            loadBalancerType = "none";
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
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "atque";
                                                            ipProtocol = "undefined";
                                                            kind = "fugiat";
                                                            loadBalancerType = "none";
                                                            networkUrl = "soluta";
                                                            port = "dolorum";
                                                            project = "iusto";
                                                            region = "voluptate";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolorum";
                                                location = "deleniti";
                                                rrdatas = new String[]{{
                                                    add("necessitatibus"),
                                                    add("distinctio"),
                                                    add("asperiores"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ipsum"),
                                                    add("voluptate"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "saepe";
                                                            ipProtocol = "undefined";
                                                            kind = "aspernatur";
                                                            loadBalancerType = "none";
                                                            networkUrl = "amet";
                                                            port = "optio";
                                                            project = "accusamus";
                                                            region = "ad";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "saepe";
                                                            ipProtocol = "tcp";
                                                            kind = "deserunt";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "minima";
                                                            port = "repellendus";
                                                            project = "totam";
                                                            region = "similique";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "alias";
                                                            ipProtocol = "udp";
                                                            kind = "quaerat";
                                                            loadBalancerType = "none";
                                                            networkUrl = "vel";
                                                            port = "quod";
                                                            project = "officiis";
                                                            region = "qui";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolorum";
                                                location = "a";
                                                rrdatas = new String[]{{
                                                    add("harum"),
                                                    add("iusto"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quisquam"),
                                                }};
                                            }}),
                                        }};
                                        kind = "tenetur";
                                    }};
                                    kind = "amet";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "accusamus";
                                                ipProtocol = "undefined";
                                                kind = "enim";
                                                loadBalancerType = "none";
                                                networkUrl = "sapiente";
                                                port = "totam";
                                                project = "nihil";
                                                region = "sit";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "expedita";
                                                ipProtocol = "undefined";
                                                kind = "sed";
                                                loadBalancerType = "none";
                                                networkUrl = "libero";
                                                port = "voluptas";
                                                project = "deserunt";
                                                region = "quam";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ipsum";
                                                ipProtocol = "undefined";
                                                kind = "qui";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "maxime";
                                                port = "pariatur";
                                                project = "soluta";
                                                region = "dicta";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 6748.48;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
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
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nobis";
                                                        ipProtocol = "tcp";
                                                        kind = "tempore";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "aperiam";
                                                        port = "delectus";
                                                        project = "dolorem";
                                                        region = "dolore";
                                                    }}),
                                                }};
                                            }};
                                            kind = "labore";
                                            rrdatas = new String[]{{
                                                add("dolorum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quae"),
                                            }};
                                            weight = 164.29;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "itaque";
                                                        ipProtocol = "undefined";
                                                        kind = "est";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "porro";
                                                        port = "doloribus";
                                                        project = "ut";
                                                        region = "facilis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cupiditate";
                                                        ipProtocol = "undefined";
                                                        kind = "quae";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "odio";
                                                        port = "occaecati";
                                                        project = "voluptatibus";
                                                        region = "quisquam";
                                                    }}),
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
                                                }};
                                            }};
                                            kind = "tenetur";
                                            rrdatas = new String[]{{
                                                add("hic"),
                                                add("distinctio"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("odio"),
                                                add("similique"),
                                                add("facilis"),
                                                add("vero"),
                                            }};
                                            weight = 4981.4;
                                        }}),
                                    }};
                                    kind = "dolore";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("illum"),
                                add("sequi"),
                                add("natus"),
                                add("impedit"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("voluptatibus"),
                            }};
                            ttl = 347233;
                            type = "nulla";
                        }}),
                    }};
                    deletions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "porro";
                            name = "maiores";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eligendi";
                                                        ipProtocol = "tcp";
                                                        kind = "alias";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "tempora";
                                                        port = "ipsam";
                                                        project = "ea";
                                                        region = "aspernatur";
                                                    }}),
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
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "impedit";
                                                        ipProtocol = "tcp";
                                                        kind = "veniam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "inventore";
                                                        port = "magnam";
                                                        project = "ea";
                                                        region = "quo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consectetur";
                                                        ipProtocol = "udp";
                                                        kind = "aspernatur";
                                                        loadBalancerType = "none";
                                                        networkUrl = "eaque";
                                                        port = "a";
                                                        project = "libero";
                                                        region = "aut";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aut";
                                            location = "deleniti";
                                            rrdatas = new String[]{{
                                                add("aliquam"),
                                                add("fugit"),
                                                add("accusamus"),
                                                add("inventore"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("et"),
                                                add("dolorum"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "placeat";
                                                        ipProtocol = "undefined";
                                                        kind = "eum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "nobis";
                                                        port = "quas";
                                                        project = "assumenda";
                                                        region = "nulla";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptas";
                                                        ipProtocol = "udp";
                                                        kind = "quasi";
                                                        loadBalancerType = "none";
                                                        networkUrl = "numquam";
                                                        port = "explicabo";
                                                        project = "provident";
                                                        region = "ipsa";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = "undefined";
                                                        kind = "odio";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "undefined";
                                                        kind = "id";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "neque";
                                                        port = "quo";
                                                        project = "illum";
                                                        region = "quo";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fuga";
                                                        ipProtocol = "undefined";
                                                        kind = "eos";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ab";
                                                        port = "cupiditate";
                                                        project = "consequatur";
                                                        region = "tempora";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "debitis";
                                                        ipProtocol = "tcp";
                                                        kind = "aspernatur";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quo";
                                                        port = "esse";
                                                        project = "recusandae";
                                                        region = "aperiam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "distinctio";
                                                        ipProtocol = "udp";
                                                        kind = "dignissimos";
                                                        loadBalancerType = "none";
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
                                                            ipProtocol = "undefined";
                                                            kind = "fuga";
                                                            loadBalancerType = "regionalL4ilb";
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
                    id = "voluptatibus";
                    isServing = false;
                    kind = "voluptas";
                    startTime = "asperiores";
                    status = "pending";
                }};
            }};            

            DnsChangesCreateResponse res = sdk.changes.dnsChangesCreate(req);

            if (res.change.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


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
