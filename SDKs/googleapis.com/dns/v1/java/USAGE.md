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
                                kind = "dolores";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "mollitia";
                                                            ipProtocol = "tcp";
                                                            kind = "quam";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "qui";
                                                            port = "qui";
                                                            project = "unde";
                                                            region = "in";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "autem";
                                                            ipProtocol = "undefined";
                                                            kind = "ut";
                                                            loadBalancerType = "none";
                                                            networkUrl = "ab";
                                                            port = "neque";
                                                            project = "ullam";
                                                            region = "et";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "accusantium";
                                                            ipProtocol = "tcp";
                                                            kind = "architecto";
                                                            loadBalancerType = "none";
                                                            networkUrl = "velit";
                                                            port = "cumque";
                                                            project = "soluta";
                                                            region = "sunt";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "voluptates";
                                                location = "magni";
                                                rrdatas = new String[]() {{
                                                    add("optio"),
                                                    add("qui"),
                                                    add("earum"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("omnis"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "consequatur";
                                                            ipProtocol = "tcp";
                                                            kind = "commodi";
                                                            loadBalancerType = "none";
                                                            networkUrl = "reprehenderit";
                                                            port = "consectetur";
                                                            project = "nostrum";
                                                            region = "ut";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "laboriosam";
                                                            ipProtocol = "udp";
                                                            kind = "a";
                                                            loadBalancerType = "regionalL4ilb";
                                                            networkUrl = "aut";
                                                            port = "quas";
                                                            project = "consequuntur";
                                                            region = "laudantium";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "autem";
                                                location = "ipsa";
                                                rrdatas = new String[]() {{
                                                    add("doloremque"),
                                                    add("perferendis"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("ratione"),
                                                }};
                                            }}),
                                        }};
                                        kind = "quisquam";
                                    }};
                                    kind = "explicabo";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "maxime";
                                                ipProtocol = "undefined";
                                                kind = "perferendis";
                                                loadBalancerType = "none";
                                                networkUrl = "rerum";
                                                port = "reiciendis";
                                                project = "quis";
                                                region = "cumque";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 79.199997;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eum";
                                                        ipProtocol = "undefined";
                                                        kind = "et";
                                                        loadBalancerType = "regionalL4ilb";
                                                        networkUrl = "ad";
                                                        port = "expedita";
                                                        project = "vel";
                                                        region = "qui";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "modi";
                                                        ipProtocol = "undefined";
                                                        kind = "tempora";
                                                        loadBalancerType = "none";
                                                        networkUrl = "eaque";
                                                        port = "sunt";
                                                        project = "sit";
                                                        region = "autem";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quis";
                                                        ipProtocol = "tcp";
                                                        kind = "vel";
                                                        loadBalancerType = "none";
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
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "soluta";
                                                        ipProtocol = "tcp";
                                                        kind = "consequuntur";
                                                        loadBalancerType = "none";
                                                        networkUrl = "mollitia";
                                                        port = "inventore";
                                                        project = "delectus";
                                                        region = "ipsa";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "animi";
                                                        ipProtocol = "tcp";
                                                        kind = "ut";
                                                        loadBalancerType = "none";
                                                        networkUrl = "fuga";
                                                        port = "sed";
                                                        project = "sed";
                                                        region = "et";
                                                    }}),
                                                }};
                                            }};
                                            kind = "consequuntur";
                                            rrdatas = new String[]() {{
                                                add("cupiditate"),
                                                add("provident"),
                                                add("molestiae"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("quasi"),
                                                add("corrupti"),
                                                add("enim"),
                                            }};
                                            weight = 85.099998;
                                        }}),
                                    }};
                                    kind = "possimus";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("neque"),
                                add("consequuntur"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("et"),
                            }};
                            ttl = 1613338873740606132;
                            type = "occaecati";
                        }}),
                    }};
                    deletions = new openapisdk.models.shared.ResourceRecordSet[]() {{
                        add(new ResourceRecordSet() {{
                            kind = "voluptatem";
                            name = "quia";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "est";
                                                        ipProtocol = "udp";
                                                        kind = "necessitatibus";
                                                        loadBalancerType = "none";
                                                        networkUrl = "possimus";
                                                        port = "voluptatem";
                                                        project = "dolorum";
                                                        region = "doloribus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "saepe";
                                            location = "sunt";
                                            rrdatas = new String[]() {{
                                                add("et"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("asperiores"),
                                                add("et"),
                                            }};
                                        }}),
                                    }};
                                    kind = "est";
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
                                                            ipAddress = "dolores";
                                                            ipProtocol = "tcp";
                                                            kind = "impedit";
                                                            loadBalancerType = "none";
                                                            networkUrl = "magnam";
                                                            port = "ut";
                                                            project = "possimus";
                                                            region = "illo";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "qui";
                                                location = "quia";
                                                rrdatas = new String[]() {{
                                                    add("ducimus"),
                                                    add("enim"),
                                                    add("blanditiis"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("delectus"),
                                                }};
                                            }}),
                                        }};
                                        kind = "rerum";
                                    }};
                                    kind = "dolore";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "velit";
                                                ipProtocol = "udp";
                                                kind = "modi";
                                                loadBalancerType = "regionalL4ilb";
                                                networkUrl = "voluptas";
                                                port = "amet";
                                                project = "et";
                                                region = "a";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 80.099998;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dicta";
                                                        ipProtocol = "tcp";
                                                        kind = "doloremque";
                                                        loadBalancerType = "none";
                                                        networkUrl = "nisi";
                                                        port = "recusandae";
                                                        project = "qui";
                                                        region = "minus";
                                                    }}),
                                                }};
                                            }};
                                            kind = "et";
                                            rrdatas = new String[]() {{
                                                add("ut"),
                                                add("rem"),
                                                add("eos"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("reiciendis"),
                                            }};
                                            weight = 74.099998;
                                        }}),
                                    }};
                                    kind = "porro";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("adipisci"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("illum"),
                                add("accusantium"),
                                add("atque"),
                            }};
                            ttl = 1444501184389758573;
                            type = "nisi";
                        }}),
                    }};
                    id = "quidem";
                    isServing = false;
                    kind = "quo";
                    startTime = "vero";
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