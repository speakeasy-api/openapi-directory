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
                    managedZone = "sit";
                    project = "voluptas";
                }};
                queryParams = new DnsChangesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "expedita";
                    alt = "proto";
                    callback = "dolor";
                    clientOperationId = "expedita";
                    fields = "voluptas";
                    key = "fugit";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
                request = new Change() {{
                    additions = new openapisdk.models.shared.ResourceRecordSet[]() {{
                        add(new ResourceRecordSet() {{
                            kind = "et";
                            name = "ut";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = true;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iste";
                                                        ipProtocol = "undefined";
                                                        kind = "totam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "illum";
                                                        port = "debitis";
                                                        project = "vel";
                                                        region = "odio";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dolore";
                                            location = "id";
                                            rrdatas = new String[]() {{
                                                add("accusantium"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("commodi"),
                                                add("quis"),
                                                add("est"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odit";
                                                        ipProtocol = "udp";
                                                        kind = "voluptas";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "aut";
                                                        port = "illo";
                                                        project = "sed";
                                                        region = "officiis";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "autem";
                                                        ipProtocol = "undefined";
                                                        kind = "nobis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "qui";
                                                        port = "recusandae";
                                                        project = "at";
                                                        region = "ipsum";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eveniet";
                                                        ipProtocol = "tcp";
                                                        kind = "sint";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ut";
                                                        port = "exercitationem";
                                                        project = "aut";
                                                        region = "reprehenderit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "tempore";
                                            location = "maiores";
                                            rrdatas = new String[]() {{
                                                add("dolor"),
                                                add("beatae"),
                                                add("veritatis"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("et"),
                                                add("omnis"),
                                                add("ipsum"),
                                            }};
                                        }}),
                                    }};
                                    kind = "ex";
                                }};
                                geoPolicy = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = true;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rerum";
                                                        ipProtocol = "tcp";
                                                        kind = "voluptas";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "reprehenderit";
                                                        port = "qui";
                                                        project = "qui";
                                                        region = "unde";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "in";
                                                        ipProtocol = "tcp";
                                                        kind = "qui";
                                                        loadBalancerType = "none";
                                                        networkUrl = "itaque";
                                                        port = "ab";
                                                        project = "neque";
                                                        region = "ullam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "et";
                                            location = "accusantium";
                                            rrdatas = new String[]() {{
                                                add("architecto"),
                                                add("quam"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("cumque"),
                                            }};
                                        }}),
                                    }};
                                    kind = "soluta";
                                }};
                                kind = "sunt";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "optio";
                                                            ipProtocol = "undefined";
                                                            kind = "earum";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "omnis";
                                                            port = "ut";
                                                            project = "consequatur";
                                                            region = "dolor";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "commodi";
                                                            ipProtocol = "undefined";
                                                            kind = "reprehenderit";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "nostrum";
                                                            port = "ut";
                                                            project = "laboriosam";
                                                            region = "sed";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "a";
                                                            ipProtocol = "undefined";
                                                            kind = "aut";
                                                            loadBalancerType = "none";
                                                            networkUrl = "consequuntur";
                                                            port = "laudantium";
                                                            project = "autem";
                                                            region = "ipsa";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "expedita";
                                                location = "doloremque";
                                                rrdatas = new String[]() {{
                                                    add("atque"),
                                                    add("ratione"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("explicabo"),
                                                    add("ea"),
                                                    add("maxime"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "perferendis";
                                                            ipProtocol = "undefined";
                                                            kind = "rerum";
                                                            loadBalancerType = "none";
                                                            networkUrl = "quis";
                                                            port = "cumque";
                                                            project = "minima";
                                                            region = "necessitatibus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "est";
                                                location = "quis";
                                                rrdatas = new String[]() {{
                                                    add("labore"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("impedit"),
                                                    add("ad"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vel";
                                                            ipProtocol = "tcp";
                                                            kind = "modi";
                                                            loadBalancerType = "none";
                                                            networkUrl = "tempora";
                                                            port = "deserunt";
                                                            project = "eaque";
                                                            region = "sunt";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = "undefined";
                                                            kind = "quis";
                                                            loadBalancerType = "none";
                                                            networkUrl = "vel";
                                                            port = "placeat";
                                                            project = "qui";
                                                            region = "nisi";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quis";
                                                location = "adipisci";
                                                rrdatas = new String[]() {{
                                                    add("rerum"),
                                                    add("et"),
                                                    add("accusamus"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("laborum"),
                                                    add("rerum"),
                                                }};
                                            }}),
                                        }};
                                        kind = "ut";
                                    }};
                                    kind = "laborum";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quis";
                                                ipProtocol = "tcp";
                                                kind = "soluta";
                                                loadBalancerType = "none";
                                                networkUrl = "consequuntur";
                                                port = "excepturi";
                                                project = "mollitia";
                                                region = "inventore";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 29.200001;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ut";
                                                        ipProtocol = "undefined";
                                                        kind = "fuga";
                                                        loadBalancerType = "none";
                                                        networkUrl = "sed";
                                                        port = "et";
                                                        project = "consequuntur";
                                                        region = "non";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cupiditate";
                                                        ipProtocol = "udp";
                                                        kind = "molestiae";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quasi";
                                                        port = "corrupti";
                                                        project = "enim";
                                                        region = "qui";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sit";
                                            rrdatas = new String[]() {{
                                                add("modi"),
                                                add("neque"),
                                                add("consequuntur"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("et"),
                                            }};
                                            weight = 28.100000;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatem";
                                                        ipProtocol = "udp";
                                                        kind = "temporibus";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quae";
                                                        port = "est";
                                                        project = "ut";
                                                        region = "necessitatibus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "in";
                                            rrdatas = new String[]() {{
                                                add("voluptatem"),
                                                add("dolorum"),
                                                add("doloribus"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("sunt"),
                                                add("earum"),
                                                add("et"),
                                            }};
                                            weight = 88.099998;
                                        }}),
                                    }};
                                    kind = "et";
                                }};
                                wrrPolicy = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quam";
                                                        ipProtocol = "undefined";
                                                        kind = "nihil";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "suscipit";
                                                        port = "impedit";
                                                        project = "non";
                                                        region = "magnam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ut";
                                            rrdatas = new String[]() {{
                                                add("illo"),
                                                add("qui"),
                                                add("quia"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("ducimus"),
                                                add("enim"),
                                                add("blanditiis"),
                                            }};
                                            weight = 84.099998;
                                        }}),
                                    }};
                                    kind = "rerum";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("repellat"),
                                add("velit"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("modi"),
                                add("sunt"),
                                add("voluptas"),
                            }};
                            ttl = 4286316651252402687;
                            type = "et";
                        }}),
                    }};
                    deletions = new openapisdk.models.shared.ResourceRecordSet[]() {{
                        add(new ResourceRecordSet() {{
                            kind = "qui";
                            name = "excepturi";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rem";
                                                        ipProtocol = "undefined";
                                                        kind = "quae";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "recusandae";
                                                        port = "qui";
                                                        project = "minus";
                                                        region = "et";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rerum";
                                                        ipProtocol = "tcp";
                                                        kind = "rem";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "et";
                                                        port = "reiciendis";
                                                        project = "aspernatur";
                                                        region = "praesentium";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "porro";
                                                        ipProtocol = "undefined";
                                                        kind = "adipisci";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "illum";
                                                        port = "accusantium";
                                                        project = "atque";
                                                        region = "amet";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nisi";
                                            location = "quidem";
                                            rrdatas = new String[]() {{
                                                add("quo"),
                                                add("vero"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("totam"),
                                            }};
                                        }}),
                                    }};
                                    kind = "deserunt";
                                }};
                                geoPolicy = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "omnis";
                                                        ipProtocol = "udp";
                                                        kind = "aut";
                                                        loadBalancerType = "none";
                                                        networkUrl = "magni";
                                                        port = "necessitatibus";
                                                        project = "et";
                                                        region = "culpa";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repellendus";
                                                        ipProtocol = "undefined";
                                                        kind = "ut";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "architecto";
                                                        port = "molestias";
                                                        project = "rerum";
                                                        region = "quo";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "et";
                                                        ipProtocol = "udp";
                                                        kind = "commodi";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quibusdam";
                                                        port = "asperiores";
                                                        project = "quo";
                                                        region = "ea";
                                                    }}),
                                                }};
                                            }};
                                            kind = "soluta";
                                            location = "tempora";
                                            rrdatas = new String[]() {{
                                                add("blanditiis"),
                                                add("facere"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("et"),
                                                add("odit"),
                                                add("est"),
                                            }};
                                        }}),
                                    }};
                                    kind = "id";
                                }};
                                kind = "ipsum";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "vero";
                                                            ipProtocol = "tcp";
                                                            kind = "ex";
                                                            loadBalancerType = "none";
                                                            networkUrl = "vero";
                                                            port = "distinctio";
                                                            project = "cumque";
                                                            region = "ea";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "non";
                                                            ipProtocol = "udp";
                                                            kind = "nam";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "quae";
                                                            port = "qui";
                                                            project = "magni";
                                                            region = "minus";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = "tcp";
                                                            kind = "neque";
                                                            loadBalancerType = "none";
                                                            networkUrl = "quia";
                                                            port = "repudiandae";
                                                            project = "debitis";
                                                            region = "autem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "odit";
                                                location = "enim";
                                                rrdatas = new String[]() {{
                                                    add("non"),
                                                    add("nihil"),
                                                    add("laborum"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("nihil"),
                                                    add("exercitationem"),
                                                    add("iste"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "id";
                                                            ipProtocol = "undefined";
                                                            kind = "hic";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "omnis";
                                                            port = "libero";
                                                            project = "qui";
                                                            region = "omnis";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "minus";
                                                            ipProtocol = "undefined";
                                                            kind = "non";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "repellat";
                                                            port = "quo";
                                                            project = "dolorum";
                                                            region = "laboriosam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "velit";
                                                location = "ea";
                                                rrdatas = new String[]() {{
                                                    add("fugit"),
                                                    add("aut"),
                                                    add("tempora"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("mollitia"),
                                                    add("non"),
                                                    add("magni"),
                                                }};
                                            }}),
                                        }};
                                        kind = "recusandae";
                                    }};
                                    kind = "illum";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "dolores";
                                                ipProtocol = "udp";
                                                kind = "nihil";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "ex";
                                                port = "iure";
                                                project = "et";
                                                region = "quos";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "et";
                                                ipProtocol = "udp";
                                                kind = "necessitatibus";
                                                loadBalancerType = "none";
                                                networkUrl = "qui";
                                                port = "in";
                                                project = "odit";
                                                region = "molestias";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 4.200000;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "mollitia";
                                                        ipProtocol = "tcp";
                                                        kind = "laboriosam";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "maiores";
                                                        port = "totam";
                                                        project = "iusto";
                                                        region = "aperiam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "repellendus";
                                            rrdatas = new String[]() {{
                                                add("eum"),
                                                add("earum"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("officia"),
                                            }};
                                            weight = 32.099998;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quaerat";
                                                        ipProtocol = "tcp";
                                                        kind = "et";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "recusandae";
                                                        port = "qui";
                                                        project = "qui";
                                                        region = "aut";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "explicabo";
                                                        ipProtocol = "udp";
                                                        kind = "temporibus";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "sed";
                                                        port = "voluptatem";
                                                        project = "vel";
                                                        region = "fugiat";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nesciunt";
                                                        ipProtocol = "udp";
                                                        kind = "qui";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "eligendi";
                                                        port = "velit";
                                                        project = "fuga";
                                                        region = "aliquid";
                                                    }}),
                                                }};
                                            }};
                                            kind = "vero";
                                            rrdatas = new String[]() {{
                                                add("et"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("sunt"),
                                                add("quae"),
                                            }};
                                            weight = 4.200000;
                                        }}),
                                    }};
                                    kind = "rerum";
                                }};
                                wrrPolicy = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sed";
                                                        ipProtocol = "tcp";
                                                        kind = "enim";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ipsa";
                                                        port = "cum";
                                                        project = "sint";
                                                        region = "aut";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eaque";
                                                        ipProtocol = "tcp";
                                                        kind = "et";
                                                        loadBalancerType = "none";
                                                        networkUrl = "et";
                                                        port = "quam";
                                                        project = "sit";
                                                        region = "voluptate";
                                                    }}),
                                                }};
                                            }};
                                            kind = "eaque";
                                            rrdatas = new String[]() {{
                                                add("et"),
                                                add("amet"),
                                                add("distinctio"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("consectetur"),
                                                add("minima"),
                                                add("sequi"),
                                            }};
                                            weight = 28.200001;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sunt";
                                                        ipProtocol = "udp";
                                                        kind = "quam";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dolores";
                                                        port = "nihil";
                                                        project = "ullam";
                                                        region = "architecto";
                                                    }}),
                                                }};
                                            }};
                                            kind = "architecto";
                                            rrdatas = new String[]() {{
                                                add("consequatur"),
                                                add("veniam"),
                                                add("hic"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("veritatis"),
                                                add("architecto"),
                                                add("voluptas"),
                                            }};
                                            weight = 56.099998;
                                        }}),
                                    }};
                                    kind = "consectetur";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("eos"),
                                add("praesentium"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("ipsum"),
                                add("natus"),
                                add("quas"),
                            }};
                            ttl = 6342274082021276992;
                            type = "nostrum";
                        }}),
                    }};
                    id = "quod";
                    isServing = false;
                    kind = "eius";
                    startTime = "totam";
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