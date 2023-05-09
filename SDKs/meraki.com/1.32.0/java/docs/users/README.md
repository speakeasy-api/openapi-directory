# users

### Available Operations

* [deleteOrganizationUser](#deleteorganizationuser) - Delete a user and all of its authentication methods.
* [getNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user
* [getNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user
* [getNetworkSmUsers](#getnetworksmusers) - List the owners in an SM network with various specified fields and filters

## deleteOrganizationUser

Delete a user and all of its authentication methods.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationUserRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationUserRequest req = new DeleteOrganizationUserRequest("debitis", "facilis");            

            DeleteOrganizationUserResponse res = sdk.users.deleteOrganizationUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmUserDeviceProfiles

Get the profiles associated with a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmUserDeviceProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkSmUserDeviceProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUserDeviceProfilesRequest req = new GetNetworkSmUserDeviceProfilesRequest("eius", "ab");            

            GetNetworkSmUserDeviceProfilesResponse res = sdk.users.getNetworkSmUserDeviceProfiles(req);

            if (res.getNetworkSmUserDeviceProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmUserSoftwares

Get a list of softwares associated with a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmUserSoftwaresRequest;
import org.openapis.openapi.models.operations.GetNetworkSmUserSoftwaresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUserSoftwaresRequest req = new GetNetworkSmUserSoftwaresRequest("rem", "labore");            

            GetNetworkSmUserSoftwaresResponse res = sdk.users.getNetworkSmUserSoftwares(req);

            if (res.getNetworkSmUserSoftwares200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmUsers

List the owners in an SM network with various specified fields and filters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmUsersRequest;
import org.openapis.openapi.models.operations.GetNetworkSmUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUsersRequest req = new GetNetworkSmUsersRequest("rerum") {{
                emails = new String[]{{
                    add("distinctio"),
                    add("ratione"),
                    add("corporis"),
                    add("voluptatem"),
                }};
                ids = new String[]{{
                    add("tenetur"),
                    add("vero"),
                }};
                scope = new String[]{{
                    add("exercitationem"),
                    add("consequatur"),
                    add("explicabo"),
                }};
                usernames = new String[]{{
                    add("cupiditate"),
                    add("voluptatem"),
                    add("et"),
                    add("quod"),
                }};
            }};            

            GetNetworkSmUsersResponse res = sdk.users.getNetworkSmUsers(req);

            if (res.getNetworkSmUsers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
