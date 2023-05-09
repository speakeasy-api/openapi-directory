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

            DnsManagedZonesCreateRequest req = new DnsManagedZonesCreateRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                managedZone = new ManagedZone() {{
                    cloudLoggingConfig = new ManagedZoneCloudLoggingConfig() {{
                        enableLogging = false;
                        kind = "ratione";
                    }};;
                    creationTime = "eos";
                    description = "id";
                    dnsName = "modi";
                    dnssecConfig = new ManagedZoneDnsSecConfig() {{
                        defaultKeySpecs = new org.openapis.openapi.models.shared.DnsKeySpec[]{{
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.ECDSAP256SHA256;
                                keyLength = 235567L;
                                keyType = DnsKeySpecKeyTypeEnum.KEY_SIGNING;
                                kind = "eligendi";
                            }}),
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.ECDSAP256SHA256;
                                keyLength = 633825L;
                                keyType = DnsKeySpecKeyTypeEnum.ZONE_SIGNING;
                                kind = "a";
                            }}),
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.RSASHA256;
                                keyLength = 260246L;
                                keyType = DnsKeySpecKeyTypeEnum.KEY_SIGNING;
                                kind = "quia";
                            }}),
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.ECDSAP256SHA256;
                                keyLength = 312121L;
                                keyType = DnsKeySpecKeyTypeEnum.ZONE_SIGNING;
                                kind = "numquam";
                            }}),
                        }};
                        kind = "explicabo";
                        nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum.NSEC3;
                        state = ManagedZoneDnsSecConfigStateEnum.ON;
                    }};;
                    forwardingConfig = new ManagedZoneForwardingConfig() {{
                        kind = "tempore";
                        targetNameServers = new org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTarget[]{{
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "at";
                                ipv6Address = "ipsum";
                                kind = "explicabo";
                            }}),
                        }};
                    }};;
                    id = "nulla";
                    kind = "est";
                    labels = new java.util.HashMap<String, String>() {{
                        put("necessitatibus", "voluptatum");
                        put("quasi", "mollitia");
                        put("voluptatum", "blanditiis");
                        put("sapiente", "ut");
                    }};
                    name = "Clara Goyette";
                    nameServerSet = "ratione";
                    nameServers = new String[]{{
                        add("saepe"),
                        add("quod"),
                        add("nulla"),
                        add("tempora"),
                    }};
                    peeringConfig = new ManagedZonePeeringConfig() {{
                        kind = "quam";
                        targetNetwork = new ManagedZonePeeringConfigTargetNetwork() {{
                            deactivateTime = "consectetur";
                            kind = "nemo";
                            networkUrl = "nesciunt";
                        }};;
                    }};;
                    privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig() {{
                        gkeClusters = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigGKECluster[]{{
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "eum";
                                kind = "dolor";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "placeat";
                                kind = "quos";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "sed";
                                kind = "eaque";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "natus";
                                kind = "ratione";
                            }}),
                        }};
                        kind = "nihil";
                        networks = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigNetwork[]{{
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "deserunt";
                                networkUrl = "id";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "ex";
                                networkUrl = "occaecati";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "optio";
                                networkUrl = "at";
                            }}),
                        }};
                    }};;
                    reverseLookupConfig = new ManagedZoneReverseLookupConfig() {{
                        kind = "ad";
                    }};;
                    serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig() {{
                        kind = "asperiores";
                        namespace = new ManagedZoneServiceDirectoryConfigNamespace() {{
                            deletionTime = "nam";
                            kind = "cumque";
                            namespaceUrl = "sapiente";
                        }};;
                    }};;
                    visibility = ManagedZoneVisibilityEnum.PUBLIC_;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "culpa";
                clientOperationId = "dicta";
                fields = "rem";
                key = "fuga";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "magni";
                uploadProtocol = "eos";
            }};            

            DnsManagedZonesCreateResponse res = sdk.managedZones.dnsManagedZonesCreate(req, new DnsManagedZonesCreateSecurity() {{
                option1 = new DnsManagedZonesCreateSecurityOption1("harum", "voluptatibus") {{
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

            DnsManagedZonesDeleteRequest req = new DnsManagedZonesDeleteRequest("omnis", "quis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "vero";
                clientOperationId = "nisi";
                fields = "praesentium";
                key = "eum";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "possimus";
                uploadProtocol = "libero";
            }};            

            DnsManagedZonesDeleteResponse res = sdk.managedZones.dnsManagedZonesDelete(req, new DnsManagedZonesDeleteSecurity() {{
                option1 = new DnsManagedZonesDeleteSecurityOption1("ullam", "quaerat") {{
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

            DnsManagedZonesGetRequest req = new DnsManagedZonesGetRequest("maiores", "iste") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "odio";
                clientOperationId = "ullam";
                fields = "inventore";
                key = "eligendi";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "necessitatibus";
                uploadProtocol = "rem";
            }};            

            DnsManagedZonesGetResponse res = sdk.managedZones.dnsManagedZonesGet(req, new DnsManagedZonesGetSecurity() {{
                option1 = new DnsManagedZonesGetSecurityOption1("a", "nihil") {{
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

            DnsManagedZonesGetIamPolicyRequest req = new DnsManagedZonesGetIamPolicyRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1GetIamPolicyRequest = new GoogleIamV1GetIamPolicyRequest() {{
                    options = new GoogleIamV1GetPolicyOptions() {{
                        requestedPolicyVersion = 170126;
                    }};;
                }};;
                accessToken = "rerum";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "quod";
                key = "non";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "alias";
                uploadProtocol = "blanditiis";
            }};            

            DnsManagedZonesGetIamPolicyResponse res = sdk.managedZones.dnsManagedZonesGetIamPolicy(req, new DnsManagedZonesGetIamPolicySecurity() {{
                option1 = new DnsManagedZonesGetIamPolicySecurityOption1("modi", "illo") {{
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

            DnsManagedZonesListRequest req = new DnsManagedZonesListRequest("a") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                dnsName = "eius";
                fields = "nostrum";
                key = "ex";
                maxResults = 229197L;
                oauthToken = "voluptate";
                pageToken = "molestias";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsum";
                uploadProtocol = "hic";
            }};            

            DnsManagedZonesListResponse res = sdk.managedZones.dnsManagedZonesList(req, new DnsManagedZonesListSecurity() {{
                option1 = new DnsManagedZonesListSecurityOption1("quidem", "odit") {{
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

            DnsManagedZonesPatchRequest req = new DnsManagedZonesPatchRequest("molestiae", "accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                managedZone1 = new ManagedZone() {{
                    cloudLoggingConfig = new ManagedZoneCloudLoggingConfig() {{
                        enableLogging = false;
                        kind = "inventore";
                    }};;
                    creationTime = "doloribus";
                    description = "praesentium";
                    dnsName = "aliquid";
                    dnssecConfig = new ManagedZoneDnsSecConfig() {{
                        defaultKeySpecs = new org.openapis.openapi.models.shared.DnsKeySpec[]{{
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.RSASHA256;
                                keyLength = 365892L;
                                keyType = DnsKeySpecKeyTypeEnum.KEY_SIGNING;
                                kind = "soluta";
                            }}),
                        }};
                        kind = "ipsum";
                        nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum.NSEC;
                        state = ManagedZoneDnsSecConfigStateEnum.TRANSFER;
                    }};;
                    forwardingConfig = new ManagedZoneForwardingConfig() {{
                        kind = "maxime";
                        targetNameServers = new org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTarget[]{{
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "cupiditate";
                                ipv6Address = "hic";
                                kind = "quis";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "iusto";
                                ipv6Address = "quod";
                                kind = "saepe";
                            }}),
                        }};
                    }};;
                    id = "ad";
                    kind = "magni";
                    labels = new java.util.HashMap<String, String>() {{
                        put("minus", "aliquid");
                        put("quam", "ea");
                    }};
                    name = "Julie Pfannerstill";
                    nameServerSet = "quasi";
                    nameServers = new String[]{{
                        add("officiis"),
                    }};
                    peeringConfig = new ManagedZonePeeringConfig() {{
                        kind = "veniam";
                        targetNetwork = new ManagedZonePeeringConfigTargetNetwork() {{
                            deactivateTime = "quae";
                            kind = "dolore";
                            networkUrl = "in";
                        }};;
                    }};;
                    privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig() {{
                        gkeClusters = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigGKECluster[]{{
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "ut";
                                kind = "cumque";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "quia";
                                kind = "beatae";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "porro";
                                kind = "cumque";
                            }}),
                        }};
                        kind = "distinctio";
                        networks = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigNetwork[]{{
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "fugit";
                                networkUrl = "amet";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "culpa";
                                networkUrl = "facilis";
                            }}),
                        }};
                    }};;
                    reverseLookupConfig = new ManagedZoneReverseLookupConfig() {{
                        kind = "minus";
                    }};;
                    serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig() {{
                        kind = "vero";
                        namespace = new ManagedZoneServiceDirectoryConfigNamespace() {{
                            deletionTime = "impedit";
                            kind = "omnis";
                            namespaceUrl = "et";
                        }};;
                    }};;
                    visibility = ManagedZoneVisibilityEnum.PRIVATE_;
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                clientOperationId = "fugiat";
                fields = "nulla";
                key = "totam";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "esse";
                uploadProtocol = "vitae";
            }};            

            DnsManagedZonesPatchResponse res = sdk.managedZones.dnsManagedZonesPatch(req, new DnsManagedZonesPatchSecurity() {{
                option1 = new DnsManagedZonesPatchSecurityOption1("delectus", "laboriosam") {{
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

            DnsManagedZonesSetIamPolicyRequest req = new DnsManagedZonesSetIamPolicyRequest("minus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sed"),
                                            add("quibusdam"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "voluptate";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eveniet"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("at"),
                                            add("perferendis"),
                                            add("in"),
                                            add("eius"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "consequatur";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("repellat"),
                                            add("voluptatum"),
                                            add("facere"),
                                            add("consequuntur"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptates"),
                                            add("illo"),
                                            add("facere"),
                                            add("fugiat"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("provident"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "tempore";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new Expr() {{
                                    description = "illum";
                                    expression = "mollitia";
                                    location = "ipsa";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("ullam"),
                                    add("in"),
                                    add("doloribus"),
                                    add("id"),
                                }};
                                role = "eum";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new Expr() {{
                                    description = "cumque";
                                    expression = "odio";
                                    location = "atque";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("architecto"),
                                }};
                                role = "ea";
                            }}),
                        }};
                        etag = "accusamus";
                        version = 76873;
                    }};;
                    updateMask = "excepturi";
                }};;
                accessToken = "harum";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "repudiandae";
                key = "minus";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "illo";
                uploadProtocol = "cupiditate";
            }};            

            DnsManagedZonesSetIamPolicyResponse res = sdk.managedZones.dnsManagedZonesSetIamPolicy(req, new DnsManagedZonesSetIamPolicySecurity() {{
                option1 = new DnsManagedZonesSetIamPolicySecurityOption1("veritatis", "aliquam") {{
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

            DnsManagedZonesTestIamPermissionsRequest req = new DnsManagedZonesTestIamPermissionsRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("magnam"),
                    }};
                }};;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "suscipit";
                fields = "eius";
                key = "maiores";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "id";
                uploadProtocol = "officiis";
            }};            

            DnsManagedZonesTestIamPermissionsResponse res = sdk.managedZones.dnsManagedZonesTestIamPermissions(req, new DnsManagedZonesTestIamPermissionsSecurity() {{
                option1 = new DnsManagedZonesTestIamPermissionsSecurityOption1("ab", "voluptate") {{
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

            DnsManagedZonesUpdateRequest req = new DnsManagedZonesUpdateRequest("consequatur", "itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                managedZone1 = new ManagedZone() {{
                    cloudLoggingConfig = new ManagedZoneCloudLoggingConfig() {{
                        enableLogging = false;
                        kind = "voluptatem";
                    }};;
                    creationTime = "dolor";
                    description = "distinctio";
                    dnsName = "quaerat";
                    dnssecConfig = new ManagedZoneDnsSecConfig() {{
                        defaultKeySpecs = new org.openapis.openapi.models.shared.DnsKeySpec[]{{
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.RSASHA256;
                                keyLength = 469567L;
                                keyType = DnsKeySpecKeyTypeEnum.ZONE_SIGNING;
                                kind = "numquam";
                            }}),
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.ECDSAP256SHA256;
                                keyLength = 651504L;
                                keyType = DnsKeySpecKeyTypeEnum.ZONE_SIGNING;
                                kind = "suscipit";
                            }}),
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.RSASHA512;
                                keyLength = 338542L;
                                keyType = DnsKeySpecKeyTypeEnum.KEY_SIGNING;
                                kind = "corporis";
                            }}),
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.ECDSAP256SHA256;
                                keyLength = 411669L;
                                keyType = DnsKeySpecKeyTypeEnum.KEY_SIGNING;
                                kind = "voluptate";
                            }}),
                        }};
                        kind = "nesciunt";
                        nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum.NSEC;
                        state = ManagedZoneDnsSecConfigStateEnum.ON;
                    }};;
                    forwardingConfig = new ManagedZoneForwardingConfig() {{
                        kind = "dolorum";
                        targetNameServers = new org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTarget[]{{
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "porro";
                                ipv6Address = "tempore";
                                kind = "commodi";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.DEFAULT_;
                                ipv4Address = "praesentium";
                                ipv6Address = "magni";
                                kind = "quisquam";
                            }}),
                        }};
                    }};;
                    id = "expedita";
                    kind = "in";
                    labels = new java.util.HashMap<String, String>() {{
                        put("delectus", "blanditiis");
                    }};
                    name = "Roman Shanahan";
                    nameServerSet = "tempore";
                    nameServers = new String[]{{
                        add("earum"),
                        add("occaecati"),
                    }};
                    peeringConfig = new ManagedZonePeeringConfig() {{
                        kind = "dicta";
                        targetNetwork = new ManagedZonePeeringConfigTargetNetwork() {{
                            deactivateTime = "quidem";
                            kind = "omnis";
                            networkUrl = "laborum";
                        }};;
                    }};;
                    privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig() {{
                        gkeClusters = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigGKECluster[]{{
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "a";
                                kind = "dignissimos";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "labore";
                                kind = "laudantium";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "dolore";
                                kind = "aliquid";
                            }}),
                        }};
                        kind = "repudiandae";
                        networks = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigNetwork[]{{
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "quod";
                                networkUrl = "dolorem";
                            }}),
                        }};
                    }};;
                    reverseLookupConfig = new ManagedZoneReverseLookupConfig() {{
                        kind = "neque";
                    }};;
                    serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig() {{
                        kind = "ipsa";
                        namespace = new ManagedZoneServiceDirectoryConfigNamespace() {{
                            deletionTime = "excepturi";
                            kind = "repellendus";
                            namespaceUrl = "soluta";
                        }};;
                    }};;
                    visibility = ManagedZoneVisibilityEnum.PUBLIC_;
                }};;
                accessToken = "ullam";
                alt = AltEnum.JSON;
                callback = "iure";
                clientOperationId = "quibusdam";
                fields = "sint";
                key = "voluptates";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "eligendi";
                uploadProtocol = "fuga";
            }};            

            DnsManagedZonesUpdateResponse res = sdk.managedZones.dnsManagedZonesUpdate(req, new DnsManagedZonesUpdateSecurity() {{
                option1 = new DnsManagedZonesUpdateSecurityOption1("consequatur", "sit") {{
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
