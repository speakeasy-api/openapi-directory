# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateChannel](#createchannel)
* [CreateCredential](#createcredential)
* [CreateInvite](#createinvite)
* [CreateMember](#createmember)
* [CreateMessage](#createmessage)
* [CreateRole](#createrole)
* [CreateService](#createservice)
* [CreateUser](#createuser)
* [DeleteChannel](#deletechannel)
* [DeleteCredential](#deletecredential)
* [DeleteInvite](#deleteinvite)
* [DeleteMember](#deletemember)
* [DeleteMessage](#deletemessage)
* [DeleteRole](#deleterole)
* [DeleteService](#deleteservice)
* [DeleteUser](#deleteuser)
* [FetchChannel](#fetchchannel)
* [FetchCredential](#fetchcredential)
* [FetchInvite](#fetchinvite)
* [FetchMember](#fetchmember)
* [FetchMessage](#fetchmessage)
* [FetchRole](#fetchrole)
* [FetchService](#fetchservice)
* [FetchUser](#fetchuser)
* [ListChannel](#listchannel)
* [ListCredential](#listcredential)
* [ListInvite](#listinvite)
* [ListMember](#listmember)
* [ListMessage](#listmessage)
* [ListRole](#listrole)
* [ListService](#listservice)
* [ListUser](#listuser)
* [ListUserChannel](#listuserchannel)
* [UpdateChannel](#updatechannel)
* [UpdateCredential](#updatecredential)
* [UpdateMember](#updatemember)
* [UpdateMessage](#updatemessage)
* [UpdateRole](#updaterole)
* [UpdateService](#updateservice)
* [UpdateUser](#updateuser)

## CreateChannel

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateChannel(ctx, operations.CreateChannelRequest{
        RequestBody: &operations.CreateChannelCreateChannelRequest{
            Attributes: sdk.String("nulla"),
            FriendlyName: sdk.String("corrupti"),
            Type: shared.ChannelEnumChannelTypeEnumPrivate.ToPointer(),
            UniqueName: sdk.String("vel"),
        },
        ServiceSid: "error",
    }, operations.CreateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannel != nil {
        // handle response
    }
}
```

## CreateCredential

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateCredential(ctx, operations.CreateCredentialCreateCredentialRequest{
        APIKey: sdk.String("deserunt"),
        Certificate: sdk.String("suscipit"),
        FriendlyName: sdk.String("iure"),
        PrivateKey: sdk.String("magnam"),
        Sandbox: sdk.Bool(false),
        Secret: sdk.String("debitis"),
        Type: shared.CredentialEnumPushServiceEnumGcm,
    }, operations.CreateCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1Credential != nil {
        // handle response
    }
}
```

## CreateInvite

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateInvite(ctx, operations.CreateInviteRequest{
        ChannelSid: "delectus",
        RequestBody: &operations.CreateInviteCreateInviteRequest{
            Identity: "tempora",
            RoleSid: sdk.String("suscipit"),
        },
        ServiceSid: "molestiae",
    }, operations.CreateInviteSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannelInvite != nil {
        // handle response
    }
}
```

## CreateMember

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateMember(ctx, operations.CreateMemberRequest{
        ChannelSid: "minus",
        RequestBody: &operations.CreateMemberCreateMemberRequest{
            Identity: "placeat",
            RoleSid: sdk.String("voluptatum"),
        },
        ServiceSid: "iusto",
    }, operations.CreateMemberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannelMember != nil {
        // handle response
    }
}
```

## CreateMessage

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateMessage(ctx, operations.CreateMessageRequest{
        ChannelSid: "excepturi",
        RequestBody: &operations.CreateMessageCreateMessageRequest{
            Attributes: sdk.String("nisi"),
            Body: "recusandae",
            From: sdk.String("temporibus"),
        },
        ServiceSid: "ab",
    }, operations.CreateMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannelMessage != nil {
        // handle response
    }
}
```

## CreateRole

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateRole(ctx, operations.CreateRoleRequest{
        RequestBody: &operations.CreateRoleCreateRoleRequest{
            FriendlyName: "quis",
            Permission: []string{
                "deserunt",
            },
            Type: shared.RoleEnumRoleTypeEnumChannel,
        },
        ServiceSid: "ipsam",
    }, operations.CreateRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceRole != nil {
        // handle response
    }
}
```

## CreateService

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateService(ctx, operations.CreateServiceCreateServiceRequest{
        FriendlyName: "repellendus",
    }, operations.CreateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1Service != nil {
        // handle response
    }
}
```

## CreateUser

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateUser(ctx, operations.CreateUserRequest{
        RequestBody: &operations.CreateUserCreateUserRequest{
            Attributes: sdk.String("sapiente"),
            FriendlyName: sdk.String("quo"),
            Identity: "odit",
            RoleSid: sdk.String("at"),
        },
        ServiceSid: "at",
    }, operations.CreateUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceUser != nil {
        // handle response
    }
}
```

## DeleteChannel

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteChannel(ctx, operations.DeleteChannelRequest{
        ServiceSid: "maiores",
        Sid: "molestiae",
    }, operations.DeleteChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCredential

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteCredential(ctx, operations.DeleteCredentialRequest{
        Sid: "quod",
    }, operations.DeleteCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteInvite

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteInvite(ctx, operations.DeleteInviteRequest{
        ChannelSid: "quod",
        ServiceSid: "esse",
        Sid: "totam",
    }, operations.DeleteInviteSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMember

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteMember(ctx, operations.DeleteMemberRequest{
        ChannelSid: "porro",
        ServiceSid: "dolorum",
        Sid: "dicta",
    }, operations.DeleteMemberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMessage

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteMessage(ctx, operations.DeleteMessageRequest{
        ChannelSid: "nam",
        ServiceSid: "officia",
        Sid: "occaecati",
    }, operations.DeleteMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRole

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteRole(ctx, operations.DeleteRoleRequest{
        ServiceSid: "fugit",
        Sid: "deleniti",
    }, operations.DeleteRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteService

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteService(ctx, operations.DeleteServiceRequest{
        Sid: "hic",
    }, operations.DeleteServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUser

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteUser(ctx, operations.DeleteUserRequest{
        ServiceSid: "optio",
        Sid: "totam",
    }, operations.DeleteUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchChannel

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchChannel(ctx, operations.FetchChannelRequest{
        ServiceSid: "beatae",
        Sid: "commodi",
    }, operations.FetchChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannel != nil {
        // handle response
    }
}
```

## FetchCredential

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchCredential(ctx, operations.FetchCredentialRequest{
        Sid: "molestiae",
    }, operations.FetchCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1Credential != nil {
        // handle response
    }
}
```

## FetchInvite

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchInvite(ctx, operations.FetchInviteRequest{
        ChannelSid: "modi",
        ServiceSid: "qui",
        Sid: "impedit",
    }, operations.FetchInviteSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannelInvite != nil {
        // handle response
    }
}
```

## FetchMember

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchMember(ctx, operations.FetchMemberRequest{
        ChannelSid: "cum",
        ServiceSid: "esse",
        Sid: "ipsum",
    }, operations.FetchMemberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannelMember != nil {
        // handle response
    }
}
```

## FetchMessage

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchMessage(ctx, operations.FetchMessageRequest{
        ChannelSid: "excepturi",
        ServiceSid: "aspernatur",
        Sid: "perferendis",
    }, operations.FetchMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannelMessage != nil {
        // handle response
    }
}
```

## FetchRole

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchRole(ctx, operations.FetchRoleRequest{
        ServiceSid: "ad",
        Sid: "natus",
    }, operations.FetchRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceRole != nil {
        // handle response
    }
}
```

## FetchService

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchService(ctx, operations.FetchServiceRequest{
        Sid: "sed",
    }, operations.FetchServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1Service != nil {
        // handle response
    }
}
```

## FetchUser

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchUser(ctx, operations.FetchUserRequest{
        ServiceSid: "iste",
        Sid: "dolor",
    }, operations.FetchUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceUser != nil {
        // handle response
    }
}
```

## ListChannel

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListChannel(ctx, operations.ListChannelRequest{
        Page: sdk.Int64(616934),
        PageSize: sdk.Int64(386489),
        PageToken: sdk.String("hic"),
        ServiceSid: "saepe",
        Type: []shared.ChannelEnumChannelTypeEnum{
            shared.ChannelEnumChannelTypeEnumPublic,
            shared.ChannelEnumChannelTypeEnumPublic,
            shared.ChannelEnumChannelTypeEnumPrivate,
        },
    }, operations.ListChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelResponse != nil {
        // handle response
    }
}
```

## ListCredential

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListCredential(ctx, operations.ListCredentialRequest{
        Page: sdk.Int64(437032),
        PageSize: sdk.Int64(902349),
        PageToken: sdk.String("quidem"),
    }, operations.ListCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCredentialResponse != nil {
        // handle response
    }
}
```

## ListInvite

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListInvite(ctx, operations.ListInviteRequest{
        ChannelSid: "architecto",
        Identity: []string{
            "reiciendis",
        },
        Page: sdk.Int64(666767),
        PageSize: sdk.Int64(653140),
        PageToken: sdk.String("laborum"),
        ServiceSid: "dolores",
    }, operations.ListInviteSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInviteResponse != nil {
        // handle response
    }
}
```

## ListMember

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListMember(ctx, operations.ListMemberRequest{
        ChannelSid: "dolorem",
        Identity: []string{
            "explicabo",
            "nobis",
        },
        Page: sdk.Int64(315428),
        PageSize: sdk.Int64(607831),
        PageToken: sdk.String("nemo"),
        ServiceSid: "minima",
    }, operations.ListMemberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMemberResponse != nil {
        // handle response
    }
}
```

## ListMessage

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListMessage(ctx, operations.ListMessageRequest{
        ChannelSid: "excepturi",
        Order: shared.MessageEnumOrderTypeEnumAsc.ToPointer(),
        Page: sdk.Int64(438601),
        PageSize: sdk.Int64(634274),
        PageToken: sdk.String("doloribus"),
        ServiceSid: "sapiente",
    }, operations.ListMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMessageResponse != nil {
        // handle response
    }
}
```

## ListRole

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListRole(ctx, operations.ListRoleRequest{
        Page: sdk.Int64(102044),
        PageSize: sdk.Int64(652790),
        PageToken: sdk.String("dolorem"),
        ServiceSid: "culpa",
    }, operations.ListRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRoleResponse != nil {
        // handle response
    }
}
```

## ListService

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListService(ctx, operations.ListServiceRequest{
        Page: sdk.Int64(161309),
        PageSize: sdk.Int64(995300),
        PageToken: sdk.String("mollitia"),
    }, operations.ListServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceResponse != nil {
        // handle response
    }
}
```

## ListUser

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUser(ctx, operations.ListUserRequest{
        Page: sdk.Int64(581850),
        PageSize: sdk.Int64(253291),
        PageToken: sdk.String("commodi"),
        ServiceSid: "quam",
    }, operations.ListUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserResponse != nil {
        // handle response
    }
}
```

## ListUserChannel

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUserChannel(ctx, operations.ListUserChannelRequest{
        Page: sdk.Int64(474697),
        PageSize: sdk.Int64(244425),
        PageToken: sdk.String("error"),
        ServiceSid: "quia",
        UserSid: "quis",
    }, operations.ListUserChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserChannelResponse != nil {
        // handle response
    }
}
```

## UpdateChannel

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateChannel(ctx, operations.UpdateChannelRequest{
        RequestBody: &operations.UpdateChannelUpdateChannelRequest{
            Attributes: sdk.String("vitae"),
            FriendlyName: sdk.String("laborum"),
            UniqueName: sdk.String("animi"),
        },
        ServiceSid: "enim",
        Sid: "odit",
    }, operations.UpdateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannel != nil {
        // handle response
    }
}
```

## UpdateCredential

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateCredential(ctx, operations.UpdateCredentialRequest{
        RequestBody: &operations.UpdateCredentialUpdateCredentialRequest{
            APIKey: sdk.String("quo"),
            Certificate: sdk.String("sequi"),
            FriendlyName: sdk.String("tenetur"),
            PrivateKey: sdk.String("ipsam"),
            Sandbox: sdk.Bool(false),
            Secret: sdk.String("id"),
        },
        Sid: "possimus",
    }, operations.UpdateCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1Credential != nil {
        // handle response
    }
}
```

## UpdateMember

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateMember(ctx, operations.UpdateMemberRequest{
        ChannelSid: "aut",
        RequestBody: &operations.UpdateMemberUpdateMemberRequest{
            LastConsumedMessageIndex: sdk.Int64(97101),
            RoleSid: sdk.String("error"),
        },
        ServiceSid: "temporibus",
        Sid: "laborum",
    }, operations.UpdateMemberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannelMember != nil {
        // handle response
    }
}
```

## UpdateMessage

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateMessage(ctx, operations.UpdateMessageRequest{
        ChannelSid: "quasi",
        RequestBody: &operations.UpdateMessageUpdateMessageRequest{
            Attributes: sdk.String("reiciendis"),
            Body: sdk.String("voluptatibus"),
        },
        ServiceSid: "vero",
        Sid: "nihil",
    }, operations.UpdateMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannelMessage != nil {
        // handle response
    }
}
```

## UpdateRole

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateRole(ctx, operations.UpdateRoleRequest{
        RequestBody: &operations.UpdateRoleUpdateRoleRequest{
            Permission: []string{
                "voluptatibus",
                "ipsa",
                "omnis",
            },
        },
        ServiceSid: "voluptate",
        Sid: "cum",
    }, operations.UpdateRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceRole != nil {
        // handle response
    }
}
```

## UpdateService

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateService(ctx, operations.UpdateServiceRequest{
        RequestBody: &operations.UpdateServiceUpdateServiceRequest{
            ConsumptionReportInterval: sdk.Int64(19987),
            DefaultChannelCreatorRoleSid: sdk.String("doloremque"),
            DefaultChannelRoleSid: sdk.String("reprehenderit"),
            DefaultServiceRoleSid: sdk.String("ut"),
            FriendlyName: sdk.String("maiores"),
            LimitsChannelMembers: sdk.Int64(120196),
            LimitsUserChannels: sdk.Int64(359444),
            NotificationsAddedToChannelEnabled: sdk.Bool(false),
            NotificationsAddedToChannelTemplate: sdk.String("dolore"),
            NotificationsInvitedToChannelEnabled: sdk.Bool(false),
            NotificationsInvitedToChannelTemplate: sdk.String("iusto"),
            NotificationsNewMessageEnabled: sdk.Bool(false),
            NotificationsNewMessageTemplate: sdk.String("dicta"),
            NotificationsRemovedFromChannelEnabled: sdk.Bool(false),
            NotificationsRemovedFromChannelTemplate: sdk.String("harum"),
            PostWebhookURL: sdk.String("http://unacceptable-hare.org"),
            PreWebhookURL: sdk.String("http://dutiful-printing.name"),
            ReachabilityEnabled: sdk.Bool(false),
            ReadStatusEnabled: sdk.Bool(false),
            TypingIndicatorTimeout: sdk.Int64(566602),
            WebhookFilters: []string{
                "modi",
                "praesentium",
                "rem",
                "voluptates",
            },
            WebhookMethod: operations.UpdateServiceUpdateServiceRequestWebhookMethodEnumHead.ToPointer(),
            WebhooksOnChannelAddMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnumDelete.ToPointer(),
            WebhooksOnChannelAddURL: sdk.String("https://bony-trip.biz"),
            WebhooksOnChannelAddedMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnumGet.ToPointer(),
            WebhooksOnChannelAddedURL: sdk.String("http://quarrelsome-square.com"),
            WebhooksOnChannelDestroyMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnumPatch.ToPointer(),
            WebhooksOnChannelDestroyURL: sdk.String("https://tempting-durian.biz"),
            WebhooksOnChannelDestroyedMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnumGet.ToPointer(),
            WebhooksOnChannelDestroyedURL: sdk.String("http://offensive-melody.com"),
            WebhooksOnChannelUpdateMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnumHead.ToPointer(),
            WebhooksOnChannelUpdateURL: sdk.String("https://hard-accordion.com"),
            WebhooksOnChannelUpdatedMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnumPut.ToPointer(),
            WebhooksOnChannelUpdatedURL: sdk.String("https://far-off-prune.net"),
            WebhooksOnMemberAddMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnumGet.ToPointer(),
            WebhooksOnMemberAddURL: sdk.String("https://infantile-demur.net"),
            WebhooksOnMemberAddedMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnumPatch.ToPointer(),
            WebhooksOnMemberAddedURL: sdk.String("http://optimistic-tenth.name"),
            WebhooksOnMemberRemoveMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnumPatch.ToPointer(),
            WebhooksOnMemberRemoveURL: sdk.String("http://unimportant-venture.net"),
            WebhooksOnMemberRemovedMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnumPost.ToPointer(),
            WebhooksOnMemberRemovedURL: sdk.String("http://thankful-wheat.net"),
            WebhooksOnMessageRemoveMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnumHead.ToPointer(),
            WebhooksOnMessageRemoveURL: sdk.String("http://smoggy-sledge.info"),
            WebhooksOnMessageRemovedMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnumPost.ToPointer(),
            WebhooksOnMessageRemovedURL: sdk.String("https://unaware-department.name"),
            WebhooksOnMessageSendMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnumGet.ToPointer(),
            WebhooksOnMessageSendURL: sdk.String("https://white-printing.name"),
            WebhooksOnMessageSentMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnumPut.ToPointer(),
            WebhooksOnMessageSentURL: sdk.String("https://lost-mailman.org"),
            WebhooksOnMessageUpdateMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnumGet.ToPointer(),
            WebhooksOnMessageUpdateURL: sdk.String("https://humble-hello.name"),
            WebhooksOnMessageUpdatedMethod: operations.UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnumPatch.ToPointer(),
            WebhooksOnMessageUpdatedURL: sdk.String("http://aggressive-interject.biz"),
        },
        Sid: "distinctio",
    }, operations.UpdateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1Service != nil {
        // handle response
    }
}
```

## UpdateUser

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUser(ctx, operations.UpdateUserRequest{
        RequestBody: &operations.UpdateUserUpdateUserRequest{
            Attributes: sdk.String("id"),
            FriendlyName: sdk.String("labore"),
            RoleSid: sdk.String("labore"),
        },
        ServiceSid: "suscipit",
        Sid: "natus",
    }, operations.UpdateUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceUser != nil {
        // handle response
    }
}
```
