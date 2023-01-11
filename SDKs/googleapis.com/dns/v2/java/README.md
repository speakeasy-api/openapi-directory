# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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
                    location = "sit";
                    managedZone = "voluptas";
                    project = "culpa";
                }};
                queryParams = new DnsChangesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "consequuntur";
                    alt = "media";
                    callback = "expedita";
                    clientOperationId = "voluptas";
                    fields = "fugit";
                    key = "et";
                    oauthToken = "nihil";
                    prettyPrint = true;
                    quotaUser = "dicta";
                    uploadType = "debitis";
                    uploadProtocol = "voluptatum";
                }};
                request = new Change() {{
                    additions = new openapisdk.models.shared.ResourceRecordSet[]() {{
                        add(new ResourceRecordSet() {{
                            kind = "ut";
                            name = "dolorem";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "vitae";
                                                        ipProtocol = "UDP";
                                                        kind = "dolores";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "debitis";
                                                        port = "vel";
                                                        project = "odio";
                                                        region = "dolore";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "id";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "accusantium";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "commodi";
                                                        port = "quis";
                                                        project = "est";
                                                        region = "aut";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "odit";
                                                        ipProtocol = "UDP";
                                                        kind = "voluptas";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "aut";
                                                        port = "illo";
                                                        project = "sed";
                                                        region = "officiis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "autem";
                                            location = "consectetur";
                                            rrdatas = new String[]() {{
                                                add("odio"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("recusandae"),
                                            }};
                                        }}),
                                    }};
                                    kind = "at";
                                }};
                                kind = "ipsum";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "inventore";
                                                            ipProtocol = "UDP";
                                                            kind = "exercitationem";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "reprehenderit";
                                                            port = "tempore";
                                                            project = "maiores";
                                                            region = "incidunt";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "dolor";
                                                location = "beatae";
                                                rrdatas = new String[]() {{
                                                    add("in"),
                                                    add("et"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("ipsum"),
                                                    add("ex"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "placeat";
                                                            ipProtocol = "TCP";
                                                            kind = "rerum";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "voluptas";
                                                            port = "quam";
                                                            project = "reprehenderit";
                                                            region = "qui";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "qui";
                                                            ipProtocol = "UDP";
                                                            kind = "in";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "qui";
                                                            port = "ut";
                                                            project = "itaque";
                                                            region = "ab";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "neque";
                                                            ipProtocol = "UDP";
                                                            kind = "et";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "esse";
                                                            port = "architecto";
                                                            project = "quam";
                                                            region = "velit";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "cumque";
                                                location = "soluta";
                                                rrdatas = new String[]() {{
                                                    add("voluptates"),
                                                    add("magni"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("optio"),
                                                    add("qui"),
                                                    add("earum"),
                                                }};
                                            }}),
                                        }};
                                        kind = "illo";
                                    }};
                                    kind = "omnis";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "consequatur";
                                                ipProtocol = "TCP";
                                                kind = "commodi";
                                                loadBalancerType = "NONE";
                                                networkUrl = "reprehenderit";
                                                port = "consectetur";
                                                project = "nostrum";
                                                region = "ut";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "laboriosam";
                                                ipProtocol = "UDP";
                                                kind = "a";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "aut";
                                                port = "quas";
                                                project = "consequuntur";
                                                region = "laudantium";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 73.199997;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "perferendis";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "ratione";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "explicabo";
                                                        port = "ea";
                                                        project = "maxime";
                                                        region = "eum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "perferendis";
                                            rrdatas = new String[]() {{
                                                add("rerum"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("quis"),
                                                add("cumque"),
                                                add("minima"),
                                            }};
                                            weight = 1.200000;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eum";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "et";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "ad";
                                                        port = "expedita";
                                                        project = "vel";
                                                        region = "qui";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "modi";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "tempora";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "eaque";
                                                        port = "sunt";
                                                        project = "sit";
                                                        region = "autem";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quis";
                                                        ipProtocol = "TCP";
                                                        kind = "vel";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "qui";
                                                        port = "nisi";
                                                        project = "quis";
                                                        region = "adipisci";
                                                    }}),
                                                }};
                                            }};
                                            kind = "porro";
                                            rrdatas = new String[]() {{
                                                add("et"),
                                                add("accusamus"),
                                                add("numquam"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("rerum"),
                                                add("ut"),
                                                add("laborum"),
                                            }};
                                            weight = 92.199997;
                                        }}),
                                    }};
                                    kind = "minus";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("aperiam"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("excepturi"),
                                add("mollitia"),
                                add("inventore"),
                            }};
                            ttl = 2654595716993425044;
                            type = "ipsa";
                        }}),
                    }};
                    deletions = new openapisdk.models.shared.ResourceRecordSet[]() {{
                        add(new ResourceRecordSet() {{
                            kind = "animi";
                            name = "ut";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "sed";
                                                        ipProtocol = "UDP";
                                                        kind = "consequuntur";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "cupiditate";
                                                        port = "provident";
                                                        project = "molestiae";
                                                        region = "pariatur";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quasi";
                                                        ipProtocol = "UDP";
                                                        kind = "enim";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "sit";
                                                        port = "possimus";
                                                        project = "modi";
                                                        region = "neque";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequuntur";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "et";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "occaecati";
                                                        port = "ex";
                                                        project = "voluptatem";
                                                        region = "quia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "temporibus";
                                            location = "velit";
                                            rrdatas = new String[]() {{
                                                add("est"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("necessitatibus"),
                                                add("in"),
                                                add("possimus"),
                                            }};
                                        }}),
                                    }};
                                    kind = "voluptatem";
                                }};
                                kind = "dolorum";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "earum";
                                                            ipProtocol = "TCP";
                                                            kind = "ut";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "et";
                                                            port = "est";
                                                            project = "ipsum";
                                                            region = "quam";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptas";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "dolores";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "impedit";
                                                            port = "non";
                                                            project = "magnam";
                                                            region = "ut";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "possimus";
                                                location = "illo";
                                                rrdatas = new String[]() {{
                                                    add("quia"),
                                                    add("ipsam"),
                                                    add("ducimus"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("blanditiis"),
                                                    add("distinctio"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "rerum";
                                                            ipProtocol = "TCP";
                                                            kind = "repellat";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "officia";
                                                            port = "modi";
                                                            project = "sunt";
                                                            region = "voluptas";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "amet";
                                                location = "et";
                                                rrdatas = new String[]() {{
                                                    add("qui"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("autem"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dicta";
                                                            ipProtocol = "TCP";
                                                            kind = "doloremque";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "nisi";
                                                            port = "recusandae";
                                                            project = "qui";
                                                            region = "minus";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "et";
                                                location = "rerum";
                                                rrdatas = new String[]() {{
                                                    add("rem"),
                                                    add("eos"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("reiciendis"),
                                                }};
                                            }}),
                                        }};
                                        kind = "aspernatur";
                                    }};
                                    kind = "praesentium";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "nihil";
                                                ipProtocol = "TCP";
                                                kind = "consequatur";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "accusantium";
                                                port = "atque";
                                                project = "amet";
                                                region = "nisi";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quidem";
                                                ipProtocol = "TCP";
                                                kind = "quo";
                                                loadBalancerType = "NONE";
                                                networkUrl = "alias";
                                                port = "totam";
                                                project = "deserunt";
                                                region = "eius";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "repellat";
                                                ipProtocol = "UDP";
                                                kind = "omnis";
                                                loadBalancerType = "REGIONAL_L4ILB";
                                                networkUrl = "aut";
                                                port = "et";
                                                project = "magni";
                                                region = "necessitatibus";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 3.100000;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ut";
                                                        ipProtocol = "UDP";
                                                        kind = "architecto";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "rerum";
                                                        port = "quo";
                                                        project = "et";
                                                        region = "saepe";
                                                    }}),
                                                }};
                                            }};
                                            kind = "commodi";
                                            rrdatas = new String[]() {{
                                                add("quibusdam"),
                                                add("asperiores"),
                                                add("quo"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("soluta"),
                                            }};
                                            weight = 8.100000;
                                        }}),
                                    }};
                                    kind = "blanditiis";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("in"),
                                add("et"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("est"),
                                add("id"),
                            }};
                            ttl = 2160980356695726217;
                            type = "aut";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "perspiciatis";
                            name = "et";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = true;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "magni";
                                                        ipProtocol = "TCP";
                                                        kind = "distinctio";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "ea";
                                                        port = "non";
                                                        project = "non";
                                                        region = "nam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "beatae";
                                            location = "quae";
                                            rrdatas = new String[]() {{
                                                add("magni"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("sit"),
                                                add("aut"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "iusto";
                                                        ipProtocol = "UDP";
                                                        kind = "repudiandae";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "autem";
                                                        port = "odit";
                                                        project = "enim";
                                                        region = "ut";
                                                    }}),
                                                }};
                                            }};
                                            kind = "non";
                                            location = "nihil";
                                            rrdatas = new String[]() {{
                                                add("recusandae"),
                                                add("nihil"),
                                                add("exercitationem"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("perferendis"),
                                                add("id"),
                                                add("autem"),
                                            }};
                                        }}),
                                    }};
                                    kind = "hic";
                                }};
                                kind = "voluptatem";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "omnis";
                                                            ipProtocol = "TCP";
                                                            kind = "nostrum";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "sit";
                                                            port = "repellat";
                                                            project = "quo";
                                                            region = "dolorum";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "laboriosam";
                                                            ipProtocol = "TCP";
                                                            kind = "ea";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "fugit";
                                                            port = "aut";
                                                            project = "tempora";
                                                            region = "aliquid";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "mollitia";
                                                location = "non";
                                                rrdatas = new String[]() {{
                                                    add("recusandae"),
                                                    add("illum"),
                                                    add("consequatur"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("hic"),
                                                    add("nihil"),
                                                    add("explicabo"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "iure";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "quos";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "explicabo";
                                                            port = "necessitatibus";
                                                            project = "veniam";
                                                            region = "qui";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "in";
                                                location = "odit";
                                                rrdatas = new String[]() {{
                                                    add("corporis"),
                                                    add("tenetur"),
                                                    add("esse"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("mollitia"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "laboriosam";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "maiores";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "iusto";
                                                            port = "aperiam";
                                                            project = "repellendus";
                                                            region = "sunt";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "eum";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "et";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "aut";
                                                            port = "dolor";
                                                            project = "quia";
                                                            region = "quaerat";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "ea";
                                                location = "et";
                                                rrdatas = new String[]() {{
                                                    add("recusandae"),
                                                    add("qui"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("aut"),
                                                }};
                                            }}),
                                        }};
                                        kind = "explicabo";
                                    }};
                                    kind = "cupiditate";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "saepe";
                                                ipProtocol = "UDP";
                                                kind = "voluptatem";
                                                loadBalancerType = "NONE";
                                                networkUrl = "fugiat";
                                                port = "nesciunt";
                                                project = "et";
                                                region = "qui";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quis";
                                                ipProtocol = "TCP";
                                                kind = "velit";
                                                loadBalancerType = "NONE";
                                                networkUrl = "aliquid";
                                                port = "vero";
                                                project = "aut";
                                                region = "et";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "voluptatem";
                                                ipProtocol = "UNDEFINED";
                                                kind = "quae";
                                                loadBalancerType = "NONE";
                                                networkUrl = "vitae";
                                                port = "rerum";
                                                project = "officiis";
                                                region = "commodi";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 16.100000;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ipsa";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "sint";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "eaque";
                                                        port = "facilis";
                                                        project = "et";
                                                        region = "ut";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "et";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "sit";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "eaque";
                                                        port = "consequuntur";
                                                        project = "et";
                                                        region = "amet";
                                                    }}),
                                                }};
                                            }};
                                            kind = "distinctio";
                                            rrdatas = new String[]() {{
                                                add("consectetur"),
                                                add("minima"),
                                                add("sequi"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("consequatur"),
                                            }};
                                            weight = 29.200001;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quam";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "dolores";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "ullam";
                                                        port = "architecto";
                                                        project = "architecto";
                                                        region = "beatae";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "consequatur";
                                                        ipProtocol = "UDP";
                                                        kind = "hic";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "veritatis";
                                                        port = "architecto";
                                                        project = "voluptas";
                                                        region = "voluptatibus";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "maiores";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "modi";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "praesentium";
                                                        port = "itaque";
                                                        project = "ipsum";
                                                        region = "natus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quas";
                                            rrdatas = new String[]() {{
                                                add("nostrum"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("repudiandae"),
                                                add("eius"),
                                            }};
                                            weight = 16.100000;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "unde";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "asperiores";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "hic";
                                                        port = "quo";
                                                        project = "est";
                                                        region = "nostrum";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "pariatur";
                                                        ipProtocol = "TCP";
                                                        kind = "occaecati";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "temporibus";
                                                        port = "laborum";
                                                        project = "voluptas";
                                                        region = "modi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "atque";
                                            rrdatas = new String[]() {{
                                                add("tempora"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("nihil"),
                                            }};
                                            weight = 35.200001;
                                        }}),
                                    }};
                                    kind = "eveniet";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("fuga"),
                                add("error"),
                                add("autem"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("omnis"),
                                add("esse"),
                                add("veritatis"),
                            }};
                            ttl = 7336767762345247220;
                            type = "incidunt";
                        }}),
                    }};
                    id = "sit";
                    isServing = true;
                    kind = "est";
                    startTime = "odio";
                    status = "DONE";
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
