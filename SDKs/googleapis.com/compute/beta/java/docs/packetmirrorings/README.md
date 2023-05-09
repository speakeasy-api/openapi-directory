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

            ComputePacketMirroringsAggregatedListRequest req = new ComputePacketMirroringsAggregatedListRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "adipisci";
                fields = "eius";
                filter = "unde";
                includeAllScopes = false;
                key = "nulla";
                maxResults = 338368L;
                oauthToken = "molestias";
                orderBy = "consequuntur";
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "explicabo";
                returnPartialSuccess = false;
                uploadType = "debitis";
                uploadProtocol = "pariatur";
                userIp = "exercitationem";
            }};            

            ComputePacketMirroringsAggregatedListResponse res = sdk.packetMirrorings.computePacketMirroringsAggregatedList(req, new ComputePacketMirroringsAggregatedListSecurity() {{
                option1 = new ComputePacketMirroringsAggregatedListSecurityOption1("sit", "ea") {{
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

            ComputePacketMirroringsDeleteRequest req = new ComputePacketMirroringsDeleteRequest("ea", "numquam", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "repudiandae";
                key = "laborum";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "assumenda";
                requestId = "id";
                uploadType = "eligendi";
                uploadProtocol = "nulla";
                userIp = "magni";
            }};            

            ComputePacketMirroringsDeleteResponse res = sdk.packetMirrorings.computePacketMirroringsDelete(req, new ComputePacketMirroringsDeleteSecurity() {{
                option1 = new ComputePacketMirroringsDeleteSecurityOption1("rerum", "atque") {{
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

            ComputePacketMirroringsGetRequest req = new ComputePacketMirroringsGetRequest("voluptas", "commodi", "maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "at";
                fields = "recusandae";
                key = "praesentium";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "sunt";
                uploadProtocol = "repudiandae";
                userIp = "accusantium";
            }};            

            ComputePacketMirroringsGetResponse res = sdk.packetMirrorings.computePacketMirroringsGet(req, new ComputePacketMirroringsGetSecurity() {{
                option1 = new ComputePacketMirroringsGetSecurityOption1("fuga", "quidem") {{
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

            ComputePacketMirroringsInsertRequest req = new ComputePacketMirroringsInsertRequest("inventore", "eum") {{
                dollarXgafv = XgafvEnum.ONE;
                packetMirroring = new PacketMirroring() {{
                    collectorIlb = new PacketMirroringForwardingRuleInfo() {{
                        canonicalUrl = "a";
                        url = "expedita";
                    }};;
                    creationTimestamp = "ea";
                    description = "et";
                    enable = PacketMirroringEnableEnum.FALSE;
                    filter = new PacketMirroringFilter() {{
                        ipProtocols = new String[]{{
                            add("cupiditate"),
                            add("eius"),
                        }};
                        cidrRanges = new String[]{{
                            add("facilis"),
                            add("libero"),
                            add("eaque"),
                            add("facilis"),
                        }};
                        direction = PacketMirroringFilterDirectionEnum.EGRESS;
                    }};;
                    id = "eaque";
                    kind = "vel";
                    mirroredResources = new PacketMirroringMirroredResourceInfo() {{
                        instances = new org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoInstanceInfo[]{{
                            add(new PacketMirroringMirroredResourceInfoInstanceInfo() {{
                                canonicalUrl = "illo";
                                url = "id";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoInstanceInfo() {{
                                canonicalUrl = "esse";
                                url = "maiores";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoInstanceInfo() {{
                                canonicalUrl = "voluptatum";
                                url = "natus";
                            }}),
                        }};
                        subnetworks = new org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoSubnetInfo[]{{
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "dignissimos";
                                url = "at";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "perspiciatis";
                                url = "itaque";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "cumque";
                                url = "tempora";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "non";
                                url = "sed";
                            }}),
                        }};
                        tags = new String[]{{
                            add("officia"),
                            add("reprehenderit"),
                            add("nesciunt"),
                        }};
                    }};;
                    name = "Shelly Cole";
                    network = new PacketMirroringNetworkInfo() {{
                        canonicalUrl = "quae";
                        url = "amet";
                    }};;
                    priority = 448924L;
                    region = "voluptates";
                    selfLink = "culpa";
                }};;
                accessToken = "cumque";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "quos";
                key = "consequatur";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "nulla";
                requestId = "numquam";
                uploadType = "eveniet";
                uploadProtocol = "dolores";
                userIp = "delectus";
            }};            

            ComputePacketMirroringsInsertResponse res = sdk.packetMirrorings.computePacketMirroringsInsert(req, new ComputePacketMirroringsInsertSecurity() {{
                option1 = new ComputePacketMirroringsInsertSecurityOption1("consectetur", "sint") {{
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

            ComputePacketMirroringsListRequest req = new ComputePacketMirroringsListRequest("necessitatibus", "iure") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.JSON;
                callback = "molestiae";
                fields = "totam";
                filter = "est";
                key = "fuga";
                maxResults = 796929L;
                oauthToken = "ea";
                orderBy = "inventore";
                pageToken = "adipisci";
                prettyPrint = false;
                quotaUser = "tempora";
                returnPartialSuccess = false;
                uploadType = "tempora";
                uploadProtocol = "tempore";
                userIp = "mollitia";
            }};            

            ComputePacketMirroringsListResponse res = sdk.packetMirrorings.computePacketMirroringsList(req, new ComputePacketMirroringsListSecurity() {{
                option1 = new ComputePacketMirroringsListSecurityOption1("quam", "expedita") {{
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

            ComputePacketMirroringsPatchRequest req = new ComputePacketMirroringsPatchRequest("amet", "reiciendis", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                packetMirroring1 = new PacketMirroring() {{
                    collectorIlb = new PacketMirroringForwardingRuleInfo() {{
                        canonicalUrl = "possimus";
                        url = "autem";
                    }};;
                    creationTimestamp = "nesciunt";
                    description = "velit";
                    enable = PacketMirroringEnableEnum.TRUE;
                    filter = new PacketMirroringFilter() {{
                        ipProtocols = new String[]{{
                            add("atque"),
                            add("libero"),
                            add("eum"),
                        }};
                        cidrRanges = new String[]{{
                            add("ratione"),
                        }};
                        direction = PacketMirroringFilterDirectionEnum.BOTH;
                    }};;
                    id = "tempora";
                    kind = "dolor";
                    mirroredResources = new PacketMirroringMirroredResourceInfo() {{
                        instances = new org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoInstanceInfo[]{{
                            add(new PacketMirroringMirroredResourceInfoInstanceInfo() {{
                                canonicalUrl = "autem";
                                url = "quisquam";
                            }}),
                            add(new PacketMirroringMirroredResourceInfoInstanceInfo() {{
                                canonicalUrl = "est";
                                url = "iusto";
                            }}),
                        }};
                        subnetworks = new org.openapis.openapi.models.shared.PacketMirroringMirroredResourceInfoSubnetInfo[]{{
                            add(new PacketMirroringMirroredResourceInfoSubnetInfo() {{
                                canonicalUrl = "illum";
                                url = "atque";
                            }}),
                        }};
                        tags = new String[]{{
                            add("labore"),
                            add("doloribus"),
                            add("veniam"),
                            add("facere"),
                        }};
                    }};;
                    name = "Carol Koelpin";
                    network = new PacketMirroringNetworkInfo() {{
                        canonicalUrl = "non";
                        url = "veritatis";
                    }};;
                    priority = 90009L;
                    region = "quia";
                    selfLink = "sequi";
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "odit";
                key = "repellat";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "impedit";
                requestId = "dolor";
                uploadType = "cupiditate";
                uploadProtocol = "delectus";
                userIp = "corrupti";
            }};            

            ComputePacketMirroringsPatchResponse res = sdk.packetMirrorings.computePacketMirroringsPatch(req, new ComputePacketMirroringsPatchSecurity() {{
                option1 = new ComputePacketMirroringsPatchSecurityOption1("possimus", "eaque") {{
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

            ComputePacketMirroringsTestIamPermissionsRequest req = new ComputePacketMirroringsTestIamPermissionsRequest("voluptas", "dolorum", "possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("laudantium"),
                        add("voluptates"),
                    }};
                }};;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "non";
                key = "ipsum";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "ut";
                uploadProtocol = "id";
                userIp = "quisquam";
            }};            

            ComputePacketMirroringsTestIamPermissionsResponse res = sdk.packetMirrorings.computePacketMirroringsTestIamPermissions(req, new ComputePacketMirroringsTestIamPermissionsSecurity() {{
                option1 = new ComputePacketMirroringsTestIamPermissionsSecurityOption1("veniam", "tempore") {{
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
