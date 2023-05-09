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
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkPiiRequestRequest req = new CreateNetworkPiiRequestRequest("aut") {{
                requestBody = new CreateNetworkPiiRequestRequestBody() {{
                    datasets = new String[]{{
                        add("tempora"),
                        add("saepe"),
                        add("possimus"),
                        add("aliquam"),
                    }};
                    email = "Kariane.Kshlerin@yahoo.com";
                    mac = "nesciunt";
                    smDeviceId = "aspernatur";
                    smUserId = "tenetur";
                    type = CreateNetworkPiiRequestRequestBodyTypeEnum.DELETE;
                    username = "Max_Ritchie46";
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
                .setSecurity(new Security("sit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkPiiRequestRequest req = new DeleteNetworkPiiRequestRequest("pariatur", "iusto");            

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
                .setSecurity(new Security("pariatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiPiiKeysRequest req = new GetNetworkPiiPiiKeysRequest("architecto") {{
                bluetoothMac = "ab";
                email = "Rosalee.Cassin82@yahoo.com";
                imei = "itaque";
                mac = "laboriosam";
                serial = "libero";
                username = "Kristoffer_Schmidt";
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
                .setSecurity(new Security("nobis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiRequestRequest req = new GetNetworkPiiRequestRequest("vitae", "maiores");            

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
                .setSecurity(new Security("facere") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiRequestsRequest req = new GetNetworkPiiRequestsRequest("quae");            

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
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiSmDevicesForKeyRequest req = new GetNetworkPiiSmDevicesForKeyRequest("quisquam") {{
                bluetoothMac = "odit";
                email = "Louvenia59@yahoo.com";
                imei = "repellendus";
                mac = "neque";
                serial = "velit";
                username = "Santino79";
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
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiSmOwnersForKeyRequest req = new GetNetworkPiiSmOwnersForKeyRequest("deserunt") {{
                bluetoothMac = "facere";
                email = "Maryse_Effertz38@yahoo.com";
                imei = "et";
                mac = "expedita";
                serial = "molestiae";
                username = "Elna.Pfannerstill13";
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
