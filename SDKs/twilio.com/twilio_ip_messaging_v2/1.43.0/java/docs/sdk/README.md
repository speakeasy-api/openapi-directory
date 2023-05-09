# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createChannel](#createchannel)
* [createChannelWebhook](#createchannelwebhook)
* [createCredential](#createcredential)
* [createInvite](#createinvite)
* [createMember](#createmember)
* [createMessage](#createmessage)
* [createRole](#createrole)
* [createService](#createservice)
* [createUser](#createuser)
* [deleteBinding](#deletebinding)
* [deleteChannel](#deletechannel)
* [deleteChannelWebhook](#deletechannelwebhook)
* [deleteCredential](#deletecredential)
* [deleteInvite](#deleteinvite)
* [deleteMember](#deletemember)
* [deleteMessage](#deletemessage)
* [deleteRole](#deleterole)
* [deleteService](#deleteservice)
* [deleteUser](#deleteuser)
* [deleteUserBinding](#deleteuserbinding)
* [deleteUserChannel](#deleteuserchannel)
* [fetchBinding](#fetchbinding)
* [fetchChannel](#fetchchannel)
* [fetchChannelWebhook](#fetchchannelwebhook)
* [fetchCredential](#fetchcredential)
* [fetchInvite](#fetchinvite)
* [fetchMember](#fetchmember)
* [fetchMessage](#fetchmessage)
* [fetchRole](#fetchrole)
* [fetchService](#fetchservice)
* [fetchUser](#fetchuser)
* [fetchUserBinding](#fetchuserbinding)
* [fetchUserChannel](#fetchuserchannel)
* [listBinding](#listbinding)
* [listChannel](#listchannel)
* [listChannelWebhook](#listchannelwebhook)
* [listCredential](#listcredential)
* [listInvite](#listinvite)
* [listMember](#listmember)
* [listMessage](#listmessage)
* [listRole](#listrole)
* [listService](#listservice)
* [listUser](#listuser)
* [listUserBinding](#listuserbinding)
* [listUserChannel](#listuserchannel)
* [updateChannel](#updatechannel)
* [updateChannelWebhook](#updatechannelwebhook)
* [updateCredential](#updatecredential)
* [updateMember](#updatemember)
* [updateMessage](#updatemessage)
* [updateRole](#updaterole)
* [updateService](#updateservice)
* [updateUser](#updateuser)
* [updateUserChannel](#updateuserchannel)

## createChannel

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChannelCreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelResponse;
import org.openapis.openapi.models.operations.CreateChannelSecurity;
import org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum;
import org.openapis.openapi.models.shared.ChannelEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateChannelRequest req = new CreateChannelRequest("magnam") {{
                requestBody = new CreateChannelCreateChannelRequest() {{
                    attributes = "debitis";
                    createdBy = "ipsa";
                    dateCreated = OffsetDateTime.parse("2022-03-08T10:35:32.561Z");
                    dateUpdated = OffsetDateTime.parse("2022-07-10T15:39:12.517Z");
                    friendlyName = "minus";
                    type = ChannelEnumChannelTypeEnum.PRIVATE_;
                    uniqueName = "voluptatum";
                }};;
                xTwilioWebhookEnabled = ChannelEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            CreateChannelResponse res = sdk.sdk.createChannel(req, new CreateChannelSecurity("excepturi", "nisi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createChannelWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChannelWebhookCreateChannelWebhookRequest;
import org.openapis.openapi.models.operations.CreateChannelWebhookRequest;
import org.openapis.openapi.models.operations.CreateChannelWebhookResponse;
import org.openapis.openapi.models.operations.CreateChannelWebhookSecurity;
import org.openapis.openapi.models.shared.ChannelWebhookEnumMethodEnum;
import org.openapis.openapi.models.shared.ChannelWebhookEnumTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateChannelWebhookRequest req = new CreateChannelWebhookRequest("recusandae", "temporibus") {{
                requestBody = new CreateChannelWebhookCreateChannelWebhookRequest(ChannelWebhookEnumTypeEnum.WEBHOOK) {{
                    configurationFilters = new String[]{{
                        add("veritatis"),
                        add("deserunt"),
                    }};
                    configurationFlowSid = "perferendis";
                    configurationMethod = ChannelWebhookEnumMethodEnum.GET;
                    configurationRetryCount = 832620L;
                    configurationTriggers = new String[]{{
                        add("quo"),
                        add("odit"),
                        add("at"),
                        add("at"),
                    }};
                    configurationUrl = "maiores";
                }};;
            }};            

            CreateChannelWebhookResponse res = sdk.sdk.createChannelWebhook(req, new CreateChannelWebhookSecurity("molestiae", "quod") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannelChannelWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCredential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCredentialCreateCredentialRequest;
import org.openapis.openapi.models.operations.CreateCredentialResponse;
import org.openapis.openapi.models.operations.CreateCredentialSecurity;
import org.openapis.openapi.models.shared.CredentialEnumPushServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialCreateCredentialRequest req = new CreateCredentialCreateCredentialRequest(CredentialEnumPushServiceEnum.FCM) {{
                apiKey = "esse";
                certificate = "totam";
                friendlyName = "porro";
                privateKey = "dolorum";
                sandbox = false;
                secret = "dicta";
            }};            

            CreateCredentialResponse res = sdk.sdk.createCredential(req, new CreateCredentialSecurity("nam", "officia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2Credential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInvite

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInviteCreateInviteRequest;
import org.openapis.openapi.models.operations.CreateInviteRequest;
import org.openapis.openapi.models.operations.CreateInviteResponse;
import org.openapis.openapi.models.operations.CreateInviteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInviteRequest req = new CreateInviteRequest("occaecati", "fugit") {{
                requestBody = new CreateInviteCreateInviteRequest("deleniti") {{
                    roleSid = "hic";
                }};;
            }};            

            CreateInviteResponse res = sdk.sdk.createInvite(req, new CreateInviteSecurity("optio", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannelInvite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMember

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMemberCreateMemberRequest;
import org.openapis.openapi.models.operations.CreateMemberRequest;
import org.openapis.openapi.models.operations.CreateMemberResponse;
import org.openapis.openapi.models.operations.CreateMemberSecurity;
import org.openapis.openapi.models.shared.MemberEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMemberRequest req = new CreateMemberRequest("beatae", "commodi") {{
                requestBody = new CreateMemberCreateMemberRequest("molestiae") {{
                    attributes = "modi";
                    dateCreated = OffsetDateTime.parse("2022-03-24T09:42:46.236Z");
                    dateUpdated = OffsetDateTime.parse("2022-02-02T00:14:45.467Z");
                    lastConsumedMessageIndex = 216550L;
                    lastConsumptionTimestamp = OffsetDateTime.parse("2022-09-24T06:58:38.511Z");
                    roleSid = "perferendis";
                }};;
                xTwilioWebhookEnabled = MemberEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            CreateMemberResponse res = sdk.sdk.createMember(req, new CreateMemberSecurity("natus", "sed") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannelMember != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMessage

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMessageCreateMessageRequest;
import org.openapis.openapi.models.operations.CreateMessageRequest;
import org.openapis.openapi.models.operations.CreateMessageResponse;
import org.openapis.openapi.models.operations.CreateMessageSecurity;
import org.openapis.openapi.models.shared.MessageEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMessageRequest req = new CreateMessageRequest("iste", "dolor") {{
                requestBody = new CreateMessageCreateMessageRequest() {{
                    attributes = "natus";
                    body = "laboriosam";
                    dateCreated = OffsetDateTime.parse("2020-04-17T15:42:43.722Z");
                    dateUpdated = OffsetDateTime.parse("2022-02-06T12:52:33.708Z");
                    from = "corporis";
                    lastUpdatedBy = "iste";
                    mediaSid = "iure";
                }};;
                xTwilioWebhookEnabled = MessageEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            CreateMessageResponse res = sdk.sdk.createMessage(req, new CreateMessageSecurity("quidem", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannelMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRole

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRoleCreateRoleRequest;
import org.openapis.openapi.models.operations.CreateRoleRequest;
import org.openapis.openapi.models.operations.CreateRoleResponse;
import org.openapis.openapi.models.operations.CreateRoleSecurity;
import org.openapis.openapi.models.shared.RoleEnumRoleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRoleRequest req = new CreateRoleRequest("ipsa") {{
                requestBody = new CreateRoleCreateRoleRequest("reiciendis",                 new String[]{{
                                    add("mollitia"),
                                    add("laborum"),
                                    add("dolores"),
                                }}, RoleEnumRoleTypeEnum.CHANNEL);;
            }};            

            CreateRoleResponse res = sdk.sdk.createRole(req, new CreateRoleSecurity("corporis", "explicabo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceCreateServiceRequest;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.operations.CreateServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceCreateServiceRequest req = new CreateServiceCreateServiceRequest("nobis");            

            CreateServiceResponse res = sdk.sdk.createService(req, new CreateServiceSecurity("enim", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUser

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserCreateUserRequest;
import org.openapis.openapi.models.operations.CreateUserRequest;
import org.openapis.openapi.models.operations.CreateUserResponse;
import org.openapis.openapi.models.operations.CreateUserSecurity;
import org.openapis.openapi.models.shared.UserEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUserRequest req = new CreateUserRequest("nemo") {{
                requestBody = new CreateUserCreateUserRequest("minima") {{
                    attributes = "excepturi";
                    friendlyName = "accusantium";
                    roleSid = "iure";
                }};;
                xTwilioWebhookEnabled = UserEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            CreateUserResponse res = sdk.sdk.createUser(req, new CreateUserSecurity("doloribus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBinding

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBindingRequest;
import org.openapis.openapi.models.operations.DeleteBindingResponse;
import org.openapis.openapi.models.operations.DeleteBindingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBindingRequest req = new DeleteBindingRequest("architecto", "mollitia");            

            DeleteBindingResponse res = sdk.sdk.deleteBinding(req, new DeleteBindingSecurity("dolorem", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteChannelRequest;
import org.openapis.openapi.models.operations.DeleteChannelResponse;
import org.openapis.openapi.models.operations.DeleteChannelSecurity;
import org.openapis.openapi.models.shared.ChannelEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteChannelRequest req = new DeleteChannelRequest("consequuntur", "repellat") {{
                xTwilioWebhookEnabled = ChannelEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            DeleteChannelResponse res = sdk.sdk.deleteChannel(req, new DeleteChannelSecurity("occaecati", "numquam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteChannelWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteChannelWebhookRequest;
import org.openapis.openapi.models.operations.DeleteChannelWebhookResponse;
import org.openapis.openapi.models.operations.DeleteChannelWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteChannelWebhookRequest req = new DeleteChannelWebhookRequest("commodi", "quam", "molestiae");            

            DeleteChannelWebhookResponse res = sdk.sdk.deleteChannelWebhook(req, new DeleteChannelWebhookSecurity("velit", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCredential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCredentialRequest;
import org.openapis.openapi.models.operations.DeleteCredentialResponse;
import org.openapis.openapi.models.operations.DeleteCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCredentialRequest req = new DeleteCredentialRequest("quia");            

            DeleteCredentialResponse res = sdk.sdk.deleteCredential(req, new DeleteCredentialSecurity("quis", "vitae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInvite

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInviteRequest;
import org.openapis.openapi.models.operations.DeleteInviteResponse;
import org.openapis.openapi.models.operations.DeleteInviteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteInviteRequest req = new DeleteInviteRequest("laborum", "animi", "enim");            

            DeleteInviteResponse res = sdk.sdk.deleteInvite(req, new DeleteInviteSecurity("odit", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMember

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMemberRequest;
import org.openapis.openapi.models.operations.DeleteMemberResponse;
import org.openapis.openapi.models.operations.DeleteMemberSecurity;
import org.openapis.openapi.models.shared.MemberEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMemberRequest req = new DeleteMemberRequest("sequi", "tenetur", "ipsam") {{
                xTwilioWebhookEnabled = MemberEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            DeleteMemberResponse res = sdk.sdk.deleteMember(req, new DeleteMemberSecurity("possimus", "aut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMessage

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMessageRequest;
import org.openapis.openapi.models.operations.DeleteMessageResponse;
import org.openapis.openapi.models.operations.DeleteMessageSecurity;
import org.openapis.openapi.models.shared.MessageEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMessageRequest req = new DeleteMessageRequest("quasi", "error", "temporibus") {{
                xTwilioWebhookEnabled = MessageEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            DeleteMessageResponse res = sdk.sdk.deleteMessage(req, new DeleteMessageSecurity("quasi", "reiciendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRole

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRoleRequest;
import org.openapis.openapi.models.operations.DeleteRoleResponse;
import org.openapis.openapi.models.operations.DeleteRoleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRoleRequest req = new DeleteRoleRequest("voluptatibus", "vero");            

            DeleteRoleResponse res = sdk.sdk.deleteRole(req, new DeleteRoleSecurity("nihil", "praesentium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRequest;
import org.openapis.openapi.models.operations.DeleteServiceResponse;
import org.openapis.openapi.models.operations.DeleteServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest("voluptatibus");            

            DeleteServiceResponse res = sdk.sdk.deleteService(req, new DeleteServiceSecurity("ipsa", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUser

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequest;
import org.openapis.openapi.models.operations.DeleteUserResponse;
import org.openapis.openapi.models.operations.DeleteUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUserRequest req = new DeleteUserRequest("voluptate", "cum");            

            DeleteUserResponse res = sdk.sdk.deleteUser(req, new DeleteUserSecurity("perferendis", "doloremque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserBinding

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserBindingRequest;
import org.openapis.openapi.models.operations.DeleteUserBindingResponse;
import org.openapis.openapi.models.operations.DeleteUserBindingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUserBindingRequest req = new DeleteUserBindingRequest("reprehenderit", "ut", "maiores");            

            DeleteUserBindingResponse res = sdk.sdk.deleteUserBinding(req, new DeleteUserBindingSecurity("dicta", "corporis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserChannelRequest;
import org.openapis.openapi.models.operations.DeleteUserChannelResponse;
import org.openapis.openapi.models.operations.DeleteUserChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUserChannelRequest req = new DeleteUserChannelRequest("dolore", "iusto", "dicta");            

            DeleteUserChannelResponse res = sdk.sdk.deleteUserChannel(req, new DeleteUserChannelSecurity("harum", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchBinding

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBindingRequest;
import org.openapis.openapi.models.operations.FetchBindingResponse;
import org.openapis.openapi.models.operations.FetchBindingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchBindingRequest req = new FetchBindingRequest("accusamus", "commodi");            

            FetchBindingResponse res = sdk.sdk.fetchBinding(req, new FetchBindingSecurity("repudiandae", "quae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceBinding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchChannelRequest;
import org.openapis.openapi.models.operations.FetchChannelResponse;
import org.openapis.openapi.models.operations.FetchChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchChannelRequest req = new FetchChannelRequest("ipsum", "quidem");            

            FetchChannelResponse res = sdk.sdk.fetchChannel(req, new FetchChannelSecurity("molestias", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchChannelWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchChannelWebhookRequest;
import org.openapis.openapi.models.operations.FetchChannelWebhookResponse;
import org.openapis.openapi.models.operations.FetchChannelWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchChannelWebhookRequest req = new FetchChannelWebhookRequest("pariatur", "modi", "praesentium");            

            FetchChannelWebhookResponse res = sdk.sdk.fetchChannelWebhook(req, new FetchChannelWebhookSecurity("rem", "voluptates") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannelChannelWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCredential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCredentialRequest;
import org.openapis.openapi.models.operations.FetchCredentialResponse;
import org.openapis.openapi.models.operations.FetchCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCredentialRequest req = new FetchCredentialRequest("quasi");            

            FetchCredentialResponse res = sdk.sdk.fetchCredential(req, new FetchCredentialSecurity("repudiandae", "sint") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2Credential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchInvite

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchInviteRequest;
import org.openapis.openapi.models.operations.FetchInviteResponse;
import org.openapis.openapi.models.operations.FetchInviteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchInviteRequest req = new FetchInviteRequest("veritatis", "itaque", "incidunt");            

            FetchInviteResponse res = sdk.sdk.fetchInvite(req, new FetchInviteSecurity("enim", "consequatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannelInvite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchMember

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMemberRequest;
import org.openapis.openapi.models.operations.FetchMemberResponse;
import org.openapis.openapi.models.operations.FetchMemberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMemberRequest req = new FetchMemberRequest("est", "quibusdam", "explicabo");            

            FetchMemberResponse res = sdk.sdk.fetchMember(req, new FetchMemberSecurity("deserunt", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannelMember != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchMessage

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMessageRequest;
import org.openapis.openapi.models.operations.FetchMessageResponse;
import org.openapis.openapi.models.operations.FetchMessageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMessageRequest req = new FetchMessageRequest("quibusdam", "labore", "modi");            

            FetchMessageResponse res = sdk.sdk.fetchMessage(req, new FetchMessageSecurity("qui", "aliquid") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannelMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRole

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRoleRequest;
import org.openapis.openapi.models.operations.FetchRoleResponse;
import org.openapis.openapi.models.operations.FetchRoleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRoleRequest req = new FetchRoleRequest("cupiditate", "quos");            

            FetchRoleResponse res = sdk.sdk.fetchRole(req, new FetchRoleSecurity("perferendis", "magni") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceRequest;
import org.openapis.openapi.models.operations.FetchServiceResponse;
import org.openapis.openapi.models.operations.FetchServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceRequest req = new FetchServiceRequest("assumenda");            

            FetchServiceResponse res = sdk.sdk.fetchService(req, new FetchServiceSecurity("ipsam", "alias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUser

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUserRequest;
import org.openapis.openapi.models.operations.FetchUserResponse;
import org.openapis.openapi.models.operations.FetchUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUserRequest req = new FetchUserRequest("fugit", "dolorum");            

            FetchUserResponse res = sdk.sdk.fetchUser(req, new FetchUserSecurity("excepturi", "tempora") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUserBinding

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUserBindingRequest;
import org.openapis.openapi.models.operations.FetchUserBindingResponse;
import org.openapis.openapi.models.operations.FetchUserBindingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUserBindingRequest req = new FetchUserBindingRequest("facilis", "tempore", "labore");            

            FetchUserBindingResponse res = sdk.sdk.fetchUserBinding(req, new FetchUserBindingSecurity("delectus", "eum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceUserUserBinding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUserChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUserChannelRequest;
import org.openapis.openapi.models.operations.FetchUserChannelResponse;
import org.openapis.openapi.models.operations.FetchUserChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUserChannelRequest req = new FetchUserChannelRequest("non", "eligendi", "sint");            

            FetchUserChannelResponse res = sdk.sdk.fetchUserChannel(req, new FetchUserChannelSecurity("aliquid", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceUserUserChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBinding

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBindingRequest;
import org.openapis.openapi.models.operations.ListBindingResponse;
import org.openapis.openapi.models.operations.ListBindingSecurity;
import org.openapis.openapi.models.shared.BindingEnumBindingTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBindingRequest req = new ListBindingRequest("necessitatibus") {{
                bindingType = new org.openapis.openapi.models.shared.BindingEnumBindingTypeEnum[]{{
                    add(BindingEnumBindingTypeEnum.APN),
                    add(BindingEnumBindingTypeEnum.GCM),
                    add(BindingEnumBindingTypeEnum.FCM),
                }};
                identity = new String[]{{
                    add("dolorum"),
                    add("in"),
                    add("in"),
                    add("illum"),
                }};
                page = 978571L;
                pageSize = 699479L;
                pageToken = "dicta";
            }};            

            ListBindingResponse res = sdk.sdk.listBinding(req, new ListBindingSecurity("magnam", "cumque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listBindingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListChannelRequest;
import org.openapis.openapi.models.operations.ListChannelResponse;
import org.openapis.openapi.models.operations.ListChannelSecurity;
import org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListChannelRequest req = new ListChannelRequest("facere") {{
                page = 411820L;
                pageSize = 396506L;
                pageToken = "laborum";
                type = new org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum[]{{
                    add(ChannelEnumChannelTypeEnum.PUBLIC_),
                    add(ChannelEnumChannelTypeEnum.PRIVATE_),
                    add(ChannelEnumChannelTypeEnum.PUBLIC_),
                    add(ChannelEnumChannelTypeEnum.PRIVATE_),
                }};
            }};            

            ListChannelResponse res = sdk.sdk.listChannel(req, new ListChannelSecurity("delectus", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listChannelWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListChannelWebhookRequest;
import org.openapis.openapi.models.operations.ListChannelWebhookResponse;
import org.openapis.openapi.models.operations.ListChannelWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListChannelWebhookRequest req = new ListChannelWebhookRequest("provident", "nam") {{
                page = 659669L;
                pageSize = 501324L;
                pageToken = "deleniti";
            }};            

            ListChannelWebhookResponse res = sdk.sdk.listChannelWebhook(req, new ListChannelWebhookSecurity("sapiente", "amet") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listChannelWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCredential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCredentialRequest;
import org.openapis.openapi.models.operations.ListCredentialResponse;
import org.openapis.openapi.models.operations.ListCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCredentialRequest req = new ListCredentialRequest() {{
                page = 643990L;
                pageSize = 394869L;
                pageToken = "vel";
            }};            

            ListCredentialResponse res = sdk.sdk.listCredential(req, new ListCredentialSecurity("natus", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCredentialResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInvite

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInviteRequest;
import org.openapis.openapi.models.operations.ListInviteResponse;
import org.openapis.openapi.models.operations.ListInviteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInviteRequest req = new ListInviteRequest("molestiae", "perferendis") {{
                identity = new String[]{{
                    add("magnam"),
                    add("distinctio"),
                }};
                page = 660174L;
                pageSize = 287991L;
                pageToken = "labore";
            }};            

            ListInviteResponse res = sdk.sdk.listInvite(req, new ListInviteSecurity("suscipit", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listInviteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMember

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMemberRequest;
import org.openapis.openapi.models.operations.ListMemberResponse;
import org.openapis.openapi.models.operations.ListMemberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMemberRequest req = new ListMemberRequest("nobis", "eum") {{
                identity = new String[]{{
                    add("aspernatur"),
                    add("architecto"),
                    add("magnam"),
                    add("et"),
                }};
                page = 569965L;
                pageSize = 354047L;
                pageToken = "provident";
            }};            

            ListMemberResponse res = sdk.sdk.listMember(req, new ListMemberSecurity("quos", "sint") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMessage

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMessageRequest;
import org.openapis.openapi.models.operations.ListMessageResponse;
import org.openapis.openapi.models.operations.ListMessageSecurity;
import org.openapis.openapi.models.shared.MessageEnumOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMessageRequest req = new ListMessageRequest("accusantium", "mollitia") {{
                order = MessageEnumOrderTypeEnum.DESC;
                page = 652103L;
                pageSize = 320997L;
                pageToken = "eum";
            }};            

            ListMessageResponse res = sdk.sdk.listMessage(req, new ListMessageSecurity("dolor", "necessitatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRole

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRoleRequest;
import org.openapis.openapi.models.operations.ListRoleResponse;
import org.openapis.openapi.models.operations.ListRoleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRoleRequest req = new ListRoleRequest("odit") {{
                page = 367562L;
                pageSize = 97260L;
                pageToken = "iure";
            }};            

            ListRoleResponse res = sdk.sdk.listRole(req, new ListRoleSecurity("doloribus", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRoleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceRequest;
import org.openapis.openapi.models.operations.ListServiceResponse;
import org.openapis.openapi.models.operations.ListServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceRequest req = new ListServiceRequest() {{
                page = 260341L;
                pageSize = 806194L;
                pageToken = "deleniti";
            }};            

            ListServiceResponse res = sdk.sdk.listService(req, new ListServiceSecurity("facilis", "in") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUser

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserRequest;
import org.openapis.openapi.models.operations.ListUserResponse;
import org.openapis.openapi.models.operations.ListUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUserRequest req = new ListUserRequest("architecto") {{
                page = 99569L;
                pageSize = 919483L;
                pageToken = "ullam";
            }};            

            ListUserResponse res = sdk.sdk.listUser(req, new ListUserSecurity("expedita", "nihil") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUserBinding

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserBindingRequest;
import org.openapis.openapi.models.operations.ListUserBindingResponse;
import org.openapis.openapi.models.operations.ListUserBindingSecurity;
import org.openapis.openapi.models.shared.UserBindingEnumBindingTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUserBindingRequest req = new ListUserBindingRequest("repellat", "quibusdam") {{
                bindingType = new org.openapis.openapi.models.shared.UserBindingEnumBindingTypeEnum[]{{
                    add(UserBindingEnumBindingTypeEnum.FCM),
                }};
                page = 868126L;
                pageSize = 37559L;
                pageToken = "consequuntur";
            }};            

            ListUserBindingResponse res = sdk.sdk.listUserBinding(req, new ListUserBindingSecurity("praesentium", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUserBindingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUserChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserChannelRequest;
import org.openapis.openapi.models.operations.ListUserChannelResponse;
import org.openapis.openapi.models.operations.ListUserChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUserChannelRequest req = new ListUserChannelRequest("magni", "sunt") {{
                page = 779051L;
                pageSize = 848009L;
                pageToken = "pariatur";
            }};            

            ListUserChannelResponse res = sdk.sdk.listUserChannel(req, new ListUserChannelSecurity("maxime", "ea") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUserChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateChannel

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateChannelRequest;
import org.openapis.openapi.models.operations.UpdateChannelResponse;
import org.openapis.openapi.models.operations.UpdateChannelSecurity;
import org.openapis.openapi.models.operations.UpdateChannelUpdateChannelRequest;
import org.openapis.openapi.models.shared.ChannelEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateChannelRequest req = new UpdateChannelRequest("excepturi", "odit") {{
                requestBody = new UpdateChannelUpdateChannelRequest() {{
                    attributes = "ea";
                    createdBy = "accusantium";
                    dateCreated = OffsetDateTime.parse("2022-01-07T08:38:36.147Z");
                    dateUpdated = OffsetDateTime.parse("2022-04-03T11:56:45.015Z");
                    friendlyName = "voluptate";
                    uniqueName = "autem";
                }};;
                xTwilioWebhookEnabled = ChannelEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            UpdateChannelResponse res = sdk.sdk.updateChannel(req, new UpdateChannelSecurity("eaque", "pariatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateChannelWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateChannelWebhookRequest;
import org.openapis.openapi.models.operations.UpdateChannelWebhookResponse;
import org.openapis.openapi.models.operations.UpdateChannelWebhookSecurity;
import org.openapis.openapi.models.operations.UpdateChannelWebhookUpdateChannelWebhookRequest;
import org.openapis.openapi.models.shared.ChannelWebhookEnumMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateChannelWebhookRequest req = new UpdateChannelWebhookRequest("nemo", "voluptatibus", "perferendis") {{
                requestBody = new UpdateChannelWebhookUpdateChannelWebhookRequest() {{
                    configurationFilters = new String[]{{
                        add("amet"),
                        add("aut"),
                        add("cumque"),
                        add("corporis"),
                    }};
                    configurationFlowSid = "hic";
                    configurationMethod = ChannelWebhookEnumMethodEnum.POST;
                    configurationRetryCount = 749999L;
                    configurationTriggers = new String[]{{
                        add("quis"),
                    }};
                    configurationUrl = "totam";
                }};;
            }};            

            UpdateChannelWebhookResponse res = sdk.sdk.updateChannelWebhook(req, new UpdateChannelWebhookSecurity("dignissimos", "eaque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannelChannelWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCredential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCredentialRequest;
import org.openapis.openapi.models.operations.UpdateCredentialResponse;
import org.openapis.openapi.models.operations.UpdateCredentialSecurity;
import org.openapis.openapi.models.operations.UpdateCredentialUpdateCredentialRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCredentialRequest req = new UpdateCredentialRequest("quis") {{
                requestBody = new UpdateCredentialUpdateCredentialRequest() {{
                    apiKey = "nesciunt";
                    certificate = "eos";
                    friendlyName = "perferendis";
                    privateKey = "dolores";
                    sandbox = false;
                    secret = "minus";
                }};;
            }};            

            UpdateCredentialResponse res = sdk.sdk.updateCredential(req, new UpdateCredentialSecurity("quam", "dolor") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2Credential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMember

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMemberRequest;
import org.openapis.openapi.models.operations.UpdateMemberResponse;
import org.openapis.openapi.models.operations.UpdateMemberSecurity;
import org.openapis.openapi.models.operations.UpdateMemberUpdateMemberRequest;
import org.openapis.openapi.models.shared.MemberEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMemberRequest req = new UpdateMemberRequest("vero", "nostrum", "hic") {{
                requestBody = new UpdateMemberUpdateMemberRequest() {{
                    attributes = "recusandae";
                    dateCreated = OffsetDateTime.parse("2021-08-04T18:39:34.709Z");
                    dateUpdated = OffsetDateTime.parse("2022-12-08T18:10:54.422Z");
                    lastConsumedMessageIndex = 783645L;
                    lastConsumptionTimestamp = OffsetDateTime.parse("2022-07-02T11:46:10.299Z");
                    roleSid = "error";
                }};;
                xTwilioWebhookEnabled = MemberEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            UpdateMemberResponse res = sdk.sdk.updateMember(req, new UpdateMemberSecurity("occaecati", "rerum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannelMember != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMessage

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMessageRequest;
import org.openapis.openapi.models.operations.UpdateMessageResponse;
import org.openapis.openapi.models.operations.UpdateMessageSecurity;
import org.openapis.openapi.models.operations.UpdateMessageUpdateMessageRequest;
import org.openapis.openapi.models.shared.MessageEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMessageRequest req = new UpdateMessageRequest("adipisci", "asperiores", "earum") {{
                requestBody = new UpdateMessageUpdateMessageRequest() {{
                    attributes = "modi";
                    body = "iste";
                    dateCreated = OffsetDateTime.parse("2021-12-05T23:42:47.745Z");
                    dateUpdated = OffsetDateTime.parse("2021-03-26T01:09:56.415Z");
                    from = "nobis";
                    lastUpdatedBy = "libero";
                }};;
                xTwilioWebhookEnabled = MessageEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            UpdateMessageResponse res = sdk.sdk.updateMessage(req, new UpdateMessageSecurity("quaerat", "quos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannelMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRole

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRoleRequest;
import org.openapis.openapi.models.operations.UpdateRoleResponse;
import org.openapis.openapi.models.operations.UpdateRoleSecurity;
import org.openapis.openapi.models.operations.UpdateRoleUpdateRoleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRoleRequest req = new UpdateRoleRequest("aliquid", "dolorem") {{
                requestBody = new UpdateRoleUpdateRoleRequest(                new String[]{{
                                    add("dolor"),
                                }});;
            }};            

            UpdateRoleResponse res = sdk.sdk.updateRole(req, new UpdateRoleSecurity("qui", "ipsum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.operations.UpdateServiceSecurity;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhookMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest("hic") {{
                requestBody = new UpdateServiceUpdateServiceRequest() {{
                    consumptionReportInterval = 569574L;
                    defaultChannelCreatorRoleSid = "cum";
                    defaultChannelRoleSid = "voluptate";
                    defaultServiceRoleSid = "dignissimos";
                    friendlyName = "reiciendis";
                    limitsChannelMembers = 227414L;
                    limitsUserChannels = 680545L;
                    mediaCompatibilityMessage = "numquam";
                    notificationsAddedToChannelEnabled = false;
                    notificationsAddedToChannelSound = "veritatis";
                    notificationsAddedToChannelTemplate = "ipsa";
                    notificationsInvitedToChannelEnabled = false;
                    notificationsInvitedToChannelSound = "ipsa";
                    notificationsInvitedToChannelTemplate = "iure";
                    notificationsLogEnabled = false;
                    notificationsNewMessageBadgeCountEnabled = false;
                    notificationsNewMessageEnabled = false;
                    notificationsNewMessageSound = "odio";
                    notificationsNewMessageTemplate = "quaerat";
                    notificationsRemovedFromChannelEnabled = false;
                    notificationsRemovedFromChannelSound = "accusamus";
                    notificationsRemovedFromChannelTemplate = "quidem";
                    postWebhookRetryCount = 976405L;
                    postWebhookUrl = "http://perky-collar.name";
                    preWebhookRetryCount = 24678L;
                    preWebhookUrl = "https://best-respite.net";
                    reachabilityEnabled = false;
                    readStatusEnabled = false;
                    typingIndicatorTimeout = 478596L;
                    webhookFilters = new String[]{{
                        add("dolorum"),
                        add("deleniti"),
                    }};
                    webhookMethod = UpdateServiceUpdateServiceRequestWebhookMethodEnum.PATCH;
                }};;
            }};            

            UpdateServiceResponse res = sdk.sdk.updateService(req, new UpdateServiceSecurity("necessitatibus", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUser

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserRequest;
import org.openapis.openapi.models.operations.UpdateUserResponse;
import org.openapis.openapi.models.operations.UpdateUserSecurity;
import org.openapis.openapi.models.operations.UpdateUserUpdateUserRequest;
import org.openapis.openapi.models.shared.UserEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUserRequest req = new UpdateUserRequest("asperiores", "nihil") {{
                requestBody = new UpdateUserUpdateUserRequest() {{
                    attributes = "ipsum";
                    friendlyName = "voluptate";
                    roleSid = "id";
                }};;
                xTwilioWebhookEnabled = UserEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            UpdateUserResponse res = sdk.sdk.updateUser(req, new UpdateUserSecurity("eius", "aspernatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserChannel

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserChannelRequest;
import org.openapis.openapi.models.operations.UpdateUserChannelResponse;
import org.openapis.openapi.models.operations.UpdateUserChannelSecurity;
import org.openapis.openapi.models.operations.UpdateUserChannelUpdateUserChannelRequest;
import org.openapis.openapi.models.shared.UserChannelEnumNotificationLevelEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUserChannelRequest req = new UpdateUserChannelRequest("perferendis", "amet", "optio") {{
                requestBody = new UpdateUserChannelUpdateUserChannelRequest() {{
                    lastConsumedMessageIndex = 881586L;
                    lastConsumptionTimestamp = OffsetDateTime.parse("2022-02-04T21:14:13.821Z");
                    notificationLevel = UserChannelEnumNotificationLevelEnum.DEFAULT_;
                }};;
            }};            

            UpdateUserChannelResponse res = sdk.sdk.updateUserChannel(req, new UpdateUserChannelSecurity("deserunt", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceUserUserChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
