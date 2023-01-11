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
                    managedZone = "soluta";
                    project = "occaecati";
                }};
                queryParams = new DnsChangesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "et";
                    alt = "proto";
                    callback = "facere";
                    clientOperationId = "dolorum";
                    fields = "aut";
                    key = "qui";
                    oauthToken = "at";
                    prettyPrint = true;
                    quotaUser = "laborum";
                    uploadType = "labore";
                    uploadProtocol = "non";
                }};
                request = new Change() {{
                    additions = new openapisdk.models.shared.ResourceRecordSet[]() {{
                        add(new ResourceRecordSet() {{
                            kind = "non";
                            name = "ullam";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = true;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "porro";
                                                        ipProtocol = "tcp";
                                                        kind = "soluta";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dolorem";
                                                        port = "voluptates";
                                                        project = "ipsum";
                                                        region = "temporibus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "a";
                                            location = "cupiditate";
                                            rrdatas = new String[]() {{
                                                add("odit"),
                                                add("facilis"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("doloremque"),
                                                add("harum"),
                                            }};
                                        }}),
                                    }};
                                    kind = "esse";
                                }};
                                geoPolicy = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "itaque";
                                                        ipProtocol = "tcp";
                                                        kind = "quis";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quis";
                                                        port = "qui";
                                                        project = "molestias";
                                                        region = "dignissimos";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "officia";
                                                        ipProtocol = "udp";
                                                        kind = "sed";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ullam";
                                                        port = "quos";
                                                        project = "illo";
                                                        region = "omnis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "et";
                                            location = "et";
                                            rrdatas = new String[]() {{
                                                add("vero"),
                                                add("omnis"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("earum"),
                                                add("sint"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "deleniti";
                                                        ipProtocol = "tcp";
                                                        kind = "eligendi";
                                                        loadBalancerType = "none";
                                                        networkUrl = "minima";
                                                        port = "similique";
                                                        project = "corrupti";
                                                        region = "ipsa";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sint";
                                                        ipProtocol = "tcp";
                                                        kind = "ab";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quis";
                                                        port = "ut";
                                                        project = "nesciunt";
                                                        region = "veniam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "libero";
                                            location = "odio";
                                            rrdatas = new String[]() {{
                                                add("velit"),
                                                add("officiis"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("quasi"),
                                                add("ipsum"),
                                                add("sunt"),
                                            }};
                                        }}),
                                    }};
                                    kind = "soluta";
                                }};
                                kind = "animi";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "est";
                                                            ipProtocol = "tcp";
                                                            kind = "non";
                                                            loadBalancerType = "none";
                                                            networkUrl = "molestiae";
                                                            port = "mollitia";
                                                            project = "non";
                                                            region = "similique";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "id";
                                                            ipProtocol = "udp";
                                                            kind = "quia";
                                                            loadBalancerType = "none";
                                                            networkUrl = "tenetur";
                                                            port = "non";
                                                            project = "officiis";
                                                            region = "qui";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "perspiciatis";
                                                location = "et";
                                                rrdatas = new String[]() {{
                                                    add("ut"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("cupiditate"),
                                                }};
                                            }}),
                                        }};
                                        kind = "molestias";
                                    }};
                                    kind = "odio";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "deserunt";
                                                ipProtocol = "udp";
                                                kind = "autem";
                                                loadBalancerType = "none";
                                                networkUrl = "soluta";
                                                port = "ut";
                                                project = "ut";
                                                region = "consequatur";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 35.200001;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "omnis";
                                                        ipProtocol = "udp";
                                                        kind = "vitae";
                                                        loadBalancerType = "none";
                                                        networkUrl = "odit";
                                                        port = "voluptas";
                                                        project = "illo";
                                                        region = "voluptate";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odit";
                                                        ipProtocol = "tcp";
                                                        kind = "perferendis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "velit";
                                                        port = "qui";
                                                        project = "porro";
                                                        region = "et";
                                                    }}),
                                                }};
                                            }};
                                            kind = "maiores";
                                            rrdatas = new String[]() {{
                                                add("recusandae"),
                                                add("omnis"),
                                                add("cupiditate"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("beatae"),
                                                add("ut"),
                                                add("corporis"),
                                            }};
                                            weight = 66.099998;
                                        }}),
                                    }};
                                    kind = "eveniet";
                                }};
                                wrrPolicy = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "neque";
                                                        ipProtocol = "udp";
                                                        kind = "ad";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "saepe";
                                                        port = "ea";
                                                        project = "ducimus";
                                                        region = "quia";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "et";
                                                        ipProtocol = "undefined";
                                                        kind = "voluptatem";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quo";
                                                        port = "quisquam";
                                                        project = "rerum";
                                                        region = "ipsam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quia";
                                            rrdatas = new String[]() {{
                                                add("sint"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("sed"),
                                            }};
                                            weight = 53.099998;
                                        }}),
                                    }};
                                    kind = "nulla";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("magnam"),
                                add("dolores"),
                                add("vel"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("aperiam"),
                                add("rerum"),
                                add("sed"),
                            }};
                            ttl = 2599584633806340814;
                            type = "similique";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "commodi";
                            name = "nesciunt";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptas";
                                                        ipProtocol = "undefined";
                                                        kind = "ullam";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "facilis";
                                                        port = "sit";
                                                        project = "dolorem";
                                                        region = "doloremque";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aut";
                                                        ipProtocol = "undefined";
                                                        kind = "a";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "illum";
                                                        port = "accusantium";
                                                        project = "cupiditate";
                                                        region = "magni";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ut";
                                            location = "ratione";
                                            rrdatas = new String[]() {{
                                                add("ut"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("repellat"),
                                                add("repudiandae"),
                                                add("animi"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "inventore";
                                                        ipProtocol = "tcp";
                                                        kind = "voluptatibus";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "nam";
                                                        port = "quibusdam";
                                                        project = "rerum";
                                                        region = "ut";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "impedit";
                                                        ipProtocol = "udp";
                                                        kind = "neque";
                                                        loadBalancerType = "none";
                                                        networkUrl = "maxime";
                                                        port = "et";
                                                        project = "eaque";
                                                        region = "voluptatibus";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repellendus";
                                                        ipProtocol = "undefined";
                                                        kind = "doloremque";
                                                        loadBalancerType = "none";
                                                        networkUrl = "qui";
                                                        port = "molestias";
                                                        project = "vitae";
                                                        region = "minus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "recusandae";
                                            location = "ut";
                                            rrdatas = new String[]() {{
                                                add("eius"),
                                                add("repellat"),
                                                add("sit"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("consequatur"),
                                                add("id"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "saepe";
                                                        ipProtocol = "udp";
                                                        kind = "neque";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dolorem";
                                                        port = "fugiat";
                                                        project = "sit";
                                                        region = "id";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "velit";
                                                        ipProtocol = "undefined";
                                                        kind = "quod";
                                                        loadBalancerType = "none";
                                                        networkUrl = "fugit";
                                                        port = "non";
                                                        project = "quos";
                                                        region = "eveniet";
                                                    }}),
                                                }};
                                            }};
                                            kind = "et";
                                            location = "quam";
                                            rrdatas = new String[]() {{
                                                add("et"),
                                                add("et"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("nihil"),
                                                add("perspiciatis"),
                                                add("libero"),
                                            }};
                                        }}),
                                    }};
                                    kind = "quis";
                                }};
                                geoPolicy = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dicta";
                                                        ipProtocol = "undefined";
                                                        kind = "explicabo";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "commodi";
                                                        port = "blanditiis";
                                                        project = "quas";
                                                        region = "eaque";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sequi";
                                                        ipProtocol = "undefined";
                                                        kind = "unde";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "iusto";
                                                        port = "quas";
                                                        project = "non";
                                                        region = "dignissimos";
                                                    }}),
                                                }};
                                            }};
                                            kind = "vel";
                                            location = "omnis";
                                            rrdatas = new String[]() {{
                                                add("saepe"),
                                                add("quasi"),
                                                add("rerum"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("aliquam"),
                                            }};
                                        }}),
                                    }};
                                    kind = "quod";
                                }};
                                kind = "sint";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ad";
                                                            ipProtocol = "tcp";
                                                            kind = "rem";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "minima";
                                                            port = "rerum";
                                                            project = "aut";
                                                            region = "fugiat";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "facere";
                                                location = "non";
                                                rrdatas = new String[]() {{
                                                    add("eum"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("inventore"),
                                                }};
                                            }}),
                                        }};
                                        kind = "est";
                                    }};
                                    kind = "sunt";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "reprehenderit";
                                                ipProtocol = "tcp";
                                                kind = "enim";
                                                loadBalancerType = "none";
                                                networkUrl = "et";
                                                port = "aut";
                                                project = "reprehenderit";
                                                region = "laborum";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "magnam";
                                                ipProtocol = "undefined";
                                                kind = "non";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "eaque";
                                                port = "iste";
                                                project = "rerum";
                                                region = "maiores";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "consequatur";
                                                ipProtocol = "undefined";
                                                kind = "vero";
                                                loadBalancerType = "none";
                                                networkUrl = "architecto";
                                                port = "ut";
                                                project = "aut";
                                                region = "non";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 77.199997;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "minima";
                                                        ipProtocol = "undefined";
                                                        kind = "est";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "tempore";
                                                        port = "autem";
                                                        project = "sunt";
                                                        region = "consequuntur";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "est";
                                                        ipProtocol = "udp";
                                                        kind = "asperiores";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "omnis";
                                                        port = "quidem";
                                                        project = "reprehenderit";
                                                        region = "repudiandae";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consectetur";
                                                        ipProtocol = "undefined";
                                                        kind = "illum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quae";
                                                        port = "error";
                                                        project = "non";
                                                        region = "natus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "et";
                                            rrdatas = new String[]() {{
                                                add("consequatur"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("quisquam"),
                                            }};
                                            weight = 84.099998;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "non";
                                                        ipProtocol = "udp";
                                                        kind = "sint";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "est";
                                                        port = "dolorum";
                                                        project = "autem";
                                                        region = "consequatur";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "minima";
                                                        ipProtocol = "undefined";
                                                        kind = "ad";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "non";
                                                        port = "in";
                                                        project = "aut";
                                                        region = "enim";
                                                    }}),
                                                }};
                                            }};
                                            kind = "et";
                                            rrdatas = new String[]() {{
                                                add("nam"),
                                                add("voluptatum"),
                                                add("aperiam"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("commodi"),
                                                add("voluptatum"),
                                            }};
                                            weight = 37.200001;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quo";
                                                        ipProtocol = "undefined";
                                                        kind = "voluptatem";
                                                        loadBalancerType = "none";
                                                        networkUrl = "consequatur";
                                                        port = "soluta";
                                                        project = "tempora";
                                                        region = "ea";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tempora";
                                                        ipProtocol = "tcp";
                                                        kind = "assumenda";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dolorem";
                                                        port = "ea";
                                                        project = "dignissimos";
                                                        region = "adipisci";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "enim";
                                                        ipProtocol = "undefined";
                                                        kind = "necessitatibus";
                                                        loadBalancerType = "none";
                                                        networkUrl = "iusto";
                                                        port = "ex";
                                                        project = "eum";
                                                        region = "commodi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "soluta";
                                            rrdatas = new String[]() {{
                                                add("voluptatum"),
                                                add("blanditiis"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("ex"),
                                            }};
                                            weight = 63.200001;
                                        }}),
                                    }};
                                    kind = "voluptatem";
                                }};
                                wrrPolicy = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "expedita";
                                                        ipProtocol = "tcp";
                                                        kind = "dignissimos";
                                                        loadBalancerType = "none";
                                                        networkUrl = "odio";
                                                        port = "et";
                                                        project = "beatae";
                                                        region = "occaecati";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "autem";
                                                        ipProtocol = "tcp";
                                                        kind = "quidem";
                                                        loadBalancerType = "none";
                                                        networkUrl = "consequatur";
                                                        port = "nisi";
                                                        project = "quasi";
                                                        region = "autem";
                                                    }}),
                                                }};
                                            }};
                                            kind = "corrupti";
                                            rrdatas = new String[]() {{
                                                add("sunt"),
                                                add("aut"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("architecto"),
                                                add("alias"),
                                            }};
                                            weight = 7.200000;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "minima";
                                                        ipProtocol = "undefined";
                                                        kind = "sed";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "est";
                                                        port = "at";
                                                        project = "sed";
                                                        region = "non";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "at";
                                                        ipProtocol = "tcp";
                                                        kind = "assumenda";
                                                        loadBalancerType = "none";
                                                        networkUrl = "omnis";
                                                        port = "ut";
                                                        project = "odit";
                                                        region = "molestiae";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "et";
                                                        ipProtocol = "udp";
                                                        kind = "occaecati";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "est";
                                                        port = "fuga";
                                                        project = "rerum";
                                                        region = "totam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "libero";
                                            rrdatas = new String[]() {{
                                                add("id"),
                                                add("aperiam"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("assumenda"),
                                            }};
                                            weight = 21.100000;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "doloremque";
                                                        ipProtocol = "udp";
                                                        kind = "iste";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "aliquam";
                                                        port = "aut";
                                                        project = "tenetur";
                                                        region = "quo";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "omnis";
                                                        ipProtocol = "undefined";
                                                        kind = "alias";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quo";
                                                        port = "et";
                                                        project = "ut";
                                                        region = "laborum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "incidunt";
                                            rrdatas = new String[]() {{
                                                add("explicabo"),
                                                add("facilis"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("autem"),
                                                add("quae"),
                                                add("temporibus"),
                                            }};
                                            weight = 39.099998;
                                        }}),
                                    }};
                                    kind = "id";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("facere"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("et"),
                                add("illo"),
                                add("ut"),
                            }};
                            ttl = 8967154656672928142;
                            type = "eum";
                        }}),
                    }};
                    deletions = new openapisdk.models.shared.ResourceRecordSet[]() {{
                        add(new ResourceRecordSet() {{
                            kind = "sed";
                            name = "non";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "beatae";
                                                        ipProtocol = "tcp";
                                                        kind = "et";
                                                        loadBalancerType = "none";
                                                        networkUrl = "eos";
                                                        port = "autem";
                                                        project = "qui";
                                                        region = "vel";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quo";
                                            location = "minus";
                                            rrdatas = new String[]() {{
                                                add("id"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("inventore"),
                                                add("autem"),
                                                add("quam"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sunt";
                                                        ipProtocol = "undefined";
                                                        kind = "sed";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ut";
                                                        port = "voluptatem";
                                                        project = "libero";
                                                        region = "quaerat";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ut";
                                            location = "sed";
                                            rrdatas = new String[]() {{
                                                add("nesciunt"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("hic"),
                                                add("et"),
                                                add("et"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aut";
                                                        ipProtocol = "tcp";
                                                        kind = "dolor";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "blanditiis";
                                                        port = "cum";
                                                        project = "illum";
                                                        region = "inventore";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "et";
                                                        ipProtocol = "udp";
                                                        kind = "est";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "dolore";
                                                        port = "odio";
                                                        project = "velit";
                                                        region = "autem";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "est";
                                                        ipProtocol = "udp";
                                                        kind = "ut";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "dolor";
                                                        port = "aliquid";
                                                        project = "voluptates";
                                                        region = "cupiditate";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sapiente";
                                            location = "sunt";
                                            rrdatas = new String[]() {{
                                                add("optio"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("quis"),
                                                add("quod"),
                                                add("corporis"),
                                            }};
                                        }}),
                                    }};
                                    kind = "cum";
                                }};
                                geoPolicy = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odit";
                                                        ipProtocol = "undefined";
                                                        kind = "tempore";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "assumenda";
                                                        port = "omnis";
                                                        project = "est";
                                                        region = "consequuntur";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "praesentium";
                                                        ipProtocol = "undefined";
                                                        kind = "quae";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "iusto";
                                                        port = "voluptates";
                                                        project = "et";
                                                        region = "dolor";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vero";
                                                        ipProtocol = "tcp";
                                                        kind = "minus";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ut";
                                                        port = "vitae";
                                                        project = "reiciendis";
                                                        region = "doloribus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "in";
                                            location = "et";
                                            rrdatas = new String[]() {{
                                                add("eius"),
                                                add("ab"),
                                                add("et"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("ut"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ea";
                                                        ipProtocol = "tcp";
                                                        kind = "velit";
                                                        loadBalancerType = "none";
                                                        networkUrl = "doloribus";
                                                        port = "consequatur";
                                                        project = "commodi";
                                                        region = "aspernatur";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptates";
                                                        ipProtocol = "undefined";
                                                        kind = "quidem";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "dicta";
                                                        port = "consequatur";
                                                        project = "voluptatum";
                                                        region = "quas";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptatem";
                                            location = "id";
                                            rrdatas = new String[]() {{
                                                add("non"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("eum"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sapiente";
                                                        ipProtocol = "undefined";
                                                        kind = "minima";
                                                        loadBalancerType = "none";
                                                        networkUrl = "vel";
                                                        port = "voluptatem";
                                                        project = "repellendus";
                                                        region = "eos";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequuntur";
                                                        ipProtocol = "udp";
                                                        kind = "soluta";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "modi";
                                                        port = "fugiat";
                                                        project = "porro";
                                                        region = "rerum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sit";
                                            location = "molestiae";
                                            rrdatas = new String[]() {{
                                                add("sed"),
                                                add("enim"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("laudantium"),
                                                add("error"),
                                                add("id"),
                                            }};
                                        }}),
                                    }};
                                    kind = "voluptates";
                                }};
                                kind = "nihil";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "quo";
                                                            ipProtocol = "udp";
                                                            kind = "sunt";
                                                            loadBalancerType = "none";
                                                            networkUrl = "et";
                                                            port = "quam";
                                                            project = "maiores";
                                                            region = "iure";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolores";
                                                            ipProtocol = "udp";
                                                            kind = "ut";
                                                            loadBalancerType = "none";
                                                            networkUrl = "qui";
                                                            port = "dolorum";
                                                            project = "aperiam";
                                                            region = "sed";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "excepturi";
                                                            ipProtocol = "undefined";
                                                            kind = "laudantium";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "aperiam";
                                                            port = "aspernatur";
                                                            project = "et";
                                                            region = "fuga";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "autem";
                                                location = "qui";
                                                rrdatas = new String[]() {{
                                                    add("unde"),
                                                    add("accusantium"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("aliquid"),
                                                    add("repudiandae"),
                                                }};
                                            }}),
                                        }};
                                        kind = "voluptas";
                                    }};
                                    kind = "officia";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quam";
                                                ipProtocol = "tcp";
                                                kind = "eum";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "dolorem";
                                                port = "nihil";
                                                project = "doloribus";
                                                region = "dolore";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 98.099998;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "occaecati";
                                                        ipProtocol = "tcp";
                                                        kind = "reprehenderit";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "corrupti";
                                                        port = "occaecati";
                                                        project = "harum";
                                                        region = "aut";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sit";
                                            rrdatas = new String[]() {{
                                                add("omnis"),
                                                add("omnis"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("nemo"),
                                                add("reiciendis"),
                                                add("est"),
                                            }};
                                            weight = 66.199997;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quam";
                                                        ipProtocol = "tcp";
                                                        kind = "dolorum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "possimus";
                                                        port = "quos";
                                                        project = "est";
                                                        region = "similique";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "placeat";
                                                        ipProtocol = "udp";
                                                        kind = "et";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "asperiores";
                                                        port = "at";
                                                        project = "similique";
                                                        region = "molestias";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quod";
                                                        ipProtocol = "tcp";
                                                        kind = "eos";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "tempore";
                                                        port = "ex";
                                                        project = "rem";
                                                        region = "cumque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "corrupti";
                                            rrdatas = new String[]() {{
                                                add("natus"),
                                                add("dolorem"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("et"),
                                            }};
                                            weight = 90.199997;
                                        }}),
                                    }};
                                    kind = "recusandae";
                                }};
                                wrrPolicy = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "debitis";
                                                        ipProtocol = "undefined";
                                                        kind = "perspiciatis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "quo";
                                                        port = "voluptatem";
                                                        project = "dolores";
                                                        region = "debitis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "maxime";
                                            rrdatas = new String[]() {{
                                                add("accusamus"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("enim"),
                                            }};
                                            weight = 32.200001;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quasi";
                                                        ipProtocol = "undefined";
                                                        kind = "excepturi";
                                                        loadBalancerType = "none";
                                                        networkUrl = "tempora";
                                                        port = "totam";
                                                        project = "animi";
                                                        region = "illum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ea";
                                            rrdatas = new String[]() {{
                                                add("voluptatibus"),
                                                add("repellat"),
                                                add("ea"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("non"),
                                            }};
                                            weight = 7.200000;
                                        }}),
                                    }};
                                    kind = "voluptate";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("mollitia"),
                                add("atque"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("est"),
                            }};
                            ttl = 736452589996936716;
                            type = "atque";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "enim";
                            name = "nostrum";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aut";
                                                        ipProtocol = "undefined";
                                                        kind = "illo";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "sit";
                                                        port = "porro";
                                                        project = "sint";
                                                        region = "eos";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolore";
                                                        ipProtocol = "tcp";
                                                        kind = "aut";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ducimus";
                                                        port = "eaque";
                                                        project = "cupiditate";
                                                        region = "placeat";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "mollitia";
                                                        ipProtocol = "udp";
                                                        kind = "et";
                                                        loadBalancerType = "none";
                                                        networkUrl = "sint";
                                                        port = "autem";
                                                        project = "dolor";
                                                        region = "et";
                                                    }}),
                                                }};
                                            }};
                                            kind = "saepe";
                                            location = "rem";
                                            rrdatas = new String[]() {{
                                                add("dignissimos"),
                                                add("dolores"),
                                                add("eligendi"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("ut"),
                                                add("veniam"),
                                                add("et"),
                                            }};
                                        }}),
                                    }};
                                    kind = "enim";
                                }};
                                geoPolicy = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "omnis";
                                                        ipProtocol = "undefined";
                                                        kind = "et";
                                                        loadBalancerType = "none";
                                                        networkUrl = "dolorem";
                                                        port = "nisi";
                                                        project = "quod";
                                                        region = "asperiores";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quod";
                                            location = "blanditiis";
                                            rrdatas = new String[]() {{
                                                add("ullam"),
                                                add("facere"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("quis"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nulla";
                                                        ipProtocol = "undefined";
                                                        kind = "voluptatum";
                                                        loadBalancerType = "none";
                                                        networkUrl = "similique";
                                                        port = "voluptate";
                                                        project = "est";
                                                        region = "ullam";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolorum";
                                                        ipProtocol = "udp";
                                                        kind = "laborum";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "aperiam";
                                                        port = "eaque";
                                                        project = "nihil";
                                                        region = "sint";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "natus";
                                                        ipProtocol = "udp";
                                                        kind = "sunt";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "nesciunt";
                                                        port = "esse";
                                                        project = "quam";
                                                        region = "iusto";
                                                    }}),
                                                }};
                                            }};
                                            kind = "autem";
                                            location = "atque";
                                            rrdatas = new String[]() {{
                                                add("suscipit"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("modi"),
                                                add("velit"),
                                            }};
                                        }}),
                                    }};
                                    kind = "expedita";
                                }};
                                kind = "in";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "nemo";
                                                            ipProtocol = "tcp";
                                                            kind = "ut";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "voluptas";
                                                            port = "facilis";
                                                            project = "quos";
                                                            region = "sapiente";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "beatae";
                                                            ipProtocol = "tcp";
                                                            kind = "vitae";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "molestiae";
                                                            port = "aut";
                                                            project = "qui";
                                                            region = "quia";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "est";
                                                location = "quo";
                                                rrdatas = new String[]() {{
                                                    add("cumque"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("eius"),
                                                }};
                                            }}),
                                        }};
                                        kind = "consequuntur";
                                    }};
                                    kind = "officia";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "esse";
                                                ipProtocol = "tcp";
                                                kind = "est";
                                                loadBalancerType = "none";
                                                networkUrl = "ab";
                                                port = "maiores";
                                                project = "quia";
                                                region = "explicabo";
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
                                                        ipAddress = "repudiandae";
                                                        ipProtocol = "udp";
                                                        kind = "sunt";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "omnis";
                                                        port = "voluptas";
                                                        project = "cupiditate";
                                                        region = "omnis";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolores";
                                                        ipProtocol = "undefined";
                                                        kind = "aliquid";
                                                        loadBalancerType = "none";
                                                        networkUrl = "et";
                                                        port = "a";
                                                        project = "quia";
                                                        region = "et";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsum";
                                            rrdatas = new String[]() {{
                                                add("repellendus"),
                                                add("autem"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("est"),
                                                add("repudiandae"),
                                            }};
                                            weight = 83.099998;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repellat";
                                                        ipProtocol = "tcp";
                                                        kind = "neque";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "enim";
                                                        port = "occaecati";
                                                        project = "porro";
                                                        region = "dicta";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cupiditate";
                                                        ipProtocol = "tcp";
                                                        kind = "est";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "eos";
                                                        port = "atque";
                                                        project = "qui";
                                                        region = "cumque";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "et";
                                                        ipProtocol = "tcp";
                                                        kind = "autem";
                                                        loadBalancerType = "none";
                                                        networkUrl = "nihil";
                                                        port = "vel";
                                                        project = "dolores";
                                                        region = "voluptas";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ipsam";
                                            rrdatas = new String[]() {{
                                                add("ut"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("error"),
                                                add("illum"),
                                                add("et"),
                                            }};
                                            weight = 7.100000;
                                        }}),
                                    }};
                                    kind = "voluptate";
                                }};
                                wrrPolicy = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatem";
                                                        ipProtocol = "udp";
                                                        kind = "autem";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "voluptas";
                                                        port = "non";
                                                        project = "et";
                                                        region = "debitis";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rerum";
                                                        ipProtocol = "tcp";
                                                        kind = "deleniti";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "modi";
                                                        port = "quis";
                                                        project = "id";
                                                        region = "quos";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolorum";
                                                        ipProtocol = "undefined";
                                                        kind = "nihil";
                                                        loadBalancerType = "none";
                                                        networkUrl = "est";
                                                        port = "sapiente";
                                                        project = "fuga";
                                                        region = "aut";
                                                    }}),
                                                }};
                                            }};
                                            kind = "non";
                                            rrdatas = new String[]() {{
                                                add("reprehenderit"),
                                                add("magni"),
                                                add("ab"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("et"),
                                                add("qui"),
                                            }};
                                            weight = 31.100000;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "placeat";
                                                        ipProtocol = "undefined";
                                                        kind = "cumque";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "culpa";
                                                        port = "aut";
                                                        project = "corporis";
                                                        region = "qui";
                                                    }}),
                                                }};
                                            }};
                                            kind = "necessitatibus";
                                            rrdatas = new String[]() {{
                                                add("accusamus"),
                                                add("fugiat"),
                                                add("aut"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("dicta"),
                                                add("est"),
                                            }};
                                            weight = 49.200001;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odit";
                                                        ipProtocol = "udp";
                                                        kind = "nemo";
                                                        loadBalancerType = "none";
                                                        networkUrl = "sunt";
                                                        port = "sint";
                                                        project = "accusantium";
                                                        region = "rem";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quod";
                                            rrdatas = new String[]() {{
                                                add("magni"),
                                                add("enim"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("ut"),
                                                add("dicta"),
                                            }};
                                            weight = 10.200000;
                                        }}),
                                    }};
                                    kind = "dolores";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("aut"),
                                add("et"),
                                add("ea"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("sint"),
                                add("doloribus"),
                                add("omnis"),
                            }};
                            ttl = 1836778201534137458;
                            type = "sed";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "exercitationem";
                            name = "labore";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = true;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "et";
                                                        ipProtocol = "tcp";
                                                        kind = "corporis";
                                                        loadBalancerType = "none";
                                                        networkUrl = "in";
                                                        port = "est";
                                                        project = "et";
                                                        region = "saepe";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatem";
                                                        ipProtocol = "undefined";
                                                        kind = "et";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "repellat";
                                                        port = "ullam";
                                                        project = "rerum";
                                                        region = "sint";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "earum";
                                                        ipProtocol = "udp";
                                                        kind = "magni";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "deleniti";
                                                        port = "esse";
                                                        project = "eum";
                                                        region = "pariatur";
                                                    }}),
                                                }};
                                            }};
                                            kind = "sed";
                                            location = "autem";
                                            rrdatas = new String[]() {{
                                                add("aperiam"),
                                                add("dolorem"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("occaecati"),
                                                add("optio"),
                                                add("aspernatur"),
                                            }};
                                        }}),
                                    }};
                                    kind = "voluptate";
                                }};
                                geoPolicy = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sed";
                                                        ipProtocol = "undefined";
                                                        kind = "eveniet";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "hic";
                                                        port = "et";
                                                        project = "nihil";
                                                        region = "totam";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rerum";
                                                        ipProtocol = "undefined";
                                                        kind = "saepe";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "quod";
                                                        port = "cupiditate";
                                                        project = "et";
                                                        region = "quasi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "dolores";
                                            location = "ipsum";
                                            rrdatas = new String[]() {{
                                                add("cumque"),
                                                add("molestiae"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("repellat"),
                                            }};
                                        }}),
                                    }};
                                    kind = "aliquam";
                                }};
                                kind = "sed";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "qui";
                                                            ipProtocol = "tcp";
                                                            kind = "dolores";
                                                            loadBalancerType = "none";
                                                            networkUrl = "qui";
                                                            port = "alias";
                                                            project = "deleniti";
                                                            region = "quo";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "laborum";
                                                            ipProtocol = "tcp";
                                                            kind = "saepe";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "vero";
                                                            port = "soluta";
                                                            project = "est";
                                                            region = "quam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "accusamus";
                                                location = "voluptate";
                                                rrdatas = new String[]() {{
                                                    add("quisquam"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("repudiandae"),
                                                    add("placeat"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "ipsam";
                                                            ipProtocol = "udp";
                                                            kind = "mollitia";
                                                            loadBalancerType = "none";
                                                            networkUrl = "et";
                                                            port = "labore";
                                                            project = "sed";
                                                            region = "sint";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sunt";
                                                            ipProtocol = "udp";
                                                            kind = "molestias";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "perferendis";
                                                            port = "non";
                                                            project = "sapiente";
                                                            region = "ad";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "placeat";
                                                            ipProtocol = "udp";
                                                            kind = "consequatur";
                                                            loadBalancerType = "none";
                                                            networkUrl = "ex";
                                                            port = "repellat";
                                                            project = "numquam";
                                                            region = "autem";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "repellat";
                                                location = "libero";
                                                rrdatas = new String[]() {{
                                                    add("aut"),
                                                    add("veritatis"),
                                                    add("et"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("praesentium"),
                                                }};
                                            }}),
                                        }};
                                        kind = "aliquid";
                                    }};
                                    kind = "eligendi";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "repudiandae";
                                                ipProtocol = "undefined";
                                                kind = "ut";
                                                loadBalancerType = "none";
                                                networkUrl = "recusandae";
                                                port = "veritatis";
                                                project = "facilis";
                                                region = "sit";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 4.100000;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "in";
                                                        ipProtocol = "udp";
                                                        kind = "architecto";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ipsa";
                                                        port = "corporis";
                                                        project = "et";
                                                        region = "consequuntur";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laboriosam";
                                                        ipProtocol = "undefined";
                                                        kind = "dignissimos";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "rem";
                                                        port = "dolores";
                                                        project = "aspernatur";
                                                        region = "ad";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptas";
                                                        ipProtocol = "undefined";
                                                        kind = "impedit";
                                                        loadBalancerType = "none";
                                                        networkUrl = "et";
                                                        port = "et";
                                                        project = "et";
                                                        region = "fugit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aut";
                                            rrdatas = new String[]() {{
                                                add("vel"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("alias"),
                                            }};
                                            weight = 92.099998;
                                        }}),
                                    }};
                                    kind = "ratione";
                                }};
                                wrrPolicy = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "facilis";
                                                        ipProtocol = "undefined";
                                                        kind = "expedita";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "atque";
                                                        port = "repellat";
                                                        project = "laboriosam";
                                                        region = "quos";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quis";
                                                        ipProtocol = "tcp";
                                                        kind = "sed";
                                                        loadBalancerType = "none";
                                                        networkUrl = "ut";
                                                        port = "accusantium";
                                                        project = "voluptas";
                                                        region = "placeat";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "temporibus";
                                                        ipProtocol = "udp";
                                                        kind = "odio";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "omnis";
                                                        port = "illo";
                                                        project = "debitis";
                                                        region = "suscipit";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nihil";
                                            rrdatas = new String[]() {{
                                                add("itaque"),
                                                add("similique"),
                                                add("aliquam"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("temporibus"),
                                            }};
                                            weight = 44.200001;
                                        }}),
                                    }};
                                    kind = "quia";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("architecto"),
                                add("praesentium"),
                                add("et"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("fuga"),
                                add("dolorum"),
                                add("rerum"),
                            }};
                            ttl = 2728572397386694968;
                            type = "consectetur";
                        }}),
                    }};
                    id = "placeat";
                    isServing = false;
                    kind = "ullam";
                    startTime = "harum";
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