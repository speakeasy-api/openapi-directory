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

            DnsResourceRecordSetsCreateRequest req = new DnsResourceRecordSetsCreateRequest("deserunt", "ratione", "ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                resourceRecordSet = new ResourceRecordSet() {{
                    kind = "iste";
                    name = "Irvin Kuphal";
                    routingPolicy = new RRSetRoutingPolicy() {{
                        geo = new RRSetRoutingPolicyGeoPolicy() {{
                            enableFencing = false;
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "omnis";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "qui";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "consequatur";
                                                port = "amet";
                                                project = "consequatur";
                                                region = "fugiat";
                                            }}),
                                        }};
                                    }};
                                    kind = "voluptatum";
                                    location = "velit";
                                    rrdatas = new String[]{{
                                        add("ullam"),
                                        add("deserunt"),
                                        add("itaque"),
                                        add("distinctio"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("dignissimos"),
                                        add("provident"),
                                    }};
                                }}),
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "assumenda";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "odit";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "deleniti";
                                                port = "optio";
                                                project = "quasi";
                                                region = "repellat";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "atque";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "perspiciatis";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "corrupti";
                                                port = "sunt";
                                                project = "nemo";
                                                region = "delectus";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "illum";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "quaerat";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "cumque";
                                                port = "quos";
                                                project = "in";
                                                region = "commodi";
                                            }}),
                                        }};
                                    }};
                                    kind = "maxime";
                                    location = "sed";
                                    rrdatas = new String[]{{
                                        add("consequuntur"),
                                        add("possimus"),
                                        add("delectus"),
                                        add("harum"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("eligendi"),
                                        add("hic"),
                                    }};
                                }}),
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "illo";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "esse";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "explicabo";
                                                port = "sequi";
                                                project = "alias";
                                                region = "reiciendis";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quos";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "vitae";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "nam";
                                                port = "architecto";
                                                project = "rerum";
                                                region = "assumenda";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "eos";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "hic";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "nam";
                                                port = "ab";
                                                project = "magnam";
                                                region = "pariatur";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "expedita";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "tempore";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "nostrum";
                                                port = "officia";
                                                project = "voluptas";
                                                region = "laudantium";
                                            }}),
                                        }};
                                    }};
                                    kind = "corporis";
                                    location = "excepturi";
                                    rrdatas = new String[]{{
                                        add("deleniti"),
                                        add("necessitatibus"),
                                        add("aspernatur"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("laborum"),
                                    }};
                                }}),
                            }};
                            kind = "vero";
                        }};;
                        kind = "eos";
                        primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                            backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                enableFencing = false;
                                items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "id";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "commodi";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "minus";
                                                    port = "sed";
                                                    project = "nam";
                                                    region = "quia";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "iusto";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "deserunt";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "blanditiis";
                                                    port = "sint";
                                                    project = "placeat";
                                                    region = "ullam";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "molestiae";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "rem";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "non";
                                                    port = "recusandae";
                                                    project = "omnis";
                                                    region = "ipsa";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "aliquam";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                    kind = "occaecati";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "magni";
                                                    port = "consequuntur";
                                                    project = "consequuntur";
                                                    region = "eius";
                                                }}),
                                            }};
                                        }};
                                        kind = "commodi";
                                        location = "ipsam";
                                        rrdatas = new String[]{{
                                            add("cupiditate"),
                                            add("modi"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("explicabo"),
                                            add("modi"),
                                        }};
                                    }}),
                                }};
                                kind = "doloremque";
                            }};;
                            kind = "odio";
                            primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                        ipAddress = "voluptatum";
                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                        kind = "delectus";
                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                        networkUrl = "dolorum";
                                        port = "libero";
                                        project = "ratione";
                                        region = "molestiae";
                                    }}),
                                }};
                            }};;
                            trickleTraffic = 7613.31;
                        }};;
                        wrr = new RRSetRoutingPolicyWrrPolicy() {{
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "accusantium";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "eos";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "quis";
                                                port = "vitae";
                                                project = "occaecati";
                                                region = "labore";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "fugiat";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "exercitationem";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "modi";
                                                port = "quasi";
                                                project = "quae";
                                                region = "similique";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "possimus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "suscipit";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "sint";
                                                port = "est";
                                                project = "doloribus";
                                                region = "provident";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "alias";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "fugit";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "quo";
                                                port = "molestiae";
                                                project = "maxime";
                                                region = "facere";
                                            }}),
                                        }};
                                    }};
                                    kind = "impedit";
                                    rrdatas = new String[]{{
                                        add("deleniti"),
                                        add("quasi"),
                                        add("maiores"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("aliquid"),
                                    }};
                                    weight = 5112.52;
                                }}),
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "corrupti";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "facere";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "libero";
                                                port = "nam";
                                                project = "amet";
                                                region = "adipisci";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "minus";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "similique";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "consectetur";
                                                port = "labore";
                                                project = "laudantium";
                                                region = "cumque";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "adipisci";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "nam";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "magnam";
                                                port = "aperiam";
                                                project = "ducimus";
                                                region = "itaque";
                                            }}),
                                        }};
                                    }};
                                    kind = "necessitatibus";
                                    rrdatas = new String[]{{
                                        add("doloribus"),
                                        add("eligendi"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("alias"),
                                        add("impedit"),
                                        add("numquam"),
                                        add("aspernatur"),
                                    }};
                                    weight = 7491.01;
                                }}),
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "voluptatum";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "vitae";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "nisi";
                                                port = "consequuntur";
                                                project = "voluptas";
                                                region = "ratione";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "excepturi";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "est";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "quibusdam";
                                                port = "impedit";
                                                project = "ducimus";
                                                region = "nisi";
                                            }}),
                                        }};
                                    }};
                                    kind = "nisi";
                                    rrdatas = new String[]{{
                                        add("fugit"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("maxime"),
                                        add("maxime"),
                                    }};
                                    weight = 7133.71;
                                }}),
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ea";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "totam";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "est";
                                                port = "inventore";
                                                project = "consequuntur";
                                                region = "repellendus";
                                            }}),
                                        }};
                                    }};
                                    kind = "sit";
                                    rrdatas = new String[]{{
                                        add("enim"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("perspiciatis"),
                                    }};
                                    weight = 1664.01;
                                }}),
                            }};
                            kind = "odio";
                        }};;
                    }};;
                    rrdatas = new String[]{{
                        add("quidem"),
                    }};
                    signatureRrdatas = new String[]{{
                        add("possimus"),
                        add("ipsam"),
                        add("odio"),
                    }};
                    ttl = 143253;
                    type = "aspernatur";
                }};;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                clientOperationId = "sint";
                fields = "exercitationem";
                key = "cum";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "placeat";
                uploadProtocol = "reiciendis";
            }};            

            DnsResourceRecordSetsCreateResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsCreate(req, new DnsResourceRecordSetsCreateSecurity() {{
                option1 = new DnsResourceRecordSetsCreateSecurityOption1("dolores", "dolore") {{
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

            DnsResourceRecordSetsDeleteRequest req = new DnsResourceRecordSetsDeleteRequest("pariatur", "facilis", "cupiditate", "nemo", "natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "dolor";
                clientOperationId = "nostrum";
                fields = "qui";
                key = "tenetur";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "ullam";
                uploadProtocol = "velit";
            }};            

            DnsResourceRecordSetsDeleteResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsDelete(req, new DnsResourceRecordSetsDeleteSecurity() {{
                option1 = new DnsResourceRecordSetsDeleteSecurityOption1("adipisci", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
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

            DnsResourceRecordSetsGetRequest req = new DnsResourceRecordSetsGetRequest("occaecati", "numquam", "fugiat", "molestiae", "quas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "distinctio";
                clientOperationId = "vel";
                fields = "necessitatibus";
                key = "iste";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "cupiditate";
                uploadProtocol = "voluptatibus";
            }};            

            DnsResourceRecordSetsGetResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsGet(req, new DnsResourceRecordSetsGetSecurity() {{
                option1 = new DnsResourceRecordSetsGetSecurityOption1("ullam", "dolorum") {{
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

            DnsResourceRecordSetsListRequest req = new DnsResourceRecordSetsListRequest("soluta", "cum", "in") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "ullam";
                key = "ullam";
                maxResults = 43862L;
                name = "Clarence Lang";
                oauthToken = "qui";
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "eligendi";
                type = "incidunt";
                uploadType = "deleniti";
                uploadProtocol = "dolor";
            }};            

            DnsResourceRecordSetsListResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsList(req, new DnsResourceRecordSetsListSecurity() {{
                option1 = new DnsResourceRecordSetsListSecurityOption1("est", "reiciendis") {{
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

            DnsResourceRecordSetsPatchRequest req = new DnsResourceRecordSetsPatchRequest("possimus", "odit", "consectetur", "inventore", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                resourceRecordSet = new ResourceRecordSet() {{
                    kind = "facilis";
                    name = "Mr. Charlie Hilpert";
                    routingPolicy = new RRSetRoutingPolicy() {{
                        geo = new RRSetRoutingPolicyGeoPolicy() {{
                            enableFencing = false;
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quae";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "asperiores";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "quidem";
                                                port = "asperiores";
                                                project = "eum";
                                                region = "deserunt";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "repudiandae";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "molestias";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "expedita";
                                                port = "quisquam";
                                                project = "praesentium";
                                                region = "facilis";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "assumenda";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "maiores";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "commodi";
                                                port = "vitae";
                                                project = "fugit";
                                                region = "nam";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ex";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "quod";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "alias";
                                                port = "ad";
                                                project = "a";
                                                region = "facere";
                                            }}),
                                        }};
                                    }};
                                    kind = "id";
                                    location = "atque";
                                    rrdatas = new String[]{{
                                        add("aperiam"),
                                        add("dignissimos"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("modi"),
                                        add("fuga"),
                                    }};
                                }}),
                                add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "deleniti";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "sint";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "dolor";
                                                port = "ad";
                                                project = "illum";
                                                region = "sit";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "molestias";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "expedita";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "maiores";
                                                port = "ea";
                                                project = "vel";
                                                region = "delectus";
                                            }}),
                                        }};
                                    }};
                                    kind = "accusamus";
                                    location = "reiciendis";
                                    rrdatas = new String[]{{
                                        add("sed"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("voluptates"),
                                    }};
                                }}),
                            }};
                            kind = "provident";
                        }};;
                        kind = "maiores";
                        primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy() {{
                            backupGeoTargets = new RRSetRoutingPolicyGeoPolicy() {{
                                enableFencing = false;
                                items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem[]{{
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
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
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "repellendus";
                                                    port = "cum";
                                                    project = "quibusdam";
                                                    region = "est";
                                                }}),
                                            }};
                                        }};
                                        kind = "commodi";
                                        location = "similique";
                                        rrdatas = new String[]{{
                                            add("dicta"),
                                            add("recusandae"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("id"),
                                            add("odit"),
                                            add("inventore"),
                                            add("iste"),
                                        }};
                                    }}),
                                    add(new RRSetRoutingPolicyGeoPolicyGeoPolicyItem() {{
                                        healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                            internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "explicabo";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                    kind = "atque";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                    networkUrl = "pariatur";
                                                    port = "aut";
                                                    project = "similique";
                                                    region = "iste";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "eveniet";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "animi";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "voluptate";
                                                    port = "voluptatibus";
                                                    project = "quam";
                                                    region = "nulla";
                                                }}),
                                                add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                    ipAddress = "dolorem";
                                                    ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                    kind = "a";
                                                    loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                    networkUrl = "quaerat";
                                                    port = "excepturi";
                                                    project = "aliquid";
                                                    region = "dolore";
                                                }}),
                                            }};
                                        }};
                                        kind = "voluptatem";
                                        location = "illum";
                                        rrdatas = new String[]{{
                                            add("culpa"),
                                            add("dicta"),
                                        }};
                                        signatureRrdatas = new String[]{{
                                            add("ratione"),
                                            add("vitae"),
                                            add("quisquam"),
                                        }};
                                    }}),
                                }};
                                kind = "atque";
                            }};;
                            kind = "nihil";
                            primaryTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                        ipAddress = "temporibus";
                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                        kind = "ad";
                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                        networkUrl = "suscipit";
                                        port = "reiciendis";
                                        project = "repellendus";
                                        region = "delectus";
                                    }}),
                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                        ipAddress = "ab";
                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                        kind = "possimus";
                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                        networkUrl = "neque";
                                        port = "quam";
                                        project = "animi";
                                        region = "debitis";
                                    }}),
                                    add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                        ipAddress = "voluptatum";
                                        ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                        kind = "quisquam";
                                        loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                        networkUrl = "cumque";
                                        port = "architecto";
                                        project = "sint";
                                        region = "eligendi";
                                    }}),
                                }};
                            }};;
                            trickleTraffic = 5806.89;
                        }};;
                        wrr = new RRSetRoutingPolicyWrrPolicy() {{
                            items = new org.openapis.openapi.models.shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem[]{{
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "officia";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.TCP;
                                                kind = "unde";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "laboriosam";
                                                port = "ducimus";
                                                project = "voluptatum";
                                                region = "sapiente";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "deserunt";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UNDEFINED;
                                                kind = "hic";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "sint";
                                                port = "autem";
                                                project = "iste";
                                                region = "cupiditate";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "ab";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "a";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.NONE;
                                                networkUrl = "voluptatum";
                                                port = "molestias";
                                                project = "quod";
                                                region = "repudiandae";
                                            }}),
                                        }};
                                    }};
                                    kind = "eaque";
                                    rrdatas = new String[]{{
                                        add("autem"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("numquam"),
                                    }};
                                    weight = 2792.32;
                                }}),
                                add(new RRSetRoutingPolicyWrrPolicyWrrPolicyItem() {{
                                    healthCheckedTargets = new RRSetRoutingPolicyHealthCheckTargets() {{
                                        internalLoadBalancers = new org.openapis.openapi.models.shared.RRSetRoutingPolicyLoadBalancerTarget[]{{
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "quos";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "voluptate";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "reprehenderit";
                                                port = "reprehenderit";
                                                project = "animi";
                                                region = "consequatur";
                                            }}),
                                            add(new RRSetRoutingPolicyLoadBalancerTarget() {{
                                                ipAddress = "voluptates";
                                                ipProtocol = RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum.UDP;
                                                kind = "qui";
                                                loadBalancerType = RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum.REGIONAL_L4_ILB;
                                                networkUrl = "exercitationem";
                                                port = "ipsum";
                                                project = "laboriosam";
                                                region = "doloremque";
                                            }}),
                                        }};
                                    }};
                                    kind = "sed";
                                    rrdatas = new String[]{{
                                        add("debitis"),
                                        add("a"),
                                        add("itaque"),
                                    }};
                                    signatureRrdatas = new String[]{{
                                        add("repellat"),
                                        add("cupiditate"),
                                        add("adipisci"),
                                        add("aliquam"),
                                    }};
                                    weight = 717.51;
                                }}),
                            }};
                            kind = "veniam";
                        }};;
                    }};;
                    rrdatas = new String[]{{
                        add("necessitatibus"),
                    }};
                    signatureRrdatas = new String[]{{
                        add("dignissimos"),
                        add("itaque"),
                        add("explicabo"),
                        add("ullam"),
                    }};
                    ttl = 248425;
                    type = "delectus";
                }};;
                accessToken = "incidunt";
                alt = AltEnum.PROTO;
                callback = "sunt";
                clientOperationId = "ullam";
                fields = "quam";
                key = "illum";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "est";
                uploadProtocol = "in";
            }};            

            DnsResourceRecordSetsPatchResponse res = sdk.resourceRecordSets.dnsResourceRecordSetsPatch(req, new DnsResourceRecordSetsPatchSecurity() {{
                option1 = new DnsResourceRecordSetsPatchSecurityOption1("illo", "voluptate") {{
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
