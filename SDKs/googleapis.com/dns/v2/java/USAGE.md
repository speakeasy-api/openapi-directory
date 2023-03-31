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
                    location = "corrupti";
                    managedZone = "provident";
                    project = "distinctio";
                }};
                queryParams = new DnsChangesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "unde";
                    alt = "proto";
                    callback = "corrupti";
                    clientOperationId = "illum";
                    fields = "vel";
                    key = "error";
                    oauthToken = "deserunt";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
                request = new Change() {{
                    additions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "ipsa";
                            name = "delectus";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = "UDP";
                                                        kind = "placeat";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "iusto";
                                                        port = "excepturi";
                                                        project = "nisi";
                                                        region = "recusandae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "temporibus";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "quis";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "deserunt";
                                                        port = "perferendis";
                                                        project = "ipsam";
                                                        region = "repellendus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sapiente";
                                            location = "quo";
                                            rrdatas = new String[]{{
                                                add("at"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("maiores"),
                                                add("molestiae"),
                                                add("quod"),
                                                add("quod"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "totam";
                                                        ipProtocol = "UDP";
                                                        kind = "dolorum";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "nam";
                                                        port = "officia";
                                                        project = "occaecati";
                                                        region = "fugit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deleniti";
                                                        ipProtocol = "UDP";
                                                        kind = "optio";
                                                        loadBalancerType = "REGIONAL_L4ILB";
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
                                    }};
                                    kind = "ad";
                                }};
                                kind = "natus";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolor";
                                                            ipProtocol = "TCP";
                                                            kind = "laboriosam";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "saepe";
                                                            port = "fuga";
                                                            project = "in";
                                                            region = "corporis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iste";
                                                            ipProtocol = "TCP";
                                                            kind = "saepe";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "architecto";
                                                            port = "ipsa";
                                                            project = "reiciendis";
                                                            region = "est";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "mollitia";
                                                            ipProtocol = "UDP";
                                                            kind = "dolores";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "corporis";
                                                            port = "explicabo";
                                                            project = "nobis";
                                                            region = "enim";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "omnis";
                                                location = "nemo";
                                                rrdatas = new String[]{{
                                                    add("excepturi"),
                                                    add("accusantium"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("culpa"),
                                                    add("doloribus"),
                                                }};
                                            }}),
                                        }};
                                        kind = "sapiente";
                                    }};
                                    kind = "architecto";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "dolorem";
                                                ipProtocol = "TCP";
                                                kind = "consequuntur";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "mollitia";
                                                port = "occaecati";
                                                project = "numquam";
                                                region = "commodi";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quam";
                                                ipProtocol = "TCP";
                                                kind = "velit";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "quia";
                                                port = "quis";
                                                project = "vitae";
                                                region = "laborum";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "animi";
                                                ipProtocol = "UNDEFINED";
                                                kind = "odit";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "sequi";
                                                port = "tenetur";
                                                project = "ipsam";
                                                region = "id";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 8209.94;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "error";
                                                        ipProtocol = "UDP";
                                                        kind = "laborum";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "reiciendis";
                                                        port = "voluptatibus";
                                                        project = "vero";
                                                        region = "nihil";
                                                    }}),
                                                }};
                                            }};
                                            kind = "praesentium";
                                            rrdatas = new String[]{{
                                                add("ipsa"),
                                                add("omnis"),
                                                add("voluptate"),
                                                add("cum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("doloremque"),
                                            }};
                                            weight = 4417.11;
                                        }}),
                                    }};
                                    kind = "ut";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("dicta"),
                                add("corporis"),
                                add("dolore"),
                                add("iusto"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("harum"),
                            }};
                            ttl = 317983;
                            type = "accusamus";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "commodi";
                            name = "repudiandae";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quidem";
                                                        ipProtocol = "TCP";
                                                        kind = "excepturi";
                                                        loadBalancerType = "REGIONAL_L4ILB";
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
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quibusdam";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "modi";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "aliquid";
                                                            port = "cupiditate";
                                                            project = "quos";
                                                            region = "perferendis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "magni";
                                                            ipProtocol = "UDP";
                                                            kind = "ipsam";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "fugit";
                                                            port = "dolorum";
                                                            project = "excepturi";
                                                            region = "tempora";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "facilis";
                                                            ipProtocol = "UDP";
                                                            kind = "labore";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "eum";
                                                            port = "non";
                                                            project = "eligendi";
                                                            region = "sint";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "aliquid";
                                                location = "provident";
                                                rrdatas = new String[]{{
                                                    add("sint"),
                                                    add("officia"),
                                                    add("dolor"),
                                                    add("debitis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("dolorum"),
                                                    add("in"),
                                                    add("in"),
                                                    add("illum"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "rerum";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "magnam";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "facere";
                                                            port = "ea";
                                                            project = "aliquid";
                                                            region = "laborum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "accusamus";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "occaecati";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "accusamus";
                                                            port = "delectus";
                                                            project = "quidem";
                                                            region = "provident";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nam";
                                                            ipProtocol = "TCP";
                                                            kind = "blanditiis";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "sapiente";
                                                            port = "amet";
                                                            project = "deserunt";
                                                            region = "nisi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vel";
                                                            ipProtocol = "TCP";
                                                            kind = "omnis";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "perferendis";
                                                            port = "nihil";
                                                            project = "magnam";
                                                            region = "distinctio";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "id";
                                                location = "labore";
                                                rrdatas = new String[]{{
                                                    add("suscipit"),
                                                    add("natus"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("eum"),
                                                    add("vero"),
                                                    add("aspernatur"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                kind = "mollitia";
                                                location = "reiciendis";
                                                rrdatas = new String[]{{
                                                    add("ad"),
                                                    add("eum"),
                                                    add("dolor"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("odit"),
                                                    add("nemo"),
                                                    add("quasi"),
                                                    add("iure"),
                                                }};
                                            }}),
                                        }};
                                        kind = "doloribus";
                                    }};
                                    kind = "debitis";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "maxime";
                                                ipProtocol = "TCP";
                                                kind = "facilis";
                                                loadBalancerType = "NONE";
                                                networkUrl = "architecto";
                                                port = "architecto";
                                                project = "repudiandae";
                                                region = "ullam";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "expedita";
                                                ipProtocol = "TCP";
                                                kind = "repellat";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "sed";
                                                port = "saepe";
                                                project = "pariatur";
                                                region = "accusantium";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 1624.93;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magni";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "quo";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "pariatur";
                                                        port = "maxime";
                                                        project = "ea";
                                                        region = "excepturi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odit";
                                                        ipProtocol = "TCP";
                                                        kind = "accusantium";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "maiores";
                                                        port = "quidem";
                                                        project = "ipsam";
                                                        region = "voluptate";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "autem";
                                                        ipProtocol = "UDP";
                                                        kind = "eaque";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "nemo";
                                                        port = "voluptatibus";
                                                        project = "perferendis";
                                                        region = "fugiat";
                                                    }}),
                                                }};
                                            }};
                                            kind = "amet";
                                            rrdatas = new String[]{{
                                                add("cumque"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("hic"),
                                                add("libero"),
                                            }};
                                            weight = 7499.99;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quis";
                                                        ipProtocol = "TCP";
                                                        kind = "dignissimos";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "quis";
                                                        port = "nesciunt";
                                                        project = "eos";
                                                        region = "perferendis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dolores";
                                            rrdatas = new String[]{{
                                                add("quam"),
                                                add("dolor"),
                                                add("vero"),
                                                add("nostrum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("recusandae"),
                                                add("omnis"),
                                                add("facilis"),
                                                add("perspiciatis"),
                                            }};
                                            weight = 318.38;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequuntur";
                                                        ipProtocol = "TCP";
                                                        kind = "error";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "occaecati";
                                                        port = "rerum";
                                                        project = "adipisci";
                                                        region = "asperiores";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "earum";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "iste";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "deleniti";
                                                        port = "pariatur";
                                                        project = "provident";
                                                        region = "nobis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "libero";
                                                        ipProtocol = "UDP";
                                                        kind = "quaerat";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "aliquid";
                                                        port = "dolorem";
                                                        project = "dolorem";
                                                        region = "dolor";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "qui";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "hic";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "cum";
                                                        port = "voluptate";
                                                        project = "dignissimos";
                                                        region = "reiciendis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "amet";
                                            rrdatas = new String[]{{
                                                add("numquam"),
                                                add("veritatis"),
                                                add("ipsa"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("iure"),
                                            }};
                                            weight = 4878.38;
                                        }}),
                                    }};
                                    kind = "quaerat";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("quidem"),
                                add("voluptatibus"),
                                add("voluptas"),
                                add("natus"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("atque"),
                            }};
                            ttl = 24678;
                            type = "fugiat";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "ab";
                            name = "soluta";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptate";
                                                        ipProtocol = "UDP";
                                                        kind = "deleniti";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "necessitatibus";
                                                        port = "distinctio";
                                                        project = "asperiores";
                                                        region = "nihil";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsum";
                                                        ipProtocol = "TCP";
                                                        kind = "id";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "eius";
                                                        port = "aspernatur";
                                                        project = "perferendis";
                                                        region = "amet";
                                                    }}),
                                                }};
                                            }};
                                            kind = "optio";
                                            location = "accusamus";
                                            rrdatas = new String[]{{
                                                add("saepe"),
                                                add("suscipit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("provident"),
                                                add("minima"),
                                                add("repellendus"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "similique";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "at";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "tempora";
                                                        port = "vel";
                                                        project = "quod";
                                                        region = "officiis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "qui";
                                                        ipProtocol = "UDP";
                                                        kind = "a";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "harum";
                                                        port = "iusto";
                                                        project = "ipsum";
                                                        region = "quisquam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tenetur";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "tempore";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "numquam";
                                                        port = "enim";
                                                        project = "dolorem";
                                                        region = "sapiente";
                                                    }}),
                                                }};
                                            }};
                                            kind = "totam";
                                            location = "nihil";
                                            rrdatas = new String[]{{
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
                                                        ipProtocol = "TCP";
                                                        kind = "deserunt";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "ipsum";
                                                        port = "incidunt";
                                                        project = "qui";
                                                        region = "cupiditate";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "maxime";
                                                        ipProtocol = "UDP";
                                                        kind = "soluta";
                                                        loadBalancerType = "NONE";
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
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "cumque";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "nobis";
                                                            port = "et";
                                                            project = "saepe";
                                                            region = "ipsum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "veritatis";
                                                            ipProtocol = "UDP";
                                                            kind = "quos";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "cupiditate";
                                                            port = "aperiam";
                                                            project = "delectus";
                                                            region = "dolorem";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolore";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "adipisci";
                                                            loadBalancerType = "REGIONAL_L4ILB";
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
                                                            ipProtocol = "TCP";
                                                            kind = "odio";
                                                            loadBalancerType = "REGIONAL_L4ILB";
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
                                                ipProtocol = "UDP";
                                                kind = "ducimus";
                                                loadBalancerType = "NONE";
                                                networkUrl = "quibusdam";
                                                port = "illum";
                                                project = "sequi";
                                                region = "natus";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "impedit";
                                                ipProtocol = "UNDEFINED";
                                                kind = "voluptatibus";
                                                loadBalancerType = "NONE";
                                                networkUrl = "nulla";
                                                port = "fugit";
                                                project = "porro";
                                                region = "maiores";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "doloribus";
                                                ipProtocol = "TCP";
                                                kind = "eligendi";
                                                loadBalancerType = "NONE";
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
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "ratione";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "laudantium";
                                                        port = "dicta";
                                                        project = "dolor";
                                                        region = "maiores";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quasi";
                                                        ipProtocol = "TCP";
                                                        kind = "nulla";
                                                        loadBalancerType = "REGIONAL_L4ILB";
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
                            name = "deleniti";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fugit";
                                                        ipProtocol = "UDP";
                                                        kind = "inventore";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "et";
                                                        port = "dolorum";
                                                        project = "laborum";
                                                        region = "placeat";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "velit";
                                                        ipProtocol = "TCP";
                                                        kind = "autem";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "quas";
                                                        port = "assumenda";
                                                        project = "nulla";
                                                        region = "voluptas";
                                                    }}),
                                                }};
                                            }};
                                            kind = "libero";
                                            location = "quasi";
                                            rrdatas = new String[]{{
                                                add("numquam"),
                                                add("explicabo"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ipsa"),
                                                add("molestiae"),
                                                add("magnam"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eius";
                                                        ipProtocol = "TCP";
                                                        kind = "esse";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "fuga";
                                                        port = "reprehenderit";
                                                        project = "quidem";
                                                        region = "fugiat";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ut";
                                                        ipProtocol = "TCP";
                                                        kind = "suscipit";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "eos";
                                                        port = "praesentium";
                                                        project = "quisquam";
                                                        region = "veritatis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsa";
                                            location = "id";
                                            rrdatas = new String[]{{
                                                add("neque"),
                                                add("quo"),
                                                add("illum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("fuga"),
                                                add("eius"),
                                                add("eos"),
                                                add("voluptas"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cupiditate";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "tempora";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "ipsam";
                                                        port = "aspernatur";
                                                        project = "sequi";
                                                        region = "quo";
                                                    }}),
                                                }};
                                            }};
                                            kind = "esse";
                                            location = "recusandae";
                                            rrdatas = new String[]{{
                                                add("distinctio"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("dignissimos"),
                                                add("inventore"),
                                                add("nihil"),
                                                add("totam"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aliquam";
                                                        ipProtocol = "TCP";
                                                        kind = "occaecati";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "sapiente";
                                                        port = "dolores";
                                                        project = "deserunt";
                                                        region = "molestiae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "accusantium";
                                                        ipProtocol = "UDP";
                                                        kind = "eum";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "praesentium";
                                                        port = "consequuntur";
                                                        project = "deleniti";
                                                        region = "fugit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fuga";
                                                        ipProtocol = "TCP";
                                                        kind = "incidunt";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "explicabo";
                                                        port = "minima";
                                                        project = "nisi";
                                                        region = "fugit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sapiente";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "ratione";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "saepe";
                                                        port = "occaecati";
                                                        project = "atque";
                                                        region = "et";
                                                    }}),
                                                }};
                                            }};
                                            kind = "esse";
                                            location = "eveniet";
                                            rrdatas = new String[]{{
                                                add("veritatis"),
                                                add("esse"),
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
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "minima";
                                                            ipProtocol = "UDP";
                                                            kind = "eligendi";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "culpa";
                                                            port = "tempore";
                                                            project = "adipisci";
                                                            region = "cumque";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "consequuntur";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "minus";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "sapiente";
                                                            port = "consectetur";
                                                            project = "esse";
                                                            region = "blanditiis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "provident";
                                                            ipProtocol = "UDP";
                                                            kind = "nulla";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "esse";
                                                            port = "quasi";
                                                            project = "a";
                                                            region = "error";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "sint";
                                                location = "pariatur";
                                                rrdatas = new String[]{{
                                                    add("quia"),
                                                    add("eveniet"),
                                                    add("asperiores"),
                                                    add("facere"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("consequuntur"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                            ipProtocol = "TCP";
                                                            kind = "aut";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "qui";
                                                            port = "quibusdam";
                                                            project = "ex";
                                                            region = "deleniti";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "itaque";
                                                            ipProtocol = "UDP";
                                                            kind = "architecto";
                                                            loadBalancerType = "REGIONAL_L4ILB";
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
                                        }};
                                        kind = "temporibus";
                                    }};
                                    kind = "accusantium";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "aut";
                                                ipProtocol = "TCP";
                                                kind = "eum";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "ab";
                                                port = "corrupti";
                                                project = "non";
                                                region = "voluptatem";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "dolor";
                                                ipProtocol = "TCP";
                                                kind = "numquam";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "explicabo";
                                                port = "voluptas";
                                                project = "aut";
                                                region = "dignissimos";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "dicta";
                                                ipProtocol = "UDP";
                                                kind = "natus";
                                                loadBalancerType = "NONE";
                                                networkUrl = "voluptatibus";
                                                port = "voluptas";
                                                project = "asperiores";
                                                region = "aperiam";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 4090.54;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repellendus";
                                                        ipProtocol = "TCP";
                                                        kind = "maxime";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "officia";
                                                        port = "asperiores";
                                                        project = "nemo";
                                                        region = "quae";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quaerat";
                                            rrdatas = new String[]{{
                                                add("quod"),
                                                add("labore"),
                                                add("ab"),
                                                add("adipisci"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("id"),
                                                add("suscipit"),
                                                add("velit"),
                                            }};
                                            weight = 6339.31;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = "TCP";
                                                        kind = "fugiat";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "ducimus";
                                                        port = "quos";
                                                        project = "vel";
                                                        region = "labore";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "possimus";
                                                        ipProtocol = "UDP";
                                                        kind = "cum";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "in";
                                                        port = "corporis";
                                                        project = "reiciendis";
                                                        region = "assumenda";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nemo";
                                                        ipProtocol = "UDP";
                                                        kind = "aliquid";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "cum";
                                                        port = "consectetur";
                                                        project = "in";
                                                        region = "exercitationem";
                                                    }}),
                                                }};
                                            }};
                                            kind = "earum";
                                            rrdatas = new String[]{{
                                                add("numquam"),
                                                add("doloribus"),
                                                add("suscipit"),
                                                add("reiciendis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("saepe"),
                                                add("necessitatibus"),
                                                add("dolore"),
                                            }};
                                            weight = 1210.59;
                                        }}),
                                    }};
                                    kind = "asperiores";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("non"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("beatae"),
                            }};
                            ttl = 489509;
                            type = "a";
                        }}),
                    }};
                    deletions = new org.openapis.openapi.models.shared.ResourceRecordSet[]{{
                        add(new ResourceRecordSet() {{
                            kind = "consectetur";
                            name = "corporis";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsa";
                                                        ipProtocol = "UDP";
                                                        kind = "libero";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "accusamus";
                                                        port = "similique";
                                                        project = "tempora";
                                                        region = "aspernatur";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptas";
                                                        ipProtocol = "TCP";
                                                        kind = "voluptas";
                                                        loadBalancerType = "NONE";
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
                                                        ipProtocol = "UDP";
                                                        kind = "nesciunt";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "corrupti";
                                                        port = "pariatur";
                                                        project = "totam";
                                                        region = "hic";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "exercitationem";
                                                        ipProtocol = "UDP";
                                                        kind = "sit";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "sed";
                                                        port = "reiciendis";
                                                        project = "explicabo";
                                                        region = "asperiores";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facilis";
                                                        ipProtocol = "TCP";
                                                        kind = "expedita";
                                                        loadBalancerType = "NONE";
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
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "reiciendis";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "corrupti";
                                                        port = "maiores";
                                                        project = "incidunt";
                                                        region = "sed";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "provident";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "necessitatibus";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "ea";
                                                        port = "occaecati";
                                                        project = "quos";
                                                        region = "voluptatibus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempora";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "voluptate";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "ex";
                                                        port = "sit";
                                                        project = "non";
                                                        region = "officiis";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "praesentium";
                                                        ipProtocol = "UDP";
                                                        kind = "quaerat";
                                                        loadBalancerType = "NONE";
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
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatem";
                                                            ipProtocol = "TCP";
                                                            kind = "expedita";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "consequatur";
                                                            port = "esse";
                                                            project = "ipsam";
                                                            region = "sit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "voluptatum";
                                                location = "quas";
                                                rrdatas = new String[]{{
                                                    add("corporis"),
                                                    add("et"),
                                                    add("blanditiis"),
                                                    add("ex"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("sit"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nostrum";
                                                            ipProtocol = "UDP";
                                                            kind = "error";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "incidunt";
                                                            port = "reiciendis";
                                                            project = "dolorem";
                                                            region = "harum";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dicta";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "occaecati";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "quidem";
                                                            port = "atque";
                                                            project = "laborum";
                                                            region = "nam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "tenetur";
                                                location = "laboriosam";
                                                rrdatas = new String[]{{
                                                    add("amet"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("voluptate"),
                                                    add("unde"),
                                                    add("reiciendis"),
                                                }};
                                            }}),
                                        }};
                                        kind = "provident";
                                    }};
                                    kind = "repellendus";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "voluptates";
                                                ipProtocol = "UNDEFINED";
                                                kind = "est";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "reprehenderit";
                                                port = "facere";
                                                project = "fuga";
                                                region = "praesentium";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "mollitia";
                                                ipProtocol = "TCP";
                                                kind = "voluptatem";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "repudiandae";
                                                port = "quasi";
                                                project = "atque";
                                                region = "reprehenderit";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "asperiores";
                                                ipProtocol = "TCP";
                                                kind = "suscipit";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "maxime";
                                                port = "et";
                                                project = "esse";
                                                region = "amet";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "assumenda";
                                                ipProtocol = "TCP";
                                                kind = "atque";
                                                loadBalancerType = "REGIONAL_L4ILB";
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
                                                        ipProtocol = "TCP";
                                                        kind = "at";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "blanditiis";
                                                        port = "suscipit";
                                                        project = "repudiandae";
                                                        region = "atque";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "atque";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "recusandae";
                                                        loadBalancerType = "REGIONAL_L4ILB";
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
                            }};
                            rrdatas = new String[]{{
                                add("a"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("magnam"),
                                add("saepe"),
                                add("consequuntur"),
                            }};
                            ttl = 580107;
                            type = "officiis";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "perspiciatis";
                            name = "in";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "corporis";
                                                        ipProtocol = "UDP";
                                                        kind = "eveniet";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "vero";
                                                        port = "doloremque";
                                                        project = "iure";
                                                        region = "ipsa";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "totam";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "molestiae";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "qui";
                                                        port = "cum";
                                                        project = "iure";
                                                        region = "necessitatibus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ratione";
                                                        ipProtocol = "UDP";
                                                        kind = "distinctio";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "rem";
                                                        port = "aliquam";
                                                        project = "ad";
                                                        region = "repellat";
                                                    }}),
                                                }};
                                            }};
                                            kind = "alias";
                                            location = "corporis";
                                            rrdatas = new String[]{{
                                                add("nihil"),
                                                add("mollitia"),
                                                add("voluptas"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("maiores"),
                                            }};
                                        }}),
                                    }};
                                    kind = "reiciendis";
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
                                                            ipAddress = "dolore";
                                                            ipProtocol = "UDP";
                                                            kind = "nesciunt";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "recusandae";
                                                            port = "omnis";
                                                            project = "quaerat";
                                                            region = "molestiae";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ex";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "culpa";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "debitis";
                                                            port = "laudantium";
                                                            project = "eum";
                                                            region = "nemo";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "recusandae";
                                                location = "esse";
                                                rrdatas = new String[]{{
                                                    add("quis"),
                                                    add("eum"),
                                                    add("reiciendis"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("aspernatur"),
                                                    add("ullam"),
                                                    add("quasi"),
                                                }};
                                            }}),
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
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eius";
                                                            ipProtocol = "TCP";
                                                            kind = "at";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "eos";
                                                            port = "sapiente";
                                                            project = "eum";
                                                            region = "dicta";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "minima";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "cupiditate";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "earum";
                                                            port = "soluta";
                                                            project = "hic";
                                                            region = "illum";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "eaque";
                                                location = "earum";
                                                rrdatas = new String[]{{
                                                    add("maiores"),
                                                    add("debitis"),
                                                    add("aliquid"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("suscipit"),
                                                    add("dolorem"),
                                                    add("fugit"),
                                                    add("cumque"),
                                                }};
                                            }}),
                                        }};
                                        kind = "fuga";
                                    }};
                                    kind = "ratione";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "necessitatibus";
                                                ipProtocol = "UDP";
                                                kind = "consequatur";
                                                loadBalancerType = "NONE";
                                                networkUrl = "et";
                                                port = "ducimus";
                                                project = "natus";
                                                region = "occaecati";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "suscipit";
                                                ipProtocol = "UNDEFINED";
                                                kind = "quasi";
                                                loadBalancerType = "NONE";
                                                networkUrl = "doloribus";
                                                port = "nulla";
                                                project = "necessitatibus";
                                                region = "ipsa";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "tempora";
                                                ipProtocol = "TCP";
                                                kind = "molestiae";
                                                loadBalancerType = "NONE";
                                                networkUrl = "iusto";
                                                port = "esse";
                                                project = "praesentium";
                                                region = "maiores";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 9672.6;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "fugiat";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "dicta";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "tempora";
                                                        port = "esse";
                                                        project = "ex";
                                                        region = "consectetur";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aliquid";
                                            rrdatas = new String[]{{
                                                add("laborum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("nostrum"),
                                            }};
                                            weight = 8567.56;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aliquid";
                                                        ipProtocol = "TCP";
                                                        kind = "suscipit";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "perferendis";
                                                        port = "eum";
                                                        project = "voluptas";
                                                        region = "iste";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "id";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "error";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "voluptates";
                                                        port = "mollitia";
                                                        project = "laborum";
                                                        region = "libero";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ad";
                                                        ipProtocol = "TCP";
                                                        kind = "enim";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "repellendus";
                                                        port = "ex";
                                                        project = "quo";
                                                        region = "ex";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ut";
                                            rrdatas = new String[]{{
                                                add("expedita"),
                                                add("voluptatem"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("cum"),
                                                add("aliquid"),
                                                add("beatae"),
                                            }};
                                            weight = 5308.6;
                                        }}),
                                    }};
                                    kind = "omnis";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("rerum"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("culpa"),
                                add("voluptatem"),
                                add("sapiente"),
                            }};
                            ttl = 889288;
                            type = "architecto";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "fuga";
                            name = "pariatur";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "alias";
                                                        ipProtocol = "TCP";
                                                        kind = "earum";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "sapiente";
                                                        port = "rem";
                                                        project = "minus";
                                                        region = "nemo";
                                                    }}),
                                                }};
                                            }};
                                            kind = "asperiores";
                                            location = "ratione";
                                            rrdatas = new String[]{{
                                                add("perferendis"),
                                                add("illum"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("impedit"),
                                                add("quibusdam"),
                                                add("nam"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "culpa";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "aliquam";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "deleniti";
                                                        port = "veritatis";
                                                        project = "tempora";
                                                        region = "dolor";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequatur";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "sit";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "fugit";
                                                        port = "ab";
                                                        project = "laudantium";
                                                        region = "quae";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dolor";
                                            location = "fugiat";
                                            rrdatas = new String[]{{
                                                add("consequuntur"),
                                                add("ipsa"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("eveniet"),
                                                add("impedit"),
                                                add("officiis"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "necessitatibus";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "veniam";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "expedita";
                                                        port = "eum";
                                                        project = "vel";
                                                        region = "voluptatum";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magnam";
                                                        ipProtocol = "TCP";
                                                        kind = "ab";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "autem";
                                                        port = "nobis";
                                                        project = "laboriosam";
                                                        region = "recusandae";
                                                    }}),
                                                }};
                                            }};
                                            kind = "consequuntur";
                                            location = "voluptatem";
                                            rrdatas = new String[]{{
                                                add("necessitatibus"),
                                                add("quasi"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("at"),
                                                add("vero"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "harum";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "doloribus";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "optio";
                                                        port = "occaecati";
                                                        project = "nemo";
                                                        region = "voluptate";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "blanditiis";
                                                        ipProtocol = "TCP";
                                                        kind = "voluptas";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "nemo";
                                                        port = "quos";
                                                        project = "eius";
                                                        region = "aspernatur";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ducimus";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "fuga";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "incidunt";
                                                        port = "quasi";
                                                        project = "rem";
                                                        region = "fugiat";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dicta";
                                            location = "nisi";
                                            rrdatas = new String[]{{
                                                add("consectetur"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("cupiditate"),
                                            }};
                                        }}),
                                    }};
                                    kind = "reiciendis";
                                }};
                                kind = "soluta";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eos";
                                                            ipProtocol = "TCP";
                                                            kind = "iste";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "inventore";
                                                            port = "fuga";
                                                            project = "accusamus";
                                                            region = "voluptatibus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "distinctio";
                                                            ipProtocol = "TCP";
                                                            kind = "delectus";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "praesentium";
                                                            port = "maxime";
                                                            project = "magnam";
                                                            region = "temporibus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quos";
                                                            ipProtocol = "TCP";
                                                            kind = "itaque";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "totam";
                                                            port = "earum";
                                                            project = "modi";
                                                            region = "nam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "vero";
                                                location = "voluptatem";
                                                rrdatas = new String[]{{
                                                    add("vel"),
                                                    add("alias"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("non"),
                                                }};
                                            }}),
                                        }};
                                        kind = "maiores";
                                    }};
                                    kind = "enim";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "nulla";
                                                ipProtocol = "TCP";
                                                kind = "esse";
                                                loadBalancerType = "NONE";
                                                networkUrl = "reprehenderit";
                                                port = "est";
                                                project = "quis";
                                                region = "sint";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "accusamus";
                                                ipProtocol = "UDP";
                                                kind = "hic";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "asperiores";
                                                port = "ex";
                                                project = "voluptas";
                                                region = "debitis";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "delectus";
                                                ipProtocol = "UNDEFINED";
                                                kind = "minus";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "laborum";
                                                port = "consectetur";
                                                project = "velit";
                                                region = "atque";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 2164.57;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "soluta";
                                                        ipProtocol = "UDP";
                                                        kind = "nam";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "iusto";
                                                        port = "voluptate";
                                                        project = "sequi";
                                                        region = "dignissimos";
                                                    }}),
                                                }};
                                            }};
                                            kind = "neque";
                                            rrdatas = new String[]{{
                                                add("deleniti"),
                                                add("quibusdam"),
                                                add("iure"),
                                                add("odit"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("vel"),
                                                add("magnam"),
                                                add("quibusdam"),
                                                add("inventore"),
                                            }};
                                            weight = 8180.34;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "architecto";
                                                        ipProtocol = "UDP";
                                                        kind = "quia";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "aliquam";
                                                        port = "velit";
                                                        project = "illo";
                                                        region = "accusantium";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vel";
                                                        ipProtocol = "TCP";
                                                        kind = "beatae";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "excepturi";
                                                        port = "eum";
                                                        project = "velit";
                                                        region = "ut";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "perspiciatis";
                                                        ipProtocol = "UDP";
                                                        kind = "dicta";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "voluptatibus";
                                                        port = "iste";
                                                        project = "itaque";
                                                        region = "alias";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nisi";
                                            rrdatas = new String[]{{
                                                add("velit"),
                                                add("laborum"),
                                                add("non"),
                                                add("dolor"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("sit"),
                                                add("doloremque"),
                                            }};
                                            weight = 74.68;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = "TCP";
                                                        kind = "quidem";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "facilis";
                                                        port = "placeat";
                                                        project = "perspiciatis";
                                                        region = "expedita";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deleniti";
                                                        ipProtocol = "UDP";
                                                        kind = "voluptate";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "unde";
                                                        port = "necessitatibus";
                                                        project = "animi";
                                                        region = "impedit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsam";
                                                        ipProtocol = "TCP";
                                                        kind = "est";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "esse";
                                                        port = "labore";
                                                        project = "veritatis";
                                                        region = "vero";
                                                    }}),
                                                }};
                                            }};
                                            kind = "consectetur";
                                            rrdatas = new String[]{{
                                                add("inventore"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("ad"),
                                            }};
                                            weight = 1830.33;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ex";
                                                        ipProtocol = "TCP";
                                                        kind = "soluta";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "rem";
                                                        port = "dolorum";
                                                        project = "odio";
                                                        region = "fugit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "alias";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "vel";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "quae";
                                                        port = "modi";
                                                        project = "neque";
                                                        region = "exercitationem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "itaque";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "ipsum";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "nulla";
                                                        port = "distinctio";
                                                        project = "maxime";
                                                        region = "quia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quia";
                                            rrdatas = new String[]{{
                                                add("omnis"),
                                                add("libero"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("id"),
                                            }};
                                            weight = 7278.88;
                                        }}),
                                    }};
                                    kind = "fugiat";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("quos"),
                                add("placeat"),
                                add("sit"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("ipsa"),
                                add("voluptates"),
                            }};
                            ttl = 80061;
                            type = "aperiam";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "totam";
                            name = "dolore";
                            routingPolicy = new RRSetRoutingPolicy() {{
                                geo = new RRSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatem";
                                                        ipProtocol = "TCP";
                                                        kind = "esse";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "assumenda";
                                                        port = "beatae";
                                                        project = "est";
                                                        region = "facere";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "corrupti";
                                                        ipProtocol = "TCP";
                                                        kind = "provident";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "necessitatibus";
                                                        port = "tempore";
                                                        project = "sint";
                                                        region = "ea";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "autem";
                                                        ipProtocol = "TCP";
                                                        kind = "rerum";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "corporis";
                                                        port = "officiis";
                                                        project = "voluptatibus";
                                                        region = "cum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "at";
                                            location = "alias";
                                            rrdatas = new String[]{{
                                                add("quidem"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("repudiandae"),
                                                add("accusantium"),
                                                add("expedita"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eos";
                                                        ipProtocol = "UDP";
                                                        kind = "odio";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "odit";
                                                        port = "explicabo";
                                                        project = "corporis";
                                                        region = "error";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "earum";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "recusandae";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "ut";
                                                        port = "quidem";
                                                        project = "quis";
                                                        region = "beatae";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "unde";
                                                        ipProtocol = "TCP";
                                                        kind = "delectus";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "fugit";
                                                        port = "numquam";
                                                        project = "numquam";
                                                        region = "nesciunt";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "at";
                                                        ipProtocol = "TCP";
                                                        kind = "dignissimos";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "necessitatibus";
                                                        port = "corporis";
                                                        project = "qui";
                                                        region = "expedita";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptatum";
                                            location = "cupiditate";
                                            rrdatas = new String[]{{
                                                add("placeat"),
                                                add("enim"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("in"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eum";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "corporis";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "voluptates";
                                                        port = "maiores";
                                                        project = "tempore";
                                                        region = "aperiam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "libero";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "labore";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "occaecati";
                                                        port = "voluptas";
                                                        project = "quo";
                                                        region = "velit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "minus";
                                                        ipProtocol = "UDP";
                                                        kind = "nostrum";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "impedit";
                                                        port = "delectus";
                                                        project = "tempore";
                                                        region = "vero";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odit";
                                                        ipProtocol = "UDP";
                                                        kind = "pariatur";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "reprehenderit";
                                                        port = "aperiam";
                                                        project = "odio";
                                                        region = "minima";
                                                    }}),
                                                }};
                                            }};
                                            kind = "in";
                                            location = "ducimus";
                                            rrdatas = new String[]{{
                                                add("dolores"),
                                                add("error"),
                                                add("veritatis"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("voluptate"),
                                                add("pariatur"),
                                            }};
                                        }}),
                                        add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "similique";
                                                        ipProtocol = "UDP";
                                                        kind = "ex";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "commodi";
                                                        port = "officiis";
                                                        project = "placeat";
                                                        region = "quidem";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "exercitationem";
                                                        ipProtocol = "TCP";
                                                        kind = "dolorem";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "ipsa";
                                                        port = "sint";
                                                        project = "vero";
                                                        region = "sequi";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repudiandae";
                                                        ipProtocol = "UDP";
                                                        kind = "dicta";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "veniam";
                                                        port = "animi";
                                                        project = "dolores";
                                                        region = "nam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dicta";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "necessitatibus";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "ipsa";
                                                        port = "ducimus";
                                                        project = "maiores";
                                                        region = "veritatis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quasi";
                                            location = "laboriosam";
                                            rrdatas = new String[]{{
                                                add("libero"),
                                                add("excepturi"),
                                                add("occaecati"),
                                                add("nemo"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("nostrum"),
                                                add("doloribus"),
                                            }};
                                        }}),
                                    }};
                                    kind = "eligendi";
                                }};
                                kind = "sint";
                                primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "animi";
                                                            ipProtocol = "TCP";
                                                            kind = "totam";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "odio";
                                                            port = "eaque";
                                                            project = "saepe";
                                                            region = "architecto";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quos";
                                                            ipProtocol = "TCP";
                                                            kind = "assumenda";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "libero";
                                                            port = "velit";
                                                            project = "doloremque";
                                                            region = "delectus";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "impedit";
                                                            ipProtocol = "UDP";
                                                            kind = "ipsum";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "saepe";
                                                            port = "deserunt";
                                                            project = "doloremque";
                                                            region = "quis";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "veniam";
                                                            ipProtocol = "UDP";
                                                            kind = "architecto";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "molestiae";
                                                            port = "eligendi";
                                                            project = "possimus";
                                                            region = "non";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "magnam";
                                                location = "itaque";
                                                rrdatas = new String[]{{
                                                    add("asperiores"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("consequuntur"),
                                                    add("facere"),
                                                }};
                                            }}),
                                            add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "odit";
                                                            ipProtocol = "UDP";
                                                            kind = "amet";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "ab";
                                                            port = "velit";
                                                            project = "facilis";
                                                            region = "tempore";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nisi";
                                                            ipProtocol = "UDP";
                                                            kind = "quaerat";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "distinctio";
                                                            port = "nisi";
                                                            project = "quis";
                                                            region = "nisi";
                                                        }}),
                                                        add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "libero";
                                                            ipProtocol = "UDP";
                                                            kind = "facere";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "ipsum";
                                                            port = "ad";
                                                            project = "voluptatibus";
                                                            region = "voluptatibus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "consequuntur";
                                                location = "debitis";
                                                rrdatas = new String[]{{
                                                    add("rerum"),
                                                    add("eos"),
                                                }};
                                                signatureRrdatas = new String[]{{
                                                    add("nostrum"),
                                                    add("neque"),
                                                }};
                                            }}),
                                        }};
                                        kind = "iusto";
                                    }};
                                    kind = "est";
                                    primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "eligendi";
                                                ipProtocol = "UDP";
                                                kind = "unde";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "ducimus";
                                                port = "dolor";
                                                project = "dicta";
                                                region = "error";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "porro";
                                                ipProtocol = "UNDEFINED";
                                                kind = "dignissimos";
                                                loadBalancerType = "NONE";
                                                networkUrl = "fugiat";
                                                port = "ad";
                                                project = "aspernatur";
                                                region = "enim";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "delectus";
                                                ipProtocol = "TCP";
                                                kind = "dignissimos";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "illo";
                                                port = "ab";
                                                project = "incidunt";
                                                region = "accusamus";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 9025.81;
                                }};
                                wrr = new RRSetRoutingPolicyWrrPolicy() {{
                                    items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eos";
                                                        ipProtocol = "UDP";
                                                        kind = "earum";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "praesentium";
                                                        port = "nemo";
                                                        project = "repellat";
                                                        region = "quisquam";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sequi";
                                                        ipProtocol = "TCP";
                                                        kind = "deleniti";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "labore";
                                                        port = "assumenda";
                                                        project = "aliquam";
                                                        region = "quisquam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "provident";
                                            rrdatas = new String[]{{
                                                add("repudiandae"),
                                                add("consequatur"),
                                                add("maxime"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("nam"),
                                            }};
                                            weight = 7119.91;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "provident";
                                                        ipProtocol = "UDP";
                                                        kind = "rerum";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "corporis";
                                                        port = "vero";
                                                        project = "similique";
                                                        region = "repellendus";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iure";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "commodi";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "commodi";
                                                        port = "aut";
                                                        project = "voluptatem";
                                                        region = "ad";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quae";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "illum";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "quidem";
                                                        port = "cum";
                                                        project = "amet";
                                                        region = "quasi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dicta";
                                            rrdatas = new String[]{{
                                                add("doloremque"),
                                                add("earum"),
                                                add("iusto"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("provident"),
                                            }};
                                            weight = 6771.41;
                                        }}),
                                        add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "provident";
                                                        ipProtocol = "UDP";
                                                        kind = "consequatur";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "molestiae";
                                                        port = "itaque";
                                                        project = "facilis";
                                                        region = "corrupti";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aperiam";
                                                        ipProtocol = "TCP";
                                                        kind = "accusamus";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "totam";
                                                        port = "dicta";
                                                        project = "voluptatem";
                                                        region = "velit";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolor";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "a";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "occaecati";
                                                        port = "atque";
                                                        project = "beatae";
                                                        region = "at";
                                                    }}),
                                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "labore";
                                                        ipProtocol = "UDP";
                                                        kind = "esse";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "perferendis";
                                                        port = "rerum";
                                                        project = "ea";
                                                        region = "aperiam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dignissimos";
                                            rrdatas = new String[]{{
                                                add("velit"),
                                                add("porro"),
                                                add("provident"),
                                                add("consectetur"),
                                            }};
                                            signatureRrdatas = new String[]{{
                                                add("dignissimos"),
                                                add("consectetur"),
                                                add("soluta"),
                                                add("natus"),
                                            }};
                                            weight = 8398.07;
                                        }}),
                                    }};
                                    kind = "officia";
                                }};
                            }};
                            rrdatas = new String[]{{
                                add("tenetur"),
                            }};
                            signatureRrdatas = new String[]{{
                                add("quo"),
                            }};
                            ttl = 931077;
                            type = "illum";
                        }}),
                    }};
                    id = "laborum";
                    isServing = false;
                    kind = "dignissimos";
                    startTime = "vero";
                    status = "PENDING";
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