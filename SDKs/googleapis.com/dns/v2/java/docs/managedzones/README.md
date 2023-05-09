# managedZones

### Available Operations

* [dnsManagedZonesCreate](#dnsmanagedzonescreate) - Creates a new ManagedZone.
* [dnsManagedZonesDelete](#dnsmanagedzonesdelete) - Deletes a previously created ManagedZone.
* [dnsManagedZonesGet](#dnsmanagedzonesget) - Fetches the representation of an existing ManagedZone.
* [dnsManagedZonesGetIamPolicy](#dnsmanagedzonesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [dnsManagedZonesList](#dnsmanagedzoneslist) - Enumerates ManagedZones that have been created but not yet deleted.
* [dnsManagedZonesPatch](#dnsmanagedzonespatch) - Applies a partial update to an existing ManagedZone.
* [dnsManagedZonesSetIamPolicy](#dnsmanagedzonessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [dnsManagedZonesTestIamPermissions](#dnsmanagedzonestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [dnsManagedZonesUpdate](#dnsmanagedzonesupdate) - Updates an existing ManagedZone.

## dnsManagedZonesCreate

Creates a new ManagedZone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsManagedZonesCreateRequest;
import org.openapis.openapi.models.operations.DnsManagedZonesCreateResponse;
import org.openapis.openapi.models.operations.DnsManagedZonesCreateSecurity;
import org.openapis.openapi.models.operations.DnsManagedZonesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DnsManagedZonesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DnsKeySpec;
import org.openapis.openapi.models.shared.DnsKeySpecAlgorithmEnum;
import org.openapis.openapi.models.shared.DnsKeySpecKeyTypeEnum;
import org.openapis.openapi.models.shared.ManagedZone;
import org.openapis.openapi.models.shared.ManagedZoneCloudLoggingConfig;
import org.openapis.openapi.models.shared.ManagedZoneDnsSecConfig;
import org.openapis.openapi.models.shared.ManagedZoneDnsSecConfigNonExistenceEnum;
import org.openapis.openapi.models.shared.ManagedZoneDnsSecConfigStateEnum;
import org.openapis.openapi.models.shared.ManagedZoneForwardingConfig;
import org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTarget;
import org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum;
import org.openapis.openapi.models.shared.ManagedZonePeeringConfig;
import org.openapis.openapi.models.shared.ManagedZonePeeringConfigTargetNetwork;
import org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfig;
import org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigGKECluster;
import org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigNetwork;
import org.openapis.openapi.models.shared.ManagedZoneReverseLookupConfig;
import org.openapis.openapi.models.shared.ManagedZoneServiceDirectoryConfig;
import org.openapis.openapi.models.shared.ManagedZoneServiceDirectoryConfigNamespace;
import org.openapis.openapi.models.shared.ManagedZoneVisibilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsManagedZonesCreateRequest req = new DnsManagedZonesCreateRequest("a", "laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                managedZone = new ManagedZone() {{
                    cloudLoggingConfig = new ManagedZoneCloudLoggingConfig() {{
                        enableLogging = false;
                        kind = "quod";
                    }};;
                    creationTime = "a";
                    description = "qui";
                    dnsName = "accusantium";
                    dnssecConfig = new ManagedZoneDnsSecConfig() {{
                        defaultKeySpecs = new org.openapis.openapi.models.shared.DnsKeySpec[]{{
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.RSASHA512;
                                keyLength = 519985L;
                                keyType = DnsKeySpecKeyTypeEnum.ZONE_SIGNING;
                                kind = "voluptate";
                            }}),
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.RSASHA512;
                                keyLength = 799830L;
                                keyType = DnsKeySpecKeyTypeEnum.KEY_SIGNING;
                                kind = "sapiente";
                            }}),
                        }};
                        kind = "reiciendis";
                        nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum.NSEC3;
                        state = ManagedZoneDnsSecConfigStateEnum.ON;
                    }};;
                    forwardingConfig = new ManagedZoneForwardingConfig() {{
                        kind = "inventore";
                        targetNameServers = new org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTarget[]{{
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "fuga";
                                ipv6Address = "ab";
                                kind = "ex";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.DEFAULT_;
                                ipv4Address = "maiores";
                                ipv6Address = "sed";
                                kind = "animi";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.DEFAULT_;
                                ipv4Address = "eligendi";
                                ipv6Address = "voluptatum";
                                kind = "perferendis";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "omnis";
                                ipv6Address = "nihil";
                                kind = "tenetur";
                            }}),
                        }};
                    }};;
                    id = "sapiente";
                    kind = "velit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("non", "optio");
                    }};
                    name = "Wilfred West";
                    nameServerSet = "esse";
                    nameServers = new String[]{{
                        add("perspiciatis"),
                        add("voluptates"),
                        add("eum"),
                    }};
                    peeringConfig = new ManagedZonePeeringConfig() {{
                        kind = "quasi";
                        targetNetwork = new ManagedZonePeeringConfigTargetNetwork() {{
                            deactivateTime = "quas";
                            kind = "odio";
                            networkUrl = "commodi";
                        }};;
                    }};;
                    privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig() {{
                        gkeClusters = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigGKECluster[]{{
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "aliquid";
                                kind = "mollitia";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "quidem";
                                kind = "explicabo";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "et";
                                kind = "nulla";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "magni";
                                kind = "natus";
                            }}),
                        }};
                        kind = "illum";
                        networks = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigNetwork[]{{
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "impedit";
                                networkUrl = "unde";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "ut";
                                networkUrl = "facere";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "voluptas";
                                networkUrl = "doloribus";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "recusandae";
                                networkUrl = "quisquam";
                            }}),
                        }};
                    }};;
                    reverseLookupConfig = new ManagedZoneReverseLookupConfig() {{
                        kind = "facere";
                    }};;
                    serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig() {{
                        kind = "dignissimos";
                        namespace = new ManagedZoneServiceDirectoryConfigNamespace() {{
                            deletionTime = "iste";
                            kind = "provident";
                            namespaceUrl = "dolor";
                        }};;
                    }};;
                    visibility = ManagedZoneVisibilityEnum.PRIVATE_;
                }};;
                accessToken = "aperiam";
                alt = AltEnum.JSON;
                callback = "eum";
                clientOperationId = "laboriosam";
                fields = "laborum";
                key = "autem";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "fugiat";
                uploadProtocol = "doloremque";
            }};            

            DnsManagedZonesCreateResponse res = sdk.managedZones.dnsManagedZonesCreate(req, new DnsManagedZonesCreateSecurity() {{
                option1 = new DnsManagedZonesCreateSecurityOption1("voluptatem", "alias") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.managedZone != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsManagedZonesDelete

Deletes a previously created ManagedZone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsManagedZonesDeleteRequest;
import org.openapis.openapi.models.operations.DnsManagedZonesDeleteResponse;
import org.openapis.openapi.models.operations.DnsManagedZonesDeleteSecurity;
import org.openapis.openapi.models.operations.DnsManagedZonesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DnsManagedZonesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsManagedZonesDeleteRequest req = new DnsManagedZonesDeleteRequest("velit", "ullam", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ratione";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                clientOperationId = "recusandae";
                fields = "cumque";
                key = "doloremque";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "maiores";
                uploadProtocol = "est";
            }};            

            DnsManagedZonesDeleteResponse res = sdk.managedZones.dnsManagedZonesDelete(req, new DnsManagedZonesDeleteSecurity() {{
                option1 = new DnsManagedZonesDeleteSecurityOption1("fugit", "veritatis") {{
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

## dnsManagedZonesGet

Fetches the representation of an existing ManagedZone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsManagedZonesGetRequest;
import org.openapis.openapi.models.operations.DnsManagedZonesGetResponse;
import org.openapis.openapi.models.operations.DnsManagedZonesGetSecurity;
import org.openapis.openapi.models.operations.DnsManagedZonesGetSecurityOption1;
import org.openapis.openapi.models.operations.DnsManagedZonesGetSecurityOption2;
import org.openapis.openapi.models.operations.DnsManagedZonesGetSecurityOption3;
import org.openapis.openapi.models.operations.DnsManagedZonesGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsManagedZonesGetRequest req = new DnsManagedZonesGetRequest("necessitatibus", "iste", "dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "quidem";
                clientOperationId = "non";
                fields = "beatae";
                key = "sunt";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "autem";
                uploadProtocol = "ducimus";
            }};            

            DnsManagedZonesGetResponse res = sdk.managedZones.dnsManagedZonesGet(req, new DnsManagedZonesGetSecurity() {{
                option1 = new DnsManagedZonesGetSecurityOption1("libero", "molestias") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.managedZone != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsManagedZonesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsManagedZonesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.DnsManagedZonesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.DnsManagedZonesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.DnsManagedZonesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.DnsManagedZonesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.DnsManagedZonesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.operations.DnsManagedZonesGetIamPolicySecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GoogleIamV1GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsManagedZonesGetIamPolicyRequest req = new DnsManagedZonesGetIamPolicyRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1GetIamPolicyRequest = new GoogleIamV1GetIamPolicyRequest() {{
                    options = new GoogleIamV1GetPolicyOptions() {{
                        requestedPolicyVersion = 769872;
                    }};;
                }};;
                accessToken = "quos";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "voluptatem";
                key = "non";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "laudantium";
                uploadProtocol = "repellendus";
            }};            

            DnsManagedZonesGetIamPolicyResponse res = sdk.managedZones.dnsManagedZonesGetIamPolicy(req, new DnsManagedZonesGetIamPolicySecurity() {{
                option1 = new DnsManagedZonesGetIamPolicySecurityOption1("commodi", "quibusdam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsManagedZonesList

Enumerates ManagedZones that have been created but not yet deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsManagedZonesListRequest;
import org.openapis.openapi.models.operations.DnsManagedZonesListResponse;
import org.openapis.openapi.models.operations.DnsManagedZonesListSecurity;
import org.openapis.openapi.models.operations.DnsManagedZonesListSecurityOption1;
import org.openapis.openapi.models.operations.DnsManagedZonesListSecurityOption2;
import org.openapis.openapi.models.operations.DnsManagedZonesListSecurityOption3;
import org.openapis.openapi.models.operations.DnsManagedZonesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsManagedZonesListRequest req = new DnsManagedZonesListRequest("consectetur", "voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "earum";
                alt = AltEnum.PROTO;
                callback = "assumenda";
                dnsName = "dolore";
                fields = "enim";
                key = "ullam";
                maxResults = 598193L;
                oauthToken = "alias";
                pageToken = "ex";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "dicta";
                uploadProtocol = "quia";
            }};            

            DnsManagedZonesListResponse res = sdk.managedZones.dnsManagedZonesList(req, new DnsManagedZonesListSecurity() {{
                option1 = new DnsManagedZonesListSecurityOption1("commodi", "neque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.managedZonesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsManagedZonesPatch

Applies a partial update to an existing ManagedZone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsManagedZonesPatchRequest;
import org.openapis.openapi.models.operations.DnsManagedZonesPatchResponse;
import org.openapis.openapi.models.operations.DnsManagedZonesPatchSecurity;
import org.openapis.openapi.models.operations.DnsManagedZonesPatchSecurityOption1;
import org.openapis.openapi.models.operations.DnsManagedZonesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DnsKeySpec;
import org.openapis.openapi.models.shared.DnsKeySpecAlgorithmEnum;
import org.openapis.openapi.models.shared.DnsKeySpecKeyTypeEnum;
import org.openapis.openapi.models.shared.ManagedZone;
import org.openapis.openapi.models.shared.ManagedZoneCloudLoggingConfig;
import org.openapis.openapi.models.shared.ManagedZoneDnsSecConfig;
import org.openapis.openapi.models.shared.ManagedZoneDnsSecConfigNonExistenceEnum;
import org.openapis.openapi.models.shared.ManagedZoneDnsSecConfigStateEnum;
import org.openapis.openapi.models.shared.ManagedZoneForwardingConfig;
import org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTarget;
import org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum;
import org.openapis.openapi.models.shared.ManagedZonePeeringConfig;
import org.openapis.openapi.models.shared.ManagedZonePeeringConfigTargetNetwork;
import org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfig;
import org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigGKECluster;
import org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigNetwork;
import org.openapis.openapi.models.shared.ManagedZoneReverseLookupConfig;
import org.openapis.openapi.models.shared.ManagedZoneServiceDirectoryConfig;
import org.openapis.openapi.models.shared.ManagedZoneServiceDirectoryConfigNamespace;
import org.openapis.openapi.models.shared.ManagedZoneVisibilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsManagedZonesPatchRequest req = new DnsManagedZonesPatchRequest("quibusdam", "numquam", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                managedZone1 = new ManagedZone() {{
                    cloudLoggingConfig = new ManagedZoneCloudLoggingConfig() {{
                        enableLogging = false;
                        kind = "omnis";
                    }};;
                    creationTime = "neque";
                    description = "corporis";
                    dnsName = "quod";
                    dnssecConfig = new ManagedZoneDnsSecConfig() {{
                        defaultKeySpecs = new org.openapis.openapi.models.shared.DnsKeySpec[]{{
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.ECDSAP384_SHA384;
                                keyLength = 570039L;
                                keyType = DnsKeySpecKeyTypeEnum.ZONE_SIGNING;
                                kind = "quos";
                            }}),
                        }};
                        kind = "dicta";
                        nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum.NSEC3;
                        state = ManagedZoneDnsSecConfigStateEnum.OFF;
                    }};;
                    forwardingConfig = new ManagedZoneForwardingConfig() {{
                        kind = "consequatur";
                        targetNameServers = new org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTarget[]{{
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "sequi";
                                ipv6Address = "recusandae";
                                kind = "labore";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.DEFAULT_;
                                ipv4Address = "magni";
                                ipv6Address = "aperiam";
                                kind = "dolores";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "iusto";
                                ipv6Address = "magni";
                                kind = "beatae";
                            }}),
                        }};
                    }};;
                    id = "aliquid";
                    kind = "ad";
                    labels = new java.util.HashMap<String, String>() {{
                        put("vel", "minima");
                        put("sit", "vel");
                    }};
                    name = "Bertha Botsford";
                    nameServerSet = "doloremque";
                    nameServers = new String[]{{
                        add("provident"),
                        add("facere"),
                        add("sed"),
                        add("inventore"),
                    }};
                    peeringConfig = new ManagedZonePeeringConfig() {{
                        kind = "voluptatibus";
                        targetNetwork = new ManagedZonePeeringConfigTargetNetwork() {{
                            deactivateTime = "unde";
                            kind = "deserunt";
                            networkUrl = "repellendus";
                        }};;
                    }};;
                    privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig() {{
                        gkeClusters = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigGKECluster[]{{
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "adipisci";
                                kind = "doloremque";
                            }}),
                        }};
                        kind = "optio";
                        networks = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigNetwork[]{{
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "debitis";
                                networkUrl = "cumque";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "maxime";
                                networkUrl = "et";
                            }}),
                        }};
                    }};;
                    reverseLookupConfig = new ManagedZoneReverseLookupConfig() {{
                        kind = "beatae";
                    }};;
                    serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig() {{
                        kind = "id";
                        namespace = new ManagedZoneServiceDirectoryConfigNamespace() {{
                            deletionTime = "consequatur";
                            kind = "quos";
                            namespaceUrl = "ratione";
                        }};;
                    }};;
                    visibility = ManagedZoneVisibilityEnum.PUBLIC_;
                }};;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "natus";
                clientOperationId = "voluptatem";
                fields = "suscipit";
                key = "laudantium";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "ullam";
                uploadProtocol = "aut";
            }};            

            DnsManagedZonesPatchResponse res = sdk.managedZones.dnsManagedZonesPatch(req, new DnsManagedZonesPatchSecurity() {{
                option1 = new DnsManagedZonesPatchSecurityOption1("quia", "officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsManagedZonesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsManagedZonesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.DnsManagedZonesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.DnsManagedZonesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.DnsManagedZonesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.DnsManagedZonesSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.GoogleIamV1AuditConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.GoogleIamV1Binding;
import org.openapis.openapi.models.shared.GoogleIamV1Policy;
import org.openapis.openapi.models.shared.GoogleIamV1SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsManagedZonesSetIamPolicyRequest req = new DnsManagedZonesSetIamPolicyRequest("quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("esse"),
                                            add("neque"),
                                            add("quidem"),
                                            add("quisquam"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                            add("officiis"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "magni";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("amet"),
                                            add("veritatis"),
                                            add("error"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "numquam";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quibusdam"),
                                            add("earum"),
                                            add("excepturi"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("impedit"),
                                            add("error"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aliquid"),
                                            add("nihil"),
                                            add("facilis"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "incidunt";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolores"),
                                            add("aliquid"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "vel";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new Expr() {{
                                    description = "quos";
                                    expression = "illo";
                                    location = "suscipit";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("impedit"),
                                    add("culpa"),
                                    add("atque"),
                                    add("voluptates"),
                                }};
                                role = "maiores";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new Expr() {{
                                    description = "nemo";
                                    expression = "illo";
                                    location = "doloribus";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("modi"),
                                    add("cumque"),
                                    add("ipsam"),
                                }};
                                role = "occaecati";
                            }}),
                        }};
                        etag = "ipsum";
                        version = 879193;
                    }};;
                    updateMask = "quisquam";
                }};;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "temporibus";
                key = "mollitia";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "ipsa";
                uploadProtocol = "accusamus";
            }};            

            DnsManagedZonesSetIamPolicyResponse res = sdk.managedZones.dnsManagedZonesSetIamPolicy(req, new DnsManagedZonesSetIamPolicySecurity() {{
                option1 = new DnsManagedZonesSetIamPolicySecurityOption1("placeat", "quam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsManagedZonesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsManagedZonesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.DnsManagedZonesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.DnsManagedZonesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.DnsManagedZonesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.DnsManagedZonesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.DnsManagedZonesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.operations.DnsManagedZonesTestIamPermissionsSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsManagedZonesTestIamPermissionsRequest req = new DnsManagedZonesTestIamPermissionsRequest("similique") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("facere"),
                        add("nobis"),
                        add("at"),
                        add("molestias"),
                    }};
                }};;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "incidunt";
                key = "numquam";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "dolore";
                uploadProtocol = "esse";
            }};            

            DnsManagedZonesTestIamPermissionsResponse res = sdk.managedZones.dnsManagedZonesTestIamPermissions(req, new DnsManagedZonesTestIamPermissionsSecurity() {{
                option1 = new DnsManagedZonesTestIamPermissionsSecurityOption1("reiciendis", "iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleIamV1TestIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dnsManagedZonesUpdate

Updates an existing ManagedZone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsManagedZonesUpdateRequest;
import org.openapis.openapi.models.operations.DnsManagedZonesUpdateResponse;
import org.openapis.openapi.models.operations.DnsManagedZonesUpdateSecurity;
import org.openapis.openapi.models.operations.DnsManagedZonesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DnsManagedZonesUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DnsKeySpec;
import org.openapis.openapi.models.shared.DnsKeySpecAlgorithmEnum;
import org.openapis.openapi.models.shared.DnsKeySpecKeyTypeEnum;
import org.openapis.openapi.models.shared.ManagedZone;
import org.openapis.openapi.models.shared.ManagedZoneCloudLoggingConfig;
import org.openapis.openapi.models.shared.ManagedZoneDnsSecConfig;
import org.openapis.openapi.models.shared.ManagedZoneDnsSecConfigNonExistenceEnum;
import org.openapis.openapi.models.shared.ManagedZoneDnsSecConfigStateEnum;
import org.openapis.openapi.models.shared.ManagedZoneForwardingConfig;
import org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTarget;
import org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum;
import org.openapis.openapi.models.shared.ManagedZonePeeringConfig;
import org.openapis.openapi.models.shared.ManagedZonePeeringConfigTargetNetwork;
import org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfig;
import org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigGKECluster;
import org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigNetwork;
import org.openapis.openapi.models.shared.ManagedZoneReverseLookupConfig;
import org.openapis.openapi.models.shared.ManagedZoneServiceDirectoryConfig;
import org.openapis.openapi.models.shared.ManagedZoneServiceDirectoryConfigNamespace;
import org.openapis.openapi.models.shared.ManagedZoneVisibilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsManagedZonesUpdateRequest req = new DnsManagedZonesUpdateRequest("amet", "occaecati", "aut") {{
                dollarXgafv = XgafvEnum.TWO;
                managedZone1 = new ManagedZone() {{
                    cloudLoggingConfig = new ManagedZoneCloudLoggingConfig() {{
                        enableLogging = false;
                        kind = "minima";
                    }};;
                    creationTime = "quos";
                    description = "blanditiis";
                    dnsName = "quas";
                    dnssecConfig = new ManagedZoneDnsSecConfig() {{
                        defaultKeySpecs = new org.openapis.openapi.models.shared.DnsKeySpec[]{{
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.RSASHA512;
                                keyLength = 559248L;
                                keyType = DnsKeySpecKeyTypeEnum.KEY_SIGNING;
                                kind = "vero";
                            }}),
                        }};
                        kind = "fuga";
                        nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum.NSEC3;
                        state = ManagedZoneDnsSecConfigStateEnum.TRANSFER;
                    }};;
                    forwardingConfig = new ManagedZoneForwardingConfig() {{
                        kind = "error";
                        targetNameServers = new org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTarget[]{{
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "consectetur";
                                ipv6Address = "sapiente";
                                kind = "voluptatibus";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "repellendus";
                                ipv6Address = "omnis";
                                kind = "delectus";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.DEFAULT_;
                                ipv4Address = "voluptatibus";
                                ipv6Address = "aut";
                                kind = "quam";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "similique";
                                ipv6Address = "asperiores";
                                kind = "modi";
                            }}),
                        }};
                    }};;
                    id = "facere";
                    kind = "neque";
                    labels = new java.util.HashMap<String, String>() {{
                        put("in", "sed");
                        put("non", "porro");
                    }};
                    name = "Gerardo Beer";
                    nameServerSet = "vero";
                    nameServers = new String[]{{
                        add("quas"),
                    }};
                    peeringConfig = new ManagedZonePeeringConfig() {{
                        kind = "quasi";
                        targetNetwork = new ManagedZonePeeringConfigTargetNetwork() {{
                            deactivateTime = "architecto";
                            kind = "praesentium";
                            networkUrl = "iusto";
                        }};;
                    }};;
                    privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig() {{
                        gkeClusters = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigGKECluster[]{{
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "enim";
                                kind = "iure";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "laudantium";
                                kind = "modi";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "magnam";
                                kind = "accusamus";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "nulla";
                                kind = "repudiandae";
                            }}),
                        }};
                        kind = "quibusdam";
                        networks = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigNetwork[]{{
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "enim";
                                networkUrl = "animi";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "unde";
                                networkUrl = "quae";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "eum";
                                networkUrl = "nostrum";
                            }}),
                        }};
                    }};;
                    reverseLookupConfig = new ManagedZoneReverseLookupConfig() {{
                        kind = "eveniet";
                    }};;
                    serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig() {{
                        kind = "laboriosam";
                        namespace = new ManagedZoneServiceDirectoryConfigNamespace() {{
                            deletionTime = "ratione";
                            kind = "blanditiis";
                            namespaceUrl = "quidem";
                        }};;
                    }};;
                    visibility = ManagedZoneVisibilityEnum.PRIVATE_;
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "dolores";
                clientOperationId = "consequatur";
                fields = "nesciunt";
                key = "quia";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "quo";
                uploadProtocol = "laudantium";
            }};            

            DnsManagedZonesUpdateResponse res = sdk.managedZones.dnsManagedZonesUpdate(req, new DnsManagedZonesUpdateSecurity() {{
                option1 = new DnsManagedZonesUpdateSecurityOption1("dignissimos", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
