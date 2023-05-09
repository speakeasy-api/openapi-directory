# followedNetworks

### Available Operations

* [deleteUserFollowsNetworksNetworkId](#deleteuserfollowsnetworksnetworkid) - Unfollow a network
* [getUserFollowsNetworks](#getuserfollowsnetworks) - List the followed networks
* [getUserFollowsNetworksNetworkId](#getuserfollowsnetworksnetworkid) - Check if a network is followed
* [putUserFollowsNetworksNetworkId](#putuserfollowsnetworksnetworkid) - Follow a network

## deleteUserFollowsNetworksNetworkId

Unfollow a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserFollowsNetworksNetworkIdRequest;
import org.openapis.openapi.models.operations.DeleteUserFollowsNetworksNetworkIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "ipsa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteUserFollowsNetworksNetworkIdRequest req = new DeleteUserFollowsNetworksNetworkIdRequest(963663L);            

            DeleteUserFollowsNetworksNetworkIdResponse res = sdk.followedNetworks.deleteUserFollowsNetworksNetworkId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserFollowsNetworks

List the followed networks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserFollowsNetworksEmbedEnum;
import org.openapis.openapi.models.operations.GetUserFollowsNetworksRequest;
import org.openapis.openapi.models.operations.GetUserFollowsNetworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora", "suscipit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserFollowsNetworksRequest req = new GetUserFollowsNetworksRequest() {{
                embed = GetUserFollowsNetworksEmbedEnum.NETWORK;
            }};            

            GetUserFollowsNetworksResponse res = sdk.followedNetworks.getUserFollowsNetworks(req);

            if (res.networkFollows != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserFollowsNetworksNetworkId

Check if a network is followed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserFollowsNetworksNetworkIdRequest;
import org.openapis.openapi.models.operations.GetUserFollowsNetworksNetworkIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae", "minus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUserFollowsNetworksNetworkIdRequest req = new GetUserFollowsNetworksNetworkIdRequest(812169L);            

            GetUserFollowsNetworksNetworkIdResponse res = sdk.followedNetworks.getUserFollowsNetworksNetworkId(req);

            if (res.networkFollow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUserFollowsNetworksNetworkId

Follow a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUserFollowsNetworksNetworkIdRequest;
import org.openapis.openapi.models.operations.PutUserFollowsNetworksNetworkIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum", "iusto") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutUserFollowsNetworksNetworkIdRequest req = new PutUserFollowsNetworksNetworkIdRequest(568045L);            

            PutUserFollowsNetworksNetworkIdResponse res = sdk.followedNetworks.putUserFollowsNetworksNetworkId(req);

            if (res.networkFollow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
