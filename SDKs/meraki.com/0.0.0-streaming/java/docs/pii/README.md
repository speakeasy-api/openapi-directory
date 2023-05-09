# pii

### Available Operations

* [createNetworkPiiRequest](#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [deleteNetworkPiiRequest](#deletenetworkpiirequest) - Delete a restrict processing PII request
* [getNetworkPiiPiiKeys](#getnetworkpiipiikeys) - List the keys required to access Personally Identifiable Information (PII) for a given identifier
* [getNetworkPiiRequest](#getnetworkpiirequest) - Return a PII request
* [getNetworkPiiRequests](#getnetworkpiirequests) - List the PII requests for this network or organization
* [getNetworkPiiSmDevicesForKey](#getnetworkpiismdevicesforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
* [getNetworkPiiSmOwnersForKey](#getnetworkpiismownersforkey) - Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

## createNetworkPiiRequest

Submit a new delete or restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkPiiRequestRequest;
import org.openapis.openapi.models.operations.CreateNetworkPiiRequestRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkPiiRequestRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkPiiRequestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkPiiRequestRequest req = new CreateNetworkPiiRequestRequest("sint") {{
                requestBody = new CreateNetworkPiiRequestRequestBody() {{
                    datasets = new String[]{{
                        add("autem"),
                        add("ipsam"),
                    }};
                    email = "Jordyn_Hermiston73@hotmail.com";
                    mac = "at";
                    smDeviceId = "alias";
                    smUserId = "quia";
                    type = CreateNetworkPiiRequestRequestBodyTypeEnum.RESTRICT_PROCESSING;
                    username = "Markus71";
                }};;
            }};            

            CreateNetworkPiiRequestResponse res = sdk.pii.createNetworkPiiRequest(req);

            if (res.createNetworkPiiRequest201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkPiiRequest

Delete a restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkPiiRequestRequest;
import org.openapis.openapi.models.operations.DeleteNetworkPiiRequestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkPiiRequestRequest req = new DeleteNetworkPiiRequestRequest("eos", "quibusdam");            

            DeleteNetworkPiiRequestResponse res = sdk.pii.deleteNetworkPiiRequest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkPiiPiiKeys

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiPiiKeysRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiPiiKeysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiPiiKeysRequest req = new GetNetworkPiiPiiKeysRequest("praesentium") {{
                bluetoothMac = "odit";
                email = "Florine.Mraz92@gmail.com";
                imei = "similique";
                mac = "ut";
                serial = "quidem";
                username = "Euna.Breitenberg";
            }};            

            GetNetworkPiiPiiKeysResponse res = sdk.pii.getNetworkPiiPiiKeys(req);

            if (res.getNetworkPiiPiiKeys200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkPiiRequest

Return a PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiRequestRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiRequestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiRequestRequest req = new GetNetworkPiiRequestRequest("cupiditate", "fugit");            

            GetNetworkPiiRequestResponse res = sdk.pii.getNetworkPiiRequest(req);

            if (res.getNetworkPiiRequest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkPiiRequests

List the PII requests for this network or organization

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiRequestsRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiRequestsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiRequestsRequest req = new GetNetworkPiiRequestsRequest("numquam");            

            GetNetworkPiiRequestsResponse res = sdk.pii.getNetworkPiiRequests(req);

            if (res.getNetworkPiiRequests200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkPiiSmDevicesForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiSmDevicesForKeyRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiSmDevicesForKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiSmDevicesForKeyRequest req = new GetNetworkPiiSmDevicesForKeyRequest("at") {{
                bluetoothMac = "officia";
                email = "Noemie.Tromp@yahoo.com";
                imei = "expedita";
                mac = "voluptatum";
                serial = "cupiditate";
                username = "Erich20";
            }};            

            GetNetworkPiiSmDevicesForKeyResponse res = sdk.pii.getNetworkPiiSmDevicesForKey(req);

            if (res.getNetworkPiiSmDevicesForKey200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkPiiSmOwnersForKey

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkPiiSmOwnersForKeyRequest;
import org.openapis.openapi.models.operations.GetNetworkPiiSmOwnersForKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiSmOwnersForKeyRequest req = new GetNetworkPiiSmOwnersForKeyRequest("minus") {{
                bluetoothMac = "eum";
                email = "Flo_Gusikowski73@gmail.com";
                imei = "aperiam";
                mac = "libero";
                serial = "ratione";
                username = "Effie.Lebsack";
            }};            

            GetNetworkPiiSmOwnersForKeyResponse res = sdk.pii.getNetworkPiiSmOwnersForKey(req);

            if (res.getNetworkPiiSmOwnersForKey200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
