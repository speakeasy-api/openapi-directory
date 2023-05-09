# resourceRecordSets

### Available Operations

* [dnsResourceRecordSetsCreate](#dnsresourcerecordsetscreate) - Creates a new ResourceRecordSet.
* [dnsResourceRecordSetsDelete](#dnsresourcerecordsetsdelete) - Deletes a previously created ResourceRecordSet.
* [dnsResourceRecordSetsGet](#dnsresourcerecordsetsget) - Fetches the representation of an existing ResourceRecordSet.
* [dnsResourceRecordSetsList](#dnsresourcerecordsetslist) - Enumerates ResourceRecordSets that you have created but not yet deleted.
* [dnsResourceRecordSetsPatch](#dnsresourcerecordsetspatch) - Applies a partial update to an existing ResourceRecordSet.

## dnsResourceRecordSetsCreate

Creates a new ResourceRecordSet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsCreateRequest;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsCreateResponse;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsCreateSecurity;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyHealthCheckTargets;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyPrimaryBackupPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
import org.openapis.openapi.models.shared.ResourceRecordSet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResourceRecordSetsCreateRequest req = new DnsResourceRecordSetsCreateRequest("occaecati", "numquam") {{
                dollarXgafv = XgafvEnum.TWO;
                resourceRecordSet = new ResourceRecordSet() {{
                    kind = "molestiae";
                    name = "Gustavo Ullrich";
                    routingPolicy = new RRSetRoutingPolicy() {{
                        geo = new RRSetRoutingPolicyGeoPolicy() {{
                            enableFencing = false;
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "iste";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "corrupti";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "voluptatibus";
                                                port = "ullam";
                                                project = "dolorum";
                                                region = "soluta";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "cum";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "delectus";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "commodi";
                                                port = "fugit";
                                                project = "ullam";
                                                region = "ullam";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "doloremque";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "qui";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "adipisci";
                                                port = "totam";
                                                project = "qui";
                                                region = "deserunt";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "eligendi";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "deleniti";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "est";
                                                port = "reiciendis";
                                                project = "possimus";
                                                region = "odit";
                                            }}),
                                        }};
                                    }};
                                    kind = "consectetur";
                                    location = "inventore";
                                    rrdatas = new String[]{{
                                        add("facilis"),
                                        add("facilis"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("nisi"),
                                        add("ipsam"),
                                        add("voluptatem"),
                                    }};
                                }}),
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "iure";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "eveniet";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "ea";
                                                port = "asperiores";
                                                project = "veniam";
                                                region = "quidem";
                                            }}),
                                        }};
                                    }};
                                    kind = "asperiores";
                                    location = "eum";
                                    rrdatas = new String[]{{
                                        add("repudiandae"),
                                        add("nemo"),
                                        add("molestias"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("expedita"),
                                    }};
                                }}),
                            }};
                            kind = "quisquam";
                        }};;
                        kind = "praesentium";
                        primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                            backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                enableFencing = false;
                                items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "repudiandae";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "ipsum";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "vitae";
                                                    port = "fugit";
                                                    project = "nam";
                                                    region = "ex";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "neque";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "eos";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "ad";
                                                    port = "a";
                                                    project = "facere";
                                                    region = "id";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "atque";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "aperiam";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "quam";
                                                    port = "modi";
                                                    project = "fuga";
                                                    region = "iure";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "deleniti";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "sint";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "dolor";
                                                    port = "ad";
                                                    project = "illum";
                                                    region = "sit";
                                                }}),
                                            }};
                                        }};
                                        kind = "molestias";
                                        location = "voluptas";
                                        rrdatas = new String[]{{
                                            add("voluptas"),
                                            add("maiores"),
                                            add("ea"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("delectus"),
                                            add("accusamus"),
                                        }};
                                    }}),
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "consequatur";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "accusantium";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "provident";
                                                    port = "maiores";
                                                    project = "quaerat";
                                                    region = "numquam";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "non";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "incidunt";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "enim";
                                                    port = "nihil";
                                                    project = "libero";
                                                    region = "omnis";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "excepturi";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "quisquam";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "repellendus";
                                                    port = "cum";
                                                    project = "quibusdam";
                                                    region = "est";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "commodi";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "autem";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "recusandae";
                                                    port = "sapiente";
                                                    project = "id";
                                                    region = "odit";
                                                }}),
                                            }};
                                        }};
                                        kind = "inventore";
                                        location = "iste";
                                        rrdatas = new String[]{{
                                            add("explicabo"),
                                            add("ullam"),
                                            add("atque"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("pariatur"),
                                            add("aut"),
                                            add("similique"),
                                            add("iste"),
                                        }};
                                    }}),
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "nam";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "labore";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "voluptatibus";
                                                    port = "quam";
                                                    project = "nulla";
                                                    region = "dolorem";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "voluptates";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "perferendis";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "excepturi";
                                                    port = "aliquid";
                                                    project = "dolore";
                                                    region = "voluptatem";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "illum";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "culpa";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "atque";
                                                    port = "ratione";
                                                    project = "vitae";
                                                    region = "quisquam";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "atque";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "culpa";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "a";
                                                    port = "ad";
                                                    project = "cupiditate";
                                                    region = "suscipit";
                                                }}),
                                            }};
                                        }};
                                        kind = "reiciendis";
                                        location = "repellendus";
                                        rrdatas = new String[]{{
                                            add("ab"),
                                            add("mollitia"),
                                            add("possimus"),
                                            add("praesentium"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("quam"),
                                        }};
                                    }}),
                                }};
                                kind = "animi";
                            }};;
                            kind = "debitis";
                            primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                        ipAddress = "voluptatem";
                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                        kind = "vitae";
                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                        networkUrl = "architecto";
                                        port = "sint";
                                        project = "eligendi";
                                        region = "occaecati";
                                    }}),
                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                        ipAddress = "quis";
                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                        kind = "officia";
                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                        networkUrl = "unde";
                                        port = "quas";
                                        project = "laboriosam";
                                        region = "ducimus";
                                    }}),
                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                        ipAddress = "voluptatum";
                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                        kind = "deserunt";
                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                        networkUrl = "hic";
                                        port = "iure";
                                        project = "sint";
                                        region = "autem";
                                    }}),
                                }};
                            }};;
                            trickleTraffic = 6143.68;
                        }};;
                        wrr = new RRSetRoutingPolicyWrrPolicy() {{
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "fuga";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "dolor";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "molestias";
                                                port = "quod";
                                                project = "repudiandae";
                                                region = "eaque";
                                            }}),
                                        }};
                                    }};
                                    kind = "consectetur";
                                    rrdatas = new String[]{{
                                        add("vitae"),
                                        add("numquam"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("modi"),
                                        add("quos"),
                                    }};
                                    weight = 7914.54;
                                }}),
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "error";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "reprehenderit";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "consequatur";
                                                port = "voluptates";
                                                project = "delectus";
                                                region = "qui";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "delectus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "ipsum";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "doloremque";
                                                port = "sed";
                                                project = "voluptatum";
                                                region = "debitis";
                                            }}),
                                        }};
                                    }};
                                    kind = "a";
                                    rrdatas = new String[]{{
                                        add("eveniet"),
                                        add("repellat"),
                                        add("cupiditate"),
                                        add("adipisci"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("illo"),
                                        add("veniam"),
                                    }};
                                    weight = 1483.73;
                                }}),
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "possimus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "itaque";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "ullam";
                                                port = "non";
                                                project = "delectus";
                                                region = "incidunt";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quod";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "ullam";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "illum";
                                                port = "voluptates";
                                                project = "officia";
                                                region = "est";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "in";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "voluptate";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "delectus";
                                                port = "incidunt";
                                                project = "dolore";
                                                region = "nemo";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "est";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "maxime";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "laboriosam";
                                                port = "laboriosam";
                                                project = "quam";
                                                region = "fuga";
                                            }}),
                                        }};
                                    }};
                                    kind = "officia";
                                    rrdatas = new String[]{{
                                        add("cupiditate"),
                                        add("soluta"),
                                        add("tempore"),
                                        add("culpa"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("inventore"),
                                        add("atque"),
                                        add("ad"),
                                        add("sapiente"),
                                    }};
                                    weight = 9133.93;
                                }}),
                            }};
                            kind = "ut";
                        }};;
                    }};;
                    rrdatas = new String[]{{
                        add("ab"),
                    }};
                    signatureRrdatas = new String[]{{
                        add("suscipit"),
                        add("quidem"),
                        add("delectus"),
                        add("nemo"),
                    }};
                    ttl = 763934;
                    type = "voluptatum";
                }};;
                accessToken = "sequi";
                alt = AltEnum.MEDIA;
                callback = "maiores";
                clientOperationId = "expedita";
                fields = "rerum";
                key = "totam";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "eaque";
                uploadProtocol = "impedit";
            }};            

            DnsResourceRecordSetsCreateResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsCreate(req, new DnsResourceRecordSetsCreateSecurity() {{
                option1 = new DnsResourceRecordSetsCreateSecurityOption1("nam", "ex") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourceRecordSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResourceRecordSetsDelete

Deletes a previously created ResourceRecordSet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsDeleteRequest;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsDeleteResponse;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsDeleteSecurity;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResourceRecordSetsDeleteRequest req = new DnsResourceRecordSetsDeleteRequest("odio", "delectus", "minus", "ut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.JSON;
                callback = "veniam";
                clientOperationId = "repudiandae";
                fields = "sint";
                key = "occaecati";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "eos";
                uploadProtocol = "amet";
            }};            

            DnsResourceRecordSetsDeleteResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsDelete(req, new DnsResourceRecordSetsDeleteSecurity() {{
                option1 = new DnsResourceRecordSetsDeleteSecurityOption1("incidunt", "porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourceRecordSetsDeleteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResourceRecordSetsGet

Fetches the representation of an existing ResourceRecordSet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetRequest;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetResponse;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetSecurity;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetSecurityOption1;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetSecurityOption2;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetSecurityOption3;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResourceRecordSetsGetRequest req = new DnsResourceRecordSetsGetRequest("occaecati", "reiciendis", "voluptate", "tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "omnis";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                clientOperationId = "recusandae";
                fields = "expedita";
                key = "iusto";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "ad";
                uploadProtocol = "quod";
            }};            

            DnsResourceRecordSetsGetResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsGet(req, new DnsResourceRecordSetsGetSecurity() {{
                option1 = new DnsResourceRecordSetsGetSecurityOption1("ratione", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourceRecordSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResourceRecordSetsList

Enumerates ResourceRecordSets that you have created but not yet deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListRequest;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListResponse;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListSecurity;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListSecurityOption1;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListSecurityOption2;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListSecurityOption3;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResourceRecordSetsListRequest req = new DnsResourceRecordSetsListRequest("vero", "dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "illo";
                key = "saepe";
                maxResults = 314724L;
                name = "Rosemary Vandervort";
                oauthToken = "provident";
                pageToken = "aut";
                prettyPrint = false;
                quotaUser = "dolorum";
                type = "nostrum";
                uploadType = "tempora";
                uploadProtocol = "nam";
            }};            

            DnsResourceRecordSetsListResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsList(req, new DnsResourceRecordSetsListSecurity() {{
                option1 = new DnsResourceRecordSetsListSecurityOption1("numquam", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourceRecordSetsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsResourceRecordSetsPatch

Applies a partial update to an existing ResourceRecordSet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsPatchRequest;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsPatchResponse;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsPatchSecurity;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsPatchSecurityOption1;
import org.openapis.openapi.models.operations.DnsResourceRecordSetsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyHealthCheckTargets;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyPrimaryBackupPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicy;
import org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
import org.openapis.openapi.models.shared.ResourceRecordSet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsResourceRecordSetsPatchRequest req = new DnsResourceRecordSetsPatchRequest("nostrum", "maiores", "veritatis", "autem") {{
                dollarXgafv = XgafvEnum.TWO;
                resourceRecordSet = new ResourceRecordSet() {{
                    kind = "minima";
                    name = "Marcella Dooley";
                    routingPolicy = new RRSetRoutingPolicy() {{
                        geo = new RRSetRoutingPolicyGeoPolicy() {{
                            enableFencing = false;
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "maxime";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "laborum";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "autem";
                                                port = "adipisci";
                                                project = "sunt";
                                                region = "rerum";
                                            }}),
                                        }};
                                    }};
                                    kind = "occaecati";
                                    location = "provident";
                                    rrdatas = new String[]{{
                                        add("fugit"),
                                        add("autem"),
                                        add("optio"),
                                        add("eveniet"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("blanditiis"),
                                        add("a"),
                                        add("natus"),
                                        add("sapiente"),
                                    }};
                                }}),
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "facilis";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "dolore";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "accusantium";
                                                port = "maiores";
                                                project = "nisi";
                                                region = "velit";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "tempore";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "hic";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "vitae";
                                                port = "iusto";
                                                project = "atque";
                                                region = "velit";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "molestiae";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "aperiam";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "mollitia";
                                                port = "asperiores";
                                                project = "at";
                                                region = "quibusdam";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quam";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "rem";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "eos";
                                                port = "labore";
                                                project = "sunt";
                                                region = "blanditiis";
                                            }}),
                                        }};
                                    }};
                                    kind = "iste";
                                    location = "accusamus";
                                    rrdatas = new String[]{{
                                        add("incidunt"),
                                        add("labore"),
                                        add("blanditiis"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("consectetur"),
                                        add("sapiente"),
                                    }};
                                }}),
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "accusantium";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "consectetur";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                networkUrl = "architecto";
                                                port = "sint";
                                                project = "possimus";
                                                region = "tempore";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "asperiores";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "consequuntur";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "nobis";
                                                port = "debitis";
                                                project = "labore";
                                                region = "veritatis";
                                            }}),
                                        }};
                                    }};
                                    kind = "minima";
                                    location = "magni";
                                    rrdatas = new String[]{{
                                        add("error"),
                                        add("expedita"),
                                        add("error"),
                                        add("placeat"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("voluptate"),
                                        add("earum"),
                                        add("minima"),
                                        add("odit"),
                                    }};
                                }}),
                            }};
                            kind = "odit";
                        }};;
                        kind = "eius";
                        primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                            backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                enableFencing = false;
                                items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "dolorum";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "itaque";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "sunt";
                                                    port = "amet";
                                                    project = "cum";
                                                    region = "iusto";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "corrupti";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "esse";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "eligendi";
                                                    port = "minima";
                                                    project = "omnis";
                                                    region = "recusandae";
                                                }}),
                                            }};
                                        }};
                                        kind = "architecto";
                                        location = "voluptatibus";
                                        rrdatas = new String[]{{
                                            add("in"),
                                            add("repellat"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("cumque"),
                                        }};
                                    }}),
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "optio";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "repudiandae";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "libero";
                                                    port = "suscipit";
                                                    project = "illum";
                                                    region = "iusto";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "aliquid";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "aliquid";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "sapiente";
                                                    port = "consectetur";
                                                    project = "eligendi";
                                                    region = "ullam";
                                                }}),
                                            }};
                                        }};
                                        kind = "nihil";
                                        location = "eius";
                                        rrdatas = new String[]{{
                                            add("corporis"),
                                            add("perferendis"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("amet"),
                                        }};
                                    }}),
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "nihil";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "dolore";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "maiores";
                                                    port = "ipsam";
                                                    project = "dicta";
                                                    region = "hic";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "praesentium";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "consequatur";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                                    networkUrl = "tempora";
                                                    port = "quo";
                                                    project = "dolor";
                                                    region = "sunt";
                                                }}),
                                            }};
                                        }};
                                        kind = "omnis";
                                        location = "quam";
                                        rrdatas = new String[]{{
                                            add("dicta"),
                                            add("excepturi"),
                                            add("consectetur"),
                                            add("deserunt"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("incidunt"),
                                        }};
                                    }}),
                                }};
                                kind = "corporis";
                            }};;
                            kind = "quaerat";
                            primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                        ipAddress = "ducimus";
                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                        kind = "excepturi";
                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                        networkUrl = "corrupti";
                                        port = "nihil";
                                        project = "eius";
                                        region = "placeat";
                                    }}),
                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                        ipAddress = "fugit";
                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                        kind = "ipsam";
                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4ILB;
                                        networkUrl = "porro";
                                        port = "labore";
                                        project = "perspiciatis";
                                        region = "ducimus";
                                    }}),
                                }};
                            }};;
                            trickleTraffic = 1818.73;
                        }};;
                        wrr = new RRSetRoutingPolicyWrrPolicy() {{
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ratione";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "iure";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "cum";
                                                port = "fugiat";
                                                project = "rem";
                                                region = "voluptatibus";
                                            }}),
                                        }};
                                    }};
                                    kind = "officiis";
                                    rrdatas = new String[]{{
                                        add("repellendus"),
                                        add("aut"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("libero"),
                                    }};
                                    weight = 5684.19;
                                }}),
                            }};
                            kind = "odio";
                        }};;
                    }};;
                    rrdatas = new String[]{{
                        add("officiis"),
                        add("delectus"),
                        add("magni"),
                    }};
                    signatureRrdatas = new String[]{{
                        add("velit"),
                    }};
                    ttl = 531104;
                    type = "nihil";
                }};;
                accessToken = "neque";
                alt = AltEnum.JSON;
                callback = "eaque";
                clientOperationId = "corporis";
                fields = "cupiditate";
                key = "aut";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "quo";
                uploadProtocol = "architecto";
            }};            

            DnsResourceRecordSetsPatchResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsPatch(req, new DnsResourceRecordSetsPatchSecurity() {{
                option1 = new DnsResourceRecordSetsPatchSecurityOption1("voluptatem", "perspiciatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resourceRecordSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
