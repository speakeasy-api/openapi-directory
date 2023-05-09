# merakiAuthUsers

### Available Operations

* [createNetworkMerakiAuthUser](#createnetworkmerakiauthuser) - Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
* [deleteNetworkMerakiAuthUser](#deletenetworkmerakiauthuser) - Deauthorize a user
* [getNetworkMerakiAuthUser](#getnetworkmerakiauthuser) - Return the Meraki Auth splash guest, RADIUS, or client VPN user
* [getNetworkMerakiAuthUsers](#getnetworkmerakiauthusers) - List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
* [updateNetworkMerakiAuthUser](#updatenetworkmerakiauthuser) - Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

## createNetworkMerakiAuthUser

Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkMerakiAuthUserRequest;
import org.openapis.openapi.models.operations.CreateNetworkMerakiAuthUserRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations;
import org.openapis.openapi.models.operations.CreateNetworkMerakiAuthUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkMerakiAuthUserRequest req = new CreateNetworkMerakiAuthUserRequest(                new CreateNetworkMerakiAuthUserRequestBody(                new org.openapis.openapi.models.operations.CreateNetworkMerakiAuthUserRequestBodyAuthorizations[]{{
                                                add(new CreateNetworkMerakiAuthUserRequestBodyAuthorizations() {{
                                                    expiresAt = "velit";
                                                    ssidNumber = 2947L;
                                                }}),
                                            }}, "minus") {{
                                accountType = CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum.EIGHT_HUNDRED_AND_TWO1_X;
                                emailPasswordToUser = false;
                                isAdmin = false;
                                name = "Joy O'Conner";
                                password = "impedit";
                            }};, "temporibus");            

            CreateNetworkMerakiAuthUserResponse res = sdk.merakiAuthUsers.createNetworkMerakiAuthUser(req);

            if (res.createNetworkMerakiAuthUser201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkMerakiAuthUser

Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkMerakiAuthUserRequest;
import org.openapis.openapi.models.operations.DeleteNetworkMerakiAuthUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkMerakiAuthUserRequest req = new DeleteNetworkMerakiAuthUserRequest("vel", "sed");            

            DeleteNetworkMerakiAuthUserResponse res = sdk.merakiAuthUsers.deleteNetworkMerakiAuthUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkMerakiAuthUser

Return the Meraki Auth splash guest, RADIUS, or client VPN user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkMerakiAuthUserRequest;
import org.openapis.openapi.models.operations.GetNetworkMerakiAuthUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkMerakiAuthUserRequest req = new GetNetworkMerakiAuthUserRequest("at", "provident");            

            GetNetworkMerakiAuthUserResponse res = sdk.merakiAuthUsers.getNetworkMerakiAuthUser(req);

            if (res.getNetworkMerakiAuthUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkMerakiAuthUsers

List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkMerakiAuthUsersRequest;
import org.openapis.openapi.models.operations.GetNetworkMerakiAuthUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkMerakiAuthUsersRequest req = new GetNetworkMerakiAuthUsersRequest("mollitia");            

            GetNetworkMerakiAuthUsersResponse res = sdk.merakiAuthUsers.getNetworkMerakiAuthUsers(req);

            if (res.getNetworkMerakiAuthUsers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkMerakiAuthUser

Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkMerakiAuthUserRequest;
import org.openapis.openapi.models.operations.UpdateNetworkMerakiAuthUserRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkMerakiAuthUserRequestBodyAuthorizations;
import org.openapis.openapi.models.operations.UpdateNetworkMerakiAuthUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkMerakiAuthUserRequest req = new UpdateNetworkMerakiAuthUserRequest("quaerat", "incidunt") {{
                requestBody = new UpdateNetworkMerakiAuthUserRequestBody() {{
                    authorizations = new org.openapis.openapi.models.operations.UpdateNetworkMerakiAuthUserRequestBodyAuthorizations[]{{
                        add(new UpdateNetworkMerakiAuthUserRequestBodyAuthorizations(542694L) {{
                            expiresAt = "beatae";
                            ssidNumber = 76448L;
                        }}),
                        add(new UpdateNetworkMerakiAuthUserRequestBodyAuthorizations(399739L) {{
                            expiresAt = "consectetur";
                            ssidNumber = 475920L;
                        }}),
                        add(new UpdateNetworkMerakiAuthUserRequestBodyAuthorizations(429217L) {{
                            expiresAt = "corporis";
                            ssidNumber = 156726L;
                        }}),
                    }};
                    emailPasswordToUser = false;
                    name = "Jacquelyn Daugherty";
                    password = "vitae";
                }};;
            }};            

            UpdateNetworkMerakiAuthUserResponse res = sdk.merakiAuthUsers.updateNetworkMerakiAuthUser(req);

            if (res.updateNetworkMerakiAuthUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
