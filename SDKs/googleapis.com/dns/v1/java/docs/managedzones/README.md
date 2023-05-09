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

            DnsManagedZonesCreateRequest req = new DnsManagedZonesCreateRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                managedZone = new ManagedZone() {{
                    cloudLoggingConfig = new ManagedZoneCloudLoggingConfig() {{
                        enableLogging = false;
                        kind = "error";
                    }};;
                    creationTime = "recusandae";
                    description = "a";
                    dnsName = "consectetur";
                    dnssecConfig = new ManagedZoneDnsSecConfig() {{
                        defaultKeySpecs = new org.openapis.openapi.models.shared.DnsKeySpec[]{{
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.ECDSAP384SHA384;
                                keyLength = 824267L;
                                keyType = DnsKeySpecKeyTypeEnum.ZONE_SIGNING;
                                kind = "omnis";
                            }}),
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.ECDSAP384SHA384;
                                keyLength = 487765L;
                                keyType = DnsKeySpecKeyTypeEnum.ZONE_SIGNING;
                                kind = "aut";
                            }}),
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.RSASHA512;
                                keyLength = 606262L;
                                keyType = DnsKeySpecKeyTypeEnum.ZONE_SIGNING;
                                kind = "asperiores";
                            }}),
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.RSASHA256;
                                keyLength = 818101L;
                                keyType = DnsKeySpecKeyTypeEnum.KEY_SIGNING;
                                kind = "quis";
                            }}),
                        }};
                        kind = "in";
                        nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum.NSEC;
                        state = ManagedZoneDnsSecConfigStateEnum.OFF;
                    }};;
                    forwardingConfig = new ManagedZoneForwardingConfig() {{
                        kind = "porro";
                        targetNameServers = new org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTarget[]{{
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "ipsa";
                                ipv6Address = "reiciendis";
                                kind = "labore";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "eos";
                                ipv6Address = "quas";
                                kind = "quasi";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.DEFAULT_;
                                ipv4Address = "praesentium";
                                ipv6Address = "iusto";
                                kind = "fugiat";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.DEFAULT_;
                                ipv4Address = "iure";
                                ipv6Address = "laudantium";
                                kind = "modi";
                            }}),
                        }};
                    }};;
                    id = "magnam";
                    kind = "accusamus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("repudiandae", "quibusdam");
                        put("praesentium", "enim");
                        put("animi", "unde");
                        put("quae", "eum");
                    }};
                    name = "Laverne Hudson";
                    nameServerSet = "quidem";
                    nameServers = new String[]{{
                        add("reiciendis"),
                        add("placeat"),
                        add("dolores"),
                        add("consequatur"),
                    }};
                    peeringConfig = new ManagedZonePeeringConfig() {{
                        kind = "nesciunt";
                        targetNetwork = new ManagedZonePeeringConfigTargetNetwork() {{
                            deactivateTime = "quia";
                            kind = "quidem";
                            networkUrl = "voluptas";
                        }};;
                    }};;
                    privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig() {{
                        gkeClusters = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigGKECluster[]{{
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "laudantium";
                                kind = "dignissimos";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "omnis";
                                kind = "omnis";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "fugit";
                                kind = "dolorem";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "quidem";
                                kind = "molestiae";
                            }}),
                        }};
                        kind = "debitis";
                        networks = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigNetwork[]{{
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "dolor";
                                networkUrl = "ad";
                            }}),
                        }};
                    }};;
                    reverseLookupConfig = new ManagedZoneReverseLookupConfig() {{
                        kind = "atque";
                    }};;
                    serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig() {{
                        kind = "ut";
                        namespace = new ManagedZoneServiceDirectoryConfigNamespace() {{
                            deletionTime = "asperiores";
                            kind = "reprehenderit";
                            namespaceUrl = "deserunt";
                        }};;
                    }};;
                    visibility = ManagedZoneVisibilityEnum.PRIVATE_;
                }};;
                accessToken = "et";
                alt = AltEnum.JSON;
                callback = "impedit";
                clientOperationId = "ex";
                fields = "praesentium";
                key = "natus";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "laudantium";
                uploadProtocol = "aspernatur";
            }};            

            DnsManagedZonesCreateResponse res = sdk.managedZones.dnsManagedZonesCreate(req, new DnsManagedZonesCreateSecurity() {{
                option1 = new DnsManagedZonesCreateSecurityOption1("eligendi", "repudiandae") {{
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

            DnsManagedZonesDeleteRequest req = new DnsManagedZonesDeleteRequest("dicta", "inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "voluptate";
                clientOperationId = "sed";
                fields = "dolorem";
                key = "eaque";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "voluptate";
                uploadProtocol = "voluptate";
            }};            

            DnsManagedZonesDeleteResponse res = sdk.managedZones.dnsManagedZonesDelete(req, new DnsManagedZonesDeleteSecurity() {{
                option1 = new DnsManagedZonesDeleteSecurityOption1("pariatur", "minus") {{
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

            DnsManagedZonesGetRequest req = new DnsManagedZonesGetRequest("a", "fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cupiditate";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                clientOperationId = "omnis";
                fields = "quam";
                key = "exercitationem";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "quis";
                uploadProtocol = "commodi";
            }};            

            DnsManagedZonesGetResponse res = sdk.managedZones.dnsManagedZonesGet(req, new DnsManagedZonesGetSecurity() {{
                option1 = new DnsManagedZonesGetSecurityOption1("vel", "rem") {{
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

            DnsManagedZonesGetIamPolicyRequest req = new DnsManagedZonesGetIamPolicyRequest("aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1GetIamPolicyRequest = new GoogleIamV1GetIamPolicyRequest() {{
                    options = new GoogleIamV1GetPolicyOptions() {{
                        requestedPolicyVersion = 596820;
                    }};;
                }};;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "cumque";
                key = "dolor";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "minus";
                uploadProtocol = "minima";
            }};            

            DnsManagedZonesGetIamPolicyResponse res = sdk.managedZones.dnsManagedZonesGetIamPolicy(req, new DnsManagedZonesGetIamPolicySecurity() {{
                option1 = new DnsManagedZonesGetIamPolicySecurityOption1("a", "beatae") {{
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

            DnsManagedZonesListRequest req = new DnsManagedZonesListRequest("vitae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facere";
                alt = AltEnum.PROTO;
                callback = "laborum";
                dnsName = "dicta";
                fields = "voluptatem";
                key = "odit";
                maxResults = 398847L;
                oauthToken = "pariatur";
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "architecto";
                uploadProtocol = "est";
            }};            

            DnsManagedZonesListResponse res = sdk.managedZones.dnsManagedZonesList(req, new DnsManagedZonesListSecurity() {{
                option1 = new DnsManagedZonesListSecurityOption1("quaerat", "facere") {{
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

            DnsManagedZonesPatchRequest req = new DnsManagedZonesPatchRequest("vitae", "omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                managedZone1 = new ManagedZone() {{
                    cloudLoggingConfig = new ManagedZoneCloudLoggingConfig() {{
                        enableLogging = false;
                        kind = "sapiente";
                    }};;
                    creationTime = "officiis";
                    description = "expedita";
                    dnsName = "quia";
                    dnssecConfig = new ManagedZoneDnsSecConfig() {{
                        defaultKeySpecs = new org.openapis.openapi.models.shared.DnsKeySpec[]{{
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.RSASHA512;
                                keyLength = 558410L;
                                keyType = DnsKeySpecKeyTypeEnum.KEY_SIGNING;
                                kind = "distinctio";
                            }}),
                        }};
                        kind = "placeat";
                        nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum.NSEC3;
                        state = ManagedZoneDnsSecConfigStateEnum.TRANSFER;
                    }};;
                    forwardingConfig = new ManagedZoneForwardingConfig() {{
                        kind = "sit";
                        targetNameServers = new org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTarget[]{{
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "distinctio";
                                ipv6Address = "assumenda";
                                kind = "illum";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "magnam";
                                ipv6Address = "laudantium";
                                kind = "tempora";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.DEFAULT_;
                                ipv4Address = "doloremque";
                                ipv6Address = "corrupti";
                                kind = "reiciendis";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "aliquam";
                                ipv6Address = "repudiandae";
                                kind = "amet";
                            }}),
                        }};
                    }};;
                    id = "natus";
                    kind = "ab";
                    labels = new java.util.HashMap<String, String>() {{
                        put("eum", "rerum");
                        put("placeat", "ab");
                        put("ad", "blanditiis");
                        put("porro", "labore");
                    }};
                    name = "Mario Weber";
                    nameServerSet = "enim";
                    nameServers = new String[]{{
                        add("occaecati"),
                        add("itaque"),
                        add("fuga"),
                    }};
                    peeringConfig = new ManagedZonePeeringConfig() {{
                        kind = "consectetur";
                        targetNetwork = new ManagedZonePeeringConfigTargetNetwork() {{
                            deactivateTime = "modi";
                            kind = "aspernatur";
                            networkUrl = "explicabo";
                        }};;
                    }};;
                    privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig() {{
                        gkeClusters = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigGKECluster[]{{
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "ipsa";
                                kind = "eveniet";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "sint";
                                kind = "nobis";
                            }}),
                        }};
                        kind = "qui";
                        networks = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigNetwork[]{{
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "consequatur";
                                networkUrl = "impedit";
                            }}),
                        }};
                    }};;
                    reverseLookupConfig = new ManagedZoneReverseLookupConfig() {{
                        kind = "recusandae";
                    }};;
                    serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig() {{
                        kind = "voluptate";
                        namespace = new ManagedZoneServiceDirectoryConfigNamespace() {{
                            deletionTime = "deleniti";
                            kind = "est";
                            namespaceUrl = "et";
                        }};;
                    }};;
                    visibility = ManagedZoneVisibilityEnum.PRIVATE_;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "maiores";
                clientOperationId = "quidem";
                fields = "in";
                key = "culpa";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "dicta";
                uploadProtocol = "architecto";
            }};            

            DnsManagedZonesPatchResponse res = sdk.managedZones.dnsManagedZonesPatch(req, new DnsManagedZonesPatchSecurity() {{
                option1 = new DnsManagedZonesPatchSecurityOption1("suscipit", "eligendi") {{
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

            DnsManagedZonesSetIamPolicyRequest req = new DnsManagedZonesSetIamPolicyRequest("officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quaerat"),
                                            add("aut"),
                                            add("natus"),
                                            add("esse"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "deserunt";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new Expr() {{
                                    description = "ipsa";
                                    expression = "debitis";
                                    location = "iste";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("ducimus"),
                                    add("consequuntur"),
                                    add("ipsam"),
                                    add("libero"),
                                }};
                                role = "quia";
                            }}),
                        }};
                        etag = "omnis";
                        version = 120646;
                    }};;
                    updateMask = "qui";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "consequatur";
                key = "fugiat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "hic";
                uploadProtocol = "ullam";
            }};            

            DnsManagedZonesSetIamPolicyResponse res = sdk.managedZones.dnsManagedZonesSetIamPolicy(req, new DnsManagedZonesSetIamPolicySecurity() {{
                option1 = new DnsManagedZonesSetIamPolicySecurityOption1("deserunt", "itaque") {{
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

            DnsManagedZonesTestIamPermissionsRequest req = new DnsManagedZonesTestIamPermissionsRequest("distinctio") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("provident"),
                        add("occaecati"),
                    }};
                }};;
                accessToken = "assumenda";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "vero";
                key = "deleniti";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "repellat";
                uploadProtocol = "atque";
            }};            

            DnsManagedZonesTestIamPermissionsResponse res = sdk.managedZones.dnsManagedZonesTestIamPermissions(req, new DnsManagedZonesTestIamPermissionsSecurity() {{
                option1 = new DnsManagedZonesTestIamPermissionsSecurityOption1("magnam", "perspiciatis") {{
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

            DnsManagedZonesUpdateRequest req = new DnsManagedZonesUpdateRequest("amet", "corrupti") {{
                dollarXgafv = XgafvEnum.ONE;
                managedZone1 = new ManagedZone() {{
                    cloudLoggingConfig = new ManagedZoneCloudLoggingConfig() {{
                        enableLogging = false;
                        kind = "nemo";
                    }};;
                    creationTime = "delectus";
                    description = "illum";
                    dnsName = "porro";
                    dnssecConfig = new ManagedZoneDnsSecConfig() {{
                        defaultKeySpecs = new org.openapis.openapi.models.shared.DnsKeySpec[]{{
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.RSASHA1;
                                keyLength = 763928L;
                                keyType = DnsKeySpecKeyTypeEnum.ZONE_SIGNING;
                                kind = "in";
                            }}),
                            add(new DnsKeySpec() {{
                                algorithm = DnsKeySpecAlgorithmEnum.RSASHA512;
                                keyLength = 805421L;
                                keyType = DnsKeySpecKeyTypeEnum.KEY_SIGNING;
                                kind = "minus";
                            }}),
                        }};
                        kind = "consequuntur";
                        nonExistence = ManagedZoneDnsSecConfigNonExistenceEnum.NSEC3;
                        state = ManagedZoneDnsSecConfigStateEnum.TRANSFER;
                    }};;
                    forwardingConfig = new ManagedZoneForwardingConfig() {{
                        kind = "harum";
                        targetNameServers = new org.openapis.openapi.models.shared.ManagedZoneForwardingConfigNameServerTarget[]{{
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "hic";
                                ipv6Address = "quo";
                                kind = "illo";
                            }}),
                            add(new ManagedZoneForwardingConfigNameServerTarget() {{
                                forwardingPath = ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum.PRIVATE_;
                                ipv4Address = "esse";
                                ipv6Address = "nisi";
                                kind = "explicabo";
                            }}),
                        }};
                    }};;
                    id = "sequi";
                    kind = "alias";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quos", "numquam");
                        put("vitae", "maiores");
                        put("nam", "architecto");
                        put("rerum", "assumenda");
                    }};
                    name = "Connie Weissnat";
                    nameServerSet = "ab";
                    nameServers = new String[]{{
                        add("pariatur"),
                        add("expedita"),
                    }};
                    peeringConfig = new ManagedZonePeeringConfig() {{
                        kind = "autem";
                        targetNetwork = new ManagedZonePeeringConfigTargetNetwork() {{
                            deactivateTime = "tempore";
                            kind = "recusandae";
                            networkUrl = "nostrum";
                        }};;
                    }};;
                    privateVisibilityConfig = new ManagedZonePrivateVisibilityConfig() {{
                        gkeClusters = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigGKECluster[]{{
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "voluptas";
                                kind = "laudantium";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "corporis";
                                kind = "excepturi";
                            }}),
                            add(new ManagedZonePrivateVisibilityConfigGKECluster() {{
                                gkeClusterName = "natus";
                                kind = "deleniti";
                            }}),
                        }};
                        kind = "necessitatibus";
                        networks = new org.openapis.openapi.models.shared.ManagedZonePrivateVisibilityConfigNetwork[]{{
                            add(new ManagedZonePrivateVisibilityConfigNetwork() {{
                                kind = "dolores";
                                networkUrl = "laborum";
                            }}),
                        }};
                    }};;
                    reverseLookupConfig = new ManagedZoneReverseLookupConfig() {{
                        kind = "vero";
                    }};;
                    serviceDirectoryConfig = new ManagedZoneServiceDirectoryConfig() {{
                        kind = "eos";
                        namespace = new ManagedZoneServiceDirectoryConfigNamespace() {{
                            deletionTime = "voluptatem";
                            kind = "temporibus";
                            namespaceUrl = "id";
                        }};;
                    }};;
                    visibility = ManagedZoneVisibilityEnum.PUBLIC_;
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "minus";
                clientOperationId = "sed";
                fields = "nam";
                key = "quia";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "deserunt";
                uploadProtocol = "sed";
            }};            

            DnsManagedZonesUpdateResponse res = sdk.managedZones.dnsManagedZonesUpdate(req, new DnsManagedZonesUpdateSecurity() {{
                option1 = new DnsManagedZonesUpdateSecurityOption1("blanditiis", "sint") {{
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
