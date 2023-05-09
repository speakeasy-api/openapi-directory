# requests

### Available Operations

* [createNetworkPiiRequest](#createnetworkpiirequest) - Submit a new delete or restrict processing PII request
* [deleteNetworkPiiRequest](#deletenetworkpiirequest) - Delete a restrict processing PII request
* [getNetworkPiiRequest](#getnetworkpiirequest) - Return a PII request
* [getNetworkPiiRequests](#getnetworkpiirequests) - List the PII requests for this network or organization

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
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkPiiRequestRequest req = new CreateNetworkPiiRequestRequest("rem") {{
                requestBody = new CreateNetworkPiiRequestRequestBody() {{
                    datasets = new String[]{{
                        add("dolore"),
                    }};
                    email = "Elwin19@gmail.com";
                    mac = "libero";
                    smDeviceId = "reprehenderit";
                    smUserId = "ad";
                    type = CreateNetworkPiiRequestRequestBodyTypeEnum.DELETE;
                    username = "Pauline.Mayert";
                }};;
            }};            

            CreateNetworkPiiRequestResponse res = sdk.requests.createNetworkPiiRequest(req);

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
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkPiiRequestRequest req = new DeleteNetworkPiiRequestRequest("possimus", "quibusdam");            

            DeleteNetworkPiiRequestResponse res = sdk.requests.deleteNetworkPiiRequest(req);

            if (res.statusCode == 200) {
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
                .setSecurity(new Security("nostrum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiRequestRequest req = new GetNetworkPiiRequestRequest("qui", "architecto");            

            GetNetworkPiiRequestResponse res = sdk.requests.getNetworkPiiRequest(req);

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
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkPiiRequestsRequest req = new GetNetworkPiiRequestsRequest("ducimus");            

            GetNetworkPiiRequestsResponse res = sdk.requests.getNetworkPiiRequests(req);

            if (res.getNetworkPiiRequests200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
