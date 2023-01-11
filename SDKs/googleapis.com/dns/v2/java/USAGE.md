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
                    location = "in";
                    managedZone = "et";
                    project = "itaque";
                }};
                queryParams = new DnsChangesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "asperiores";
                    alt = "media";
                    callback = "voluptates";
                    clientOperationId = "molestias";
                    fields = "vel";
                    key = "numquam";
                    oauthToken = "soluta";
                    prettyPrint = false;
                    quotaUser = "modi";
                    uploadType = "sit";
                    uploadProtocol = "aut";
                }};
                request = new Change() {{
                    additions = new openapisdk.models.shared.ResourceRecordSet[]() {{
                        add(new ResourceRecordSet() {{
                            kind = "quia";
                            name = "quaerat";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = true;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aliquid";
                                                        ipProtocol = "TCP";
                                                        kind = "dignissimos";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "iure";
                                                        port = "molestiae";
                                                        project = "possimus";
                                                        region = "quos";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolor";
                                                        ipProtocol = "UDP";
                                                        kind = "voluptas";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "nulla";
                                                        port = "natus";
                                                        project = "quis";
                                                        region = "eligendi";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quaerat";
                                            location = "atque";
                                            rrdatas = new String[]() {{
                                                add("aspernatur"),
                                                add("recusandae"),
                                                add("ipsum"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("quia"),
                                                add("laborum"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rerum";
                                                        ipProtocol = "UDP";
                                                        kind = "rem";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "et";
                                                        port = "sequi";
                                                        project = "ea";
                                                        region = "facilis";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eligendi";
                                                        ipProtocol = "TCP";
                                                        kind = "beatae";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "eaque";
                                                        port = "delectus";
                                                        project = "molestiae";
                                                        region = "sequi";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laborum";
                                                        ipProtocol = "TCP";
                                                        kind = "repudiandae";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "quibusdam";
                                                        port = "sed";
                                                        project = "alias";
                                                        region = "omnis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptatem";
                                            location = "qui";
                                            rrdatas = new String[]() {{
                                                add("quos"),
                                                add("nihil"),
                                                add("voluptas"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("iure"),
                                            }};
                                        }}),
                                    }};
                                    kind = "perferendis";
                                }};
                                kind = "modi";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = true;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolores";
                                                            ipProtocol = "TCP";
                                                            kind = "sunt";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "deserunt";
                                                            port = "voluptatem";
                                                            project = "aperiam";
                                                            region = "et";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "aut";
                                                location = "ex";
                                                rrdatas = new String[]() {{
                                                    add("itaque"),
                                                    add("asperiores"),
                                                    add("placeat"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("aut"),
                                                }};
                                            }}),
                                        }};
                                        kind = "distinctio";
                                    }};
                                    kind = "voluptatem";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ut";
                                                ipProtocol = "UDP";
                                                kind = "sit";
                                                loadBalancerType = "NONE";
                                                networkUrl = "aperiam";
                                                port = "tenetur";
                                                project = "quia";
                                                region = "ut";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "necessitatibus";
                                                ipProtocol = "TCP";
                                                kind = "aut";
                                                loadBalancerType = "NONE";
                                                networkUrl = "minus";
                                                port = "qui";
                                                project = "earum";
                                                region = "temporibus";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "reprehenderit";
                                                ipProtocol = "UDP";
                                                kind = "et";
                                                loadBalancerType = "NONE";
                                                networkUrl = "quas";
                                                port = "assumenda";
                                                project = "blanditiis";
                                                region = "eos";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 54.200001;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "dolores";
                                                        ipProtocol = "UDP";
                                                        kind = "itaque";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "libero";
                                                        port = "repudiandae";
                                                        project = "eum";
                                                        region = "quia";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "harum";
                                                        ipProtocol = "UDP";
                                                        kind = "nihil";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "quasi";
                                                        port = "quia";
                                                        project = "molestiae";
                                                        region = "et";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "animi";
                                                        ipProtocol = "UDP";
                                                        kind = "modi";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "dolorem";
                                                        port = "ut";
                                                        project = "ut";
                                                        region = "distinctio";
                                                    }}),
                                                }};
                                            }};
                                            kind = "reprehenderit";
                                            rrdatas = new String[]() {{
                                                add("quos"),
                                                add("culpa"),
                                                add("facilis"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("est"),
                                                add("praesentium"),
                                            }};
                                            weight = 12.100000;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "repudiandae";
                                                        ipProtocol = "TCP";
                                                        kind = "aut";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "perferendis";
                                                        port = "amet";
                                                        project = "non";
                                                        region = "sit";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nostrum";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "quae";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "nostrum";
                                                        port = "aut";
                                                        project = "error";
                                                        region = "aut";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rerum";
                                                        ipProtocol = "UDP";
                                                        kind = "aliquam";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "accusantium";
                                                        port = "possimus";
                                                        project = "est";
                                                        region = "explicabo";
                                                    }}),
                                                }};
                                            }};
                                            kind = "non";
                                            rrdatas = new String[]() {{
                                                add("mollitia"),
                                                add("saepe"),
                                                add("a"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("omnis"),
                                                add("minus"),
                                                add("accusantium"),
                                            }};
                                            weight = 89.099998;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "cumque";
                                                        ipProtocol = "TCP";
                                                        kind = "distinctio";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "qui";
                                                        port = "dicta";
                                                        project = "id";
                                                        region = "placeat";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quos";
                                                        ipProtocol = "UDP";
                                                        kind = "quaerat";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "tempora";
                                                        port = "iusto";
                                                        project = "exercitationem";
                                                        region = "quaerat";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quia";
                                                        ipProtocol = "UDP";
                                                        kind = "repellat";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "et";
                                                        port = "et";
                                                        project = "enim";
                                                        region = "quia";
                                                    }}),
                                                }};
                                            }};
                                            kind = "eaque";
                                            rrdatas = new String[]() {{
                                                add("possimus"),
                                                add("consectetur"),
                                                add("quidem"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("fugiat"),
                                                add("sunt"),
                                                add("dolores"),
                                            }};
                                            weight = 34.200001;
                                        }}),
                                    }};
                                    kind = "commodi";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("tempore"),
                                add("fugiat"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("culpa"),
                                add("modi"),
                            }};
                            ttl = 8102503924767261050;
                            type = "laudantium";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "eos";
                            name = "porro";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "laudantium";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "fugit";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "esse";
                                                        port = "quisquam";
                                                        project = "exercitationem";
                                                        region = "labore";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "molestiae";
                                                        ipProtocol = "UDP";
                                                        kind = "tenetur";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "ipsum";
                                                        port = "quasi";
                                                        project = "aut";
                                                        region = "porro";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "eos";
                                                        ipProtocol = "TCP";
                                                        kind = "aliquid";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "perferendis";
                                                        port = "eveniet";
                                                        project = "perferendis";
                                                        region = "numquam";
                                                    }}),
                                                }};
                                            }};
                                            kind = "assumenda";
                                            location = "vitae";
                                            rrdatas = new String[]() {{
                                                add("a"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("ut"),
                                                add("consequatur"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "tenetur";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "alias";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "blanditiis";
                                                        port = "pariatur";
                                                        project = "ipsam";
                                                        region = "veritatis";
                                                    }}),
                                                }};
                                            }};
                                            kind = "voluptatem";
                                            location = "ullam";
                                            rrdatas = new String[]() {{
                                                add("deleniti"),
                                                add("qui"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("assumenda"),
                                            }};
                                        }}),
                                    }};
                                    kind = "quo";
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
                                                            ipAddress = "eos";
                                                            ipProtocol = "TCP";
                                                            kind = "perspiciatis";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "omnis";
                                                            port = "aliquam";
                                                            project = "aut";
                                                            region = "laborum";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "voluptatem";
                                                            ipProtocol = "UDP";
                                                            kind = "non";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "saepe";
                                                            port = "dolores";
                                                            project = "dolorum";
                                                            region = "ab";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "earum";
                                                location = "nihil";
                                                rrdatas = new String[]() {{
                                                    add("consectetur"),
                                                    add("ut"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("deleniti"),
                                                    add("rem"),
                                                }};
                                            }}),
                                        }};
                                        kind = "enim";
                                    }};
                                    kind = "qui";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "sunt";
                                                ipProtocol = "TCP";
                                                kind = "quod";
                                                loadBalancerType = "NONE";
                                                networkUrl = "recusandae";
                                                port = "expedita";
                                                project = "ut";
                                                region = "eligendi";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "est";
                                                ipProtocol = "UNDEFINED";
                                                kind = "architecto";
                                                loadBalancerType = "NONE";
                                                networkUrl = "voluptatem";
                                                port = "fuga";
                                                project = "reiciendis";
                                                region = "et";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "repudiandae";
                                                ipProtocol = "UNDEFINED";
                                                kind = "eveniet";
                                                loadBalancerType = "NONE";
                                                networkUrl = "iusto";
                                                port = "qui";
                                                project = "quaerat";
                                                region = "sed";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 40.200001;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "recusandae";
                                                        ipProtocol = "TCP";
                                                        kind = "consequatur";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "et";
                                                        port = "voluptas";
                                                        project = "non";
                                                        region = "minima";
                                                    }}),
                                                }};
                                            }};
                                            kind = "nihil";
                                            rrdatas = new String[]() {{
                                                add("impedit"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("cum"),
                                            }};
                                            weight = 29.100000;
                                        }}),
                                    }};
                                    kind = "ab";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("culpa"),
                                add("asperiores"),
                                add("natus"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("harum"),
                                add("voluptatem"),
                            }};
                            ttl = 3513975353075005728;
                            type = "porro";
                        }}),
                    }};
                    deletions = new openapisdk.models.shared.ResourceRecordSet[]() {{
                        add(new ResourceRecordSet() {{
                            kind = "quo";
                            name = "commodi";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = true;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "aut";
                                                        ipProtocol = "TCP";
                                                        kind = "minima";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "dolorem";
                                                        port = "delectus";
                                                        project = "sint";
                                                        region = "non";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "labore";
                                                        ipProtocol = "TCP";
                                                        kind = "ad";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "eveniet";
                                                        port = "consectetur";
                                                        project = "est";
                                                        region = "eum";
                                                    }}),
                                                }};
                                            }};
                                            kind = "rerum";
                                            location = "ut";
                                            rrdatas = new String[]() {{
                                                add("quas"),
                                                add("quia"),
                                                add("rem"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("modi"),
                                                add("voluptas"),
                                                add("ex"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "inventore";
                                                        ipProtocol = "TCP";
                                                        kind = "amet";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "ut";
                                                        port = "fugit";
                                                        project = "temporibus";
                                                        region = "sunt";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quo";
                                            location = "aspernatur";
                                            rrdatas = new String[]() {{
                                                add("veniam"),
                                                add("earum"),
                                                add("omnis"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("eaque"),
                                            }};
                                        }}),
                                    }};
                                    kind = "corrupti";
                                }};
                                kind = "quia";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "saepe";
                                                            ipProtocol = "UDP";
                                                            kind = "ducimus";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "autem";
                                                            port = "sint";
                                                            project = "alias";
                                                            region = "blanditiis";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "impedit";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "ea";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "ipsam";
                                                            port = "deleniti";
                                                            project = "impedit";
                                                            region = "eaque";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "esse";
                                                            ipProtocol = "TCP";
                                                            kind = "sapiente";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "nobis";
                                                            port = "tempora";
                                                            project = "esse";
                                                            region = "ad";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "culpa";
                                                location = "omnis";
                                                rrdatas = new String[]() {{
                                                    add("eligendi"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("eveniet"),
                                                    add("est"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "blanditiis";
                                                            ipProtocol = "TCP";
                                                            kind = "ut";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "non";
                                                            port = "porro";
                                                            project = "sunt";
                                                            region = "ea";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "id";
                                                            ipProtocol = "UDP";
                                                            kind = "aperiam";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "ex";
                                                            port = "modi";
                                                            project = "qui";
                                                            region = "quia";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "maiores";
                                                            ipProtocol = "TCP";
                                                            kind = "omnis";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "praesentium";
                                                            port = "totam";
                                                            project = "ut";
                                                            region = "quis";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "eos";
                                                location = "voluptate";
                                                rrdatas = new String[]() {{
                                                    add("quod"),
                                                    add("nihil"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("qui"),
                                                    add("alias"),
                                                    add("rerum"),
                                                }};
                                            }}),
                                        }};
                                        kind = "qui";
                                    }};
                                    kind = "quis";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "magni";
                                                ipProtocol = "UNDEFINED";
                                                kind = "culpa";
                                                loadBalancerType = "NONE";
                                                networkUrl = "vel";
                                                port = "alias";
                                                project = "quidem";
                                                region = "nostrum";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quia";
                                                ipProtocol = "TCP";
                                                kind = "aut";
                                                loadBalancerType = "NONE";
                                                networkUrl = "pariatur";
                                                port = "dicta";
                                                project = "et";
                                                region = "eveniet";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "corrupti";
                                                ipProtocol = "UDP";
                                                kind = "itaque";
                                                loadBalancerType = "NONE";
                                                networkUrl = "et";
                                                port = "quod";
                                                project = "sint";
                                                region = "pariatur";
                                            }}),
                                        }};
                                    }};
                                    trickleTraffic = 79.099998;
                                }};
                                wrr = new RrSetRoutingPolicyWrrPolicy() {{
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "maiores";
                                                        ipProtocol = "TCP";
                                                        kind = "ipsam";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "sit";
                                                        port = "voluptas";
                                                        project = "aut";
                                                        region = "dolorem";
                                                    }}),
                                                }};
                                            }};
                                            kind = "non";
                                            rrdatas = new String[]() {{
                                                add("accusantium"),
                                                add("placeat"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("et"),
                                                add("est"),
                                                add("dolorum"),
                                            }};
                                            weight = 78.099998;
                                        }}),
                                    }};
                                    kind = "quaerat";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("eum"),
                                add("consequuntur"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("perspiciatis"),
                                add("repellendus"),
                            }};
                            ttl = 950268525217437200;
                            type = "sapiente";
                        }}),
                        add(new ResourceRecordSet() {{
                            kind = "quae";
                            name = "vero";
                            routingPolicy = new RrSetRoutingPolicy() {{
                                geo = new RrSetRoutingPolicyGeoPolicy() {{
                                    enableFencing = false;
                                    items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "nobis";
                                                        ipProtocol = "TCP";
                                                        kind = "nesciunt";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "dolores";
                                                        port = "libero";
                                                        project = "sit";
                                                        region = "excepturi";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "quia";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "suscipit";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "consectetur";
                                                        port = "et";
                                                        project = "aperiam";
                                                        region = "distinctio";
                                                    }}),
                                                }};
                                            }};
                                            kind = "ex";
                                            location = "aut";
                                            rrdatas = new String[]() {{
                                                add("harum"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("molestiae"),
                                                add("perferendis"),
                                            }};
                                        }}),
                                        add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "voluptatibus";
                                                        ipProtocol = "TCP";
                                                        kind = "minus";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "nisi";
                                                        port = "omnis";
                                                        project = "ducimus";
                                                        region = "nulla";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "non";
                                                        ipProtocol = "UDP";
                                                        kind = "dolore";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "non";
                                                        port = "quo";
                                                        project = "quisquam";
                                                        region = "cumque";
                                                    }}),
                                                }};
                                            }};
                                            kind = "aspernatur";
                                            location = "quae";
                                            rrdatas = new String[]() {{
                                                add("recusandae"),
                                                add("nostrum"),
                                                add("maxime"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("sunt"),
                                                add("assumenda"),
                                            }};
                                        }}),
                                    }};
                                    kind = "repudiandae";
                                }};
                                kind = "similique";
                                primaryBackup = new RrSetRoutingPolicyPrimaryBackupPolicy() {{
                                    backupGeoTargets = new RrSetRoutingPolicyGeoPolicy() {{
                                        enableFencing = false;
                                        items = new openapisdk.models.shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem[]() {{
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "consequatur";
                                                            ipProtocol = "TCP";
                                                            kind = "fugiat";
                                                            loadBalancerType = "NONE";
                                                            networkUrl = "iusto";
                                                            port = "rerum";
                                                            project = "atque";
                                                            region = "voluptatem";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "dolor";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "magni";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "provident";
                                                            port = "necessitatibus";
                                                            project = "similique";
                                                            region = "ipsam";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "quia";
                                                location = "voluptatum";
                                                rrdatas = new String[]() {{
                                                    add("et"),
                                                    add("fuga"),
                                                    add("consequatur"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("ipsa"),
                                                    add("voluptatem"),
                                                    add("velit"),
                                                }};
                                            }}),
                                            add(new RrSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                                healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                    internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "sit";
                                                            ipProtocol = "UNDEFINED";
                                                            kind = "sunt";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "quo";
                                                            port = "dolor";
                                                            project = "eos";
                                                            region = "perspiciatis";
                                                        }}),
                                                        add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                            ipAddress = "similique";
                                                            ipProtocol = "TCP";
                                                            kind = "voluptatem";
                                                            loadBalancerType = "REGIONAL_L4ILB";
                                                            networkUrl = "rerum";
                                                            port = "labore";
                                                            project = "quasi";
                                                            region = "occaecati";
                                                        }}),
                                                    }};
                                                }};
                                                kind = "voluptatem";
                                                location = "delectus";
                                                rrdatas = new String[]() {{
                                                    add("consequuntur"),
                                                }};
                                                signatureRrdatas = new String[]() {{
                                                    add("earum"),
                                                    add("eos"),
                                                    add("sapiente"),
                                                }};
                                            }}),
                                        }};
                                        kind = "sit";
                                    }};
                                    kind = "quos";
                                    primaryTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "neque";
                                                ipProtocol = "UDP";
                                                kind = "qui";
                                                loadBalancerType = "NONE";
                                                networkUrl = "vero";
                                                port = "ex";
                                                project = "excepturi";
                                                region = "esse";
                                            }}),
                                            add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "magnam";
                                                ipProtocol = "UDP";
                                                kind = "doloremque";
                                                loadBalancerType = "NONE";
                                                networkUrl = "quis";
                                                port = "repellat";
                                                project = "omnis";
                                                region = "perspiciatis";
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
                                                        ipAddress = "iure";
                                                        ipProtocol = "UDP";
                                                        kind = "dolores";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "maxime";
                                                        port = "a";
                                                        project = "magni";
                                                        region = "tenetur";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ullam";
                                                        ipProtocol = "UDP";
                                                        kind = "qui";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "excepturi";
                                                        port = "modi";
                                                        project = "quis";
                                                        region = "consequatur";
                                                    }}),
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "ut";
                                                        ipProtocol = "UDP";
                                                        kind = "ad";
                                                        loadBalancerType = "REGIONAL_L4ILB";
                                                        networkUrl = "vel";
                                                        port = "aut";
                                                        project = "in";
                                                        region = "voluptas";
                                                    }}),
                                                }};
                                            }};
                                            kind = "quaerat";
                                            rrdatas = new String[]() {{
                                                add("numquam"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("qui"),
                                            }};
                                            weight = 92.099998;
                                        }}),
                                        add(new RrSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                            healthCheckedTargets = new RrSetRoutingPolicyHealthCheckTargets() {{
                                                internalLoadBalancers = new openapisdk.models.shared.RrSetRoutingPolicyLoadBalancerTarget[]() {{
                                                    add(new RrSetRoutingPolicyLoadBalancerTarget() {{
                                                        ipAddress = "rerum";
                                                        ipProtocol = "UNDEFINED";
                                                        kind = "hic";
                                                        loadBalancerType = "NONE";
                                                        networkUrl = "dolor";
                                                        port = "corrupti";
                                                        project = "dicta";
                                                        region = "quas";
                                                    }}),
                                                }};
                                            }};
                                            kind = "temporibus";
                                            rrdatas = new String[]() {{
                                                add("ab"),
                                            }};
                                            signatureRrdatas = new String[]() {{
                                                add("vero"),
                                            }};
                                            weight = 96.199997;
                                        }}),
                                    }};
                                    kind = "omnis";
                                }};
                            }};
                            rrdatas = new String[]() {{
                                add("nulla"),
                            }};
                            signatureRrdatas = new String[]() {{
                                add("consequatur"),
                                add("aliquam"),
                                add("dolorum"),
                            }};
                            ttl = 5202383889378438838;
                            type = "minus";
                        }}),
                    }};
                    id = "ducimus";
                    isServing = false;
                    kind = "voluptatem";
                    startTime = "est";
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