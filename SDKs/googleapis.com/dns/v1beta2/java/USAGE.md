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
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "commodi";
                                                        ipProtocol = "tcp";
                                                        kind = "molestiae";
                                                        loadBalancerType = "none";
                                                        networkUrl = "error";
                                                        port = "quia";
                                                        project = "quis";
                                                        region = "vitae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laborum";
                                                        ipProtocol = "tcp";
                                                        kind = "enim";
                                                        loadBalancerType = "none";
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
                                                        ipProtocol = "udp";
                                                        kind = "nihil";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "voluptatibus";
                                                        port = "ipsa";
                                                        project = "omnis";
                                                        region = "voluptate";
                                                    }}),
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
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quae";
                                                        ipProtocol = "undefined";
                                                        kind = "quidem";
                                                        loadBalancerType = "regionalL4ilb";
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
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequatur";
                                                        ipProtocol = "udp";
                                                        kind = "quibusdam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "deserunt";
                                                        port = "distinctio";
                                                        project = "quibusdam";
                                                        region = "labore";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "modi";
                                                        ipProtocol = "undefined";
                                                        kind = "aliquid";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quos";
                                                        port = "perferendis";
                                                        project = "magni";
                                                        region = "assumenda";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsam";
                                            location = "alias";
                                            rrdatas = new String[]{{
                                                add("dolorum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("tempora"),
                                                add("facilis"),
                                                add("tempore"),
                                            }};
                                        }}),
                                    }};
                                    kind = "labore";
                                }};
                                kind = "delectus";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eligendi";
                                                            ipProtocol = "tcp";
                                                            kind = "aliquid";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "necessitatibus";
                                                            port = "sint";
                                                            project = "officia";
                                                            region = "dolor";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "debitis";
                                                location = "a";
                                                rrdatas = new String[]{{
                                                    add("in"),
                                                    add("in"),
                                                    add("illum"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("rerum"),
                                                    add("dicta"),
                                                    add("magnam"),
                                                    add("cumque"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "delectus";
                                                            ipProtocol = "udp";
                                                            kind = "provident";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "id";
                                                            port = "blanditiis";
                                                            project = "deleniti";
                                                            region = "sapiente";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "amet";
                                                            ipProtocol = "tcp";
                                                            kind = "nisi";
                                                            loadBalancerType = "none";
                                                            networkUrl = "natus";
                                                            port = "omnis";
                                                            project = "molestiae";
                                                            region = "perferendis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nihil";
                                                            ipProtocol = "undefined";
                                                            kind = "distinctio";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "labore";
                                                            port = "labore";
                                                            project = "suscipit";
                                                            region = "natus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "nobis";
                                                location = "eum";
                                                rrdatas = new String[]{{
                                                    add("aspernatur"),
                                                    add("architecto"),
                                                    add("magnam"),
                                                    add("et"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("ullam"),
                                                    add("provident"),
                                                    add("quos"),
                                                }};
                                            }}),
                                        }};
                                        kind = "sint";
                                    }};
                                    kind = "accusantium";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "reiciendis";
                                                ipProtocol = "tcp";
                                                kind = "ad";
                                                loadBalancerType = "none";
                                                networkUrl = "dolor";
                                                port = "necessitatibus";
                                                project = "odit";
                                                region = "nemo";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quasi";
                                                ipProtocol = "tcp";
                                                kind = "doloribus";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "eius";
                                                port = "maxime";
                                                project = "deleniti";
                                                region = "facilis";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "in";
                                                ipProtocol = "undefined";
                                                kind = "architecto";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "ullam";
                                                port = "expedita";
                                                project = "nihil";
                                                region = "repellat";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 8411.4;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ab";
                                                        ipProtocol = "udp";
                                                        kind = "quidem";
                                                        loadBalancerType = "none";
                                                        networkUrl = "voluptate";
                                                        port = "autem";
                                                        project = "nam";
                                                        region = "eaque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "pariatur";
                                                        ipProtocol = "tcp";
                                                        kind = "voluptatibus";
                                                        loadBalancerType = "none";
                                                        networkUrl = "fugiat";
                                                        port = "amet";
                                                        project = "aut";
                                                        region = "cumque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "corporis";
                                            rrdatas = new String[]{{
                                                add("libero"),
                                                add("nobis"),
                                                add("dolores"),
                                                add("quis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("dignissimos"),
                                                add("eaque"),
                                                add("quis"),
                                            }};
                                            weight = 1999.96;
                                        }}),
                                    }};
                                    kind = "eos";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                            }};
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
                            ttl = 730122;
                            type = "delectus";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "quaerat";
                            name = "quos";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolorem";
                                                        ipProtocol = "undefined";
                                                        kind = "qui";
                                                        loadBalancerType = "none";
                                                        networkUrl = "hic";
                                                        port = "excepturi";
                                                        project = "cum";
                                                        region = "voluptate";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dignissimos";
                                            location = "reiciendis";
                                            rrdatas = new String[]{{
                                                add("dolorum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("veritatis"),
                                                add("ipsa"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iure";
                                                        ipProtocol = "tcp";
                                                        kind = "quaerat";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quidem";
                                                        port = "voluptatibus";
                                                        project = "voluptas";
                                                        region = "natus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "eos";
                                            location = "atque";
                                            rrdatas = new String[]{{
                                                add("fugiat"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("soluta"),
                                            }};
                                        }}),
                                    }};
                                    kind = "dolorum";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolorum";
                                                        ipProtocol = "tcp";
                                                        kind = "omnis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "distinctio";
                                                        port = "asperiores";
                                                        project = "nihil";
                                                        region = "ipsum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptate";
                                                        ipProtocol = "tcp";
                                                        kind = "saepe";
                                                        loadBalancerType = "none";
                                                        networkUrl = "aspernatur";
                                                        port = "perferendis";
                                                        project = "amet";
                                                        region = "optio";
                                                    }}),
                                                }};
                                            }};
                                            kind = "accusamus";
                                            location = "ad";
                                            rrdatas = new String[]{{
                                                add("suscipit"),
                                                add("deserunt"),
                                                add("provident"),
                                                add("minima"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("totam"),
                                                add("similique"),
                                                add("alias"),
                                                add("at"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempora";
                                                        ipProtocol = "tcp";
                                                        kind = "quod";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "qui";
                                                        port = "dolorum";
                                                        project = "a";
                                                        region = "esse";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "harum";
                                                        ipProtocol = "tcp";
                                                        kind = "ipsum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "tenetur";
                                                        port = "amet";
                                                        project = "tempore";
                                                        region = "accusamus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "numquam";
                                            location = "enim";
                                            rrdatas = new String[]{{
                                                add("sapiente"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("nihil"),
                                                add("sit"),
                                                add("expedita"),
                                            }};
                                        }}),
                                    }};
                                    kind = "neque";
                                }};
                                kind = "sed";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptas";
                                                            ipProtocol = "tcp";
                                                            kind = "quam";
                                                            loadBalancerType = "none";
                                                            networkUrl = "incidunt";
                                                            port = "qui";
                                                            project = "cupiditate";
                                                            region = "maxime";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "pariatur";
                                                            ipProtocol = "udp";
                                                            kind = "dicta";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "totam";
                                                            port = "incidunt";
                                                            project = "aspernatur";
                                                            region = "dolores";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "distinctio";
                                                            ipProtocol = "udp";
                                                            kind = "aliquid";
                                                            loadBalancerType = "none";
                                                            networkUrl = "molestias";
                                                            port = "temporibus";
                                                            project = "qui";
                                                            region = "neque";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "fugit";
                                                location = "magni";
                                                rrdatas = new String[]{{
                                                    add("sunt"),
                                                    add("ullam"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("hic"),
                                                    add("voluptatem"),
                                                    add("cumque"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nobis";
                                                            ipProtocol = "undefined";
                                                            kind = "saepe";
                                                            loadBalancerType = "none";
                                                            networkUrl = "veritatis";
                                                            port = "nobis";
                                                            project = "quos";
                                                            region = "tempore";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "cupiditate";
                                                            ipProtocol = "undefined";
                                                            kind = "delectus";
                                                            loadBalancerType = "none";
                                                            networkUrl = "dolore";
                                                            port = "labore";
                                                            project = "adipisci";
                                                            region = "dolorum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "architecto";
                                                            ipProtocol = "undefined";
                                                            kind = "aut";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "itaque";
                                                            port = "consequatur";
                                                            project = "est";
                                                            region = "repellendus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "porro";
                                                location = "doloribus";
                                                rrdatas = new String[]{{
                                                    add("facilis"),
                                                    add("cupiditate"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("quae"),
                                                }};
                                            }}),
                                        }};
                                        kind = "laudantium";
                                    }};
                                    kind = "odio";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "voluptatibus";
                                                ipProtocol = "udp";
                                                kind = "vero";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "quis";
                                                port = "ipsum";
                                                project = "delectus";
                                                region = "voluptate";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "consectetur";
                                                ipProtocol = "udp";
                                                kind = "tenetur";
                                                loadBalancerType = "none";
                                                networkUrl = "hic";
                                                port = "distinctio";
                                                project = "quod";
                                                region = "odio";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "similique";
                                                ipProtocol = "udp";
                                                kind = "vero";
                                                loadBalancerType = "none";
                                                networkUrl = "dolore";
                                                port = "quibusdam";
                                                project = "illum";
                                                region = "sequi";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 6178.77;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatibus";
                                                        ipProtocol = "tcp";
                                                        kind = "nulla";
                                                        loadBalancerType = "none";
                                                        networkUrl = "porro";
                                                        port = "maiores";
                                                        project = "doloribus";
                                                        region = "iusto";
                                                    }}),
                                                }};
                                            }};
                                            kind = "eligendi";
                                            rrdatas = new String[]{{
                                                add("alias"),
                                                add("officia"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ipsam"),
                                                add("ea"),
                                            }};
                                            weight = 1369;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "possimus";
                                                        ipProtocol = "undefined";
                                                        kind = "ratione";
                                                        loadBalancerType = "none";
                                                        networkUrl = "laudantium";
                                                        port = "dicta";
                                                        project = "dolor";
                                                        region = "maiores";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quasi";
                                                        ipProtocol = "tcp";
                                                        kind = "nulla";
                                                        loadBalancerType = "regionalL4ilb";
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
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quo";
                                                        ipProtocol = "undefined";
                                                        kind = "recusandae";
                                                        loadBalancerType = "none";
                                                        networkUrl = "minima";
                                                        port = "eaque";
                                                        project = "a";
                                                        region = "libero";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aut";
                                                        ipProtocol = "undefined";
                                                        kind = "deleniti";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "aliquam";
                                                        port = "fugit";
                                                        project = "accusamus";
                                                        region = "inventore";
                                                    }}),
                                                }};
                                            }};
                                            kind = "non";
                                            rrdatas = new String[]{{
                                                add("dolorum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("placeat"),
                                                add("velit"),
                                                add("eum"),
                                            }};
                                            weight = 4205.39;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "explicabo";
                                                        ipProtocol = "tcp";
                                                        kind = "ipsa";
                                                        loadBalancerType = "none";
                                                        networkUrl = "magnam";
                                                        port = "odio";
                                                        project = "eius";
                                                        region = "esse";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "esse";
                                                        ipProtocol = "tcp";
                                                        kind = "fuga";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quidem";
                                                        port = "fugiat";
                                                        project = "ut";
                                                        region = "eum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "suscipit";
                                                        ipProtocol = "udp";
                                                        kind = "eos";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quisquam";
                                                        port = "veritatis";
                                                        project = "ipsa";
                                                        region = "id";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quidem";
                                            rrdatas = new String[]{{
                                                add("quo"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("quo"),
                                                add("fuga"),
                                                add("eius"),
                                                add("eos"),
                                            }};
                                            weight = 3738.13;
                                        }}),
                                    }};
                                    kind = "ab";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
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
                                            rrdatas = new String[]{{
                                                add("quod"),
                                                add("dignissimos"),
                                                add("inventore"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("totam"),
                                                add("accusamus"),
                                            }};
                                            weight = 3068.1;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                            rrdatas = new String[]{{
                                                add("explicabo"),
                                                add("minima"),
                                                add("nisi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("sapiente"),
                                            }};
                                            weight = 1598.7;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "explicabo";
                                                        ipProtocol = "udp";
                                                        kind = "occaecati";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "et";
                                                        port = "esse";
                                                        project = "eveniet";
                                                        region = "accusamus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "veritatis";
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
                                            weight = 6900.25;
                                        }}),
                                    }};
                                    kind = "molestiae";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("occaecati"),
                                add("minima"),
                                add("distinctio"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("sit"),
                                add("culpa"),
                                add("tempore"),
                                add("adipisci"),
                            }};
                            ttl = 766964;
                            type = "consequuntur";
                        }}),
                    }};
                    deletions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "minus";
                            name = "quaerat";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "esse";
                                                        ipProtocol = "tcp";
                                                        kind = "provident";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "nulla";
                                                        port = "quas";
                                                        project = "esse";
                                                        region = "quasi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "a";
                                            location = "error";
                                            rrdatas = new String[]{{
                                                add("pariatur"),
                                                add("possimus"),
                                                add("quia"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("asperiores"),
                                                add("facere"),
                                                add("veritatis"),
                                                add("consequuntur"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                }};
                                            }};
                                            kind = "eius";
                                            location = "libero";
                                            rrdatas = new String[]{{
                                                add("soluta"),
                                                add("accusantium"),
                                                add("aliquam"),
                                                add("sapiente"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ullam"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ullam";
                                                        ipProtocol = "tcp";
                                                        kind = "aut";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "qui";
                                                        port = "quibusdam";
                                                        project = "ex";
                                                        region = "deleniti";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "itaque";
                                                        ipProtocol = "udp";
                                                        kind = "architecto";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "tenetur";
                                                        port = "quasi";
                                                        project = "at";
                                                        region = "et";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptate";
                                            location = "ipsa";
                                            rrdatas = new String[]{{
                                                add("veritatis"),
                                                add("consectetur"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("iste"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "accusantium";
                                                        ipProtocol = "tcp";
                                                        kind = "aut";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "eum";
                                                        port = "mollitia";
                                                        project = "ab";
                                                        region = "corrupti";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "non";
                                                        ipProtocol = "undefined";
                                                        kind = "dolor";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "numquam";
                                                        port = "impedit";
                                                        project = "explicabo";
                                                        region = "voluptas";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aut";
                                                        ipProtocol = "tcp";
                                                        kind = "dicta";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "natus";
                                                        port = "velit";
                                                        project = "voluptatibus";
                                                        region = "voluptas";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "asperiores";
                                                        ipProtocol = "undefined";
                                                        kind = "ea";
                                                        loadBalancerType = "none";
                                                        networkUrl = "consequuntur";
                                                        port = "repellendus";
                                                        project = "officia";
                                                        region = "maxime";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dignissimos";
                                            location = "officia";
                                            rrdatas = new String[]{{
                                                add("nemo"),
                                                add("quae"),
                                                add("quaerat"),
                                                add("porro"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("labore"),
                                                add("ab"),
                                                add("adipisci"),
                                                add("fuga"),
                                            }};
                                        }}),
                                    }};
                                    kind = "id";
                                }};
                                geoPolicy = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "culpa";
                                                        ipProtocol = "tcp";
                                                        kind = "recusandae";
                                                        loadBalancerType = "regionalL4ilb";
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
                                    }};
                                    kind = "consectetur";
                                }};
                                kind = "corporis";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ipsa";
                                                            ipProtocol = "udp";
                                                            kind = "libero";
                                                            loadBalancerType = "none";
                                                            networkUrl = "accusamus";
                                                            port = "similique";
                                                            project = "tempora";
                                                            region = "aspernatur";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptas";
                                                            ipProtocol = "tcp";
                                                            kind = "voluptas";
                                                            loadBalancerType = "none";
                                                            networkUrl = "nobis";
                                                            port = "dolorum";
                                                            project = "adipisci";
                                                            region = "minus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolores";
                                                location = "blanditiis";
                                                rrdatas = new String[]{{
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
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quas";
                                                            ipProtocol = "udp";
                                                            kind = "nesciunt";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "corrupti";
                                                            port = "pariatur";
                                                            project = "totam";
                                                            region = "hic";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "exercitationem";
                                                            ipProtocol = "udp";
                                                            kind = "sit";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "sed";
                                                            port = "reiciendis";
                                                            project = "explicabo";
                                                            region = "asperiores";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facilis";
                                                            ipProtocol = "tcp";
                                                            kind = "expedita";
                                                            loadBalancerType = "none";
                                                            networkUrl = "iste";
                                                            port = "dolore";
                                                            project = "laborum";
                                                            region = "sed";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "in";
                                                location = "commodi";
                                                rrdatas = new String[]{{
                                                    add("explicabo"),
                                                    add("voluptas"),
                                                    add("unde"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("suscipit"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "debitis";
                                                            ipProtocol = "undefined";
                                                            kind = "reiciendis";
                                                            loadBalancerType = "none";
                                                            networkUrl = "corrupti";
                                                            port = "maiores";
                                                            project = "incidunt";
                                                            region = "sed";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "provident";
                                                            ipProtocol = "undefined";
                                                            kind = "necessitatibus";
                                                            loadBalancerType = "none";
                                                            networkUrl = "ea";
                                                            port = "occaecati";
                                                            project = "quos";
                                                            region = "voluptatibus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "tempora";
                                                            ipProtocol = "undefined";
                                                            kind = "voluptate";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "ex";
                                                            port = "sit";
                                                            project = "non";
                                                            region = "officiis";
                                                        }}),
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
                                                    }};
                                                }};
                                                kind = "nobis";
                                                location = "error";
                                                rrdatas = new String[]{{
                                                    add("minima"),
                                                    add("recusandae"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nulla"),
                                                    add("magni"),
                                                    add("aperiam"),
                                                    add("saepe"),
                                                }};
                                            }}),
                                        }};
                                        kind = "numquam";
                                    }};
                                    kind = "veniam";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "officiis";
                                                ipProtocol = "undefined";
                                                kind = "laudantium";
                                                loadBalancerType = "none";
                                                networkUrl = "praesentium";
                                                port = "cum";
                                                project = "laboriosam";
                                                region = "dolorum";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "voluptatum";
                                                ipProtocol = "tcp";
                                                kind = "hic";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "debitis";
                                                port = "neque";
                                                project = "dolorum";
                                                region = "nostrum";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 6390.28;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "accusamus";
                                                        ipProtocol = "undefined";
                                                        kind = "atque";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ut";
                                                        port = "fugiat";
                                                        project = "voluptatem";
                                                        region = "culpa";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "expedita";
                                                        ipProtocol = "undefined";
                                                        kind = "consequatur";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ipsam";
                                                        port = "sit";
                                                        project = "voluptatum";
                                                        region = "quas";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repudiandae";
                                                        ipProtocol = "tcp";
                                                        kind = "et";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ex";
                                                        port = "sed";
                                                        project = "sit";
                                                        region = "vel";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nostrum";
                                            rrdatas = new String[]{{
                                                add("error"),
                                                add("consequatur"),
                                                add("incidunt"),
                                                add("reiciendis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("harum"),
                                            }};
                                            weight = 1157.03;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "occaecati";
                                                        ipProtocol = "undefined";
                                                        kind = "quidem";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "laborum";
                                                        port = "nam";
                                                        project = "tenetur";
                                                        region = "laboriosam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "alias";
                                            rrdatas = new String[]{{
                                                add("deserunt"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("unde"),
                                                add("reiciendis"),
                                            }};
                                            weight = 5887.4;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "delectus";
                                                        ipProtocol = "udp";
                                                        kind = "perferendis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quidem";
                                                        port = "reprehenderit";
                                                        project = "facere";
                                                        region = "fuga";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "praesentium";
                                                        ipProtocol = "tcp";
                                                        kind = "veniam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quisquam";
                                                        port = "repudiandae";
                                                        project = "quasi";
                                                        region = "atque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "reprehenderit";
                                                        ipProtocol = "udp";
                                                        kind = "totam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quidem";
                                                        port = "maxime";
                                                        project = "et";
                                                        region = "esse";
                                                    }}),
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
                                                }};
                                            }};
                                            kind = "natus";
                                            rrdatas = new String[]{{
                                                add("aspernatur"),
                                                add("ex"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("corrupti"),
                                                add("at"),
                                                add("error"),
                                                add("blanditiis"),
                                            }};
                                            weight = 3793.56;
                                        }}),
                                    }};
                                    kind = "repudiandae";
                                }};
                                wrrPolicy = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sunt";
                                                        ipProtocol = "udp";
                                                        kind = "dolorum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "labore";
                                                        port = "reiciendis";
                                                        project = "doloremque";
                                                        region = "repudiandae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dicta";
                                                        ipProtocol = "undefined";
                                                        kind = "beatae";
                                                        loadBalancerType = "none";
                                                        networkUrl = "enim";
                                                        port = "laboriosam";
                                                        project = "velit";
                                                        region = "a";
                                                    }}),
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
                                                }};
                                            }};
                                            kind = "adipisci";
                                            rrdatas = new String[]{{
                                                add("occaecati"),
                                                add("consequuntur"),
                                                add("fugit"),
                                                add("id"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("reprehenderit"),
                                                add("error"),
                                            }};
                                            weight = 764.86;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quidem";
                                                        ipProtocol = "udp";
                                                        kind = "non";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "doloremque";
                                                        port = "iure";
                                                        project = "ipsa";
                                                        region = "totam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quae";
                                                        ipProtocol = "tcp";
                                                        kind = "eveniet";
                                                        loadBalancerType = "none";
                                                        networkUrl = "cum";
                                                        port = "iure";
                                                        project = "necessitatibus";
                                                        region = "ratione";
                                                    }}),
                                                }};
                                            }};
                                            kind = "laborum";
                                            rrdatas = new String[]{{
                                                add("voluptatum"),
                                                add("rem"),
                                                add("aliquam"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("repellat"),
                                                add("alias"),
                                            }};
                                            weight = 3621.89;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
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
                                            rrdatas = new String[]{{
                                                add("esse"),
                                                add("provident"),
                                                add("quis"),
                                                add("eum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("provident"),
                                                add("aspernatur"),
                                                add("ullam"),
                                                add("quasi"),
                                            }};
                                            weight = 6570.2;
                                        }}),
                                    }};
                                    kind = "nostrum";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("provident"),
                                add("possimus"),
                                add("animi"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("aliquid"),
                                add("accusantium"),
                            }};
                            ttl = 999278;
                            type = "doloribus";
                        }}),
                    }};
                    id = "ullam";
                    isServing = false;
                    kind = "in";
                    startTime = "nam";
                    status = "done";
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