# identityPsks

### Available Operations

* [createNetworkWirelessSsidIdentityPsk](#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [deleteNetworkWirelessSsidIdentityPsk](#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [getNetworkWirelessSsidIdentityPsk](#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [getNetworkWirelessSsidIdentityPsks](#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [updateNetworkWirelessSsidIdentityPsk](#updatenetworkwirelessssididentitypsk) - Update an Identity PSK

## createNetworkWirelessSsidIdentityPsk

Create an Identity PSK

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkWirelessSsidIdentityPskRequest;
import org.openapis.openapi.models.operations.CreateNetworkWirelessSsidIdentityPskRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkWirelessSsidIdentityPskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkWirelessSsidIdentityPskRequest req = new CreateNetworkWirelessSsidIdentityPskRequest(                new CreateNetworkWirelessSsidIdentityPskRequestBody("omnis", "veniam") {{
                                passphrase = "error";
                            }};, "consequatur", "autem");            

            CreateNetworkWirelessSsidIdentityPskResponse res = sdk.identityPsks.createNetworkWirelessSsidIdentityPsk(req);

            if (res.createNetworkWirelessSsidIdentityPsk201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkWirelessSsidIdentityPsk

Delete an Identity PSK

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkWirelessSsidIdentityPskRequest;
import org.openapis.openapi.models.operations.DeleteNetworkWirelessSsidIdentityPskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkWirelessSsidIdentityPskRequest req = new DeleteNetworkWirelessSsidIdentityPskRequest("dolore", "ex", "totam");            

            DeleteNetworkWirelessSsidIdentityPskResponse res = sdk.identityPsks.deleteNetworkWirelessSsidIdentityPsk(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidIdentityPsk

Return an Identity PSK

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidIdentityPskRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidIdentityPskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidIdentityPskRequest req = new GetNetworkWirelessSsidIdentityPskRequest("ex", "tempore", "autem");            

            GetNetworkWirelessSsidIdentityPskResponse res = sdk.identityPsks.getNetworkWirelessSsidIdentityPsk(req);

            if (res.getNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkWirelessSsidIdentityPsks

List all Identity PSKs in a wireless network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidIdentityPsksRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidIdentityPsksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidIdentityPsksRequest req = new GetNetworkWirelessSsidIdentityPsksRequest("asperiores", "magni");            

            GetNetworkWirelessSsidIdentityPsksResponse res = sdk.identityPsks.getNetworkWirelessSsidIdentityPsks(req);

            if (res.getNetworkWirelessSsidIdentityPsks200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidIdentityPsk

Update an Identity PSK

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidIdentityPskRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidIdentityPskRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidIdentityPskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidIdentityPskRequest req = new UpdateNetworkWirelessSsidIdentityPskRequest("dicta", "necessitatibus", "quidem") {{
                requestBody = new UpdateNetworkWirelessSsidIdentityPskRequestBody() {{
                    groupPolicyId = "rerum";
                    name = "Myron Huel";
                    passphrase = "porro";
                }};;
            }};            

            UpdateNetworkWirelessSsidIdentityPskResponse res = sdk.identityPsks.updateNetworkWirelessSsidIdentityPsk(req);

            if (res.updateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
