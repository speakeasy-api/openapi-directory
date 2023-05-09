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
                    addressType = AddressAddressTypeEnum.EXTERNAL;
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
                    status = AddressStatusEnum.RESERVING;
                    subnetwork = "enim";
                    users = new String[]{{
                        add("commodi"),
                        add("repudiandae"),
                        add("quae"),
                        add("ipsum"),
                    }};
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "pariatur";
                key = "modi";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "rem";
                requestId = "voluptates";
                uploadType = "quasi";
                uploadProtocol = "repudiandae";
                userIp = "sint";
            }};            

            ComputeAddressesInsertResponse res = sdk.addresses.computeAddressesInsert(req, new ComputeAddressesInsertSecurity() {{
                option1 = new ComputeAddressesInsertSecurityOption1("veritatis", "itaque") {{
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

            ComputeAddressesListRequest req = new ComputeAddressesListRequest("incidunt", "enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "deserunt";
                filter = "distinctio";
                key = "quibusdam";
                maxResults = 289406L;
                oauthToken = "modi";
                orderBy = "qui";
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "cupiditate";
                returnPartialSuccess = false;
                uploadType = "quos";
                uploadProtocol = "perferendis";
                userIp = "magni";
            }};            

            ComputeAddressesListResponse res = sdk.addresses.computeAddressesList(req, new ComputeAddressesListSecurity() {{
                option1 = new ComputeAddressesListSecurityOption1("assumenda", "ipsam") {{
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

            ComputeAddressesMoveRequest req = new ComputeAddressesMoveRequest("alias", "fugit", "dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                regionAddressesMoveRequest = new RegionAddressesMoveRequest() {{
                    description = "tempora";
                    destinationAddress = "facilis";
                }};;
                accessToken = "tempore";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "eum";
                key = "non";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                requestId = "aliquid";
                uploadType = "provident";
                uploadProtocol = "necessitatibus";
                userIp = "sint";
            }};            

            ComputeAddressesMoveResponse res = sdk.addresses.computeAddressesMove(req, new ComputeAddressesMoveSecurity() {{
                option1 = new ComputeAddressesMoveSecurityOption1("officia", "dolor") {{
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

            ComputeAddressesSetLabelsRequest req = new ComputeAddressesSetLabelsRequest("debitis", "a", "dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "in";
                    labels = new java.util.HashMap<String, String>() {{
                        put("maiores", "rerum");
                        put("dicta", "magnam");
                        put("cumque", "facere");
                        put("ea", "aliquid");
                    }};
                }};;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "occaecati";
                key = "enim";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "delectus";
                requestId = "quidem";
                uploadType = "provident";
                uploadProtocol = "nam";
                userIp = "id";
            }};            

            ComputeAddressesSetLabelsResponse res = sdk.addresses.computeAddressesSetLabels(req, new ComputeAddressesSetLabelsSecurity() {{
                option1 = new ComputeAddressesSetLabelsSecurityOption1("blanditiis", "deleniti") {{
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

            ComputeAddressesTestIamPermissionsRequest req = new ComputeAddressesTestIamPermissionsRequest("sapiente", "amet", "deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("natus"),
                        add("omnis"),
                    }};
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "nihil";
                fields = "magnam";
                key = "distinctio";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "labore";
                uploadProtocol = "suscipit";
                userIp = "natus";
            }};            

            ComputeAddressesTestIamPermissionsResponse res = sdk.addresses.computeAddressesTestIamPermissions(req, new ComputeAddressesTestIamPermissionsSecurity() {{
                option1 = new ComputeAddressesTestIamPermissionsSecurityOption1("nobis", "eum") {{
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
