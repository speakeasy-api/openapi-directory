<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    managedZone = "sed";
                    project = "dignissimos";
                }};
                queryParams = new DnsChangesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "commodi";
                    alt = "media";
                    callback = "natus";
                    clientOperationId = "est";
                    fields = "praesentium";
                    key = "quam";
                    oauthToken = "sed";
                    prettyPrint = true;
                    quotaUser = "in";
                    uploadType = "in";
                    uploadProtocol = "laboriosam";
                }};
                request = new Change() {{
                    additions = new openapisdk.models.shared.ResourceRecordSet[]() {{
                        add(new ResourceRecordSet() {{
                            kind = "error";
                            name = "recusandae";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tenetur";
                                                        ipProtocol = "undefined";
                                                        kind = "maiores";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ex";
                                                        port = "rerum";
                                                        project = "nesciunt";
                                                        region = "quia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quasi";
                                            location = "qui";
                                            rrdatas = new String[]() {{
                                                add("eum"),
                                                add("debitis"),
                                                add("laboriosam"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("reiciendis"),
                                                add("minus"),
                                                add("excepturi"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magni";
                                                        ipProtocol = "udp";
                                                        kind = "quis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "doloremque";
                                                        port = "quibusdam";
                                                        project = "aut";
                                                        region = "reiciendis";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cum";
                                                        ipProtocol = "tcp";
                                                        kind = "eum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "qui";
                                                        port = "doloribus";
                                                        project = "sequi";
                                                        region = "architecto";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "alias";
                                                        ipProtocol = "tcp";
                                                        kind = "sit";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dolor";
                                                        port = "reprehenderit";
                                                        project = "laborum";
                                                        region = "voluptatibus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsum";
                                            location = "vel";
                                            rrdatas = new String[]() {{
                                                add("consequatur"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("atque"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "amet";
                                                        ipProtocol = "undefined";
                                                        kind = "unde";
                                                        loadBalancerType = "none";
                                                        networkUrl = "at";
                                                        port = "esse";
                                                        project = "temporibus";
                                                        region = "at";
                                                    }}),
                                                }};
                                            }};
                                            kind = "delectus";
                                            location = "aut";
                                            rrdatas = new String[]() {{
                                                add("quia"),
                                                add("quia"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("voluptatibus"),
                                            }};
                                        }}),
                                    }};
                                    kind = "et";
                                }};
                                kind = "ratione";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "cum";
                                                            ipProtocol = "tcp";
                                                            kind = "consectetur";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "id";
                                                            port = "ut";
                                                            project = "beatae";
                                                            region = "quia";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "est";
                                                location = "suscipit";
                                                rrdatas = new String[]() {{
                                                    add("est"),
                                                    add("velit"),
                                                    add("nihil"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("animi"),
                                                    add("magni"),
                                                    add("rerum"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sint";
                                                            ipProtocol = "tcp";
                                                            kind = "voluptatem";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "ipsam";
                                                            port = "dolores";
                                                            project = "est";
                                                            region = "dolores";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "corrupti";
                                                            ipProtocol = "tcp";
                                                            kind = "ex";
                                                            loadBalancerType = "none";
                                                            networkUrl = "dolor";
                                                            port = "optio";
                                                            project = "eos";
                                                            region = "veniam";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "maiores";
                                                            ipProtocol = "tcp";
                                                            kind = "dolorem";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "iure";
                                                            port = "atque";
                                                            project = "corporis";
                                                            region = "sed";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "illum";
                                                location = "enim";
                                                rrdatas = new String[]() {{
                                                    add("et"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("excepturi"),
                                                }};
                                            }}),
                                        }};
                                        kind = "est";
                                    }};
                                    kind = "velit";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "exercitationem";
                                                ipProtocol = "tcp";
                                                kind = "vitae";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "vel";
                                                port = "ab";
                                                project = "provident";
                                                region = "placeat";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "cum";
                                                ipProtocol = "undefined";
                                                kind = "laudantium";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "enim";
                                                port = "deleniti";
                                                project = "rerum";
                                                region = "aspernatur";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "dicta";
                                                ipProtocol = "tcp";
                                                kind = "unde";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "facere";
                                                port = "est";
                                                project = "rem";
                                                region = "quia";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 0.200000;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "at";
                                                        ipProtocol = "undefined";
                                                        kind = "fuga";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "debitis";
                                                        port = "ratione";
                                                        project = "ipsam";
                                                        region = "dicta";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ut";
                                                        ipProtocol = "undefined";
                                                        kind = "ea";
                                                        loadBalancerType = "none";
                                                        networkUrl = "eligendi";
                                                        port = "dolores";
                                                        project = "qui";
                                                        region = "ea";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nihil";
                                            rrdatas = new String[]() {{
                                                add("sint"),
                                                add("praesentium"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("aspernatur"),
                                            }};
                                            weight = 11.100000;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsam";
                                                        ipProtocol = "udp";
                                                        kind = "iste";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "dicta";
                                                        port = "sed";
                                                        project = "totam";
                                                        region = "cumque";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cupiditate";
                                                        ipProtocol = "undefined";
                                                        kind = "pariatur";
                                                        loadBalancerType = "none";
                                                        networkUrl = "omnis";
                                                        port = "culpa";
                                                        project = "at";
                                                        region = "totam";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "numquam";
                                                        ipProtocol = "undefined";
                                                        kind = "eum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "et";
                                                        port = "qui";
                                                        project = "quam";
                                                        region = "dolores";
                                                    }}),
                                                }};
                                            }};
                                            kind = "autem";
                                            rrdatas = new String[]() {{
                                                add("minima"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("minus"),
                                                add("veniam"),
                                                add("dignissimos"),
                                            }};
                                            weight = 88.099998;
                                        }}),
                                    }};
                                    kind = "facilis";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("ut"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("rerum"),
                            }};
                            ttl = 5738374897432662983;
                            type = "pariatur";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "illum";
                            name = "fugiat";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "esse";
                                                        ipProtocol = "udp";
                                                        kind = "doloremque";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "maiores";
                                                        port = "nihil";
                                                        project = "voluptas";
                                                        region = "mollitia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "fugit";
                                            location = "non";
                                            rrdatas = new String[]() {{
                                                add("aut"),
                                                add("quo"),
                                                add("quis"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("veritatis"),
                                                add("sequi"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = "udp";
                                                        kind = "sit";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ex";
                                                        port = "expedita";
                                                        project = "nihil";
                                                        region = "incidunt";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "est";
                                                        ipProtocol = "undefined";
                                                        kind = "esse";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ut";
                                                        port = "et";
                                                        project = "id";
                                                        region = "consequuntur";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magni";
                                                        ipProtocol = "undefined";
                                                        kind = "doloremque";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "maiores";
                                                        port = "dolor";
                                                        project = "itaque";
                                                        region = "minima";
                                                    }}),
                                                }};
                                            }};
                                            kind = "molestiae";
                                            location = "esse";
                                            rrdatas = new String[]() {{
                                                add("qui"),
                                                add("itaque"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("adipisci"),
                                                add("vel"),
                                                add("mollitia"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "omnis";
                                                        ipProtocol = "udp";
                                                        kind = "temporibus";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "tenetur";
                                                        port = "incidunt";
                                                        project = "officiis";
                                                        region = "optio";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tenetur";
                                                        ipProtocol = "tcp";
                                                        kind = "enim";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quod";
                                                        port = "exercitationem";
                                                        project = "quia";
                                                        region = "est";
                                                    }}),
                                                }};
                                            }};
                                            kind = "fuga";
                                            location = "et";
                                            rrdatas = new String[]() {{
                                                add("ex"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("consequuntur"),
                                                add("et"),
                                            }};
                                        }}),
                                    }};
                                    kind = "sit";
                                }};
                                kind = "autem";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "molestiae";
                                                            ipProtocol = "udp";
                                                            kind = "et";
                                                            loadBalancerType = "none";
                                                            networkUrl = "qui";
                                                            port = "necessitatibus";
                                                            project = "dolorem";
                                                            region = "itaque";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "veniam";
                                                            ipProtocol = "tcp";
                                                            kind = "harum";
                                                            loadBalancerType = "none";
                                                            networkUrl = "placeat";
                                                            port = "quis";
                                                            project = "nisi";
                                                            region = "sit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "modi";
                                                location = "qui";
                                                rrdatas = new String[]() {{
                                                    add("nemo"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("commodi"),
                                                    add("nulla"),
                                                    add("culpa"),
                                                }};
                                            }}),
                                        }};
                                        kind = "consectetur";
                                    }};
                                    kind = "id";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quo";
                                                ipProtocol = "tcp";
                                                kind = "et";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "qui";
                                                port = "sit";
                                                project = "et";
                                                region = "ut";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "nemo";
                                                ipProtocol = "tcp";
                                                kind = "voluptatibus";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "accusantium";
                                                port = "excepturi";
                                                project = "consequuntur";
                                                region = "sed";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 15.200000;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eveniet";
                                                        ipProtocol = "udp";
                                                        kind = "nulla";
                                                        loadBalancerType = "none";
                                                        networkUrl = "occaecati";
                                                        port = "eius";
                                                        project = "similique";
                                                        region = "eum";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "totam";
                                                        ipProtocol = "undefined";
                                                        kind = "id";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "veniam";
                                                        port = "ea";
                                                        project = "omnis";
                                                        region = "et";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsum";
                                            rrdatas = new String[]() {{
                                                add("et"),
                                                add("nostrum"),
                                                add("vel"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("voluptatibus"),
                                            }};
                                            weight = 48.099998;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "in";
                                                        ipProtocol = "undefined";
                                                        kind = "et";
                                                        loadBalancerType = "none";
                                                        networkUrl = "doloribus";
                                                        port = "eveniet";
                                                        project = "deleniti";
                                                        region = "reiciendis";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laudantium";
                                                        ipProtocol = "undefined";
                                                        kind = "quam";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "recusandae";
                                                        port = "quisquam";
                                                        project = "quasi";
                                                        region = "a";
                                                    }}),
                                                }};
                                            }};
                                            kind = "minima";
                                            rrdatas = new String[]() {{
                                                add("ducimus"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("iure"),
                                                add("voluptatum"),
                                                add("et"),
                                            }};
                                            weight = 7.100000;
                                        }}),
                                    }};
                                    kind = "repudiandae";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("maxime"),
                                add("quis"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("dolores"),
                                add("ipsam"),
                            }};
                            ttl = 8618838089733338640;
                            type = "corporis";
                        }}),
                    }};
                    deletions = new openapisdk.models.shared.ResourceRecordSet[]() {{
                        add(new ResourceRecordSet() {{
                            kind = "aut";
                            name = "possimus";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = true;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = "tcp";
                                                        kind = "quisquam";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "voluptatum";
                                                        port = "laudantium";
                                                        project = "perspiciatis";
                                                        region = "qui";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestias";
                                                        ipProtocol = "tcp";
                                                        kind = "voluptas";
                                                        loadBalancerType = "none";
                                                        networkUrl = "accusantium";
                                                        port = "accusamus";
                                                        project = "fugiat";
                                                        region = "qui";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "incidunt";
                                                        ipProtocol = "udp";
                                                        kind = "omnis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quis";
                                                        port = "amet";
                                                        project = "non";
                                                        region = "et";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quo";
                                            location = "vel";
                                            rrdatas = new String[]() {{
                                                add("alias"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("rerum"),
                                                add("esse"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatem";
                                                        ipProtocol = "udp";
                                                        kind = "aut";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "neque";
                                                        port = "qui";
                                                        project = "molestiae";
                                                        region = "alias";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quo";
                                                        ipProtocol = "udp";
                                                        kind = "eveniet";
                                                        loadBalancerType = "none";
                                                        networkUrl = "deserunt";
                                                        port = "at";
                                                        project = "pariatur";
                                                        region = "nesciunt";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ea";
                                            location = "eligendi";
                                            rrdatas = new String[]() {{
                                                add("eos"),
                                                add("aut"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("magni"),
                                                add("odit"),
                                                add("atque"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "labore";
                                                        ipProtocol = "undefined";
                                                        kind = "repellat";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "laboriosam";
                                                        port = "facere";
                                                        project = "aliquam";
                                                        region = "libero";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eos";
                                                        ipProtocol = "tcp";
                                                        kind = "doloremque";
                                                        loadBalancerType = "none";
                                                        networkUrl = "eligendi";
                                                        port = "officia";
                                                        project = "rem";
                                                        region = "eos";
                                                    }}),
                                                }};
                                            }};
                                            kind = "beatae";
                                            location = "magnam";
                                            rrdatas = new String[]() {{
                                                add("est"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("cumque"),
                                                add("omnis"),
                                            }};
                                        }}),
                                    }};
                                    kind = "voluptatum";
                                }};
                                kind = "delectus";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "et";
                                                            ipProtocol = "udp";
                                                            kind = "qui";
                                                            loadBalancerType = "none";
                                                            networkUrl = "quae";
                                                            port = "labore";
                                                            project = "aut";
                                                            region = "cum";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "fugiat";
                                                            ipProtocol = "undefined";
                                                            kind = "sed";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "quia";
                                                            port = "pariatur";
                                                            project = "rerum";
                                                            region = "deserunt";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "blanditiis";
                                                location = "a";
                                                rrdatas = new String[]() {{
                                                    add("nemo"),
                                                    add("tenetur"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("quas"),
                                                    add("aperiam"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "totam";
                                                            ipProtocol = "tcp";
                                                            kind = "vel";
                                                            loadBalancerType = "none";
                                                            networkUrl = "explicabo";
                                                            port = "aut";
                                                            project = "accusantium";
                                                            region = "in";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "qui";
                                                            ipProtocol = "udp";
                                                            kind = "et";
                                                            loadBalancerType = "none";
                                                            networkUrl = "dolorem";
                                                            port = "quia";
                                                            project = "itaque";
                                                            region = "saepe";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "omnis";
                                                            ipProtocol = "udp";
                                                            kind = "quia";
                                                            loadBalancerType = "none";
                                                            networkUrl = "mollitia";
                                                            port = "sed";
                                                            project = "impedit";
                                                            region = "reiciendis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quis";
                                                location = "minima";
                                                rrdatas = new String[]() {{
                                                    add("ducimus"),
                                                    add("odit"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("doloremque"),
                                                }};
                                            }}),
                                        }};
                                        kind = "dolores";
                                    }};
                                    kind = "sit";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "voluptatibus";
                                                ipProtocol = "undefined";
                                                kind = "repellendus";
                                                loadBalancerType = "none";
                                                networkUrl = "eos";
                                                port = "non";
                                                project = "qui";
                                                region = "cupiditate";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 45.099998;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iste";
                                                        ipProtocol = "udp";
                                                        kind = "et";
                                                        loadBalancerType = "none";
                                                        networkUrl = "voluptates";
                                                        port = "fugit";
                                                        project = "et";
                                                        region = "pariatur";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quia";
                                            rrdatas = new String[]() {{
                                                add("labore"),
                                                add("in"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("ipsa"),
                                                add("quae"),
                                                add("sint"),
                                            }};
                                            weight = 99.199997;
                                        }}),
                                    }};
                                    kind = "officiis";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("libero"),
                                add("porro"),
                                add("minima"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("aliquid"),
                                add("molestias"),
                                add("sint"),
                            }};
                            ttl = 2179204698057300961;
                            type = "provident";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "in";
                            name = "voluptate";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = true;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "suscipit";
                                                        ipProtocol = "udp";
                                                        kind = "aut";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "numquam";
                                                        port = "eum";
                                                        project = "natus";
                                                        region = "quasi";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eos";
                                                        ipProtocol = "udp";
                                                        kind = "odit";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "aliquam";
                                                        port = "voluptatem";
                                                        project = "dolorum";
                                                        region = "amet";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quo";
                                                        ipProtocol = "udp";
                                                        kind = "quae";
                                                        loadBalancerType = "none";
                                                        networkUrl = "vero";
                                                        port = "aut";
                                                        project = "aut";
                                                        region = "magnam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "eligendi";
                                            location = "aut";
                                            rrdatas = new String[]() {{
                                                add("natus"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("fugiat"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sed";
                                                        ipProtocol = "undefined";
                                                        kind = "autem";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "sed";
                                                        port = "pariatur";
                                                        project = "dignissimos";
                                                        region = "ut";
                                                    }}),
                                                }};
                                            }};
                                            kind = "tempora";
                                            location = "assumenda";
                                            rrdatas = new String[]() {{
                                                add("rerum"),
                                                add("similique"),
                                                add("nesciunt"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("non"),
                                                add("fugiat"),
                                            }};
                                        }}),
                                    }};
                                    kind = "voluptatum";
                                }};
                                kind = "ullam";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "perspiciatis";
                                                            ipProtocol = "undefined";
                                                            kind = "dolores";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "placeat";
                                                            port = "dolorem";
                                                            project = "praesentium";
                                                            region = "deleniti";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "beatae";
                                                location = "dolorem";
                                                rrdatas = new String[]() {{
                                                    add("illum"),
                                                    add("alias"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("itaque"),
                                                    add("adipisci"),
                                                    add("consequatur"),
                                                }};
                                            }}),
                                        }};
                                        kind = "necessitatibus";
                                    }};
                                    kind = "delectus";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "officia";
                                                ipProtocol = "undefined";
                                                kind = "illum";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "iste";
                                                port = "delectus";
                                                project = "omnis";
                                                region = "molestiae";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "repudiandae";
                                                ipProtocol = "undefined";
                                                kind = "odio";
                                                loadBalancerType = "none";
                                                networkUrl = "provident";
                                                port = "vero";
                                                project = "doloremque";
                                                region = "rem";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 84.199997;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "placeat";
                                                        ipProtocol = "tcp";
                                                        kind = "quo";
                                                        loadBalancerType = "none";
                                                        networkUrl = "error";
                                                        port = "reiciendis";
                                                        project = "corrupti";
                                                        region = "et";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cupiditate";
                                                        ipProtocol = "tcp";
                                                        kind = "pariatur";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "natus";
                                                        port = "ab";
                                                        project = "voluptate";
                                                        region = "voluptates";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rerum";
                                                        ipProtocol = "tcp";
                                                        kind = "ducimus";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quis";
                                                        port = "quia";
                                                        project = "dignissimos";
                                                        region = "dicta";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sit";
                                            rrdatas = new String[]() {{
                                                add("aut"),
                                                add("autem"),
                                                add("modi"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("in"),
                                                add("voluptas"),
                                            }};
                                            weight = 92.099998;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "soluta";
                                                        ipProtocol = "udp";
                                                        kind = "provident";
                                                        loadBalancerType = "none";
                                                        networkUrl = "culpa";
                                                        port = "praesentium";
                                                        project = "saepe";
                                                        region = "dolores";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ut";
                                                        ipProtocol = "undefined";
                                                        kind = "voluptatem";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "vel";
                                                        port = "qui";
                                                        project = "quidem";
                                                        region = "possimus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "recusandae";
                                            rrdatas = new String[]() {{
                                                add("alias"),
                                                add("repellat"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("ullam"),
                                                add("magni"),
                                            }};
                                            weight = 60.099998;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "accusamus";
                                                        ipProtocol = "udp";
                                                        kind = "provident";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ut";
                                                        port = "dolorem";
                                                        project = "culpa";
                                                        region = "enim";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = "undefined";
                                                        kind = "et";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "aliquam";
                                                        port = "numquam";
                                                        project = "incidunt";
                                                        region = "quia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptas";
                                            rrdatas = new String[]() {{
                                                add("quia"),
                                                add("repudiandae"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("sint"),
                                            }};
                                            weight = 96.199997;
                                        }}),
                                    }};
                                    kind = "sint";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("iste"),
                                add("assumenda"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("consequuntur"),
                                add("et"),
                            }};
                            ttl = 2186402022128770732;
                            type = "doloremque";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "occaecati";
                            name = "sed";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ullam";
                                                        ipProtocol = "tcp";
                                                        kind = "nobis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dolor";
                                                        port = "quia";
                                                        project = "necessitatibus";
                                                        region = "est";
                                                    }}),
                                                }};
                                            }};
                                            kind = "vero";
                                            location = "similique";
                                            rrdatas = new String[]() {{
                                                add("provident"),
                                                add("voluptatem"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("eligendi"),
                                                add("non"),
                                                add("ab"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ea";
                                                        ipProtocol = "udp";
                                                        kind = "atque";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "praesentium";
                                                        port = "consequatur";
                                                        project = "cupiditate";
                                                        region = "deserunt";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolores";
                                                        ipProtocol = "tcp";
                                                        kind = "vel";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "sed";
                                                        port = "consequatur";
                                                        project = "inventore";
                                                        region = "assumenda";
                                                    }}),
                                                }};
                                            }};
                                            kind = "tempora";
                                            location = "quas";
                                            rrdatas = new String[]() {{
                                                add("nesciunt"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("nisi"),
                                                add("eius"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deleniti";
                                                        ipProtocol = "undefined";
                                                        kind = "quia";
                                                        loadBalancerType = "none";
                                                        networkUrl = "enim";
                                                        port = "voluptates";
                                                        project = "dolorem";
                                                        region = "itaque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nihil";
                                            location = "cum";
                                            rrdatas = new String[]() {{
                                                add("excepturi"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("accusamus"),
                                            }};
                                        }}),
                                    }};
                                    kind = "et";
                                }};
                                kind = "accusamus";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "omnis";
                                                            ipProtocol = "udp";
                                                            kind = "et";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "aut";
                                                            port = "quos";
                                                            project = "vel";
                                                            region = "voluptate";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "architecto";
                                                location = "adipisci";
                                                rrdatas = new String[]() {{
                                                    add("autem"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("quam"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "architecto";
                                                            ipProtocol = "undefined";
                                                            kind = "autem";
                                                            loadBalancerType = "none";
                                                            networkUrl = "facere";
                                                            port = "aut";
                                                            project = "dignissimos";
                                                            region = "fugit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quo";
                                                location = "earum";
                                                rrdatas = new String[]() {{
                                                    add("doloremque"),
                                                    add("sunt"),
                                                    add("dignissimos"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("ducimus"),
                                                    add("sit"),
                                                }};
                                            }}),
                                        }};
                                        kind = "praesentium";
                                    }};
                                    kind = "sed";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "et";
                                                ipProtocol = "udp";
                                                kind = "quo";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "sed";
                                                port = "nihil";
                                                project = "id";
                                                region = "aut";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "sunt";
                                                ipProtocol = "tcp";
                                                kind = "atque";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "corporis";
                                                port = "dolor";
                                                project = "sunt";
                                                region = "sapiente";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "et";
                                                ipProtocol = "udp";
                                                kind = "ad";
                                                loadBalancerType = "none";
                                                networkUrl = "corrupti";
                                                port = "et";
                                                project = "omnis";
                                                region = "tenetur";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 97.099998;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "excepturi";
                                                        ipProtocol = "udp";
                                                        kind = "sed";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "optio";
                                                        port = "accusantium";
                                                        project = "voluptatem";
                                                        region = "qui";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officia";
                                                        ipProtocol = "undefined";
                                                        kind = "et";
                                                        loadBalancerType = "none";
                                                        networkUrl = "expedita";
                                                        port = "sed";
                                                        project = "voluptatibus";
                                                        region = "officiis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "at";
                                            rrdatas = new String[]() {{
                                                add("quisquam"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("minus"),
                                                add("sed"),
                                                add("harum"),
                                            }};
                                            weight = 86.099998;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quidem";
                                                        ipProtocol = "udp";
                                                        kind = "possimus";
                                                        loadBalancerType = "none";
                                                        networkUrl = "id";
                                                        port = "libero";
                                                        project = "veritatis";
                                                        region = "sapiente";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ducimus";
                                                        ipProtocol = "undefined";
                                                        kind = "dolore";
                                                        loadBalancerType = "none";
                                                        networkUrl = "suscipit";
                                                        port = "dolorem";
                                                        project = "et";
                                                        region = "molestiae";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequatur";
                                                        ipProtocol = "undefined";
                                                        kind = "consequatur";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "natus";
                                                        port = "velit";
                                                        project = "qui";
                                                        region = "excepturi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ex";
                                            rrdatas = new String[]() {{
                                                add("ut"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("commodi"),
                                                add("voluptatum"),
                                                add("omnis"),
                                            }};
                                            weight = 4.100000;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deleniti";
                                                        ipProtocol = "udp";
                                                        kind = "odit";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "aliquid";
                                                        port = "enim";
                                                        project = "cum";
                                                        region = "et";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quo";
                                                        ipProtocol = "undefined";
                                                        kind = "ipsum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "optio";
                                                        port = "aut";
                                                        project = "saepe";
                                                        region = "optio";
                                                    }}),
                                                }};
                                            }};
                                            kind = "animi";
                                            rrdatas = new String[]() {{
                                                add("ut"),
                                                add("fugiat"),
                                                add("illum"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("eum"),
                                                add("dolorem"),
                                                add("id"),
                                            }};
                                            weight = 44.099998;
                                        }}),
                                    }};
                                    kind = "et";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("voluptatibus"),
                                add("aliquam"),
                                add("architecto"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("rerum"),
                                add("inventore"),
                            }};
                            ttl = 2591322304424753360;
                            type = "aut";
                        }}),
                    }};
                    id = "quia";
                    isServing = false;
                    kind = "saepe";
                    startTime = "dolorem";
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