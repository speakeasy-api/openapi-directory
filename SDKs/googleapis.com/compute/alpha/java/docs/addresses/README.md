# addresses

### Available Operations

* [computeAddressesAggregatedList](#computeaddressesaggregatedlist) - Retrieves an aggregated list of addresses.
* [computeAddressesDelete](#computeaddressesdelete) - Deletes the specified address resource.
* [computeAddressesGet](#computeaddressesget) - Returns the specified address resource.
* [computeAddressesInsert](#computeaddressesinsert) - Creates an address resource in the specified project by using the data included in the request.
* [computeAddressesList](#computeaddresseslist) - Retrieves a list of addresses contained within the specified region.
* [computeAddressesMove](#computeaddressesmove) - Moves the specified address resource.
* [computeAddressesSetLabels](#computeaddressessetlabels) - Sets the labels on an Address. To learn more about labels, read the Labeling Resources documentation.
* [computeAddressesTestIamPermissions](#computeaddressestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeAddressesAggregatedList

Retrieves an aggregated list of addresses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAddressesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeAddressesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeAddressesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeAddressesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAddressesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAddressesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAddressesAggregatedListRequest req = new ComputeAddressesAggregatedListRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                fields = "hic";
                filter = "saepe";
                includeAllScopes = false;
                key = "fuga";
                maxResults = 449950L;
                oauthToken = "corporis";
                orderBy = "iste";
                pageToken = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                returnPartialSuccess = false;
                uploadType = "quidem";
                uploadProtocol = "architecto";
                userIp = "ipsa";
            }};            

            ComputeAddressesAggregatedListResponse res = sdk.addresses.computeAddressesAggregatedList(req, new ComputeAddressesAggregatedListSecurity() {{
                option1 = new ComputeAddressesAggregatedListSecurityOption1("reiciendis", "est") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.addressAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeAddressesDelete

Deletes the specified address resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAddressesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeAddressesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeAddressesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeAddressesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAddressesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAddressesDeleteRequest req = new ComputeAddressesDeleteRequest("mollitia", "laborum", "dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                requestId = "excepturi";
                uploadType = "accusantium";
                uploadProtocol = "iure";
                userIp = "culpa";
            }};            

            ComputeAddressesDeleteResponse res = sdk.addresses.computeAddressesDelete(req, new ComputeAddressesDeleteSecurity() {{
                option1 = new ComputeAddressesDeleteSecurityOption1("doloribus", "sapiente") {{
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

## computeAddressesGet

Returns the specified address resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAddressesGetRequest;
import org.openapis.openapi.models.operations.ComputeAddressesGetResponse;
import org.openapis.openapi.models.operations.ComputeAddressesGetSecurity;
import org.openapis.openapi.models.operations.ComputeAddressesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAddressesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAddressesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAddressesGetRequest req = new ComputeAddressesGetRequest("architecto", "mollitia", "dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "occaecati";
                key = "numquam";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "molestiae";
                uploadProtocol = "velit";
                userIp = "error";
            }};            

            ComputeAddressesGetResponse res = sdk.addresses.computeAddressesGet(req, new ComputeAddressesGetSecurity() {{
                option1 = new ComputeAddressesGetSecurityOption1("quia", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.address != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeAddressesInsert

Creates an address resource in the specified project by using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAddressesInsertRequest;
import org.openapis.openapi.models.operations.ComputeAddressesInsertResponse;
import org.openapis.openapi.models.operations.ComputeAddressesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeAddressesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAddressesInsertSecurityOption2;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressAddressTypeEnum;
import org.openapis.openapi.models.shared.AddressIpVersionEnum;
import org.openapis.openapi.models.shared.AddressIpv6EndpointTypeEnum;
import org.openapis.openapi.models.shared.AddressNetworkTierEnum;
import org.openapis.openapi.models.shared.AddressPurposeEnum;
import org.openapis.openapi.models.shared.AddressStatusEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAddressesInsertRequest req = new ComputeAddressesInsertRequest("vitae", "laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                address = new Address() {{
                    address = "17193 Schuster Branch";
                    addressType = AddressAddressTypeEnum.DNS_FORWARDING;
                    creationTimestamp = "error";
                    description = "temporibus";
                    id = "laborum";
                    ipVersion = AddressIpVersionEnum.IPV4;
                    ipv6EndpointType = AddressIpv6EndpointTypeEnum.VM;
                    kind = "voluptatibus";
                    labelFingerprint = "vero";
                    labels = new java.util.HashMap<String, String>() {{
                        put("praesentium", "voluptatibus");
                        put("ipsa", "omnis");
                    }};
                    name = "Ms. Karla Aufderhar";
                    network = "maiores";
                    networkTier = AddressNetworkTierEnum.FIXED_STANDARD;
                    prefixLength = 359444;
                    purpose = AddressPurposeEnum.IPSEC_INTERCONNECT;
                    region = "iusto";
                    selfLink = "dicta";
                    selfLinkWithId = "harum";
                    status = AddressStatusEnum.IN_USE;
                    subnetwork = "accusamus";
                    users = new String[]{{
                        add("repudiandae"),
                        add("quae"),
                    }};
                }};;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "excepturi";
                key = "pariatur";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "praesentium";
                requestId = "rem";
                uploadType = "voluptates";
                uploadProtocol = "quasi";
                userIp = "repudiandae";
            }};            

            ComputeAddressesInsertResponse res = sdk.addresses.computeAddressesInsert(req, new ComputeAddressesInsertSecurity() {{
                option1 = new ComputeAddressesInsertSecurityOption1("sint", "veritatis") {{
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

## computeAddressesList

Retrieves a list of addresses contained within the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAddressesListRequest;
import org.openapis.openapi.models.operations.ComputeAddressesListResponse;
import org.openapis.openapi.models.operations.ComputeAddressesListSecurity;
import org.openapis.openapi.models.operations.ComputeAddressesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAddressesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAddressesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAddressesListRequest req = new ComputeAddressesListRequest("itaque", "incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "explicabo";
                filter = "deserunt";
                key = "distinctio";
                maxResults = 841386L;
                oauthToken = "labore";
                orderBy = "modi";
                pageToken = "qui";
                prettyPrint = false;
                quotaUser = "aliquid";
                returnPartialSuccess = false;
                uploadType = "cupiditate";
                uploadProtocol = "quos";
                userIp = "perferendis";
            }};            

            ComputeAddressesListResponse res = sdk.addresses.computeAddressesList(req, new ComputeAddressesListSecurity() {{
                option1 = new ComputeAddressesListSecurityOption1("magni", "assumenda") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.addressList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeAddressesMove

Moves the specified address resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAddressesMoveRequest;
import org.openapis.openapi.models.operations.ComputeAddressesMoveResponse;
import org.openapis.openapi.models.operations.ComputeAddressesMoveSecurity;
import org.openapis.openapi.models.operations.ComputeAddressesMoveSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAddressesMoveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionAddressesMoveRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAddressesMoveRequest req = new ComputeAddressesMoveRequest("ipsam", "alias", "fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                regionAddressesMoveRequest = new RegionAddressesMoveRequest() {{
                    description = "excepturi";
                    destinationAddress = "tempora";
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "delectus";
                key = "eum";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "eligendi";
                requestId = "sint";
                uploadType = "aliquid";
                uploadProtocol = "provident";
                userIp = "necessitatibus";
            }};            

            ComputeAddressesMoveResponse res = sdk.addresses.computeAddressesMove(req, new ComputeAddressesMoveSecurity() {{
                option1 = new ComputeAddressesMoveSecurityOption1("sint", "officia") {{
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

## computeAddressesSetLabels

Sets the labels on an Address. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAddressesSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeAddressesSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeAddressesSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeAddressesSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAddressesSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAddressesSetLabelsRequest req = new ComputeAddressesSetLabelsRequest("dolor", "debitis", "a") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "in";
                    labels = new java.util.HashMap<String, String>() {{
                        put("illum", "maiores");
                        put("rerum", "dicta");
                    }};
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "ea";
                key = "aliquid";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "accusamus";
                requestId = "non";
                uploadType = "occaecati";
                uploadProtocol = "enim";
                userIp = "accusamus";
            }};            

            ComputeAddressesSetLabelsResponse res = sdk.addresses.computeAddressesSetLabels(req, new ComputeAddressesSetLabelsSecurity() {{
                option1 = new ComputeAddressesSetLabelsSecurityOption1("delectus", "quidem") {{
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

## computeAddressesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeAddressesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeAddressesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeAddressesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeAddressesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeAddressesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeAddressesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeAddressesTestIamPermissionsRequest req = new ComputeAddressesTestIamPermissionsRequest("provident", "nam", "id") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("sapiente"),
                        add("amet"),
                        add("deserunt"),
                    }};
                }};;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "omnis";
                key = "molestiae";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "magnam";
                uploadProtocol = "distinctio";
                userIp = "id";
            }};            

            ComputeAddressesTestIamPermissionsResponse res = sdk.addresses.computeAddressesTestIamPermissions(req, new ComputeAddressesTestIamPermissionsSecurity() {{
                option1 = new ComputeAddressesTestIamPermissionsSecurityOption1("labore", "labore") {{
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
