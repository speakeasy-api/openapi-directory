# globalAddresses

### Available Operations

* [computeGlobalAddressesDelete](#computeglobaladdressesdelete) - Deletes the specified address resource.
* [computeGlobalAddressesGet](#computeglobaladdressesget) - Returns the specified address resource.
* [computeGlobalAddressesGetOwnerInstance](#computeglobaladdressesgetownerinstance) - Find owner instance from given ip address
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

            ComputeGlobalAddressesDeleteRequest req = new ComputeGlobalAddressesDeleteRequest("et", "autem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "amet";
                key = "deleniti";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "illo";
                requestId = "fugit";
                uploadType = "id";
                uploadProtocol = "tempore";
                userIp = "fugit";
            }};            

            ComputeGlobalAddressesDeleteResponse res = sdk.globalAddresses.computeGlobalAddressesDelete(req, new ComputeGlobalAddressesDeleteSecurity() {{
                option1 = new ComputeGlobalAddressesDeleteSecurityOption1("nostrum", "magni") {{
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

            ComputeGlobalAddressesGetRequest req = new ComputeGlobalAddressesGetRequest("sunt", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "asperiores";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "ipsa";
                key = "esse";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "autem";
                uploadProtocol = "reprehenderit";
                userIp = "quidem";
            }};            

            ComputeGlobalAddressesGetResponse res = sdk.globalAddresses.computeGlobalAddressesGet(req, new ComputeGlobalAddressesGetSecurity() {{
                option1 = new ComputeGlobalAddressesGetSecurityOption1("quas", "officia") {{
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

## computeGlobalAddressesGetOwnerInstance

Find owner instance from given ip address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesGetOwnerInstanceRequest;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesGetOwnerInstanceResponse;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesGetOwnerInstanceSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesGetOwnerInstanceSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesGetOwnerInstanceSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalAddressesGetOwnerInstanceSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalAddressesGetOwnerInstanceRequest req = new ComputeGlobalAddressesGetOwnerInstanceRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.PROTO;
                callback = "sit";
                fields = "quis";
                ipAddress = "hic";
                key = "dolorum";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "at";
                uploadProtocol = "nisi";
                userIp = "quis";
            }};            

            ComputeGlobalAddressesGetOwnerInstanceResponse res = sdk.globalAddresses.computeGlobalAddressesGetOwnerInstance(req, new ComputeGlobalAddressesGetOwnerInstanceSecurity() {{
                option1 = new ComputeGlobalAddressesGetOwnerInstanceSecurityOption1("perferendis", "itaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getOwnerInstanceResponse != null) {
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

            ComputeGlobalAddressesInsertRequest req = new ComputeGlobalAddressesInsertRequest("facere") {{
                dollarXgafv = XgafvEnum.TWO;
                address = new Address() {{
                    address = "16528 Amanda Viaduct";
                    addressType = AddressAddressTypeEnum.UNSPECIFIED_TYPE;
                    creationTimestamp = "perspiciatis";
                    description = "accusantium";
                    id = "debitis";
                    ipVersion = AddressIpVersionEnum.IPV6;
                    ipv6EndpointType = AddressIpv6EndpointTypeEnum.NETLB;
                    kind = "quasi";
                    labelFingerprint = "repellendus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("hic", "labore");
                    }};
                    name = "Brittany Turner";
                    network = "ab";
                    networkTier = AddressNetworkTierEnum.PREMIUM;
                    prefixLength = 391667;
                    purpose = AddressPurposeEnum.VPC_PEERING;
                    region = "sapiente";
                    selfLink = "a";
                    selfLinkWithId = "molestiae";
                    status = AddressStatusEnum.IN_USE;
                    subnetwork = "voluptatibus";
                    users = new String[]{{
                        add("tenetur"),
                        add("nostrum"),
                        add("tempora"),
                        add("maiores"),
                    }};
                }};;
                accessToken = "facere";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "saepe";
                key = "deserunt";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "minima";
                requestId = "dolore";
                uploadType = "sequi";
                uploadProtocol = "sequi";
                userIp = "occaecati";
            }};            

            ComputeGlobalAddressesInsertResponse res = sdk.globalAddresses.computeGlobalAddressesInsert(req, new ComputeGlobalAddressesInsertSecurity() {{
                option1 = new ComputeGlobalAddressesInsertSecurityOption1("voluptatum", "illum") {{
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

            ComputeGlobalAddressesListRequest req = new ComputeGlobalAddressesListRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "dolorum";
                filter = "deleniti";
                key = "assumenda";
                maxResults = 436110L;
                oauthToken = "dolorem";
                orderBy = "neque";
                pageToken = "laudantium";
                prettyPrint = false;
                quotaUser = "quos";
                returnPartialSuccess = false;
                uploadType = "saepe";
                uploadProtocol = "incidunt";
                userIp = "pariatur";
            }};            

            ComputeGlobalAddressesListResponse res = sdk.globalAddresses.computeGlobalAddressesList(req, new ComputeGlobalAddressesListSecurity() {{
                option1 = new ComputeGlobalAddressesListSecurityOption1("deleniti", "aut") {{
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

            ComputeGlobalAddressesMoveRequest req = new ComputeGlobalAddressesMoveRequest("nesciunt", "error") {{
                dollarXgafv = XgafvEnum.TWO;
                globalAddressesMoveRequest = new GlobalAddressesMoveRequest() {{
                    description = "culpa";
                    destinationAddress = "quis";
                }};;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "harum";
                fields = "sunt";
                key = "atque";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "qui";
                requestId = "tempora";
                uploadType = "modi";
                uploadProtocol = "sapiente";
                userIp = "possimus";
            }};            

            ComputeGlobalAddressesMoveResponse res = sdk.globalAddresses.computeGlobalAddressesMove(req, new ComputeGlobalAddressesMoveSecurity() {{
                option1 = new ComputeGlobalAddressesMoveSecurityOption1("nisi", "ab") {{
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

            ComputeGlobalAddressesSetLabelsRequest req = new ComputeGlobalAddressesSetLabelsRequest("omnis", "aut") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "iste";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolorum", "maxime");
                        put("assumenda", "velit");
                        put("voluptatum", "eveniet");
                        put("quibusdam", "doloremque");
                    }};
                }};;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "esse";
                key = "et";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "quam";
                uploadProtocol = "delectus";
                userIp = "quae";
            }};            

            ComputeGlobalAddressesSetLabelsResponse res = sdk.globalAddresses.computeGlobalAddressesSetLabels(req, new ComputeGlobalAddressesSetLabelsSecurity() {{
                option1 = new ComputeGlobalAddressesSetLabelsSecurityOption1("vero", "amet") {{
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

            ComputeGlobalAddressesTestIamPermissionsRequest req = new ComputeGlobalAddressesTestIamPermissionsRequest("culpa", "asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("provident"),
                        add("consequuntur"),
                    }};
                }};;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "aperiam";
                key = "repellendus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "magnam";
                uploadProtocol = "natus";
                userIp = "aperiam";
            }};            

            ComputeGlobalAddressesTestIamPermissionsResponse res = sdk.globalAddresses.computeGlobalAddressesTestIamPermissions(req, new ComputeGlobalAddressesTestIamPermissionsSecurity() {{
                option1 = new ComputeGlobalAddressesTestIamPermissionsSecurityOption1("dicta", "repellat") {{
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
