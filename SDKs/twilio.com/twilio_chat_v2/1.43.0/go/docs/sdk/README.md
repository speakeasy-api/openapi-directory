# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateChannel](#createchannel)
* [CreateChannelWebhook](#createchannelwebhook)
* [CreateCredential](#createcredential)
* [CreateInvite](#createinvite)
* [CreateMember](#createmember)
* [CreateMessage](#createmessage)
* [CreateRole](#createrole)
* [CreateService](#createservice)
* [CreateUser](#createuser)
* [DeleteBinding](#deletebinding)
* [DeleteChannel](#deletechannel)
* [DeleteChannelWebhook](#deletechannelwebhook)
* [DeleteCredential](#deletecredential)
* [DeleteInvite](#deleteinvite)
* [DeleteMember](#deletemember)
* [DeleteMessage](#deletemessage)
* [DeleteRole](#deleterole)
* [DeleteService](#deleteservice)
* [DeleteUser](#deleteuser)
* [DeleteUserBinding](#deleteuserbinding)
* [DeleteUserChannel](#deleteuserchannel) - Removes User from selected Channel.
* [FetchBinding](#fetchbinding)
* [FetchChannel](#fetchchannel)
* [FetchChannelWebhook](#fetchchannelwebhook)
* [FetchCredential](#fetchcredential)
* [FetchInvite](#fetchinvite)
* [FetchMember](#fetchmember)
* [FetchMessage](#fetchmessage)
* [FetchRole](#fetchrole)
* [FetchService](#fetchservice)
* [FetchUser](#fetchuser)
* [FetchUserBinding](#fetchuserbinding)
* [FetchUserChannel](#fetchuserchannel)
* [ListBinding](#listbinding)
* [ListChannel](#listchannel)
* [ListChannelWebhook](#listchannelwebhook)
* [ListCredential](#listcredential)
* [ListInvite](#listinvite)
* [ListMember](#listmember)
* [ListMessage](#listmessage)
* [ListRole](#listrole)
* [ListService](#listservice)
* [ListUser](#listuser)
* [ListUserBinding](#listuserbinding)
* [ListUserChannel](#listuserchannel) - List all Channels for a given User.
* [UpdateChannel](#updatechannel)
* [UpdateChannelWebhook](#updatechannelwebhook)
* [UpdateCredential](#updatecredential)
* [UpdateMember](#updatemember)
* [UpdateMessage](#updatemessage)
* [UpdateRole](#updaterole)
* [UpdateService](#updateservice)
* [UpdateUser](#updateuser)
* [UpdateUserChannel](#updateuserchannel)

## CreateChannel

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateChannel(ctx, operations.CreateChannelRequest{
        RequestBody: &operations.CreateChannelCreateChannelRequest{
            Attributes: sdk.String("suscipit"),
            CreatedBy: sdk.String("iure"),
            DateCreated: types.MustTimeFromString("2022-02-09T12:04:06.508Z"),
            DateUpdated: types.MustTimeFromString("2022-01-14T06:18:51.036Z"),
            FriendlyName: sdk.String("tempora"),
            Type: shared.ChannelEnumChannelTypeEnumPublic.ToPointer(),
            UniqueName: sdk.String("molestiae"),
        },
        ServiceSid: "minus",
        XTwilioWebhookEnabled: shared.ChannelEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.CreateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannel != nil {
        // handle response
    }
}
```

## CreateChannelWebhook

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
    res, err := s.SDK.CreateChannelWebhook(ctx, operations.CreateChannelWebhookRequest{
        ChannelSid: "voluptatum",
        RequestBody: &operations.CreateChannelWebhookCreateChannelWebhookRequest{
            ConfigurationFilters: []string{
                "excepturi",
                "nisi",
            },
            ConfigurationFlowSid: sdk.String("recusandae"),
            ConfigurationMethod: shared.ChannelWebhookEnumMethodEnumPost.ToPointer(),
            ConfigurationRetryCount: sdk.Int64(71036),
            ConfigurationTriggers: []string{
                "veritatis",
                "deserunt",
            },
            ConfigurationURL: sdk.String("perferendis"),
            Type: shared.ChannelWebhookEnumTypeEnumTrigger,
        },
        ServiceSid: "repellendus",
    }, operations.CreateChannelWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannelChannelWebhook != nil {
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
        APIKey: sdk.String("sapiente"),
        Certificate: sdk.String("quo"),
        FriendlyName: sdk.String("odit"),
        PrivateKey: sdk.String("at"),
        Sandbox: sdk.Bool(false),
        Secret: sdk.String("at"),
        Type: shared.CredentialEnumPushServiceEnumFcm,
    }, operations.CreateCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2Credential != nil {
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
        ChannelSid: "molestiae",
        RequestBody: &operations.CreateInviteCreateInviteRequest{
            Identity: "quod",
            RoleSid: sdk.String("quod"),
        },
        ServiceSid: "esse",
    }, operations.CreateInviteSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannelInvite != nil {
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
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateMember(ctx, operations.CreateMemberRequest{
        ChannelSid: "totam",
        RequestBody: &operations.CreateMemberCreateMemberRequest{
            Attributes: sdk.String("porro"),
            DateCreated: types.MustTimeFromString("2022-10-06T15:49:54.663Z"),
            DateUpdated: types.MustTimeFromString("2021-09-20T20:35:01.256Z"),
            Identity: "occaecati",
            LastConsumedMessageIndex: sdk.Int64(143353),
            LastConsumptionTimestamp: types.MustTimeFromString("2021-02-10T09:24:01.909Z"),
            RoleSid: sdk.String("optio"),
        },
        ServiceSid: "totam",
        XTwilioWebhookEnabled: shared.MemberEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.CreateMemberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannelMember != nil {
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
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateMessage(ctx, operations.CreateMessageRequest{
        ChannelSid: "commodi",
        RequestBody: &operations.CreateMessageCreateMessageRequest{
            Attributes: sdk.String("molestiae"),
            Body: sdk.String("modi"),
            DateCreated: types.MustTimeFromString("2022-03-24T09:42:46.236Z"),
            DateUpdated: types.MustTimeFromString("2022-02-02T00:14:45.467Z"),
            From: sdk.String("ipsum"),
            LastUpdatedBy: sdk.String("excepturi"),
            MediaSid: sdk.String("aspernatur"),
        },
        ServiceSid: "perferendis",
        XTwilioWebhookEnabled: shared.MessageEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.CreateMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannelMessage != nil {
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
            FriendlyName: "natus",
            Permission: []string{
                "iste",
            },
            Type: shared.RoleEnumRoleTypeEnumChannel,
        },
        ServiceSid: "natus",
    }, operations.CreateRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceRole != nil {
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
        FriendlyName: "laboriosam",
    }, operations.CreateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2Service != nil {
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateUser(ctx, operations.CreateUserRequest{
        RequestBody: &operations.CreateUserCreateUserRequest{
            Attributes: sdk.String("hic"),
            FriendlyName: sdk.String("saepe"),
            Identity: "fuga",
            RoleSid: sdk.String("in"),
        },
        ServiceSid: "corporis",
        XTwilioWebhookEnabled: shared.UserEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.CreateUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceUser != nil {
        // handle response
    }
}
```

## DeleteBinding

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
    res, err := s.SDK.DeleteBinding(ctx, operations.DeleteBindingRequest{
        ServiceSid: "iure",
        Sid: "saepe",
    }, operations.DeleteBindingSecurity{
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

## DeleteChannel

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
    res, err := s.SDK.DeleteChannel(ctx, operations.DeleteChannelRequest{
        ServiceSid: "quidem",
        Sid: "architecto",
        XTwilioWebhookEnabled: shared.ChannelEnumWebhookEnabledTypeEnumTrue.ToPointer(),
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

## DeleteChannelWebhook

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
    res, err := s.SDK.DeleteChannelWebhook(ctx, operations.DeleteChannelWebhookRequest{
        ChannelSid: "reiciendis",
        ServiceSid: "est",
        Sid: "mollitia",
    }, operations.DeleteChannelWebhookSecurity{
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
        Sid: "laborum",
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
        ChannelSid: "dolores",
        ServiceSid: "dolorem",
        Sid: "corporis",
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteMember(ctx, operations.DeleteMemberRequest{
        ChannelSid: "explicabo",
        ServiceSid: "nobis",
        Sid: "enim",
        XTwilioWebhookEnabled: shared.MemberEnumWebhookEnabledTypeEnumFalse.ToPointer(),
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteMessage(ctx, operations.DeleteMessageRequest{
        ChannelSid: "nemo",
        ServiceSid: "minima",
        Sid: "excepturi",
        XTwilioWebhookEnabled: shared.MessageEnumWebhookEnabledTypeEnumTrue.ToPointer(),
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
        ServiceSid: "iure",
        Sid: "culpa",
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
        Sid: "doloribus",
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
        ServiceSid: "sapiente",
        Sid: "architecto",
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

## DeleteUserBinding

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
    res, err := s.SDK.DeleteUserBinding(ctx, operations.DeleteUserBindingRequest{
        ServiceSid: "mollitia",
        Sid: "dolorem",
        UserSid: "culpa",
    }, operations.DeleteUserBindingSecurity{
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

## DeleteUserChannel

Removes User from selected Channel.

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
    res, err := s.SDK.DeleteUserChannel(ctx, operations.DeleteUserChannelRequest{
        ChannelSid: "consequuntur",
        ServiceSid: "repellat",
        UserSid: "mollitia",
        XTwilioWebhookEnabled: shared.UserChannelEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.DeleteUserChannelSecurity{
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

## FetchBinding

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
    res, err := s.SDK.FetchBinding(ctx, operations.FetchBindingRequest{
        ServiceSid: "numquam",
        Sid: "commodi",
    }, operations.FetchBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceBinding != nil {
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
        ServiceSid: "quam",
        Sid: "molestiae",
    }, operations.FetchChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannel != nil {
        // handle response
    }
}
```

## FetchChannelWebhook

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
    res, err := s.SDK.FetchChannelWebhook(ctx, operations.FetchChannelWebhookRequest{
        ChannelSid: "velit",
        ServiceSid: "error",
        Sid: "quia",
    }, operations.FetchChannelWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannelChannelWebhook != nil {
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
        Sid: "quis",
    }, operations.FetchCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2Credential != nil {
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
        ChannelSid: "vitae",
        ServiceSid: "laborum",
        Sid: "animi",
    }, operations.FetchInviteSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannelInvite != nil {
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
        ChannelSid: "enim",
        ServiceSid: "odit",
        Sid: "quo",
    }, operations.FetchMemberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannelMember != nil {
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
        ChannelSid: "sequi",
        ServiceSid: "tenetur",
        Sid: "ipsam",
    }, operations.FetchMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannelMessage != nil {
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
        ServiceSid: "id",
        Sid: "possimus",
    }, operations.FetchRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceRole != nil {
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
        Sid: "aut",
    }, operations.FetchServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2Service != nil {
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
        ServiceSid: "quasi",
        Sid: "error",
    }, operations.FetchUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceUser != nil {
        // handle response
    }
}
```

## FetchUserBinding

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
    res, err := s.SDK.FetchUserBinding(ctx, operations.FetchUserBindingRequest{
        ServiceSid: "temporibus",
        Sid: "laborum",
        UserSid: "quasi",
    }, operations.FetchUserBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceUserUserBinding != nil {
        // handle response
    }
}
```

## FetchUserChannel

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
    res, err := s.SDK.FetchUserChannel(ctx, operations.FetchUserChannelRequest{
        ChannelSid: "reiciendis",
        ServiceSid: "voluptatibus",
        UserSid: "vero",
    }, operations.FetchUserChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceUserUserChannel != nil {
        // handle response
    }
}
```

## ListBinding

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
    res, err := s.SDK.ListBinding(ctx, operations.ListBindingRequest{
        BindingType: []shared.BindingEnumBindingTypeEnum{
            shared.BindingEnumBindingTypeEnumApn,
            shared.BindingEnumBindingTypeEnumFcm,
        },
        Identity: []string{
            "omnis",
        },
        Page: sdk.Int64(451159),
        PageSize: sdk.Int64(739264),
        PageToken: sdk.String("perferendis"),
        ServiceSid: "doloremque",
    }, operations.ListBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBindingResponse != nil {
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
        Page: sdk.Int64(441711),
        PageSize: sdk.Int64(282807),
        PageToken: sdk.String("maiores"),
        ServiceSid: "dicta",
        Type: []shared.ChannelEnumChannelTypeEnum{
            shared.ChannelEnumChannelTypeEnumPublic,
            shared.ChannelEnumChannelTypeEnumPublic,
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

## ListChannelWebhook

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
    res, err := s.SDK.ListChannelWebhook(ctx, operations.ListChannelWebhookRequest{
        ChannelSid: "dicta",
        Page: sdk.Int64(688661),
        PageSize: sdk.Int64(317983),
        PageToken: sdk.String("accusamus"),
        ServiceSid: "commodi",
    }, operations.ListChannelWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelWebhookResponse != nil {
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
        Page: sdk.Int64(918236),
        PageSize: sdk.Int64(64147),
        PageToken: sdk.String("ipsum"),
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
        ChannelSid: "quidem",
        Identity: []string{
            "excepturi",
            "pariatur",
            "modi",
        },
        Page: sdk.Int64(508969),
        PageSize: sdk.Int64(523248),
        PageToken: sdk.String("voluptates"),
        ServiceSid: "quasi",
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
        ChannelSid: "repudiandae",
        Identity: []string{
            "veritatis",
            "itaque",
            "incidunt",
        },
        Page: sdk.Int64(318569),
        PageSize: sdk.Int64(9356),
        PageToken: sdk.String("est"),
        ServiceSid: "quibusdam",
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
        ChannelSid: "explicabo",
        Order: shared.MessageEnumOrderTypeEnumDesc.ToPointer(),
        Page: sdk.Int64(716327),
        PageSize: sdk.Int64(841386),
        PageToken: sdk.String("labore"),
        ServiceSid: "modi",
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
        Page: sdk.Int64(183191),
        PageSize: sdk.Int64(397821),
        PageToken: sdk.String("cupiditate"),
        ServiceSid: "quos",
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
        Page: sdk.Int64(20107),
        PageSize: sdk.Int64(164940),
        PageToken: sdk.String("assumenda"),
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
        Page: sdk.Int64(369808),
        PageSize: sdk.Int64(4695),
        PageToken: sdk.String("fugit"),
        ServiceSid: "dolorum",
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

## ListUserBinding

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
    res, err := s.SDK.ListUserBinding(ctx, operations.ListUserBindingRequest{
        BindingType: []shared.UserBindingEnumBindingTypeEnum{
            shared.UserBindingEnumBindingTypeEnumGcm,
            shared.UserBindingEnumBindingTypeEnumFcm,
            shared.UserBindingEnumBindingTypeEnumFcm,
        },
        Page: sdk.Int64(288476),
        PageSize: sdk.Int64(962189),
        PageToken: sdk.String("eum"),
        ServiceSid: "non",
        UserSid: "eligendi",
    }, operations.ListUserBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserBindingResponse != nil {
        // handle response
    }
}
```

## ListUserChannel

List all Channels for a given User.

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
        Page: sdk.Int64(576157),
        PageSize: sdk.Int64(396098),
        PageToken: sdk.String("provident"),
        ServiceSid: "necessitatibus",
        UserSid: "sint",
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
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateChannel(ctx, operations.UpdateChannelRequest{
        RequestBody: &operations.UpdateChannelUpdateChannelRequest{
            Attributes: sdk.String("officia"),
            CreatedBy: sdk.String("dolor"),
            DateCreated: types.MustTimeFromString("2020-02-22T17:45:21.686Z"),
            DateUpdated: types.MustTimeFromString("2022-02-08T14:21:47.573Z"),
            FriendlyName: sdk.String("in"),
            UniqueName: sdk.String("illum"),
        },
        ServiceSid: "maiores",
        Sid: "rerum",
        XTwilioWebhookEnabled: shared.ChannelEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.UpdateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannel != nil {
        // handle response
    }
}
```

## UpdateChannelWebhook

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
    res, err := s.SDK.UpdateChannelWebhook(ctx, operations.UpdateChannelWebhookRequest{
        ChannelSid: "magnam",
        RequestBody: &operations.UpdateChannelWebhookUpdateChannelWebhookRequest{
            ConfigurationFilters: []string{
                "facere",
                "ea",
                "aliquid",
                "laborum",
            },
            ConfigurationFlowSid: sdk.String("accusamus"),
            ConfigurationMethod: shared.ChannelWebhookEnumMethodEnumGet.ToPointer(),
            ConfigurationRetryCount: sdk.Int64(581273),
            ConfigurationTriggers: []string{
                "accusamus",
                "delectus",
            },
            ConfigurationURL: sdk.String("quidem"),
        },
        ServiceSid: "provident",
        Sid: "nam",
    }, operations.UpdateChannelWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannelChannelWebhook != nil {
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
            APIKey: sdk.String("id"),
            Certificate: sdk.String("blanditiis"),
            FriendlyName: sdk.String("deleniti"),
            PrivateKey: sdk.String("sapiente"),
            Sandbox: sdk.Bool(false),
            Secret: sdk.String("amet"),
        },
        Sid: "deserunt",
    }, operations.UpdateCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2Credential != nil {
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
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateMember(ctx, operations.UpdateMemberRequest{
        ChannelSid: "nisi",
        RequestBody: &operations.UpdateMemberUpdateMemberRequest{
            Attributes: sdk.String("vel"),
            DateCreated: types.MustTimeFromString("2021-10-15T07:59:26.631Z"),
            DateUpdated: types.MustTimeFromString("2022-12-24T23:52:02.245Z"),
            LastConsumedMessageIndex: sdk.Int64(470132),
            LastConsumptionTimestamp: types.MustTimeFromString("2022-04-14T15:11:13.227Z"),
            RoleSid: sdk.String("id"),
        },
        ServiceSid: "labore",
        Sid: "labore",
        XTwilioWebhookEnabled: shared.MemberEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.UpdateMemberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannelMember != nil {
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
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateMessage(ctx, operations.UpdateMessageRequest{
        ChannelSid: "natus",
        RequestBody: &operations.UpdateMessageUpdateMessageRequest{
            Attributes: sdk.String("nobis"),
            Body: sdk.String("eum"),
            DateCreated: types.MustTimeFromString("2022-08-05T15:44:28.456Z"),
            DateUpdated: types.MustTimeFromString("2022-09-14T03:02:47.808Z"),
            From: sdk.String("et"),
            LastUpdatedBy: sdk.String("excepturi"),
        },
        ServiceSid: "ullam",
        Sid: "provident",
        XTwilioWebhookEnabled: shared.MessageEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.UpdateMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannelMessage != nil {
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
                "accusantium",
                "mollitia",
                "reiciendis",
            },
        },
        ServiceSid: "mollitia",
        Sid: "ad",
    }, operations.UpdateRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceRole != nil {
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
            ConsumptionReportInterval: sdk.Int64(431418),
            DefaultChannelCreatorRoleSid: sdk.String("dolor"),
            DefaultChannelRoleSid: sdk.String("necessitatibus"),
            DefaultServiceRoleSid: sdk.String("odit"),
            FriendlyName: sdk.String("nemo"),
            LimitsChannelMembers: sdk.Int64(97260),
            LimitsUserChannels: sdk.Int64(435865),
            MediaCompatibilityMessage: sdk.String("doloribus"),
            NotificationsAddedToChannelEnabled: sdk.Bool(false),
            NotificationsAddedToChannelSound: sdk.String("debitis"),
            NotificationsAddedToChannelTemplate: sdk.String("eius"),
            NotificationsInvitedToChannelEnabled: sdk.Bool(false),
            NotificationsInvitedToChannelSound: sdk.String("maxime"),
            NotificationsInvitedToChannelTemplate: sdk.String("deleniti"),
            NotificationsLogEnabled: sdk.Bool(false),
            NotificationsNewMessageBadgeCountEnabled: sdk.Bool(false),
            NotificationsNewMessageEnabled: sdk.Bool(false),
            NotificationsNewMessageSound: sdk.String("facilis"),
            NotificationsNewMessageTemplate: sdk.String("in"),
            NotificationsRemovedFromChannelEnabled: sdk.Bool(false),
            NotificationsRemovedFromChannelSound: sdk.String("architecto"),
            NotificationsRemovedFromChannelTemplate: sdk.String("architecto"),
            PostWebhookRetryCount: sdk.Int64(919483),
            PostWebhookURL: sdk.String("http://safe-interconnection.org"),
            PreWebhookRetryCount: sdk.Int64(841140),
            PreWebhookURL: sdk.String("http://untimely-suicide.com"),
            ReachabilityEnabled: sdk.Bool(false),
            ReadStatusEnabled: sdk.Bool(false),
            TypingIndicatorTimeout: sdk.Int64(162493),
            WebhookFilters: []string{
                "natus",
                "magni",
                "sunt",
            },
            WebhookMethod: operations.UpdateServiceUpdateServiceRequestWebhookMethodEnumPut.ToPointer(),
        },
        Sid: "illum",
    }, operations.UpdateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2Service != nil {
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUser(ctx, operations.UpdateUserRequest{
        RequestBody: &operations.UpdateUserUpdateUserRequest{
            Attributes: sdk.String("pariatur"),
            FriendlyName: sdk.String("maxime"),
            RoleSid: sdk.String("ea"),
        },
        ServiceSid: "excepturi",
        Sid: "odit",
        XTwilioWebhookEnabled: shared.UserEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.UpdateUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceUser != nil {
        // handle response
    }
}
```

## UpdateUserChannel

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateUserChannel(ctx, operations.UpdateUserChannelRequest{
        ChannelSid: "accusantium",
        RequestBody: &operations.UpdateUserChannelUpdateUserChannelRequest{
            LastConsumedMessageIndex: sdk.Int64(69167),
            LastConsumptionTimestamp: types.MustTimeFromString("2020-11-28T07:34:18.392Z"),
            NotificationLevel: shared.UserChannelEnumNotificationLevelEnumDefault.ToPointer(),
        },
        ServiceSid: "voluptate",
        UserSid: "autem",
    }, operations.UpdateUserChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceUserUserChannel != nil {
        // handle response
    }
}
```
