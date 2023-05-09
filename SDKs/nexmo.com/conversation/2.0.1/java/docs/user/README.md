# user

## Overview

The concept of a user exists in Vonage APIs, you can associate one with a user in your own application if you choose. A user can have multiple memberships to conversations and can communicate with other users through various different mediums.

### Available Operations

* [createUser](#createuser) - Create a user
* [deleteUser](#deleteuser) - Delete a user
* [getUser](#getuser) - Retrieve a user
* [~~getUsers~~](#getusers) - List users :warning: **Deprecated**
* [getuserConversations](#getuserconversations) - List user conversations
* [updateUser](#updateuser) - Update a user

## createUser

Note: Users must be created with an admin JWT.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserRequestBody;
import org.openapis.openapi.models.operations.CreateUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            CreateUserRequestBody req = new CreateUserRequestBody() {{
                displayName = "My User Name";
                imageUrl = "https://example.com/image.png";
                name = "my_user_name";
            }};            

            CreateUserResponse res = sdk.user.createUser(req);

            if (res.createUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUser

Delete a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequest;
import org.openapis.openapi.models.operations.DeleteUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteUserRequest req = new DeleteUserRequest("ipsum");            

            DeleteUserResponse res = sdk.user.deleteUser(req);

            if (res.deleteUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUser

Retrieve a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRequest;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetUserRequest req = new GetUserRequest("aspernatur");            

            GetUserResponse res = sdk.user.getUser(req);

            if (res.getUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getUsers~~

This endpoint is **DEPRECATED**. Please use [/v0.2/users](/api/conversation.v2#get-users).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetUsersResponse res = sdk.user.getUsers();

            if (res.getUsers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getuserConversations

List user conversations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetuserConversationsRequest;
import org.openapis.openapi.models.operations.GetuserConversationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetuserConversationsRequest req = new GetuserConversationsRequest("natus");            

            GetuserConversationsResponse res = sdk.user.getuserConversations(req);

            if (res.getuserConversations200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUser

Update a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserRequest;
import org.openapis.openapi.models.operations.UpdateUserRequestBody;
import org.openapis.openapi.models.operations.UpdateUserResponse;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.ChannelFrom1;
import org.openapis.openapi.models.shared.ChannelFrom2;
import org.openapis.openapi.models.shared.ChannelFrom3;
import org.openapis.openapi.models.shared.ChannelFrom4;
import org.openapis.openapi.models.shared.ChannelFrom4ContentTypeEnum;
import org.openapis.openapi.models.shared.ChannelFrom4Headers;
import org.openapis.openapi.models.shared.ChannelFrom5;
import org.openapis.openapi.models.shared.ChannelLegIds;
import org.openapis.openapi.models.shared.ChannelTo2;
import org.openapis.openapi.models.shared.ChannelTypeEnum;
import org.openapis.openapi.models.shared.Four;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Three;
import org.openapis.openapi.models.shared.ThreeContentTypeEnum;
import org.openapis.openapi.models.shared.ThreeHeaders;
import org.openapis.openapi.models.shared.Two;
import org.openapis.openapi.models.shared.Zero;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            UpdateUserRequest req = new UpdateUserRequest("iste") {{
                requestBody = new UpdateUserRequestBody() {{
                    channels = new Channel() {{
                        from = new ChannelFrom2("14155550100", "phone");;
                        legId = "a595959595959595995";
                        legIds = new org.openapis.openapi.models.shared.ChannelLegIds[]{{
                            add(new ChannelLegIds() {{
                                legId = "a595959595959595995";
                            }}),
                            add(new ChannelLegIds() {{
                                legId = "a595959595959595995";
                            }}),
                            add(new ChannelLegIds() {{
                                legId = "a595959595959595995";
                            }}),
                        }};
                        to = new ChannelTo2("14155550100", "phone") {{
                            dtmfAnswer = "p*123#";
                        }};;
                        type = ChannelTypeEnum.PHONE;
                    }};;
                    displayName = "My User Name";
                    imageUrl = "https://example.com/image.png";
                    name = "my_user_name";
                }};;
            }};            

            UpdateUserResponse res = sdk.user.updateUser(req);

            if (res.updateUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
