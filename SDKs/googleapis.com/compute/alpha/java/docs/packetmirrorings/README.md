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

            ComputePacketMirroringsAggregatedListRequest req = new ComputePacketMirroringsAggregatedListRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "distinctio";
                filter = "nulla";
                includeAllScopes = false;
                key = "omnis";
                maxResults = 304045L;
                oauthToken = "numquam";
                orderBy = "velit";
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "eveniet";
                returnPartialSuccess = false;
                uploadType = "ipsa";
                uploadProtocol = "necessitatibus";
                userIp = "neque";
            }};            

            ComputePacketMirroringsAggregatedListResponse res = sdk.packetMirrorings.computePacketMirroringsAggregatedList(req, new ComputePacketMirroringsAggregatedListSecurity() {{
                option1 = new ComputePacketMirroringsAggregatedListSecurityOption1("veritatis", "eos") {{
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

            ComputePacketMirroringsDeleteRequest req = new ComputePacketMirroringsDeleteRequest("aspernatur", "doloremque", "doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "debitis";
                key = "nemo";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "mollitia";
                requestId = "adipisci";
                uploadType = "sed";
                uploadProtocol = "eligendi";
                userIp = "consequatur";
            }};            

            ComputePacketMirroringsDeleteResponse res = sdk.packetMirrorings.computePacketMirroringsDelete(req, new ComputePacketMirroringsDeleteSecurity() {{
                option1 = new ComputePacketMirroringsDeleteSecurityOption1("recusandae", "voluptas") {{
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

            ComputePacketMirroringsGetRequest req = new ComputePacketMirroringsGetRequest("laborum", "exercitationem", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "similique";
                fields = "libero";
                key = "nihil";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "impedit";
                uploadProtocol = "recusandae";
                userIp = "eligendi";
            }};            

            ComputePacketMirroringsGetResponse res = sdk.packetMirrorings.computePacketMirroringsGet(req, new ComputePacketMirroringsGetSecurity() {{
                option1 = new ComputePacketMirroringsGetSecurityOption1("maiores", "in") {{
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

            ComputePacketMirroringsInsertRequest req = new ComputePacketMirroringsInsertRequest("quibusdam", "sed") {{
                dollarXgafv = XgafvEnum.ONE;
                packetMirroring = new PacketMirroring() {{
                    collectorIlb = new PacketMirroringForwardingRuleInfo() {{
                        canonicalUrl = "praesentium";
                        url = "corrupti";
                    }};;
                    creationTimestamp = "quibusdam";
                    description = "ab";
                    enable = PacketMirroringEnableEnum.TRUE;
                    filter = new PacketMirroringFilter() {{
                        ipProtocols = new String[]{{
                            add("dicta"),
                        }};
                        cidrRanges = new String[]{{
                            add("eius"),
                            add("aperiam"),
                            add("minus"),
                            add("iste"),
                        }};
                        direction = PacketMirroringFilterDirectionEnum.INGRESS;
                    }};;
                    id = "occaecati";
                    kind = "nisi";
                    mirroredResources = new PacketMirroringMirroredResourceInfo() {{
                        instances = new org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoInstanceInfo[]{{
                            add(new PacketMirroringMirroredResourceInfoInstanceInfo() {{
                                canonicalUrl = "expedita";
                                url = "aspernatur";
                            }}),
                        }};
                        subnetworks = new org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoSubnetInfo[]{{
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "provident";
                                url = "ab";
                            }}),
                        }};
                        tags = new String[]{{
                            add("quis"),
                            add("voluptatem"),
                            add("saepe"),
                        }};
                    }};;
                    name = "Simon Bahringer";
                    network = new PacketMirroringNetworkInfo() {{
                        canonicalUrl = "reiciendis";
                        url = "velit";
                    }};;
                    priority = 932570L;
                    region = "illo";
                    selfLink = "ex";
                    selfLinkWithId = "laborum";
                }};;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "non";
                key = "culpa";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "animi";
                requestId = "eveniet";
                uploadType = "itaque";
                uploadProtocol = "quos";
                userIp = "quam";
            }};            

            ComputePacketMirroringsInsertResponse res = sdk.packetMirrorings.computePacketMirroringsInsert(req, new ComputePacketMirroringsInsertSecurity() {{
                option1 = new ComputePacketMirroringsInsertSecurityOption1("numquam", "architecto") {{
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

            ComputePacketMirroringsListRequest req = new ComputePacketMirroringsListRequest("laudantium", "assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "eos";
                fields = "amet";
                filter = "voluptate";
                key = "magni";
                maxResults = 556291L;
                oauthToken = "necessitatibus";
                orderBy = "similique";
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "adipisci";
                returnPartialSuccess = false;
                uploadType = "alias";
                uploadProtocol = "voluptatum";
                userIp = "ducimus";
            }};            

            ComputePacketMirroringsListResponse res = sdk.packetMirrorings.computePacketMirroringsList(req, new ComputePacketMirroringsListSecurity() {{
                option1 = new ComputePacketMirroringsListSecurityOption1("maxime", "necessitatibus") {{
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

            ComputePacketMirroringsPatchRequest req = new ComputePacketMirroringsPatchRequest("numquam", "eos", "consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                packetMirroring1 = new PacketMirroring() {{
                    collectorIlb = new PacketMirroringForwardingRuleInfo() {{
                        canonicalUrl = "optio";
                        url = "a";
                    }};;
                    creationTimestamp = "ut";
                    description = "nulla";
                    enable = PacketMirroringEnableEnum.TRUE;
                    filter = new PacketMirroringFilter() {{
                        ipProtocols = new String[]{{
                            add("atque"),
                            add("labore"),
                            add("perferendis"),
                            add("nostrum"),
                        }};
                        cidrRanges = new String[]{{
                            add("quia"),
                            add("consectetur"),
                        }};
                        direction = PacketMirroringFilterDirectionEnum.EGRESS;
                    }};;
                    id = "repellendus";
                    kind = "assumenda";
                    mirroredResources = new PacketMirroringMirroredResourceInfo() {{
                        instances = new org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoInstanceInfo[]{{
                            add(new PacketMirroringMirroredResourceInfoInstanceInfo() {{
                                canonicalUrl = "ducimus";
                                url = "molestias";
                            }}),
                        }};
                        subnetworks = new org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoSubnetInfo[]{{
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "dolores";
                                url = "iusto";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "deleniti";
                                url = "exercitationem";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "porro";
                                url = "explicabo";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "velit";
                                url = "aut";
                            }}),
                        }};
                        tags = new String[]{{
                            add("ullam"),
                            add("dolorum"),
                            add("possimus"),
                        }};
                    }};;
                    name = "Dean Jast MD";
                    network = new PacketMirroringNetworkInfo() {{
                        canonicalUrl = "alias";
                        url = "iure";
                    }};;
                    priority = 899836L;
                    region = "doloremque";
                    selfLink = "voluptatum";
                    selfLinkWithId = "expedita";
                }};;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "quam";
                key = "doloremque";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "nobis";
                uploadType = "voluptas";
                uploadProtocol = "nostrum";
                userIp = "officiis";
            }};            

            ComputePacketMirroringsPatchResponse res = sdk.packetMirrorings.computePacketMirroringsPatch(req, new ComputePacketMirroringsPatchSecurity() {{
                option1 = new ComputePacketMirroringsPatchSecurityOption1("quis", "numquam") {{
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

            ComputePacketMirroringsTestIamPermissionsRequest req = new ComputePacketMirroringsTestIamPermissionsRequest("iste", "corporis", "quia") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("alias"),
                        add("quas"),
                        add("eum"),
                    }};
                }};;
                accessToken = "animi";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "a";
                key = "id";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "animi";
                uploadProtocol = "perferendis";
                userIp = "ullam";
            }};            

            ComputePacketMirroringsTestIamPermissionsResponse res = sdk.packetMirrorings.computePacketMirroringsTestIamPermissions(req, new ComputePacketMirroringsTestIamPermissionsSecurity() {{
                option1 = new ComputePacketMirroringsTestIamPermissionsSecurityOption1("omnis", "nihil") {{
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
