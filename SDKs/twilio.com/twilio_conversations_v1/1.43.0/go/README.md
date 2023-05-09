# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_conversations_v1/1.43.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.CreateConfigurationAddress(ctx, operations.CreateConfigurationAddressCreateConfigurationAddressRequest{
        Address: "5786 Little Streets",
        AutoCreationConversationServiceSid: sdk.String("vel"),
        AutoCreationEnabled: sdk.Bool(false),
        AutoCreationStudioFlowSid: sdk.String("error"),
        AutoCreationStudioRetryCount: sdk.Int64(645894),
        AutoCreationType: shared.ConfigurationAddressEnumAutoCreationTypeEnumStudio.ToPointer(),
        AutoCreationWebhookFilters: []string{
            "magnam",
            "debitis",
        },
        AutoCreationWebhookMethod: shared.ConfigurationAddressEnumMethodEnumGet.ToPointer(),
        AutoCreationWebhookURL: sdk.String("delectus"),
        FriendlyName: sdk.String("tempora"),
        Type: shared.ConfigurationAddressEnumTypeEnumWhatsapp,
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateConfigurationAddress](docs/sdk/README.md#createconfigurationaddress) - Create a new address configuration
* [CreateConversation](docs/sdk/README.md#createconversation) - Create a new conversation in your account's default service
* [CreateConversationMessage](docs/sdk/README.md#createconversationmessage) - Add a new message to the conversation
* [CreateConversationParticipant](docs/sdk/README.md#createconversationparticipant) - Add a new participant to the conversation
* [CreateConversationScopedWebhook](docs/sdk/README.md#createconversationscopedwebhook) - Create a new webhook scoped to the conversation
* [CreateCredential](docs/sdk/README.md#createcredential) - Add a new push notification credential to your account
* [CreateRole](docs/sdk/README.md#createrole) - Create a new user role in your account's default service
* [CreateService](docs/sdk/README.md#createservice) - Create a new conversation service on your account
* [CreateServiceConversation](docs/sdk/README.md#createserviceconversation) - Create a new conversation in your service
* [CreateServiceConversationMessage](docs/sdk/README.md#createserviceconversationmessage) - Add a new message to the conversation in a specific service
* [CreateServiceConversationParticipant](docs/sdk/README.md#createserviceconversationparticipant) - Add a new participant to the conversation in a specific service
* [CreateServiceConversationScopedWebhook](docs/sdk/README.md#createserviceconversationscopedwebhook) - Create a new webhook scoped to the conversation in a specific service
* [CreateServiceRole](docs/sdk/README.md#createservicerole) - Create a new user role in your service
* [CreateServiceUser](docs/sdk/README.md#createserviceuser) - Add a new conversation user to your service
* [CreateUser](docs/sdk/README.md#createuser) - Add a new conversation user to your account's default service
* [DeleteConfigurationAddress](docs/sdk/README.md#deleteconfigurationaddress) - Remove an existing address configuration
* [DeleteConversation](docs/sdk/README.md#deleteconversation) - Remove a conversation from your account's default service
* [DeleteConversationMessage](docs/sdk/README.md#deleteconversationmessage) - Remove a message from the conversation
* [DeleteConversationParticipant](docs/sdk/README.md#deleteconversationparticipant) - Remove a participant from the conversation
* [DeleteConversationScopedWebhook](docs/sdk/README.md#deleteconversationscopedwebhook) - Remove an existing webhook scoped to the conversation
* [DeleteCredential](docs/sdk/README.md#deletecredential) - Remove a push notification credential from your account
* [DeleteRole](docs/sdk/README.md#deleterole) - Remove a user role from your account's default service
* [DeleteService](docs/sdk/README.md#deleteservice) - Remove a conversation service with all its nested resources from your account
* [DeleteServiceBinding](docs/sdk/README.md#deleteservicebinding) - Remove a push notification binding from the conversation service
* [DeleteServiceConversation](docs/sdk/README.md#deleteserviceconversation) - Remove a conversation from your service
* [DeleteServiceConversationMessage](docs/sdk/README.md#deleteserviceconversationmessage) - Remove a message from the conversation
* [DeleteServiceConversationParticipant](docs/sdk/README.md#deleteserviceconversationparticipant) - Remove a participant from the conversation
* [DeleteServiceConversationScopedWebhook](docs/sdk/README.md#deleteserviceconversationscopedwebhook) - Remove an existing webhook scoped to the conversation
* [DeleteServiceRole](docs/sdk/README.md#deleteservicerole) - Remove a user role from your service
* [DeleteServiceUser](docs/sdk/README.md#deleteserviceuser) - Remove a conversation user from your service
* [DeleteServiceUserConversation](docs/sdk/README.md#deleteserviceuserconversation) - Delete a specific User Conversation.
* [DeleteUser](docs/sdk/README.md#deleteuser) - Remove a conversation user from your account's default service
* [DeleteUserConversation](docs/sdk/README.md#deleteuserconversation) - Delete a specific User Conversation.
* [FetchConfiguration](docs/sdk/README.md#fetchconfiguration) - Fetch the global configuration of conversations on your account
* [FetchConfigurationAddress](docs/sdk/README.md#fetchconfigurationaddress) - Fetch an address configuration 
* [FetchConfigurationWebhook](docs/sdk/README.md#fetchconfigurationwebhook)
* [FetchConversation](docs/sdk/README.md#fetchconversation) - Fetch a conversation from your account's default service
* [FetchConversationMessage](docs/sdk/README.md#fetchconversationmessage) - Fetch a message from the conversation
* [FetchConversationMessageReceipt](docs/sdk/README.md#fetchconversationmessagereceipt) - Fetch the delivery and read receipts of the conversation message
* [FetchConversationParticipant](docs/sdk/README.md#fetchconversationparticipant) - Fetch a participant of the conversation
* [FetchConversationScopedWebhook](docs/sdk/README.md#fetchconversationscopedwebhook) - Fetch the configuration of a conversation-scoped webhook
* [FetchCredential](docs/sdk/README.md#fetchcredential) - Fetch a push notification credential from your account
* [FetchRole](docs/sdk/README.md#fetchrole) - Fetch a user role from your account's default service
* [FetchService](docs/sdk/README.md#fetchservice) - Fetch a conversation service from your account
* [FetchServiceBinding](docs/sdk/README.md#fetchservicebinding) - Fetch a push notification binding from the conversation service
* [FetchServiceConfiguration](docs/sdk/README.md#fetchserviceconfiguration) - Fetch the configuration of a conversation service
* [FetchServiceConversation](docs/sdk/README.md#fetchserviceconversation) - Fetch a conversation from your service
* [FetchServiceConversationMessage](docs/sdk/README.md#fetchserviceconversationmessage) - Fetch a message from the conversation
* [FetchServiceConversationMessageReceipt](docs/sdk/README.md#fetchserviceconversationmessagereceipt) - Fetch the delivery and read receipts of the conversation message
* [FetchServiceConversationParticipant](docs/sdk/README.md#fetchserviceconversationparticipant) - Fetch a participant of the conversation
* [FetchServiceConversationScopedWebhook](docs/sdk/README.md#fetchserviceconversationscopedwebhook) - Fetch the configuration of a conversation-scoped webhook
* [FetchServiceNotification](docs/sdk/README.md#fetchservicenotification) - Fetch push notification service settings
* [FetchServiceRole](docs/sdk/README.md#fetchservicerole) - Fetch a user role from your service
* [FetchServiceUser](docs/sdk/README.md#fetchserviceuser) - Fetch a conversation user from your service
* [FetchServiceUserConversation](docs/sdk/README.md#fetchserviceuserconversation) - Fetch a specific User Conversation.
* [FetchServiceWebhookConfiguration](docs/sdk/README.md#fetchservicewebhookconfiguration) - Fetch a specific service webhook configuration.
* [FetchUser](docs/sdk/README.md#fetchuser) - Fetch a conversation user from your account's default service
* [FetchUserConversation](docs/sdk/README.md#fetchuserconversation) - Fetch a specific User Conversation.
* [ListConfigurationAddress](docs/sdk/README.md#listconfigurationaddress) - Retrieve a list of address configurations for an account
* [ListConversation](docs/sdk/README.md#listconversation) - Retrieve a list of conversations in your account's default service
* [ListConversationMessage](docs/sdk/README.md#listconversationmessage) - Retrieve a list of all messages in the conversation
* [ListConversationMessageReceipt](docs/sdk/README.md#listconversationmessagereceipt) - Retrieve a list of all delivery and read receipts of the conversation message
* [ListConversationParticipant](docs/sdk/README.md#listconversationparticipant) - Retrieve a list of all participants of the conversation
* [ListConversationScopedWebhook](docs/sdk/README.md#listconversationscopedwebhook) - Retrieve a list of all webhooks scoped to the conversation
* [ListCredential](docs/sdk/README.md#listcredential) - Retrieve a list of all push notification credentials on your account
* [ListParticipantConversation](docs/sdk/README.md#listparticipantconversation) - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* [ListRole](docs/sdk/README.md#listrole) - Retrieve a list of all user roles in your account's default service
* [ListService](docs/sdk/README.md#listservice) - Retrieve a list of all conversation services on your account
* [ListServiceBinding](docs/sdk/README.md#listservicebinding) - Retrieve a list of all push notification bindings in the conversation service
* [ListServiceConversation](docs/sdk/README.md#listserviceconversation) - Retrieve a list of conversations in your service
* [ListServiceConversationMessage](docs/sdk/README.md#listserviceconversationmessage) - Retrieve a list of all messages in the conversation
* [ListServiceConversationMessageReceipt](docs/sdk/README.md#listserviceconversationmessagereceipt) - Retrieve a list of all delivery and read receipts of the conversation message
* [ListServiceConversationParticipant](docs/sdk/README.md#listserviceconversationparticipant) - Retrieve a list of all participants of the conversation
* [ListServiceConversationScopedWebhook](docs/sdk/README.md#listserviceconversationscopedwebhook) - Retrieve a list of all webhooks scoped to the conversation
* [ListServiceParticipantConversation](docs/sdk/README.md#listserviceparticipantconversation) - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* [ListServiceRole](docs/sdk/README.md#listservicerole) - Retrieve a list of all user roles in your service
* [ListServiceUser](docs/sdk/README.md#listserviceuser) - Retrieve a list of all conversation users in your service
* [ListServiceUserConversation](docs/sdk/README.md#listserviceuserconversation) - Retrieve a list of all User Conversations for the User.
* [ListUser](docs/sdk/README.md#listuser) - Retrieve a list of all conversation users in your account's default service
* [ListUserConversation](docs/sdk/README.md#listuserconversation) - Retrieve a list of all User Conversations for the User.
* [UpdateConfiguration](docs/sdk/README.md#updateconfiguration) - Update the global configuration of conversations on your account
* [UpdateConfigurationAddress](docs/sdk/README.md#updateconfigurationaddress) - Update an existing address configuration
* [UpdateConfigurationWebhook](docs/sdk/README.md#updateconfigurationwebhook)
* [UpdateConversation](docs/sdk/README.md#updateconversation) - Update an existing conversation in your account's default service
* [UpdateConversationMessage](docs/sdk/README.md#updateconversationmessage) - Update an existing message in the conversation
* [UpdateConversationParticipant](docs/sdk/README.md#updateconversationparticipant) - Update an existing participant in the conversation
* [UpdateConversationScopedWebhook](docs/sdk/README.md#updateconversationscopedwebhook) - Update an existing conversation-scoped webhook
* [UpdateCredential](docs/sdk/README.md#updatecredential) - Update an existing push notification credential on your account
* [UpdateRole](docs/sdk/README.md#updaterole) - Update an existing user role in your account's default service
* [UpdateServiceConfiguration](docs/sdk/README.md#updateserviceconfiguration) - Update configuration settings of a conversation service
* [UpdateServiceConversation](docs/sdk/README.md#updateserviceconversation) - Update an existing conversation in your service
* [UpdateServiceConversationMessage](docs/sdk/README.md#updateserviceconversationmessage) - Update an existing message in the conversation
* [UpdateServiceConversationParticipant](docs/sdk/README.md#updateserviceconversationparticipant) - Update an existing participant in the conversation
* [UpdateServiceConversationScopedWebhook](docs/sdk/README.md#updateserviceconversationscopedwebhook) - Update an existing conversation-scoped webhook
* [UpdateServiceNotification](docs/sdk/README.md#updateservicenotification) - Update push notification service settings
* [UpdateServiceRole](docs/sdk/README.md#updateservicerole) - Update an existing user role in your service
* [UpdateServiceUser](docs/sdk/README.md#updateserviceuser) - Update an existing conversation user in your service
* [UpdateServiceUserConversation](docs/sdk/README.md#updateserviceuserconversation) - Update a specific User Conversation.
* [UpdateServiceWebhookConfiguration](docs/sdk/README.md#updateservicewebhookconfiguration) - Update a specific Webhook.
* [UpdateUser](docs/sdk/README.md#updateuser) - Update an existing conversation user in your account's default service
* [UpdateUserConversation](docs/sdk/README.md#updateuserconversation) - Update a specific User Conversation.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
