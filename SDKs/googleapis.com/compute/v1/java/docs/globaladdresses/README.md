# globalAddresses

### Available Operations

* [computeGlobalAddressesDelete](#computeglobaladdressesdelete) - Deletes the specified address resource.
* [computeGlobalAddressesGet](#computeglobaladdressesget) - Returns the specified address resource.
* [computeGlobalAddressesInsert](#computeglobaladdressesinsert) - Creates an address resource in the specified project by using the data included in the request.
* [computeGlobalAddressesList](#computeglobaladdresseslist) - Retrieves a list of global addresses.
* [computeGlobalAddressesMove](#computeglobaladdressesmove) - Moves the specified address resource from one project to another project.
* [computeGlobalAddressesSetLabels](#computeglobaladdressessetlabels) - Sets the labels on a GlobalAddress. To learn more about labels, read the Labeling Resources documentation.

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

            ComputeGlobalAddressesDeleteRequest req = new ComputeGlobalAddressesDeleteRequest("ad", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "dolore";
                fields = "nam";
                key = "officia";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "cupiditate";
                requestId = "illo";
                uploadType = "saepe";
                uploadProtocol = "enim";
                userIp = "eaque";
            }};            

            ComputeGlobalAddressesDeleteResponse res = sdk.globalAddresses.computeGlobalAddressesDelete(req, new ComputeGlobalAddressesDeleteSecurity() {{
                option1 = new ComputeGlobalAddressesDeleteSecurityOption1("ex", "eveniet") {{
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

            ComputeGlobalAddressesGetRequest req = new ComputeGlobalAddressesGetRequest("delectus", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "tempora";
                key = "nam";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "nostrum";
                uploadProtocol = "maiores";
                userIp = "veritatis";
            }};            

            ComputeGlobalAddressesGetResponse res = sdk.globalAddresses.computeGlobalAddressesGet(req, new ComputeGlobalAddressesGetSecurity() {{
                option1 = new ComputeGlobalAddressesGetSecurityOption1("autem", "earum") {{
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

            ComputeGlobalAddressesInsertRequest req = new ComputeGlobalAddressesInsertRequest("minima") {{
                dollarXgafv = XgafvEnum.ONE;
                address = new Address() {{
                    address = "253 Dietrich Spur";
                    addressType = AddressAddressTypeEnum.EXTERNAL;
                    creationTimestamp = "laborum";
                    description = "eligendi";
                    id = "autem";
                    ipVersion = AddressIpVersionEnum.IPV4;
                    ipv6EndpointType = AddressIpv6EndpointTypeEnum.NETLB;
                    kind = "rerum";
                    labelFingerprint = "occaecati";
                    labels = new java.util.HashMap<String, String>() {{
                        put("necessitatibus", "fugit");
                        put("autem", "optio");
                        put("eveniet", "fugiat");
                    }};
                    name = "Tommie Mraz";
                    network = "facilis";
                    networkTier = AddressNetworkTierEnum.STANDARD;
                    prefixLength = 291344;
                    purpose = AddressPurposeEnum.DNS_RESOLVER;
                    region = "accusantium";
                    selfLink = "maiores";
                    status = AddressStatusEnum.RESERVED;
                    subnetwork = "velit";
                    users = new String[]{{
                        add("expedita"),
                        add("hic"),
                        add("blanditiis"),
                    }};
                }};;
                accessToken = "vitae";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "velit";
                key = "molestiae";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "vitae";
                uploadType = "mollitia";
                uploadProtocol = "asperiores";
                userIp = "at";
            }};            

            ComputeGlobalAddressesInsertResponse res = sdk.globalAddresses.computeGlobalAddressesInsert(req, new ComputeGlobalAddressesInsertSecurity() {{
                option1 = new ComputeGlobalAddressesInsertSecurityOption1("quibusdam", "quam") {{
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

            ComputeGlobalAddressesListRequest req = new ComputeGlobalAddressesListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "sunt";
                filter = "blanditiis";
                key = "iste";
                maxResults = 879418L;
                oauthToken = "distinctio";
                orderBy = "incidunt";
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "blanditiis";
                returnPartialSuccess = false;
                uploadType = "ducimus";
                uploadProtocol = "consectetur";
                userIp = "sapiente";
            }};            

            ComputeGlobalAddressesListResponse res = sdk.globalAddresses.computeGlobalAddressesList(req, new ComputeGlobalAddressesListSecurity() {{
                option1 = new ComputeGlobalAddressesListSecurityOption1("quis", "accusantium") {{
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

            ComputeGlobalAddressesMoveRequest req = new ComputeGlobalAddressesMoveRequest("ratione", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                globalAddressesMoveRequest = new GlobalAddressesMoveRequest() {{
                    description = "architecto";
                    destinationAddress = "sint";
                }};;
                accessToken = "possimus";
                alt = AltEnum.PROTO;
                callback = "asperiores";
                fields = "quasi";
                key = "consequuntur";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "nobis";
                requestId = "debitis";
                uploadType = "labore";
                uploadProtocol = "veritatis";
                userIp = "minima";
            }};            

            ComputeGlobalAddressesMoveResponse res = sdk.globalAddresses.computeGlobalAddressesMove(req, new ComputeGlobalAddressesMoveSecurity() {{
                option1 = new ComputeGlobalAddressesMoveSecurityOption1("magni", "itaque") {{
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

            ComputeGlobalAddressesSetLabelsRequest req = new ComputeGlobalAddressesSetLabelsRequest("error", "expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "placeat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptate", "earum");
                        put("minima", "odit");
                        put("odit", "eius");
                        put("error", "vel");
                    }};
                }};;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "ab";
                key = "sunt";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "iusto";
                uploadProtocol = "corrupti";
                userIp = "non";
            }};            

            ComputeGlobalAddressesSetLabelsResponse res = sdk.globalAddresses.computeGlobalAddressesSetLabels(req, new ComputeGlobalAddressesSetLabelsSecurity() {{
                option1 = new ComputeGlobalAddressesSetLabelsSecurityOption1("esse", "vero") {{
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
