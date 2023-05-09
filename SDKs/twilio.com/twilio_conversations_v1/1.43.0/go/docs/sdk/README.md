# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateConfigurationAddress](#createconfigurationaddress) - Create a new address configuration
* [CreateConversation](#createconversation) - Create a new conversation in your account's default service
* [CreateConversationMessage](#createconversationmessage) - Add a new message to the conversation
* [CreateConversationParticipant](#createconversationparticipant) - Add a new participant to the conversation
* [CreateConversationScopedWebhook](#createconversationscopedwebhook) - Create a new webhook scoped to the conversation
* [CreateCredential](#createcredential) - Add a new push notification credential to your account
* [CreateRole](#createrole) - Create a new user role in your account's default service
* [CreateService](#createservice) - Create a new conversation service on your account
* [CreateServiceConversation](#createserviceconversation) - Create a new conversation in your service
* [CreateServiceConversationMessage](#createserviceconversationmessage) - Add a new message to the conversation in a specific service
* [CreateServiceConversationParticipant](#createserviceconversationparticipant) - Add a new participant to the conversation in a specific service
* [CreateServiceConversationScopedWebhook](#createserviceconversationscopedwebhook) - Create a new webhook scoped to the conversation in a specific service
* [CreateServiceRole](#createservicerole) - Create a new user role in your service
* [CreateServiceUser](#createserviceuser) - Add a new conversation user to your service
* [CreateUser](#createuser) - Add a new conversation user to your account's default service
* [DeleteConfigurationAddress](#deleteconfigurationaddress) - Remove an existing address configuration
* [DeleteConversation](#deleteconversation) - Remove a conversation from your account's default service
* [DeleteConversationMessage](#deleteconversationmessage) - Remove a message from the conversation
* [DeleteConversationParticipant](#deleteconversationparticipant) - Remove a participant from the conversation
* [DeleteConversationScopedWebhook](#deleteconversationscopedwebhook) - Remove an existing webhook scoped to the conversation
* [DeleteCredential](#deletecredential) - Remove a push notification credential from your account
* [DeleteRole](#deleterole) - Remove a user role from your account's default service
* [DeleteService](#deleteservice) - Remove a conversation service with all its nested resources from your account
* [DeleteServiceBinding](#deleteservicebinding) - Remove a push notification binding from the conversation service
* [DeleteServiceConversation](#deleteserviceconversation) - Remove a conversation from your service
* [DeleteServiceConversationMessage](#deleteserviceconversationmessage) - Remove a message from the conversation
* [DeleteServiceConversationParticipant](#deleteserviceconversationparticipant) - Remove a participant from the conversation
* [DeleteServiceConversationScopedWebhook](#deleteserviceconversationscopedwebhook) - Remove an existing webhook scoped to the conversation
* [DeleteServiceRole](#deleteservicerole) - Remove a user role from your service
* [DeleteServiceUser](#deleteserviceuser) - Remove a conversation user from your service
* [DeleteServiceUserConversation](#deleteserviceuserconversation) - Delete a specific User Conversation.
* [DeleteUser](#deleteuser) - Remove a conversation user from your account's default service
* [DeleteUserConversation](#deleteuserconversation) - Delete a specific User Conversation.
* [FetchConfiguration](#fetchconfiguration) - Fetch the global configuration of conversations on your account
* [FetchConfigurationAddress](#fetchconfigurationaddress) - Fetch an address configuration 
* [FetchConfigurationWebhook](#fetchconfigurationwebhook)
* [FetchConversation](#fetchconversation) - Fetch a conversation from your account's default service
* [FetchConversationMessage](#fetchconversationmessage) - Fetch a message from the conversation
* [FetchConversationMessageReceipt](#fetchconversationmessagereceipt) - Fetch the delivery and read receipts of the conversation message
* [FetchConversationParticipant](#fetchconversationparticipant) - Fetch a participant of the conversation
* [FetchConversationScopedWebhook](#fetchconversationscopedwebhook) - Fetch the configuration of a conversation-scoped webhook
* [FetchCredential](#fetchcredential) - Fetch a push notification credential from your account
* [FetchRole](#fetchrole) - Fetch a user role from your account's default service
* [FetchService](#fetchservice) - Fetch a conversation service from your account
* [FetchServiceBinding](#fetchservicebinding) - Fetch a push notification binding from the conversation service
* [FetchServiceConfiguration](#fetchserviceconfiguration) - Fetch the configuration of a conversation service
* [FetchServiceConversation](#fetchserviceconversation) - Fetch a conversation from your service
* [FetchServiceConversationMessage](#fetchserviceconversationmessage) - Fetch a message from the conversation
* [FetchServiceConversationMessageReceipt](#fetchserviceconversationmessagereceipt) - Fetch the delivery and read receipts of the conversation message
* [FetchServiceConversationParticipant](#fetchserviceconversationparticipant) - Fetch a participant of the conversation
* [FetchServiceConversationScopedWebhook](#fetchserviceconversationscopedwebhook) - Fetch the configuration of a conversation-scoped webhook
* [FetchServiceNotification](#fetchservicenotification) - Fetch push notification service settings
* [FetchServiceRole](#fetchservicerole) - Fetch a user role from your service
* [FetchServiceUser](#fetchserviceuser) - Fetch a conversation user from your service
* [FetchServiceUserConversation](#fetchserviceuserconversation) - Fetch a specific User Conversation.
* [FetchServiceWebhookConfiguration](#fetchservicewebhookconfiguration) - Fetch a specific service webhook configuration.
* [FetchUser](#fetchuser) - Fetch a conversation user from your account's default service
* [FetchUserConversation](#fetchuserconversation) - Fetch a specific User Conversation.
* [ListConfigurationAddress](#listconfigurationaddress) - Retrieve a list of address configurations for an account
* [ListConversation](#listconversation) - Retrieve a list of conversations in your account's default service
* [ListConversationMessage](#listconversationmessage) - Retrieve a list of all messages in the conversation
* [ListConversationMessageReceipt](#listconversationmessagereceipt) - Retrieve a list of all delivery and read receipts of the conversation message
* [ListConversationParticipant](#listconversationparticipant) - Retrieve a list of all participants of the conversation
* [ListConversationScopedWebhook](#listconversationscopedwebhook) - Retrieve a list of all webhooks scoped to the conversation
* [ListCredential](#listcredential) - Retrieve a list of all push notification credentials on your account
* [ListParticipantConversation](#listparticipantconversation) - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* [ListRole](#listrole) - Retrieve a list of all user roles in your account's default service
* [ListService](#listservice) - Retrieve a list of all conversation services on your account
* [ListServiceBinding](#listservicebinding) - Retrieve a list of all push notification bindings in the conversation service
* [ListServiceConversation](#listserviceconversation) - Retrieve a list of conversations in your service
* [ListServiceConversationMessage](#listserviceconversationmessage) - Retrieve a list of all messages in the conversation
* [ListServiceConversationMessageReceipt](#listserviceconversationmessagereceipt) - Retrieve a list of all delivery and read receipts of the conversation message
* [ListServiceConversationParticipant](#listserviceconversationparticipant) - Retrieve a list of all participants of the conversation
* [ListServiceConversationScopedWebhook](#listserviceconversationscopedwebhook) - Retrieve a list of all webhooks scoped to the conversation
* [ListServiceParticipantConversation](#listserviceparticipantconversation) - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* [ListServiceRole](#listservicerole) - Retrieve a list of all user roles in your service
* [ListServiceUser](#listserviceuser) - Retrieve a list of all conversation users in your service
* [ListServiceUserConversation](#listserviceuserconversation) - Retrieve a list of all User Conversations for the User.
* [ListUser](#listuser) - Retrieve a list of all conversation users in your account's default service
* [ListUserConversation](#listuserconversation) - Retrieve a list of all User Conversations for the User.
* [UpdateConfiguration](#updateconfiguration) - Update the global configuration of conversations on your account
* [UpdateConfigurationAddress](#updateconfigurationaddress) - Update an existing address configuration
* [UpdateConfigurationWebhook](#updateconfigurationwebhook)
* [UpdateConversation](#updateconversation) - Update an existing conversation in your account's default service
* [UpdateConversationMessage](#updateconversationmessage) - Update an existing message in the conversation
* [UpdateConversationParticipant](#updateconversationparticipant) - Update an existing participant in the conversation
* [UpdateConversationScopedWebhook](#updateconversationscopedwebhook) - Update an existing conversation-scoped webhook
* [UpdateCredential](#updatecredential) - Update an existing push notification credential on your account
* [UpdateRole](#updaterole) - Update an existing user role in your account's default service
* [UpdateServiceConfiguration](#updateserviceconfiguration) - Update configuration settings of a conversation service
* [UpdateServiceConversation](#updateserviceconversation) - Update an existing conversation in your service
* [UpdateServiceConversationMessage](#updateserviceconversationmessage) - Update an existing message in the conversation
* [UpdateServiceConversationParticipant](#updateserviceconversationparticipant) - Update an existing participant in the conversation
* [UpdateServiceConversationScopedWebhook](#updateserviceconversationscopedwebhook) - Update an existing conversation-scoped webhook
* [UpdateServiceNotification](#updateservicenotification) - Update push notification service settings
* [UpdateServiceRole](#updateservicerole) - Update an existing user role in your service
* [UpdateServiceUser](#updateserviceuser) - Update an existing conversation user in your service
* [UpdateServiceUserConversation](#updateserviceuserconversation) - Update a specific User Conversation.
* [UpdateServiceWebhookConfiguration](#updateservicewebhookconfiguration) - Update a specific Webhook.
* [UpdateUser](#updateuser) - Update an existing conversation user in your account's default service
* [UpdateUserConversation](#updateuserconversation) - Update a specific User Conversation.

## CreateConfigurationAddress

Create a new address configuration

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
    res, err := s.SDK.CreateConfigurationAddress(ctx, operations.CreateConfigurationAddressCreateConfigurationAddressRequest{
        Address: "7854 Huel Via",
        AutoCreationConversationServiceSid: sdk.String("temporibus"),
        AutoCreationEnabled: sdk.Bool(false),
        AutoCreationStudioFlowSid: sdk.String("ab"),
        AutoCreationStudioRetryCount: sdk.Int64(337396),
        AutoCreationType: shared.ConfigurationAddressEnumAutoCreationTypeEnumWebhook.ToPointer(),
        AutoCreationWebhookFilters: []string{
            "perferendis",
            "ipsam",
            "repellendus",
        },
        AutoCreationWebhookMethod: shared.ConfigurationAddressEnumMethodEnumPost.ToPointer(),
        AutoCreationWebhookURL: sdk.String("quo"),
        FriendlyName: sdk.String("odit"),
        Type: shared.ConfigurationAddressEnumTypeEnumGbm,
    }, operations.CreateConfigurationAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConfigurationAddress != nil {
        // handle response
    }
}
```

## CreateConversation

Create a new conversation in your account's default service

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
    res, err := s.SDK.CreateConversation(ctx, operations.CreateConversationRequest{
        RequestBody: &operations.CreateConversationCreateConversationRequest{
            Attributes: sdk.String("at"),
            DateCreated: types.MustTimeFromString("2021-07-31T09:34:50.024Z"),
            DateUpdated: types.MustTimeFromString("2020-08-07T00:03:55.328Z"),
            FriendlyName: sdk.String("esse"),
            MessagingServiceSid: sdk.String("totam"),
            State: shared.ConversationEnumStateEnumClosed.ToPointer(),
            TimersClosed: sdk.String("dolorum"),
            TimersInactive: sdk.String("dicta"),
            UniqueName: sdk.String("nam"),
        },
        XTwilioWebhookEnabled: shared.ConversationEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.CreateConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Conversation != nil {
        // handle response
    }
}
```

## CreateConversationMessage

Add a new message to the conversation

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
    res, err := s.SDK.CreateConversationMessage(ctx, operations.CreateConversationMessageRequest{
        ConversationSid: "occaecati",
        RequestBody: &operations.CreateConversationMessageCreateConversationMessageRequest{
            Attributes: sdk.String("fugit"),
            Author: sdk.String("deleniti"),
            Body: sdk.String("hic"),
            ContentSid: sdk.String("optio"),
            ContentVariables: sdk.String("totam"),
            DateCreated: types.MustTimeFromString("2022-08-02T15:33:40.440Z"),
            DateUpdated: types.MustTimeFromString("2022-09-26T10:29:33.503Z"),
            MediaSid: sdk.String("qui"),
        },
        XTwilioWebhookEnabled: shared.ConversationMessageEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.CreateConversationMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConversationConversationMessage != nil {
        // handle response
    }
}
```

## CreateConversationParticipant

Add a new participant to the conversation

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
    res, err := s.SDK.CreateConversationParticipant(ctx, operations.CreateConversationParticipantRequest{
        ConversationSid: "cum",
        RequestBody: &operations.CreateConversationParticipantCreateConversationParticipantRequest{
            Attributes: sdk.String("esse"),
            DateCreated: types.MustTimeFromString("2022-06-07T12:31:06.574Z"),
            DateUpdated: types.MustTimeFromString("2022-12-25T03:24:03.949Z"),
            Identity: sdk.String("ad"),
            MessagingBindingAddress: sdk.String("natus"),
            MessagingBindingProjectedAddress: sdk.String("sed"),
            MessagingBindingProxyAddress: sdk.String("iste"),
            RoleSid: sdk.String("dolor"),
        },
        XTwilioWebhookEnabled: shared.ConversationParticipantEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.CreateConversationParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConversationConversationParticipant != nil {
        // handle response
    }
}
```

## CreateConversationScopedWebhook

Create a new webhook scoped to the conversation

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
    res, err := s.SDK.CreateConversationScopedWebhook(ctx, operations.CreateConversationScopedWebhookRequest{
        ConversationSid: "laboriosam",
        RequestBody: &operations.CreateConversationScopedWebhookCreateConversationScopedWebhookRequest{
            ConfigurationFilters: []string{
                "saepe",
                "fuga",
                "in",
                "corporis",
            },
            ConfigurationFlowSid: sdk.String("iste"),
            ConfigurationMethod: shared.ConversationScopedWebhookEnumMethodEnumGet.ToPointer(),
            ConfigurationReplayAfter: sdk.Int64(902349),
            ConfigurationTriggers: []string{
                "architecto",
                "ipsa",
                "reiciendis",
            },
            ConfigurationURL: sdk.String("est"),
            Target: shared.ConversationScopedWebhookEnumTargetEnumTrigger,
        },
    }, operations.CreateConversationScopedWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConversationConversationScopedWebhook != nil {
        // handle response
    }
}
```

## CreateCredential

Add a new push notification credential to your account

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
        APIKey: sdk.String("laborum"),
        Certificate: sdk.String("dolores"),
        FriendlyName: sdk.String("dolorem"),
        PrivateKey: sdk.String("corporis"),
        Sandbox: sdk.Bool(false),
        Secret: sdk.String("explicabo"),
        Type: shared.CredentialEnumPushTypeEnumFcm,
    }, operations.CreateCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Credential != nil {
        // handle response
    }
}
```

## CreateRole

Create a new user role in your account's default service

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
    res, err := s.SDK.CreateRole(ctx, operations.CreateRoleCreateRoleRequest{
        FriendlyName: "enim",
        Permission: []string{
            "nemo",
            "minima",
            "excepturi",
        },
        Type: shared.RoleEnumRoleTypeEnumConversation,
    }, operations.CreateRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Role != nil {
        // handle response
    }
}
```

## CreateService

Create a new conversation service on your account

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
        FriendlyName: "iure",
    }, operations.CreateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Service != nil {
        // handle response
    }
}
```

## CreateServiceConversation

Create a new conversation in your service

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
    res, err := s.SDK.CreateServiceConversation(ctx, operations.CreateServiceConversationRequest{
        ChatServiceSid: "culpa",
        RequestBody: &operations.CreateServiceConversationCreateServiceConversationRequest{
            Attributes: sdk.String("doloribus"),
            DateCreated: types.MustTimeFromString("2022-09-11T06:15:44.019Z"),
            DateUpdated: types.MustTimeFromString("2022-08-01T12:28:44.292Z"),
            FriendlyName: sdk.String("culpa"),
            MessagingServiceSid: sdk.String("consequuntur"),
            State: shared.ServiceConversationEnumStateEnumClosed.ToPointer(),
            TimersClosed: sdk.String("mollitia"),
            TimersInactive: sdk.String("occaecati"),
            UniqueName: sdk.String("numquam"),
        },
        XTwilioWebhookEnabled: shared.ServiceConversationEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.CreateServiceConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversation != nil {
        // handle response
    }
}
```

## CreateServiceConversationMessage

Add a new message to the conversation in a specific service

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
    res, err := s.SDK.CreateServiceConversationMessage(ctx, operations.CreateServiceConversationMessageRequest{
        ChatServiceSid: "quam",
        ConversationSid: "molestiae",
        RequestBody: &operations.CreateServiceConversationMessageCreateServiceConversationMessageRequest{
            Attributes: sdk.String("velit"),
            Author: sdk.String("error"),
            Body: sdk.String("quia"),
            ContentSid: sdk.String("quis"),
            ContentVariables: sdk.String("vitae"),
            DateCreated: types.MustTimeFromString("2021-09-08T21:06:19.630Z"),
            DateUpdated: types.MustTimeFromString("2022-11-11T13:31:01.643Z"),
            MediaSid: sdk.String("quo"),
        },
        XTwilioWebhookEnabled: shared.ServiceConversationMessageEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.CreateServiceConversationMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversationServiceConversationMessage != nil {
        // handle response
    }
}
```

## CreateServiceConversationParticipant

Add a new participant to the conversation in a specific service

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
    res, err := s.SDK.CreateServiceConversationParticipant(ctx, operations.CreateServiceConversationParticipantRequest{
        ChatServiceSid: "tenetur",
        ConversationSid: "ipsam",
        RequestBody: &operations.CreateServiceConversationParticipantCreateServiceConversationParticipantRequest{
            Attributes: sdk.String("id"),
            DateCreated: types.MustTimeFromString("2022-12-17T03:20:13.120Z"),
            DateUpdated: types.MustTimeFromString("2022-05-18T15:52:05.226Z"),
            Identity: sdk.String("temporibus"),
            MessagingBindingAddress: sdk.String("laborum"),
            MessagingBindingProjectedAddress: sdk.String("quasi"),
            MessagingBindingProxyAddress: sdk.String("reiciendis"),
            RoleSid: sdk.String("voluptatibus"),
        },
        XTwilioWebhookEnabled: shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.CreateServiceConversationParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversationServiceConversationParticipant != nil {
        // handle response
    }
}
```

## CreateServiceConversationScopedWebhook

Create a new webhook scoped to the conversation in a specific service

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
    res, err := s.SDK.CreateServiceConversationScopedWebhook(ctx, operations.CreateServiceConversationScopedWebhookRequest{
        ChatServiceSid: "nihil",
        ConversationSid: "praesentium",
        RequestBody: &operations.CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest{
            ConfigurationFilters: []string{
                "ipsa",
                "omnis",
                "voluptate",
                "cum",
            },
            ConfigurationFlowSid: sdk.String("perferendis"),
            ConfigurationMethod: shared.ServiceConversationScopedWebhookEnumMethodEnumGet.ToPointer(),
            ConfigurationReplayAfter: sdk.Int64(441711),
            ConfigurationTriggers: []string{
                "maiores",
                "dicta",
            },
            ConfigurationURL: sdk.String("corporis"),
            Target: shared.ServiceConversationScopedWebhookEnumTargetEnumWebhook,
        },
    }, operations.CreateServiceConversationScopedWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook != nil {
        // handle response
    }
}
```

## CreateServiceRole

Create a new user role in your service

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
    res, err := s.SDK.CreateServiceRole(ctx, operations.CreateServiceRoleRequest{
        ChatServiceSid: "iusto",
        RequestBody: &operations.CreateServiceRoleCreateServiceRoleRequest{
            FriendlyName: "dicta",
            Permission: []string{
                "enim",
                "accusamus",
                "commodi",
            },
            Type: shared.ServiceRoleEnumRoleTypeEnumService,
        },
    }, operations.CreateServiceRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceRole != nil {
        // handle response
    }
}
```

## CreateServiceUser

Add a new conversation user to your service

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
    res, err := s.SDK.CreateServiceUser(ctx, operations.CreateServiceUserRequest{
        ChatServiceSid: "quae",
        RequestBody: &operations.CreateServiceUserCreateServiceUserRequest{
            Attributes: sdk.String("ipsum"),
            FriendlyName: sdk.String("quidem"),
            Identity: "molestias",
            RoleSid: sdk.String("excepturi"),
        },
        XTwilioWebhookEnabled: shared.ServiceUserEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.CreateServiceUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceUser != nil {
        // handle response
    }
}
```

## CreateUser

Add a new conversation user to your account's default service

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
            Attributes: sdk.String("modi"),
            FriendlyName: sdk.String("praesentium"),
            Identity: "rem",
            RoleSid: sdk.String("voluptates"),
        },
        XTwilioWebhookEnabled: shared.UserEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.CreateUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1User != nil {
        // handle response
    }
}
```

## DeleteConfigurationAddress

Remove an existing address configuration

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
    res, err := s.SDK.DeleteConfigurationAddress(ctx, operations.DeleteConfigurationAddressRequest{
        Sid: "repudiandae",
    }, operations.DeleteConfigurationAddressSecurity{
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

## DeleteConversation

Remove a conversation from your account's default service

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
    res, err := s.SDK.DeleteConversation(ctx, operations.DeleteConversationRequest{
        Sid: "sint",
        XTwilioWebhookEnabled: shared.ConversationEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.DeleteConversationSecurity{
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

## DeleteConversationMessage

Remove a message from the conversation

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
    res, err := s.SDK.DeleteConversationMessage(ctx, operations.DeleteConversationMessageRequest{
        ConversationSid: "itaque",
        Sid: "incidunt",
        XTwilioWebhookEnabled: shared.ConversationMessageEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.DeleteConversationMessageSecurity{
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

## DeleteConversationParticipant

Remove a participant from the conversation

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
    res, err := s.SDK.DeleteConversationParticipant(ctx, operations.DeleteConversationParticipantRequest{
        ConversationSid: "consequatur",
        Sid: "est",
        XTwilioWebhookEnabled: shared.ConversationParticipantEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.DeleteConversationParticipantSecurity{
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

## DeleteConversationScopedWebhook

Remove an existing webhook scoped to the conversation

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
    res, err := s.SDK.DeleteConversationScopedWebhook(ctx, operations.DeleteConversationScopedWebhookRequest{
        ConversationSid: "explicabo",
        Sid: "deserunt",
    }, operations.DeleteConversationScopedWebhookSecurity{
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

Remove a push notification credential from your account

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
        Sid: "distinctio",
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

## DeleteRole

Remove a user role from your account's default service

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
        Sid: "quibusdam",
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

Remove a conversation service with all its nested resources from your account

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
        Sid: "labore",
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

## DeleteServiceBinding

Remove a push notification binding from the conversation service

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
    res, err := s.SDK.DeleteServiceBinding(ctx, operations.DeleteServiceBindingRequest{
        ChatServiceSid: "modi",
        Sid: "qui",
    }, operations.DeleteServiceBindingSecurity{
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

## DeleteServiceConversation

Remove a conversation from your service

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
    res, err := s.SDK.DeleteServiceConversation(ctx, operations.DeleteServiceConversationRequest{
        ChatServiceSid: "aliquid",
        Sid: "cupiditate",
        XTwilioWebhookEnabled: shared.ServiceConversationEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.DeleteServiceConversationSecurity{
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

## DeleteServiceConversationMessage

Remove a message from the conversation

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
    res, err := s.SDK.DeleteServiceConversationMessage(ctx, operations.DeleteServiceConversationMessageRequest{
        ChatServiceSid: "perferendis",
        ConversationSid: "magni",
        Sid: "assumenda",
        XTwilioWebhookEnabled: shared.ServiceConversationMessageEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.DeleteServiceConversationMessageSecurity{
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

## DeleteServiceConversationParticipant

Remove a participant from the conversation

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
    res, err := s.SDK.DeleteServiceConversationParticipant(ctx, operations.DeleteServiceConversationParticipantRequest{
        ChatServiceSid: "alias",
        ConversationSid: "fugit",
        Sid: "dolorum",
        XTwilioWebhookEnabled: shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.DeleteServiceConversationParticipantSecurity{
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

## DeleteServiceConversationScopedWebhook

Remove an existing webhook scoped to the conversation

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
    res, err := s.SDK.DeleteServiceConversationScopedWebhook(ctx, operations.DeleteServiceConversationScopedWebhookRequest{
        ChatServiceSid: "tempora",
        ConversationSid: "facilis",
        Sid: "tempore",
    }, operations.DeleteServiceConversationScopedWebhookSecurity{
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

## DeleteServiceRole

Remove a user role from your service

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
    res, err := s.SDK.DeleteServiceRole(ctx, operations.DeleteServiceRoleRequest{
        ChatServiceSid: "labore",
        Sid: "delectus",
    }, operations.DeleteServiceRoleSecurity{
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

## DeleteServiceUser

Remove a conversation user from your service

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
    res, err := s.SDK.DeleteServiceUser(ctx, operations.DeleteServiceUserRequest{
        ChatServiceSid: "eum",
        Sid: "non",
        XTwilioWebhookEnabled: shared.ServiceUserEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.DeleteServiceUserSecurity{
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

## DeleteServiceUserConversation

Delete a specific User Conversation.

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
    res, err := s.SDK.DeleteServiceUserConversation(ctx, operations.DeleteServiceUserConversationRequest{
        ChatServiceSid: "sint",
        ConversationSid: "aliquid",
        UserSid: "provident",
    }, operations.DeleteServiceUserConversationSecurity{
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

Remove a conversation user from your account's default service

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
    res, err := s.SDK.DeleteUser(ctx, operations.DeleteUserRequest{
        Sid: "necessitatibus",
        XTwilioWebhookEnabled: shared.UserEnumWebhookEnabledTypeEnumFalse.ToPointer(),
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

## DeleteUserConversation

Delete a specific User Conversation.

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
    res, err := s.SDK.DeleteUserConversation(ctx, operations.DeleteUserConversationRequest{
        ConversationSid: "officia",
        UserSid: "dolor",
    }, operations.DeleteUserConversationSecurity{
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

## FetchConfiguration

Fetch the global configuration of conversations on your account

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
    res, err := s.SDK.FetchConfiguration(ctx, operations.FetchConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Configuration != nil {
        // handle response
    }
}
```

## FetchConfigurationAddress

Fetch an address configuration 

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
    res, err := s.SDK.FetchConfigurationAddress(ctx, operations.FetchConfigurationAddressRequest{
        Sid: "debitis",
    }, operations.FetchConfigurationAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConfigurationAddress != nil {
        // handle response
    }
}
```

## FetchConfigurationWebhook

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
    res, err := s.SDK.FetchConfigurationWebhook(ctx, operations.FetchConfigurationWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConfigurationConfigurationWebhook != nil {
        // handle response
    }
}
```

## FetchConversation

Fetch a conversation from your account's default service

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
    res, err := s.SDK.FetchConversation(ctx, operations.FetchConversationRequest{
        Sid: "a",
    }, operations.FetchConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Conversation != nil {
        // handle response
    }
}
```

## FetchConversationMessage

Fetch a message from the conversation

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
    res, err := s.SDK.FetchConversationMessage(ctx, operations.FetchConversationMessageRequest{
        ConversationSid: "dolorum",
        Sid: "in",
    }, operations.FetchConversationMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConversationConversationMessage != nil {
        // handle response
    }
}
```

## FetchConversationMessageReceipt

Fetch the delivery and read receipts of the conversation message

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
    res, err := s.SDK.FetchConversationMessageReceipt(ctx, operations.FetchConversationMessageReceiptRequest{
        ConversationSid: "in",
        MessageSid: "illum",
        Sid: "maiores",
    }, operations.FetchConversationMessageReceiptSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConversationConversationMessageConversationMessageReceipt != nil {
        // handle response
    }
}
```

## FetchConversationParticipant

Fetch a participant of the conversation

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
    res, err := s.SDK.FetchConversationParticipant(ctx, operations.FetchConversationParticipantRequest{
        ConversationSid: "rerum",
        Sid: "dicta",
    }, operations.FetchConversationParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConversationConversationParticipant != nil {
        // handle response
    }
}
```

## FetchConversationScopedWebhook

Fetch the configuration of a conversation-scoped webhook

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
    res, err := s.SDK.FetchConversationScopedWebhook(ctx, operations.FetchConversationScopedWebhookRequest{
        ConversationSid: "magnam",
        Sid: "cumque",
    }, operations.FetchConversationScopedWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConversationConversationScopedWebhook != nil {
        // handle response
    }
}
```

## FetchCredential

Fetch a push notification credential from your account

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
        Sid: "facere",
    }, operations.FetchCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Credential != nil {
        // handle response
    }
}
```

## FetchRole

Fetch a user role from your account's default service

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
        Sid: "ea",
    }, operations.FetchRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Role != nil {
        // handle response
    }
}
```

## FetchService

Fetch a conversation service from your account

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
        Sid: "aliquid",
    }, operations.FetchServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Service != nil {
        // handle response
    }
}
```

## FetchServiceBinding

Fetch a push notification binding from the conversation service

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
    res, err := s.SDK.FetchServiceBinding(ctx, operations.FetchServiceBindingRequest{
        ChatServiceSid: "laborum",
        Sid: "accusamus",
    }, operations.FetchServiceBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceBinding != nil {
        // handle response
    }
}
```

## FetchServiceConfiguration

Fetch the configuration of a conversation service

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
    res, err := s.SDK.FetchServiceConfiguration(ctx, operations.FetchServiceConfigurationRequest{
        ChatServiceSid: "non",
    }, operations.FetchServiceConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConfiguration != nil {
        // handle response
    }
}
```

## FetchServiceConversation

Fetch a conversation from your service

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
    res, err := s.SDK.FetchServiceConversation(ctx, operations.FetchServiceConversationRequest{
        ChatServiceSid: "occaecati",
        Sid: "enim",
    }, operations.FetchServiceConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversation != nil {
        // handle response
    }
}
```

## FetchServiceConversationMessage

Fetch a message from the conversation

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
    res, err := s.SDK.FetchServiceConversationMessage(ctx, operations.FetchServiceConversationMessageRequest{
        ChatServiceSid: "accusamus",
        ConversationSid: "delectus",
        Sid: "quidem",
    }, operations.FetchServiceConversationMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversationServiceConversationMessage != nil {
        // handle response
    }
}
```

## FetchServiceConversationMessageReceipt

Fetch the delivery and read receipts of the conversation message

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
    res, err := s.SDK.FetchServiceConversationMessageReceipt(ctx, operations.FetchServiceConversationMessageReceiptRequest{
        ChatServiceSid: "provident",
        ConversationSid: "nam",
        MessageSid: "id",
        Sid: "blanditiis",
    }, operations.FetchServiceConversationMessageReceiptSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt != nil {
        // handle response
    }
}
```

## FetchServiceConversationParticipant

Fetch a participant of the conversation

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
    res, err := s.SDK.FetchServiceConversationParticipant(ctx, operations.FetchServiceConversationParticipantRequest{
        ChatServiceSid: "deleniti",
        ConversationSid: "sapiente",
        Sid: "amet",
    }, operations.FetchServiceConversationParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversationServiceConversationParticipant != nil {
        // handle response
    }
}
```

## FetchServiceConversationScopedWebhook

Fetch the configuration of a conversation-scoped webhook

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
    res, err := s.SDK.FetchServiceConversationScopedWebhook(ctx, operations.FetchServiceConversationScopedWebhookRequest{
        ChatServiceSid: "deserunt",
        ConversationSid: "nisi",
        Sid: "vel",
    }, operations.FetchServiceConversationScopedWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook != nil {
        // handle response
    }
}
```

## FetchServiceNotification

Fetch push notification service settings

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
    res, err := s.SDK.FetchServiceNotification(ctx, operations.FetchServiceNotificationRequest{
        ChatServiceSid: "natus",
    }, operations.FetchServiceNotificationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConfigurationServiceNotification != nil {
        // handle response
    }
}
```

## FetchServiceRole

Fetch a user role from your service

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
    res, err := s.SDK.FetchServiceRole(ctx, operations.FetchServiceRoleRequest{
        ChatServiceSid: "omnis",
        Sid: "molestiae",
    }, operations.FetchServiceRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceRole != nil {
        // handle response
    }
}
```

## FetchServiceUser

Fetch a conversation user from your service

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
    res, err := s.SDK.FetchServiceUser(ctx, operations.FetchServiceUserRequest{
        ChatServiceSid: "perferendis",
        Sid: "nihil",
    }, operations.FetchServiceUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceUser != nil {
        // handle response
    }
}
```

## FetchServiceUserConversation

Fetch a specific User Conversation.

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
    res, err := s.SDK.FetchServiceUserConversation(ctx, operations.FetchServiceUserConversationRequest{
        ChatServiceSid: "magnam",
        ConversationSid: "distinctio",
        UserSid: "id",
    }, operations.FetchServiceUserConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceUserServiceUserConversation != nil {
        // handle response
    }
}
```

## FetchServiceWebhookConfiguration

Fetch a specific service webhook configuration.

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
    res, err := s.SDK.FetchServiceWebhookConfiguration(ctx, operations.FetchServiceWebhookConfigurationRequest{
        ChatServiceSid: "labore",
    }, operations.FetchServiceWebhookConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration != nil {
        // handle response
    }
}
```

## FetchUser

Fetch a conversation user from your account's default service

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
        Sid: "labore",
    }, operations.FetchUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1User != nil {
        // handle response
    }
}
```

## FetchUserConversation

Fetch a specific User Conversation.

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
    res, err := s.SDK.FetchUserConversation(ctx, operations.FetchUserConversationRequest{
        ConversationSid: "suscipit",
        UserSid: "natus",
    }, operations.FetchUserConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1UserUserConversation != nil {
        // handle response
    }
}
```

## ListConfigurationAddress

Retrieve a list of address configurations for an account

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
    res, err := s.SDK.ListConfigurationAddress(ctx, operations.ListConfigurationAddressRequest{
        Page: sdk.Int64(749170),
        PageSize: sdk.Int64(428769),
        PageToken: sdk.String("vero"),
        Type: sdk.String("aspernatur"),
    }, operations.ListConfigurationAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConfigurationAddressResponse != nil {
        // handle response
    }
}
```

## ListConversation

Retrieve a list of conversations in your account's default service

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
    res, err := s.SDK.ListConversation(ctx, operations.ListConversationRequest{
        Page: sdk.Int64(102863),
        PageSize: sdk.Int64(298282),
        PageToken: sdk.String("et"),
    }, operations.ListConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConversationResponse != nil {
        // handle response
    }
}
```

## ListConversationMessage

Retrieve a list of all messages in the conversation

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
    res, err := s.SDK.ListConversationMessage(ctx, operations.ListConversationMessageRequest{
        ConversationSid: "excepturi",
        Order: shared.ConversationMessageEnumOrderTypeEnumAsc.ToPointer(),
        Page: sdk.Int64(590873),
        PageSize: sdk.Int64(551816),
        PageToken: sdk.String("sint"),
    }, operations.ListConversationMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConversationMessageResponse != nil {
        // handle response
    }
}
```

## ListConversationMessageReceipt

Retrieve a list of all delivery and read receipts of the conversation message

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
    res, err := s.SDK.ListConversationMessageReceipt(ctx, operations.ListConversationMessageReceiptRequest{
        ConversationSid: "accusantium",
        MessageSid: "mollitia",
        Page: sdk.Int64(968962),
        PageSize: sdk.Int64(652103),
        PageToken: sdk.String("ad"),
    }, operations.ListConversationMessageReceiptSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConversationMessageReceiptResponse != nil {
        // handle response
    }
}
```

## ListConversationParticipant

Retrieve a list of all participants of the conversation

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
    res, err := s.SDK.ListConversationParticipant(ctx, operations.ListConversationParticipantRequest{
        ConversationSid: "eum",
        Page: sdk.Int64(221262),
        PageSize: sdk.Int64(896547),
        PageToken: sdk.String("odit"),
    }, operations.ListConversationParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConversationParticipantResponse != nil {
        // handle response
    }
}
```

## ListConversationScopedWebhook

Retrieve a list of all webhooks scoped to the conversation

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
    res, err := s.SDK.ListConversationScopedWebhook(ctx, operations.ListConversationScopedWebhookRequest{
        ConversationSid: "nemo",
        Page: sdk.Int64(97260),
        PageSize: sdk.Int64(435865),
        PageToken: sdk.String("doloribus"),
    }, operations.ListConversationScopedWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConversationScopedWebhookResponse != nil {
        // handle response
    }
}
```

## ListCredential

Retrieve a list of all push notification credentials on your account

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
        Page: sdk.Int64(891924),
        PageSize: sdk.Int64(260341),
        PageToken: sdk.String("maxime"),
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

## ListParticipantConversation

Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.

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
    res, err := s.SDK.ListParticipantConversation(ctx, operations.ListParticipantConversationRequest{
        Address: sdk.String("7410 Herman Rapids"),
        Identity: sdk.String("nihil"),
        Page: sdk.Int64(998848),
        PageSize: sdk.Int64(841140),
        PageToken: sdk.String("sed"),
    }, operations.ListParticipantConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListParticipantConversationResponse != nil {
        // handle response
    }
}
```

## ListRole

Retrieve a list of all user roles in your account's default service

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
        Page: sdk.Int64(904648),
        PageSize: sdk.Int64(868126),
        PageToken: sdk.String("accusantium"),
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

Retrieve a list of all conversation services on your account

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
        Page: sdk.Int64(162493),
        PageSize: sdk.Int64(508315),
        PageToken: sdk.String("natus"),
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

## ListServiceBinding

Retrieve a list of all push notification bindings in the conversation service

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
    res, err := s.SDK.ListServiceBinding(ctx, operations.ListServiceBindingRequest{
        BindingType: []shared.ServiceBindingEnumBindingTypeEnum{
            shared.ServiceBindingEnumBindingTypeEnumApn,
        },
        ChatServiceSid: "quo",
        Identity: []string{
            "pariatur",
            "maxime",
            "ea",
            "excepturi",
        },
        Page: sdk.Int64(139972),
        PageSize: sdk.Int64(407183),
        PageToken: sdk.String("accusantium"),
    }, operations.ListServiceBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceBindingResponse != nil {
        // handle response
    }
}
```

## ListServiceConversation

Retrieve a list of conversations in your service

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
    res, err := s.SDK.ListServiceConversation(ctx, operations.ListServiceConversationRequest{
        ChatServiceSid: "ab",
        Page: sdk.Int64(982575),
        PageSize: sdk.Int64(697429),
        PageToken: sdk.String("ipsam"),
    }, operations.ListServiceConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceConversationResponse != nil {
        // handle response
    }
}
```

## ListServiceConversationMessage

Retrieve a list of all messages in the conversation

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
    res, err := s.SDK.ListServiceConversationMessage(ctx, operations.ListServiceConversationMessageRequest{
        ChatServiceSid: "voluptate",
        ConversationSid: "autem",
        Order: shared.ServiceConversationMessageEnumOrderTypeEnumDesc.ToPointer(),
        Page: sdk.Int64(50588),
        PageSize: sdk.Int64(866383),
        PageToken: sdk.String("nemo"),
    }, operations.ListServiceConversationMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceConversationMessageResponse != nil {
        // handle response
    }
}
```

## ListServiceConversationMessageReceipt

Retrieve a list of all delivery and read receipts of the conversation message

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
    res, err := s.SDK.ListServiceConversationMessageReceipt(ctx, operations.ListServiceConversationMessageReceiptRequest{
        ChatServiceSid: "voluptatibus",
        ConversationSid: "perferendis",
        MessageSid: "fugiat",
        Page: sdk.Int64(230742),
        PageSize: sdk.Int64(11714),
        PageToken: sdk.String("cumque"),
    }, operations.ListServiceConversationMessageReceiptSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceConversationMessageReceiptResponse != nil {
        // handle response
    }
}
```

## ListServiceConversationParticipant

Retrieve a list of all participants of the conversation

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
    res, err := s.SDK.ListServiceConversationParticipant(ctx, operations.ListServiceConversationParticipantRequest{
        ChatServiceSid: "corporis",
        ConversationSid: "hic",
        Page: sdk.Int64(729991),
        PageSize: sdk.Int64(749999),
        PageToken: sdk.String("dolores"),
    }, operations.ListServiceConversationParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceConversationParticipantResponse != nil {
        // handle response
    }
}
```

## ListServiceConversationScopedWebhook

Retrieve a list of all webhooks scoped to the conversation

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
    res, err := s.SDK.ListServiceConversationScopedWebhook(ctx, operations.ListServiceConversationScopedWebhookRequest{
        ChatServiceSid: "quis",
        ConversationSid: "totam",
        Page: sdk.Int64(489549),
        PageSize: sdk.Int64(54338),
        PageToken: sdk.String("quis"),
    }, operations.ListServiceConversationScopedWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceConversationScopedWebhookResponse != nil {
        // handle response
    }
}
```

## ListServiceParticipantConversation

Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.

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
    res, err := s.SDK.ListServiceParticipantConversation(ctx, operations.ListServiceParticipantConversationRequest{
        Address: sdk.String("10174 Seamus Grove"),
        ChatServiceSid: "hic",
        Identity: sdk.String("recusandae"),
        Page: sdk.Int64(608253),
        PageSize: sdk.Int64(704415),
        PageToken: sdk.String("perspiciatis"),
    }, operations.ListServiceParticipantConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceParticipantConversationResponse != nil {
        // handle response
    }
}
```

## ListServiceRole

Retrieve a list of all user roles in your service

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
    res, err := s.SDK.ListServiceRole(ctx, operations.ListServiceRoleRequest{
        ChatServiceSid: "voluptatem",
        Page: sdk.Int64(783645),
        PageSize: sdk.Int64(164694),
        PageToken: sdk.String("blanditiis"),
    }, operations.ListServiceRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceRoleResponse != nil {
        // handle response
    }
}
```

## ListServiceUser

Retrieve a list of all conversation users in your service

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
    res, err := s.SDK.ListServiceUser(ctx, operations.ListServiceUserRequest{
        ChatServiceSid: "error",
        Page: sdk.Int64(50370),
        PageSize: sdk.Int64(577229),
        PageToken: sdk.String("rerum"),
    }, operations.ListServiceUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceUserResponse != nil {
        // handle response
    }
}
```

## ListServiceUserConversation

Retrieve a list of all User Conversations for the User.

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
    res, err := s.SDK.ListServiceUserConversation(ctx, operations.ListServiceUserConversationRequest{
        ChatServiceSid: "adipisci",
        Page: sdk.Int64(992397),
        PageSize: sdk.Int64(934214),
        PageToken: sdk.String("modi"),
        UserSid: "iste",
    }, operations.ListServiceUserConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServiceUserConversationResponse != nil {
        // handle response
    }
}
```

## ListUser

Retrieve a list of all conversation users in your account's default service

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
        Page: sdk.Int64(679091),
        PageSize: sdk.Int64(535633),
        PageToken: sdk.String("pariatur"),
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

## ListUserConversation

Retrieve a list of all User Conversations for the User.

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
    res, err := s.SDK.ListUserConversation(ctx, operations.ListUserConversationRequest{
        Page: sdk.Int64(589910),
        PageSize: sdk.Int64(750844),
        PageToken: sdk.String("libero"),
        UserSid: "delectus",
    }, operations.ListUserConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserConversationResponse != nil {
        // handle response
    }
}
```

## UpdateConfiguration

Update the global configuration of conversations on your account

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
    res, err := s.SDK.UpdateConfiguration(ctx, operations.UpdateConfigurationUpdateConfigurationRequest{
        DefaultChatServiceSid: sdk.String("quaerat"),
        DefaultClosedTimer: sdk.String("quos"),
        DefaultInactiveTimer: sdk.String("aliquid"),
        DefaultMessagingServiceSid: sdk.String("dolorem"),
    }, operations.UpdateConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Configuration != nil {
        // handle response
    }
}
```

## UpdateConfigurationAddress

Update an existing address configuration

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
    res, err := s.SDK.UpdateConfigurationAddress(ctx, operations.UpdateConfigurationAddressRequest{
        RequestBody: &operations.UpdateConfigurationAddressUpdateConfigurationAddressRequest{
            AutoCreationConversationServiceSid: sdk.String("dolorem"),
            AutoCreationEnabled: sdk.Bool(false),
            AutoCreationStudioFlowSid: sdk.String("dolor"),
            AutoCreationStudioRetryCount: sdk.Int64(186193),
            AutoCreationType: shared.ConfigurationAddressEnumAutoCreationTypeEnumWebhook.ToPointer(),
            AutoCreationWebhookFilters: []string{
                "excepturi",
                "cum",
                "voluptate",
                "dignissimos",
            },
            AutoCreationWebhookMethod: shared.ConfigurationAddressEnumMethodEnumPost.ToPointer(),
            AutoCreationWebhookURL: sdk.String("amet"),
            FriendlyName: sdk.String("dolorum"),
        },
        Sid: "numquam",
    }, operations.UpdateConfigurationAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConfigurationAddress != nil {
        // handle response
    }
}
```

## UpdateConfigurationWebhook

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
    res, err := s.SDK.UpdateConfigurationWebhook(ctx, operations.UpdateConfigurationWebhookUpdateConfigurationWebhookRequest{
        Filters: []string{
            "ipsa",
        },
        Method: sdk.String("ipsa"),
        PostWebhookURL: sdk.String("iure"),
        PreWebhookURL: sdk.String("odio"),
        Target: shared.ConfigurationWebhookEnumTargetEnumWebhook.ToPointer(),
    }, operations.UpdateConfigurationWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConfigurationConfigurationWebhook != nil {
        // handle response
    }
}
```

## UpdateConversation

Update an existing conversation in your account's default service

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
    res, err := s.SDK.UpdateConversation(ctx, operations.UpdateConversationRequest{
        RequestBody: &operations.UpdateConversationUpdateConversationRequest{
            Attributes: sdk.String("accusamus"),
            DateCreated: types.MustTimeFromString("2021-01-18T05:23:42.271Z"),
            DateUpdated: types.MustTimeFromString("2022-05-20T13:18:59.478Z"),
            FriendlyName: sdk.String("eos"),
            MessagingServiceSid: sdk.String("atque"),
            State: shared.ConversationEnumStateEnumInactive.ToPointer(),
            TimersClosed: sdk.String("fugiat"),
            TimersInactive: sdk.String("ab"),
            UniqueName: sdk.String("soluta"),
        },
        Sid: "dolorum",
        XTwilioWebhookEnabled: shared.ConversationEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.UpdateConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Conversation != nil {
        // handle response
    }
}
```

## UpdateConversationMessage

Update an existing message in the conversation

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
    res, err := s.SDK.UpdateConversationMessage(ctx, operations.UpdateConversationMessageRequest{
        ConversationSid: "voluptate",
        RequestBody: &operations.UpdateConversationMessageUpdateConversationMessageRequest{
            Attributes: sdk.String("dolorum"),
            Author: sdk.String("deleniti"),
            Body: sdk.String("omnis"),
            DateCreated: types.MustTimeFromString("2020-11-09T09:45:52.295Z"),
            DateUpdated: types.MustTimeFromString("2021-08-04T21:36:49.552Z"),
        },
        Sid: "ipsum",
        XTwilioWebhookEnabled: shared.ConversationMessageEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.UpdateConversationMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConversationConversationMessage != nil {
        // handle response
    }
}
```

## UpdateConversationParticipant

Update an existing participant in the conversation

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
    res, err := s.SDK.UpdateConversationParticipant(ctx, operations.UpdateConversationParticipantRequest{
        ConversationSid: "id",
        RequestBody: &operations.UpdateConversationParticipantUpdateConversationParticipantRequest{
            Attributes: sdk.String("saepe"),
            DateCreated: types.MustTimeFromString("2022-11-11T21:56:55.945Z"),
            DateUpdated: types.MustTimeFromString("2022-10-09T08:02:18.659Z"),
            Identity: sdk.String("optio"),
            LastReadMessageIndex: sdk.Int64(881586),
            LastReadTimestamp: sdk.String("ad"),
            MessagingBindingProjectedAddress: sdk.String("saepe"),
            MessagingBindingProxyAddress: sdk.String("suscipit"),
            RoleSid: sdk.String("deserunt"),
        },
        Sid: "provident",
        XTwilioWebhookEnabled: shared.ConversationParticipantEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.UpdateConversationParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConversationConversationParticipant != nil {
        // handle response
    }
}
```

## UpdateConversationScopedWebhook

Update an existing conversation-scoped webhook

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
    res, err := s.SDK.UpdateConversationScopedWebhook(ctx, operations.UpdateConversationScopedWebhookRequest{
        ConversationSid: "repellendus",
        RequestBody: &operations.UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest{
            ConfigurationFilters: []string{
                "similique",
                "alias",
                "at",
            },
            ConfigurationFlowSid: sdk.String("quaerat"),
            ConfigurationMethod: shared.ConversationScopedWebhookEnumMethodEnumGet.ToPointer(),
            ConfigurationTriggers: []string{
                "quod",
                "officiis",
            },
            ConfigurationURL: sdk.String("qui"),
        },
        Sid: "dolorum",
    }, operations.UpdateConversationScopedWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConversationConversationScopedWebhook != nil {
        // handle response
    }
}
```

## UpdateCredential

Update an existing push notification credential on your account

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
    res, err := s.SDK.UpdateCredential(ctx, operations.UpdateCredentialRequest{
        RequestBody: &operations.UpdateCredentialUpdateCredentialRequest{
            APIKey: sdk.String("a"),
            Certificate: sdk.String("esse"),
            FriendlyName: sdk.String("harum"),
            PrivateKey: sdk.String("iusto"),
            Sandbox: sdk.Bool(false),
            Secret: sdk.String("ipsum"),
            Type: shared.CredentialEnumPushTypeEnumFcm.ToPointer(),
        },
        Sid: "tenetur",
    }, operations.UpdateCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Credential != nil {
        // handle response
    }
}
```

## UpdateRole

Update an existing user role in your account's default service

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
                "tempore",
            },
        },
        Sid: "accusamus",
    }, operations.UpdateRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1Role != nil {
        // handle response
    }
}
```

## UpdateServiceConfiguration

Update configuration settings of a conversation service

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
    res, err := s.SDK.UpdateServiceConfiguration(ctx, operations.UpdateServiceConfigurationRequest{
        ChatServiceSid: "numquam",
        RequestBody: &operations.UpdateServiceConfigurationUpdateServiceConfigurationRequest{
            DefaultChatServiceRoleSid: sdk.String("enim"),
            DefaultConversationCreatorRoleSid: sdk.String("dolorem"),
            DefaultConversationRoleSid: sdk.String("sapiente"),
            ReachabilityEnabled: sdk.Bool(false),
        },
    }, operations.UpdateServiceConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConfiguration != nil {
        // handle response
    }
}
```

## UpdateServiceConversation

Update an existing conversation in your service

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
    res, err := s.SDK.UpdateServiceConversation(ctx, operations.UpdateServiceConversationRequest{
        ChatServiceSid: "totam",
        RequestBody: &operations.UpdateServiceConversationUpdateServiceConversationRequest{
            Attributes: sdk.String("nihil"),
            DateCreated: types.MustTimeFromString("2022-04-16T06:31:32.314Z"),
            DateUpdated: types.MustTimeFromString("2022-11-05T21:38:15.600Z"),
            FriendlyName: sdk.String("vel"),
            MessagingServiceSid: sdk.String("libero"),
            State: shared.ServiceConversationEnumStateEnumActive.ToPointer(),
            TimersClosed: sdk.String("deserunt"),
            TimersInactive: sdk.String("quam"),
            UniqueName: sdk.String("ipsum"),
        },
        Sid: "incidunt",
        XTwilioWebhookEnabled: shared.ServiceConversationEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.UpdateServiceConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversation != nil {
        // handle response
    }
}
```

## UpdateServiceConversationMessage

Update an existing message in the conversation

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
    res, err := s.SDK.UpdateServiceConversationMessage(ctx, operations.UpdateServiceConversationMessageRequest{
        ChatServiceSid: "cupiditate",
        ConversationSid: "maxime",
        RequestBody: &operations.UpdateServiceConversationMessageUpdateServiceConversationMessageRequest{
            Attributes: sdk.String("pariatur"),
            Author: sdk.String("soluta"),
            Body: sdk.String("dicta"),
            DateCreated: types.MustTimeFromString("2021-12-19T07:31:04.219Z"),
            DateUpdated: types.MustTimeFromString("2022-11-13T19:04:59.225Z"),
        },
        Sid: "dolores",
        XTwilioWebhookEnabled: shared.ServiceConversationMessageEnumWebhookEnabledTypeEnumFalse.ToPointer(),
    }, operations.UpdateServiceConversationMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversationServiceConversationMessage != nil {
        // handle response
    }
}
```

## UpdateServiceConversationParticipant

Update an existing participant in the conversation

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
    res, err := s.SDK.UpdateServiceConversationParticipant(ctx, operations.UpdateServiceConversationParticipantRequest{
        ChatServiceSid: "facilis",
        ConversationSid: "aliquid",
        RequestBody: &operations.UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest{
            Attributes: sdk.String("quam"),
            DateCreated: types.MustTimeFromString("2021-04-27T11:41:31.258Z"),
            DateUpdated: types.MustTimeFromString("2022-10-18T05:22:32.548Z"),
            Identity: sdk.String("fugit"),
            LastReadMessageIndex: sdk.Int64(164959),
            LastReadTimestamp: sdk.String("odio"),
            MessagingBindingProjectedAddress: sdk.String("sunt"),
            MessagingBindingProxyAddress: sdk.String("ullam"),
            RoleSid: sdk.String("nam"),
        },
        Sid: "hic",
        XTwilioWebhookEnabled: shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.UpdateServiceConversationParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversationServiceConversationParticipant != nil {
        // handle response
    }
}
```

## UpdateServiceConversationScopedWebhook

Update an existing conversation-scoped webhook

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
    res, err := s.SDK.UpdateServiceConversationScopedWebhook(ctx, operations.UpdateServiceConversationScopedWebhookRequest{
        ChatServiceSid: "cumque",
        ConversationSid: "soluta",
        RequestBody: &operations.UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest{
            ConfigurationFilters: []string{
                "et",
                "saepe",
                "ipsum",
            },
            ConfigurationFlowSid: sdk.String("veritatis"),
            ConfigurationMethod: shared.ServiceConversationScopedWebhookEnumMethodEnumPost.ToPointer(),
            ConfigurationTriggers: []string{
                "tempore",
                "cupiditate",
                "aperiam",
            },
            ConfigurationURL: sdk.String("delectus"),
        },
        Sid: "dolorem",
    }, operations.UpdateServiceConversationScopedWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook != nil {
        // handle response
    }
}
```

## UpdateServiceNotification

Update push notification service settings

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
    res, err := s.SDK.UpdateServiceNotification(ctx, operations.UpdateServiceNotificationRequest{
        ChatServiceSid: "dolore",
        RequestBody: &operations.UpdateServiceNotificationUpdateServiceNotificationRequest{
            AddedToConversationEnabled: sdk.Bool(false),
            AddedToConversationSound: sdk.String("labore"),
            AddedToConversationTemplate: sdk.String("adipisci"),
            LogEnabled: sdk.Bool(false),
            NewMessageBadgeCountEnabled: sdk.Bool(false),
            NewMessageEnabled: sdk.Bool(false),
            NewMessageSound: sdk.String("dolorum"),
            NewMessageTemplate: sdk.String("architecto"),
            NewMessageWithMediaEnabled: sdk.Bool(false),
            NewMessageWithMediaTemplate: sdk.String("quae"),
            RemovedFromConversationEnabled: sdk.Bool(false),
            RemovedFromConversationSound: sdk.String("aut"),
            RemovedFromConversationTemplate: sdk.String("quas"),
        },
    }, operations.UpdateServiceNotificationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConfigurationServiceNotification != nil {
        // handle response
    }
}
```

## UpdateServiceRole

Update an existing user role in your service

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
    res, err := s.SDK.UpdateServiceRole(ctx, operations.UpdateServiceRoleRequest{
        ChatServiceSid: "itaque",
        RequestBody: &operations.UpdateServiceRoleUpdateServiceRoleRequest{
            Permission: []string{
                "est",
            },
        },
        Sid: "repellendus",
    }, operations.UpdateServiceRoleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceRole != nil {
        // handle response
    }
}
```

## UpdateServiceUser

Update an existing conversation user in your service

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
    res, err := s.SDK.UpdateServiceUser(ctx, operations.UpdateServiceUserRequest{
        ChatServiceSid: "porro",
        RequestBody: &operations.UpdateServiceUserUpdateServiceUserRequest{
            Attributes: sdk.String("doloribus"),
            FriendlyName: sdk.String("ut"),
            RoleSid: sdk.String("facilis"),
        },
        Sid: "cupiditate",
        XTwilioWebhookEnabled: shared.ServiceUserEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.UpdateServiceUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceUser != nil {
        // handle response
    }
}
```

## UpdateServiceUserConversation

Update a specific User Conversation.

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
    res, err := s.SDK.UpdateServiceUserConversation(ctx, operations.UpdateServiceUserConversationRequest{
        ChatServiceSid: "quae",
        ConversationSid: "laudantium",
        RequestBody: &operations.UpdateServiceUserConversationUpdateServiceUserConversationRequest{
            LastReadMessageIndex: sdk.Int64(485628),
            LastReadTimestamp: types.MustTimeFromString("2021-01-17T10:17:06.805Z"),
            NotificationLevel: shared.ServiceUserConversationEnumNotificationLevelEnumMuted.ToPointer(),
        },
        UserSid: "vero",
    }, operations.UpdateServiceUserConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceUserServiceUserConversation != nil {
        // handle response
    }
}
```

## UpdateServiceWebhookConfiguration

Update a specific Webhook.

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
    res, err := s.SDK.UpdateServiceWebhookConfiguration(ctx, operations.UpdateServiceWebhookConfigurationRequest{
        ChatServiceSid: "omnis",
        RequestBody: &operations.UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest{
            Filters: []string{
                "ipsum",
                "delectus",
            },
            Method: sdk.String("voluptate"),
            PostWebhookURL: sdk.String("http://ugly-vase.info"),
            PreWebhookURL: sdk.String("https://same-shoestring.info"),
        },
    }, operations.UpdateServiceWebhookConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration != nil {
        // handle response
    }
}
```

## UpdateUser

Update an existing conversation user in your account's default service

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
            Attributes: sdk.String("similique"),
            FriendlyName: sdk.String("facilis"),
            RoleSid: sdk.String("vero"),
        },
        Sid: "ducimus",
        XTwilioWebhookEnabled: shared.UserEnumWebhookEnabledTypeEnumTrue.ToPointer(),
    }, operations.UpdateUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1User != nil {
        // handle response
    }
}
```

## UpdateUserConversation

Update a specific User Conversation.

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
    res, err := s.SDK.UpdateUserConversation(ctx, operations.UpdateUserConversationRequest{
        ConversationSid: "quibusdam",
        RequestBody: &operations.UpdateUserConversationUpdateUserConversationRequest{
            LastReadMessageIndex: sdk.Int64(848944),
            LastReadTimestamp: types.MustTimeFromString("2022-05-20T11:24:00.260Z"),
            NotificationLevel: shared.UserConversationEnumNotificationLevelEnumMuted.ToPointer(),
        },
        UserSid: "aut",
    }, operations.UpdateUserConversationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1UserUserConversation != nil {
        // handle response
    }
}
```
