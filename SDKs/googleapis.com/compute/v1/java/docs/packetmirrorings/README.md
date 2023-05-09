# packetMirrorings

### Available Operations

* [computePacketMirroringsAggregatedList](#computepacketmirroringsaggregatedlist) - Retrieves an aggregated list of packetMirrorings.
* [computePacketMirroringsDelete](#computepacketmirroringsdelete) - Deletes the specified PacketMirroring resource.
* [computePacketMirroringsGet](#computepacketmirroringsget) - Returns the specified PacketMirroring resource.
* [computePacketMirroringsInsert](#computepacketmirroringsinsert) - Creates a PacketMirroring resource in the specified project and region using the data included in the request.
* [computePacketMirroringsList](#computepacketmirroringslist) - Retrieves a list of PacketMirroring resources available to the specified project and region.
* [computePacketMirroringsPatch](#computepacketmirroringspatch) - Patches the specified PacketMirroring resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computePacketMirroringsTestIamPermissions](#computepacketmirroringstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computePacketMirroringsAggregatedList

Retrieves an aggregated list of packetMirrorings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePacketMirroringsAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputePacketMirroringsAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputePacketMirroringsAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputePacketMirroringsAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputePacketMirroringsAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputePacketMirroringsAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePacketMirroringsAggregatedListRequest req = new ComputePacketMirroringsAggregatedListRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "a";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "itaque";
                filter = "recusandae";
                includeAllScopes = false;
                key = "dignissimos";
                maxResults = 780917L;
                oauthToken = "consectetur";
                orderBy = "molestias";
                pageToken = "nostrum";
                prettyPrint = false;
                quotaUser = "quo";
                returnPartialSuccess = false;
                uploadType = "in";
                uploadProtocol = "natus";
                userIp = "in";
            }};            

            ComputePacketMirroringsAggregatedListResponse res = sdk.packetMirrorings.computePacketMirroringsAggregatedList(req, new ComputePacketMirroringsAggregatedListSecurity() {{
                option1 = new ComputePacketMirroringsAggregatedListSecurityOption1("consequatur", "officiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.packetMirroringAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computePacketMirroringsDelete

Deletes the specified PacketMirroring resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePacketMirroringsDeleteRequest;
import org.openapis.openapi.models.operations.ComputePacketMirroringsDeleteResponse;
import org.openapis.openapi.models.operations.ComputePacketMirroringsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputePacketMirroringsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputePacketMirroringsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePacketMirroringsDeleteRequest req = new ComputePacketMirroringsDeleteRequest("dicta", "harum", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "impedit";
                key = "earum";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "saepe";
                requestId = "et";
                uploadType = "perspiciatis";
                uploadProtocol = "cum";
                userIp = "excepturi";
            }};            

            ComputePacketMirroringsDeleteResponse res = sdk.packetMirrorings.computePacketMirroringsDelete(req, new ComputePacketMirroringsDeleteSecurity() {{
                option1 = new ComputePacketMirroringsDeleteSecurityOption1("aperiam", "ab") {{
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

## computePacketMirroringsGet

Returns the specified PacketMirroring resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePacketMirroringsGetRequest;
import org.openapis.openapi.models.operations.ComputePacketMirroringsGetResponse;
import org.openapis.openapi.models.operations.ComputePacketMirroringsGetSecurity;
import org.openapis.openapi.models.operations.ComputePacketMirroringsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputePacketMirroringsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputePacketMirroringsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePacketMirroringsGetRequest req = new ComputePacketMirroringsGetRequest("fugit", "impedit", "ut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "dolor";
                key = "dicta";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "vitae";
                uploadProtocol = "magnam";
                userIp = "dignissimos";
            }};            

            ComputePacketMirroringsGetResponse res = sdk.packetMirrorings.computePacketMirroringsGet(req, new ComputePacketMirroringsGetSecurity() {{
                option1 = new ComputePacketMirroringsGetSecurityOption1("in", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.packetMirroring != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computePacketMirroringsInsert

Creates a PacketMirroring resource in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePacketMirroringsInsertRequest;
import org.openapis.openapi.models.operations.ComputePacketMirroringsInsertResponse;
import org.openapis.openapi.models.operations.ComputePacketMirroringsInsertSecurity;
import org.openapis.openapi.models.operations.ComputePacketMirroringsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputePacketMirroringsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PacketMirroring;
import org.openapis.openapi.models.shared.PacketMirroringEnableEnum;
import org.openapis.openapi.models.shared.PacketMirroringFilter;
import org.openapis.openapi.models.shared.PacketMirroringFilterDirectionEnum;
import org.openapis.openapi.models.shared.PacketMirroringForwardingRuleInfo;
import org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfo;
import org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoInstanceInfo;
import org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoSubnetInfo;
import org.openapis.openapi.models.shared.PacketMirroringNetworkInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePacketMirroringsInsertRequest req = new ComputePacketMirroringsInsertRequest("iusto", "quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                packetMirroring = new PacketMirroring() {{
                    collectorIlb = new PacketMirroringForwardingRuleInfo() {{
                        canonicalUrl = "iste";
                        url = "ullam";
                    }};;
                    creationTimestamp = "voluptatibus";
                    description = "esse";
                    enable = PacketMirroringEnableEnum.FALSE;
                    filter = new PacketMirroringFilter() {{
                        ipProtocols = new String[]{{
                            add("fugiat"),
                            add("fuga"),
                            add("tempore"),
                        }};
                        cidrRanges = new String[]{{
                            add("laboriosam"),
                            add("rem"),
                            add("perferendis"),
                            add("eaque"),
                        }};
                        direction = PacketMirroringFilterDirectionEnum.INGRESS;
                    }};;
                    id = "eaque";
                    kind = "quasi";
                    mirroredResources = new PacketMirroringMirroredResourceInfo() {{
                        instances = new org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoInstanceInfo[]{{
                            add(new PacketMirroringMirroredResourceInfoInstanceInfo() {{
                                canonicalUrl = "placeat";
                                url = "tempore";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoInstanceInfo() {{
                                canonicalUrl = "quod";
                                url = "aperiam";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoInstanceInfo() {{
                                canonicalUrl = "ipsum";
                                url = "sunt";
                            }}),
                        }};
                        subnetworks = new org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoSubnetInfo[]{{
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "fugit";
                                url = "minus";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "illo";
                                url = "omnis";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "quibusdam";
                                url = "tempore";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "asperiores";
                                url = "nihil";
                            }}),
                        }};
                        tags = new String[]{{
                            add("et"),
                        }};
                    }};;
                    name = "Kristi Mann";
                    network = new PacketMirroringNetworkInfo() {{
                        canonicalUrl = "maiores";
                        url = "quia";
                    }};;
                    priority = 63345L;
                    region = "ullam";
                    selfLink = "consequuntur";
                }};;
                accessToken = "ratione";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "odio";
                key = "beatae";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "autem";
                requestId = "quaerat";
                uploadType = "aspernatur";
                uploadProtocol = "illo";
                userIp = "reprehenderit";
            }};            

            ComputePacketMirroringsInsertResponse res = sdk.packetMirrorings.computePacketMirroringsInsert(req, new ComputePacketMirroringsInsertSecurity() {{
                option1 = new ComputePacketMirroringsInsertSecurityOption1("culpa", "laboriosam") {{
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

## computePacketMirroringsList

Retrieves a list of PacketMirroring resources available to the specified project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePacketMirroringsListRequest;
import org.openapis.openapi.models.operations.ComputePacketMirroringsListResponse;
import org.openapis.openapi.models.operations.ComputePacketMirroringsListSecurity;
import org.openapis.openapi.models.operations.ComputePacketMirroringsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputePacketMirroringsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputePacketMirroringsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePacketMirroringsListRequest req = new ComputePacketMirroringsListRequest("repudiandae", "ad") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "dolore";
                filter = "dicta";
                key = "facilis";
                maxResults = 583807L;
                oauthToken = "voluptates";
                orderBy = "odit";
                pageToken = "aperiam";
                prettyPrint = false;
                quotaUser = "nostrum";
                returnPartialSuccess = false;
                uploadType = "ipsum";
                uploadProtocol = "est";
                userIp = "earum";
            }};            

            ComputePacketMirroringsListResponse res = sdk.packetMirrorings.computePacketMirroringsList(req, new ComputePacketMirroringsListSecurity() {{
                option1 = new ComputePacketMirroringsListSecurityOption1("quos", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.packetMirroringList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computePacketMirroringsPatch

Patches the specified PacketMirroring resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePacketMirroringsPatchRequest;
import org.openapis.openapi.models.operations.ComputePacketMirroringsPatchResponse;
import org.openapis.openapi.models.operations.ComputePacketMirroringsPatchSecurity;
import org.openapis.openapi.models.operations.ComputePacketMirroringsPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputePacketMirroringsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PacketMirroring;
import org.openapis.openapi.models.shared.PacketMirroringEnableEnum;
import org.openapis.openapi.models.shared.PacketMirroringFilter;
import org.openapis.openapi.models.shared.PacketMirroringFilterDirectionEnum;
import org.openapis.openapi.models.shared.PacketMirroringForwardingRuleInfo;
import org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfo;
import org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoInstanceInfo;
import org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoSubnetInfo;
import org.openapis.openapi.models.shared.PacketMirroringNetworkInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePacketMirroringsPatchRequest req = new ComputePacketMirroringsPatchRequest("nesciunt", "ab", "ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                packetMirroring1 = new PacketMirroring() {{
                    collectorIlb = new PacketMirroringForwardingRuleInfo() {{
                        canonicalUrl = "fugit";
                        url = "nemo";
                    }};;
                    creationTimestamp = "expedita";
                    description = "ad";
                    enable = PacketMirroringEnableEnum.TRUE;
                    filter = new PacketMirroringFilter() {{
                        ipProtocols = new String[]{{
                            add("dolores"),
                        }};
                        cidrRanges = new String[]{{
                            add("iste"),
                        }};
                        direction = PacketMirroringFilterDirectionEnum.BOTH;
                    }};;
                    id = "iusto";
                    kind = "sed";
                    mirroredResources = new PacketMirroringMirroredResourceInfo() {{
                        instances = new org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoInstanceInfo[]{{
                            add(new PacketMirroringMirroredResourceInfoInstanceInfo() {{
                                canonicalUrl = "assumenda";
                                url = "voluptatum";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoInstanceInfo() {{
                                canonicalUrl = "totam";
                                url = "sunt";
                            }}),
                        }};
                        subnetworks = new org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoSubnetInfo[]{{
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "atque";
                                url = "illum";
                            }}),
                        }};
                        tags = new String[]{{
                            add("optio"),
                            add("itaque"),
                            add("laboriosam"),
                        }};
                    }};;
                    name = "Marty Daniel V";
                    network = new PacketMirroringNetworkInfo() {{
                        canonicalUrl = "error";
                        url = "architecto";
                    }};;
                    priority = 705433L;
                    region = "ea";
                    selfLink = "fugiat";
                }};;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "ipsa";
                key = "ipsa";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "sequi";
                requestId = "quisquam";
                uploadType = "esse";
                uploadProtocol = "unde";
                userIp = "natus";
            }};            

            ComputePacketMirroringsPatchResponse res = sdk.packetMirrorings.computePacketMirroringsPatch(req, new ComputePacketMirroringsPatchSecurity() {{
                option1 = new ComputePacketMirroringsPatchSecurityOption1("animi", "eos") {{
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

## computePacketMirroringsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputePacketMirroringsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputePacketMirroringsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputePacketMirroringsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputePacketMirroringsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputePacketMirroringsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputePacketMirroringsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputePacketMirroringsTestIamPermissionsRequest req = new ComputePacketMirroringsTestIamPermissionsRequest("id", "inventore", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("veritatis"),
                        add("sunt"),
                        add("excepturi"),
                    }};
                }};;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "magni";
                key = "labore";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "libero";
                uploadProtocol = "iure";
                userIp = "facilis";
            }};            

            ComputePacketMirroringsTestIamPermissionsResponse res = sdk.packetMirrorings.computePacketMirroringsTestIamPermissions(req, new ComputePacketMirroringsTestIamPermissionsSecurity() {{
                option1 = new ComputePacketMirroringsTestIamPermissionsSecurityOption1("inventore", "eaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
