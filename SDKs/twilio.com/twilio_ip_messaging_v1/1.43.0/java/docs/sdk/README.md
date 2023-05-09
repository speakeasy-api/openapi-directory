# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createChannel](#createchannel)
* [createCredential](#createcredential)
* [createInvite](#createinvite)
* [createMember](#createmember)
* [createMessage](#createmessage)
* [createRole](#createrole)
* [createService](#createservice)
* [createUser](#createuser)
* [deleteChannel](#deletechannel)
* [deleteCredential](#deletecredential)
* [deleteInvite](#deleteinvite)
* [deleteMember](#deletemember)
* [deleteMessage](#deletemessage)
* [deleteRole](#deleterole)
* [deleteService](#deleteservice)
* [deleteUser](#deleteuser)
* [fetchChannel](#fetchchannel)
* [fetchCredential](#fetchcredential)
* [fetchInvite](#fetchinvite)
* [fetchMember](#fetchmember)
* [fetchMessage](#fetchmessage)
* [fetchRole](#fetchrole)
* [fetchService](#fetchservice)
* [fetchUser](#fetchuser)
* [listChannel](#listchannel)
* [listCredential](#listcredential)
* [listInvite](#listinvite)
* [listMember](#listmember)
* [listMessage](#listmessage)
* [listRole](#listrole)
* [listService](#listservice)
* [listUser](#listuser)
* [listUserChannel](#listuserchannel)
* [updateChannel](#updatechannel)
* [updateCredential](#updatecredential)
* [updateMember](#updatemember)
* [updateMessage](#updatemessage)
* [updateRole](#updaterole)
* [updateService](#updateservice)
* [updateUser](#updateuser)

## createChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChannelCreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelResponse;
import org.openapis.openapi.models.operations.CreateChannelSecurity;
import org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateChannelRequest req = new CreateChannelRequest("illum") {{
                requestBody = new CreateChannelCreateChannelRequest() {{
                    attributes = "vel";
                    friendlyName = "error";
                    type = ChannelEnumChannelTypeEnum.PRIVATE_;
                    uniqueName = "suscipit";
                }};;
            }};            

            CreateChannelResponse res = sdk.sdk.createChannel(req, new CreateChannelSecurity("iure", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceChannel != null) {
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
                apiKey = "ipsa";
                certificate = "delectus";
                friendlyName = "tempora";
                privateKey = "suscipit";
                sandbox = false;
                secret = "molestiae";
            }};            

            CreateCredentialResponse res = sdk.sdk.createCredential(req, new CreateCredentialSecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1Credential != null) {
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

            CreateInviteRequest req = new CreateInviteRequest("voluptatum", "iusto") {{
                requestBody = new CreateInviteCreateInviteRequest("excepturi") {{
                    roleSid = "nisi";
                }};;
            }};            

            CreateInviteResponse res = sdk.sdk.createInvite(req, new CreateInviteSecurity("recusandae", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceChannelInvite != null) {
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

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMemberCreateMemberRequest;
import org.openapis.openapi.models.operations.CreateMemberRequest;
import org.openapis.openapi.models.operations.CreateMemberResponse;
import org.openapis.openapi.models.operations.CreateMemberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMemberRequest req = new CreateMemberRequest("ab", "quis") {{
                requestBody = new CreateMemberCreateMemberRequest("veritatis") {{
                    roleSid = "deserunt";
                }};;
            }};            

            CreateMemberResponse res = sdk.sdk.createMember(req, new CreateMemberSecurity("perferendis", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceChannelMember != null) {
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

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMessageCreateMessageRequest;
import org.openapis.openapi.models.operations.CreateMessageRequest;
import org.openapis.openapi.models.operations.CreateMessageResponse;
import org.openapis.openapi.models.operations.CreateMessageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMessageRequest req = new CreateMessageRequest("repellendus", "sapiente") {{
                requestBody = new CreateMessageCreateMessageRequest("quo") {{
                    attributes = "odit";
                    from = "at";
                }};;
            }};            

            CreateMessageResponse res = sdk.sdk.createMessage(req, new CreateMessageSecurity("at", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceChannelMessage != null) {
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

            CreateRoleRequest req = new CreateRoleRequest("molestiae") {{
                requestBody = new CreateRoleCreateRoleRequest("quod",                 new String[]{{
                                    add("esse"),
                                    add("totam"),
                                    add("porro"),
                                    add("dolorum"),
                                }}, RoleEnumRoleTypeEnum.CHANNEL);;
            }};            

            CreateRoleResponse res = sdk.sdk.createRole(req, new CreateRoleSecurity("nam", "officia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceRole != null) {
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

            CreateServiceCreateServiceRequest req = new CreateServiceCreateServiceRequest("occaecati");            

            CreateServiceResponse res = sdk.sdk.createService(req, new CreateServiceSecurity("fugit", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1Service != null) {
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUserRequest req = new CreateUserRequest("hic") {{
                requestBody = new CreateUserCreateUserRequest("optio") {{
                    attributes = "totam";
                    friendlyName = "beatae";
                    roleSid = "commodi";
                }};;
            }};            

            CreateUserResponse res = sdk.sdk.createUser(req, new CreateUserSecurity("molestiae", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceUser != null) {
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteChannelRequest req = new DeleteChannelRequest("qui", "impedit");            

            DeleteChannelResponse res = sdk.sdk.deleteChannel(req, new DeleteChannelSecurity("cum", "esse") {{
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

            DeleteCredentialRequest req = new DeleteCredentialRequest("ipsum");            

            DeleteCredentialResponse res = sdk.sdk.deleteCredential(req, new DeleteCredentialSecurity("excepturi", "aspernatur") {{
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

            DeleteInviteRequest req = new DeleteInviteRequest("perferendis", "ad", "natus");            

            DeleteInviteResponse res = sdk.sdk.deleteInvite(req, new DeleteInviteSecurity("sed", "iste") {{
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMemberRequest req = new DeleteMemberRequest("dolor", "natus", "laboriosam");            

            DeleteMemberResponse res = sdk.sdk.deleteMember(req, new DeleteMemberSecurity("hic", "saepe") {{
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMessageRequest req = new DeleteMessageRequest("fuga", "in", "corporis");            

            DeleteMessageResponse res = sdk.sdk.deleteMessage(req, new DeleteMessageSecurity("iste", "iure") {{
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

            DeleteRoleRequest req = new DeleteRoleRequest("saepe", "quidem");            

            DeleteRoleResponse res = sdk.sdk.deleteRole(req, new DeleteRoleSecurity("architecto", "ipsa") {{
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

            DeleteServiceRequest req = new DeleteServiceRequest("reiciendis");            

            DeleteServiceResponse res = sdk.sdk.deleteService(req, new DeleteServiceSecurity("est", "mollitia") {{
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

            DeleteUserRequest req = new DeleteUserRequest("laborum", "dolores");            

            DeleteUserResponse res = sdk.sdk.deleteUser(req, new DeleteUserSecurity("dolorem", "corporis") {{
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

            FetchChannelRequest req = new FetchChannelRequest("explicabo", "nobis");            

            FetchChannelResponse res = sdk.sdk.fetchChannel(req, new FetchChannelSecurity("enim", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceChannel != null) {
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

            FetchCredentialRequest req = new FetchCredentialRequest("nemo");            

            FetchCredentialResponse res = sdk.sdk.fetchCredential(req, new FetchCredentialSecurity("minima", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1Credential != null) {
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

            FetchInviteRequest req = new FetchInviteRequest("accusantium", "iure", "culpa");            

            FetchInviteResponse res = sdk.sdk.fetchInvite(req, new FetchInviteSecurity("doloribus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceChannelInvite != null) {
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

            FetchMemberRequest req = new FetchMemberRequest("architecto", "mollitia", "dolorem");            

            FetchMemberResponse res = sdk.sdk.fetchMember(req, new FetchMemberSecurity("culpa", "consequuntur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceChannelMember != null) {
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

            FetchMessageRequest req = new FetchMessageRequest("repellat", "mollitia", "occaecati");            

            FetchMessageResponse res = sdk.sdk.fetchMessage(req, new FetchMessageSecurity("numquam", "commodi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceChannelMessage != null) {
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

            FetchRoleRequest req = new FetchRoleRequest("quam", "molestiae");            

            FetchRoleResponse res = sdk.sdk.fetchRole(req, new FetchRoleSecurity("velit", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceRole != null) {
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

            FetchServiceRequest req = new FetchServiceRequest("quia");            

            FetchServiceResponse res = sdk.sdk.fetchService(req, new FetchServiceSecurity("quis", "vitae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1Service != null) {
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

            FetchUserRequest req = new FetchUserRequest("laborum", "animi");            

            FetchUserResponse res = sdk.sdk.fetchUser(req, new FetchUserSecurity("enim", "odit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceUser != null) {
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

            ListChannelRequest req = new ListChannelRequest("quo") {{
                page = 196582L;
                pageSize = 949572L;
                pageToken = "ipsam";
                type = new org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum[]{{
                    add(ChannelEnumChannelTypeEnum.PRIVATE_),
                    add(ChannelEnumChannelTypeEnum.PUBLIC_),
                    add(ChannelEnumChannelTypeEnum.PUBLIC_),
                }};
            }};            

            ListChannelResponse res = sdk.sdk.listChannel(req, new ListChannelSecurity("error", "temporibus") {{
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
                page = 673660L;
                pageSize = 96098L;
                pageToken = "reiciendis";
            }};            

            ListCredentialResponse res = sdk.sdk.listCredential(req, new ListCredentialSecurity("voluptatibus", "vero") {{
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

            ListInviteRequest req = new ListInviteRequest("nihil", "praesentium") {{
                identity = new String[]{{
                    add("ipsa"),
                    add("omnis"),
                    add("voluptate"),
                    add("cum"),
                }};
                page = 19987L;
                pageSize = 39187L;
                pageToken = "reprehenderit";
            }};            

            ListInviteResponse res = sdk.sdk.listInvite(req, new ListInviteSecurity("ut", "maiores") {{
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

            ListMemberRequest req = new ListMemberRequest("dicta", "corporis") {{
                identity = new String[]{{
                    add("iusto"),
                    add("dicta"),
                }};
                page = 688661L;
                pageSize = 317983L;
                pageToken = "accusamus";
            }};            

            ListMemberResponse res = sdk.sdk.listMember(req, new ListMemberSecurity("commodi", "repudiandae") {{
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

            ListMessageRequest req = new ListMessageRequest("quae", "ipsum") {{
                order = MessageEnumOrderTypeEnum.DESC;
                page = 565189L;
                pageSize = 566602L;
                pageToken = "pariatur";
            }};            

            ListMessageResponse res = sdk.sdk.listMessage(req, new ListMessageSecurity("modi", "praesentium") {{
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

            ListRoleRequest req = new ListRoleRequest("rem") {{
                page = 916723L;
                pageSize = 93940L;
                pageToken = "repudiandae";
            }};            

            ListRoleResponse res = sdk.sdk.listRole(req, new ListRoleSecurity("sint", "veritatis") {{
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
                page = 929297L;
                pageSize = 277718L;
                pageToken = "enim";
            }};            

            ListServiceResponse res = sdk.sdk.listService(req, new ListServiceSecurity("consequatur", "est") {{
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

            ListUserRequest req = new ListUserRequest("quibusdam") {{
                page = 131797L;
                pageSize = 647174L;
                pageToken = "distinctio";
            }};            

            ListUserResponse res = sdk.sdk.listUser(req, new ListUserSecurity("quibusdam", "labore") {{
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

            ListUserChannelRequest req = new ListUserChannelRequest("modi", "qui") {{
                page = 397821L;
                pageSize = 586513L;
                pageToken = "quos";
            }};            

            ListUserChannelResponse res = sdk.sdk.listUserChannel(req, new ListUserChannelSecurity("perferendis", "magni") {{
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

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateChannelRequest;
import org.openapis.openapi.models.operations.UpdateChannelResponse;
import org.openapis.openapi.models.operations.UpdateChannelSecurity;
import org.openapis.openapi.models.operations.UpdateChannelUpdateChannelRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateChannelRequest req = new UpdateChannelRequest("assumenda", "ipsam") {{
                requestBody = new UpdateChannelUpdateChannelRequest() {{
                    attributes = "alias";
                    friendlyName = "fugit";
                    uniqueName = "dolorum";
                }};;
            }};            

            UpdateChannelResponse res = sdk.sdk.updateChannel(req, new UpdateChannelSecurity("excepturi", "tempora") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceChannel != null) {
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

            UpdateCredentialRequest req = new UpdateCredentialRequest("facilis") {{
                requestBody = new UpdateCredentialUpdateCredentialRequest() {{
                    apiKey = "tempore";
                    certificate = "labore";
                    friendlyName = "delectus";
                    privateKey = "eum";
                    sandbox = false;
                    secret = "non";
                }};;
            }};            

            UpdateCredentialResponse res = sdk.sdk.updateCredential(req, new UpdateCredentialSecurity("eligendi", "sint") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1Credential != null) {
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

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMemberRequest;
import org.openapis.openapi.models.operations.UpdateMemberResponse;
import org.openapis.openapi.models.operations.UpdateMemberSecurity;
import org.openapis.openapi.models.operations.UpdateMemberUpdateMemberRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMemberRequest req = new UpdateMemberRequest("aliquid", "provident", "necessitatibus") {{
                requestBody = new UpdateMemberUpdateMemberRequest() {{
                    lastConsumedMessageIndex = 572252L;
                    roleSid = "officia";
                }};;
            }};            

            UpdateMemberResponse res = sdk.sdk.updateMember(req, new UpdateMemberSecurity("dolor", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceChannelMember != null) {
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

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMessageRequest;
import org.openapis.openapi.models.operations.UpdateMessageResponse;
import org.openapis.openapi.models.operations.UpdateMessageSecurity;
import org.openapis.openapi.models.operations.UpdateMessageUpdateMessageRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMessageRequest req = new UpdateMessageRequest("a", "dolorum", "in") {{
                requestBody = new UpdateMessageUpdateMessageRequest() {{
                    attributes = "in";
                    body = "illum";
                }};;
            }};            

            UpdateMessageResponse res = sdk.sdk.updateMessage(req, new UpdateMessageSecurity("maiores", "rerum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceChannelMessage != null) {
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

            UpdateRoleRequest req = new UpdateRoleRequest("dicta", "magnam") {{
                requestBody = new UpdateRoleUpdateRoleRequest(                new String[]{{
                                    add("facere"),
                                    add("ea"),
                                    add("aliquid"),
                                    add("laborum"),
                                }});;
            }};            

            UpdateRoleResponse res = sdk.sdk.updateRole(req, new UpdateRoleSecurity("accusamus", "non") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceRole != null) {
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
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest("occaecati") {{
                requestBody = new UpdateServiceUpdateServiceRequest() {{
                    consumptionReportInterval = 313218L;
                    defaultChannelCreatorRoleSid = "accusamus";
                    defaultChannelRoleSid = "delectus";
                    defaultServiceRoleSid = "quidem";
                    friendlyName = "provident";
                    limitsChannelMembers = 725255L;
                    limitsUserChannels = 659669L;
                    notificationsAddedToChannelEnabled = false;
                    notificationsAddedToChannelTemplate = "blanditiis";
                    notificationsInvitedToChannelEnabled = false;
                    notificationsInvitedToChannelTemplate = "deleniti";
                    notificationsNewMessageEnabled = false;
                    notificationsNewMessageTemplate = "sapiente";
                    notificationsRemovedFromChannelEnabled = false;
                    notificationsRemovedFromChannelTemplate = "amet";
                    postWebhookUrl = "https://humble-hello.name";
                    preWebhookUrl = "https://lame-alcohol.info";
                    reachabilityEnabled = false;
                    readStatusEnabled = false;
                    typingIndicatorTimeout = 301575L;
                    webhookFilters = new String[]{{
                        add("id"),
                        add("labore"),
                        add("labore"),
                    }};
                    webhookMethod = UpdateServiceUpdateServiceRequestWebhookMethodEnum.POST;
                    webhooksOnChannelAddMethod = UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum.PATCH;
                    webhooksOnChannelAddUrl = "https://inconsequential-swimming.com";
                    webhooksOnChannelAddedMethod = UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum.HEAD;
                    webhooksOnChannelAddedUrl = "http://brisk-mobile.info";
                    webhooksOnChannelDestroyMethod = UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum.PATCH;
                    webhooksOnChannelDestroyUrl = "https://noted-antling.name";
                    webhooksOnChannelDestroyedMethod = UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum.DELETE;
                    webhooksOnChannelDestroyedUrl = "https://functional-homeland.biz";
                    webhooksOnChannelUpdateMethod = UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum.DELETE;
                    webhooksOnChannelUpdateUrl = "http://handy-borrowing.info";
                    webhooksOnChannelUpdatedMethod = UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum.DELETE;
                    webhooksOnChannelUpdatedUrl = "https://failing-silicon.name";
                    webhooksOnMemberAddMethod = UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum.PUT;
                    webhooksOnMemberAddUrl = "http://bustling-bout.org";
                    webhooksOnMemberAddedMethod = UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum.POST;
                    webhooksOnMemberAddedUrl = "https://knobby-zither.org";
                    webhooksOnMemberRemoveMethod = UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum.HEAD;
                    webhooksOnMemberRemoveUrl = "https://triangular-apprehension.com";
                    webhooksOnMemberRemovedMethod = UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum.PATCH;
                    webhooksOnMemberRemovedUrl = "https://daring-camel.net";
                    webhooksOnMessageRemoveMethod = UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum.DELETE;
                    webhooksOnMessageRemoveUrl = "https://steel-handicap.name";
                    webhooksOnMessageRemovedMethod = UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum.HEAD;
                    webhooksOnMessageRemovedUrl = "http://ancient-basin.org";
                    webhooksOnMessageSendMethod = UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum.PUT;
                    webhooksOnMessageSendUrl = "http://jealous-hearing.net";
                    webhooksOnMessageSentMethod = UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum.HEAD;
                    webhooksOnMessageSentUrl = "https://half-wedge.com";
                    webhooksOnMessageUpdateMethod = UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum.DELETE;
                    webhooksOnMessageUpdateUrl = "http://adept-sailing.info";
                    webhooksOnMessageUpdatedMethod = UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum.DELETE;
                    webhooksOnMessageUpdatedUrl = "https://shy-closet.info";
                }};;
            }};            

            UpdateServiceResponse res = sdk.sdk.updateService(req, new UpdateServiceSecurity("totam", "dignissimos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1Service != null) {
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUserRequest req = new UpdateUserRequest("eaque", "quis") {{
                requestBody = new UpdateUserUpdateUserRequest() {{
                    attributes = "nesciunt";
                    friendlyName = "eos";
                    roleSid = "perferendis";
                }};;
            }};            

            UpdateUserResponse res = sdk.sdk.updateUser(req, new UpdateUserSecurity("dolores", "minus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV1ServiceUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
