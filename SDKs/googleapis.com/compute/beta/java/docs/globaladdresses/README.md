# globalAddresses

### Available Operations

* [computeGlobalAddressesDelete](#computeglobaladdressesdelete) - Deletes the specified address resource.
* [computeGlobalAddressesGet](#computeglobaladdressesget) - Returns the specified address resource.
* [computeGlobalAddressesInsert](#computeglobaladdressesinsert) - Creates an address resource in the specified project by using the data included in the request.
* [computeGlobalAddressesList](#computeglobaladdresseslist) - Retrieves a list of global addresses.
* [computeGlobalAddressesMove](#computeglobaladdressesmove) - Moves the specified address resource from one project to another project.
* [computeGlobalAddressesSetLabels](#computeglobaladdressessetlabels) - Sets the labels on a GlobalAddress. To learn more about labels, read the Labeling Resources documentation.
* [computeGlobalAddressesTestIamPermissions](#computeglobaladdressestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeGlobalAddressesDelete

Deletes the specified address resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalAddressesDeleteRequest req = new ComputeGlobalAddressesDeleteRequest("expedita", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "vitae";
                fields = "quos";
                key = "atque";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "sunt";
                requestId = "asperiores";
                uploadType = "corporis";
                uploadProtocol = "vel";
                userIp = "accusamus";
            }};            

            ComputeGlobalAddressesDeleteResponse res = sdk.globalAddresses.computeGlobalAddressesDelete(req, new ComputeGlobalAddressesDeleteSecurity() {{
                option1 = new ComputeGlobalAddressesDeleteSecurityOption1("totam", "ipsam") {{
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

## computeGlobalAddressesGet

Returns the specified address resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesGetRequest;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesGetResponse;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesGetSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalAddressesGetRequest req = new ComputeGlobalAddressesGetRequest("at", "culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "officiis";
                key = "mollitia";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "voluptas";
                uploadProtocol = "et";
                userIp = "odio";
            }};            

            ComputeGlobalAddressesGetResponse res = sdk.globalAddresses.computeGlobalAddressesGet(req, new ComputeGlobalAddressesGetSecurity() {{
                option1 = new ComputeGlobalAddressesGetSecurityOption1("eligendi", "nesciunt") {{
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

## computeGlobalAddressesInsert

Creates an address resource in the specified project by using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesInsertRequest;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesInsertResponse;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesInsertSecurityOption2;
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

            ComputeGlobalAddressesInsertRequest req = new ComputeGlobalAddressesInsertRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                address = new Address() {{
                    address = "316 Easter Radial";
                    addressType = AddressAddressTypeEnum.UNSPECIFIED_TYPE;
                    creationTimestamp = "sit";
                    description = "architecto";
                    id = "tempore";
                    ipVersion = AddressIpVersionEnum.IPV6;
                    ipv6EndpointType = AddressIpv6EndpointTypeEnum.VM;
                    kind = "corrupti";
                    labelFingerprint = "voluptate";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "temporibus");
                    }};
                    name = "Rosemary Abshire";
                    network = "libero";
                    networkTier = AddressNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                    prefixLength = 723374;
                    purpose = AddressPurposeEnum.SHARED_LOADBALANCER_VIP;
                    region = "quod";
                    selfLink = "modi";
                    status = AddressStatusEnum.IN_USE;
                    subnetwork = "delectus";
                    users = new String[]{{
                        add("nemo"),
                        add("at"),
                        add("magnam"),
                        add("officiis"),
                    }};
                }};;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "labore";
                key = "doloribus";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "minima";
                requestId = "impedit";
                uploadType = "facilis";
                uploadProtocol = "amet";
                userIp = "quis";
            }};            

            ComputeGlobalAddressesInsertResponse res = sdk.globalAddresses.computeGlobalAddressesInsert(req, new ComputeGlobalAddressesInsertSecurity() {{
                option1 = new ComputeGlobalAddressesInsertSecurityOption1("fugiat", "beatae") {{
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

## computeGlobalAddressesList

Retrieves a list of global addresses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesListRequest;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesListResponse;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesListSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalAddressesListRequest req = new ComputeGlobalAddressesListRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "delectus";
                fields = "sunt";
                filter = "repudiandae";
                key = "facere";
                maxResults = 716538L;
                oauthToken = "ducimus";
                orderBy = "atque";
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "nemo";
                returnPartialSuccess = false;
                uploadType = "provident";
                uploadProtocol = "accusamus";
                userIp = "minus";
            }};            

            ComputeGlobalAddressesListResponse res = sdk.globalAddresses.computeGlobalAddressesList(req, new ComputeGlobalAddressesListSecurity() {{
                option1 = new ComputeGlobalAddressesListSecurityOption1("impedit", "minima") {{
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

## computeGlobalAddressesMove

Moves the specified address resource from one project to another project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesMoveRequest;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesMoveResponse;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesMoveSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesMoveSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesMoveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlobalAddressesMoveRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalAddressesMoveRequest req = new ComputeGlobalAddressesMoveRequest("cumque", "rerum") {{
                dollarXgafv = XgafvEnum.TWO;
                globalAddressesMoveRequest = new GlobalAddressesMoveRequest() {{
                    description = "vel";
                    destinationAddress = "doloremque";
                }};;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "impedit";
                fields = "illum";
                key = "ullam";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "perferendis";
                requestId = "soluta";
                uploadType = "animi";
                uploadProtocol = "molestiae";
                userIp = "nesciunt";
            }};            

            ComputeGlobalAddressesMoveResponse res = sdk.globalAddresses.computeGlobalAddressesMove(req, new ComputeGlobalAddressesMoveSecurity() {{
                option1 = new ComputeGlobalAddressesMoveSecurityOption1("quas", "sunt") {{
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

## computeGlobalAddressesSetLabels

Sets the labels on a GlobalAddress. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlobalSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalAddressesSetLabelsRequest req = new ComputeGlobalAddressesSetLabelsRequest("aperiam", "itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "repellat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("tempora", "quaerat");
                        put("magnam", "voluptate");
                        put("magni", "excepturi");
                        put("esse", "cumque");
                    }};
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "illo";
                key = "illum";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "expedita";
                uploadProtocol = "libero";
                userIp = "impedit";
            }};            

            ComputeGlobalAddressesSetLabelsResponse res = sdk.globalAddresses.computeGlobalAddressesSetLabels(req, new ComputeGlobalAddressesSetLabelsSecurity() {{
                option1 = new ComputeGlobalAddressesSetLabelsSecurityOption1("repudiandae", "dolores") {{
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

## computeGlobalAddressesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalAddressesTestIamPermissionsRequest req = new ComputeGlobalAddressesTestIamPermissionsRequest("ut", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("aliquid"),
                        add("blanditiis"),
                    }};
                }};;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                fields = "asperiores";
                key = "exercitationem";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "qui";
                uploadProtocol = "laboriosam";
                userIp = "temporibus";
            }};            

            ComputeGlobalAddressesTestIamPermissionsResponse res = sdk.globalAddresses.computeGlobalAddressesTestIamPermissions(req, new ComputeGlobalAddressesTestIamPermissionsSecurity() {{
                option1 = new ComputeGlobalAddressesTestIamPermissionsSecurityOption1("in", "veritatis") {{
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
