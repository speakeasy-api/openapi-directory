# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConfigurationAddressCreateConfigurationAddressRequest;
import org.openapis.openapi.models.operations.CreateConfigurationAddressResponse;
import org.openapis.openapi.models.operations.CreateConfigurationAddressSecurity;
import org.openapis.openapi.models.shared.ConfigurationAddressEnumAutoCreationTypeEnum;
import org.openapis.openapi.models.shared.ConfigurationAddressEnumMethodEnum;
import org.openapis.openapi.models.shared.ConfigurationAddressEnumTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConfigurationAddressCreateConfigurationAddressRequest req = new CreateConfigurationAddressCreateConfigurationAddressRequest("corrupti", ConfigurationAddressEnumTypeEnum.MESSENGER) {{
                autoCreationConversationServiceSid = "distinctio";
                autoCreationEnabled = false;
                autoCreationStudioFlowSid = "quibusdam";
                autoCreationStudioRetryCount = 602763L;
                autoCreationType = ConfigurationAddressEnumAutoCreationTypeEnum.DEFAULT_;
                autoCreationWebhookFilters = new String[]{{
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
                autoCreationWebhookMethod = ConfigurationAddressEnumMethodEnum.POST;
                autoCreationWebhookUrl = "suscipit";
                friendlyName = "iure";
            }};            

            CreateConfigurationAddressResponse res = sdk.createConfigurationAddress(req, new CreateConfigurationAddressSecurity("magnam", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConfigurationAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createConfigurationAddress](docs/sdk/README.md#createconfigurationaddress) - Create a new address configuration
* [createConversation](docs/sdk/README.md#createconversation) - Create a new conversation in your account's default service
* [createConversationMessage](docs/sdk/README.md#createconversationmessage) - Add a new message to the conversation
* [createConversationParticipant](docs/sdk/README.md#createconversationparticipant) - Add a new participant to the conversation
* [createConversationScopedWebhook](docs/sdk/README.md#createconversationscopedwebhook) - Create a new webhook scoped to the conversation
* [createCredential](docs/sdk/README.md#createcredential) - Add a new push notification credential to your account
* [createRole](docs/sdk/README.md#createrole) - Create a new user role in your account's default service
* [createService](docs/sdk/README.md#createservice) - Create a new conversation service on your account
* [createServiceConversation](docs/sdk/README.md#createserviceconversation) - Create a new conversation in your service
* [createServiceConversationMessage](docs/sdk/README.md#createserviceconversationmessage) - Add a new message to the conversation in a specific service
* [createServiceConversationParticipant](docs/sdk/README.md#createserviceconversationparticipant) - Add a new participant to the conversation in a specific service
* [createServiceConversationScopedWebhook](docs/sdk/README.md#createserviceconversationscopedwebhook) - Create a new webhook scoped to the conversation in a specific service
* [createServiceRole](docs/sdk/README.md#createservicerole) - Create a new user role in your service
* [createServiceUser](docs/sdk/README.md#createserviceuser) - Add a new conversation user to your service
* [createUser](docs/sdk/README.md#createuser) - Add a new conversation user to your account's default service
* [deleteConfigurationAddress](docs/sdk/README.md#deleteconfigurationaddress) - Remove an existing address configuration
* [deleteConversation](docs/sdk/README.md#deleteconversation) - Remove a conversation from your account's default service
* [deleteConversationMessage](docs/sdk/README.md#deleteconversationmessage) - Remove a message from the conversation
* [deleteConversationParticipant](docs/sdk/README.md#deleteconversationparticipant) - Remove a participant from the conversation
* [deleteConversationScopedWebhook](docs/sdk/README.md#deleteconversationscopedwebhook) - Remove an existing webhook scoped to the conversation
* [deleteCredential](docs/sdk/README.md#deletecredential) - Remove a push notification credential from your account
* [deleteRole](docs/sdk/README.md#deleterole) - Remove a user role from your account's default service
* [deleteService](docs/sdk/README.md#deleteservice) - Remove a conversation service with all its nested resources from your account
* [deleteServiceBinding](docs/sdk/README.md#deleteservicebinding) - Remove a push notification binding from the conversation service
* [deleteServiceConversation](docs/sdk/README.md#deleteserviceconversation) - Remove a conversation from your service
* [deleteServiceConversationMessage](docs/sdk/README.md#deleteserviceconversationmessage) - Remove a message from the conversation
* [deleteServiceConversationParticipant](docs/sdk/README.md#deleteserviceconversationparticipant) - Remove a participant from the conversation
* [deleteServiceConversationScopedWebhook](docs/sdk/README.md#deleteserviceconversationscopedwebhook) - Remove an existing webhook scoped to the conversation
* [deleteServiceRole](docs/sdk/README.md#deleteservicerole) - Remove a user role from your service
* [deleteServiceUser](docs/sdk/README.md#deleteserviceuser) - Remove a conversation user from your service
* [deleteServiceUserConversation](docs/sdk/README.md#deleteserviceuserconversation) - Delete a specific User Conversation.
* [deleteUser](docs/sdk/README.md#deleteuser) - Remove a conversation user from your account's default service
* [deleteUserConversation](docs/sdk/README.md#deleteuserconversation) - Delete a specific User Conversation.
* [fetchConfiguration](docs/sdk/README.md#fetchconfiguration) - Fetch the global configuration of conversations on your account
* [fetchConfigurationAddress](docs/sdk/README.md#fetchconfigurationaddress) - Fetch an address configuration 
* [fetchConfigurationWebhook](docs/sdk/README.md#fetchconfigurationwebhook)
* [fetchConversation](docs/sdk/README.md#fetchconversation) - Fetch a conversation from your account's default service
* [fetchConversationMessage](docs/sdk/README.md#fetchconversationmessage) - Fetch a message from the conversation
* [fetchConversationMessageReceipt](docs/sdk/README.md#fetchconversationmessagereceipt) - Fetch the delivery and read receipts of the conversation message
* [fetchConversationParticipant](docs/sdk/README.md#fetchconversationparticipant) - Fetch a participant of the conversation
* [fetchConversationScopedWebhook](docs/sdk/README.md#fetchconversationscopedwebhook) - Fetch the configuration of a conversation-scoped webhook
* [fetchCredential](docs/sdk/README.md#fetchcredential) - Fetch a push notification credential from your account
* [fetchRole](docs/sdk/README.md#fetchrole) - Fetch a user role from your account's default service
* [fetchService](docs/sdk/README.md#fetchservice) - Fetch a conversation service from your account
* [fetchServiceBinding](docs/sdk/README.md#fetchservicebinding) - Fetch a push notification binding from the conversation service
* [fetchServiceConfiguration](docs/sdk/README.md#fetchserviceconfiguration) - Fetch the configuration of a conversation service
* [fetchServiceConversation](docs/sdk/README.md#fetchserviceconversation) - Fetch a conversation from your service
* [fetchServiceConversationMessage](docs/sdk/README.md#fetchserviceconversationmessage) - Fetch a message from the conversation
* [fetchServiceConversationMessageReceipt](docs/sdk/README.md#fetchserviceconversationmessagereceipt) - Fetch the delivery and read receipts of the conversation message
* [fetchServiceConversationParticipant](docs/sdk/README.md#fetchserviceconversationparticipant) - Fetch a participant of the conversation
* [fetchServiceConversationScopedWebhook](docs/sdk/README.md#fetchserviceconversationscopedwebhook) - Fetch the configuration of a conversation-scoped webhook
* [fetchServiceNotification](docs/sdk/README.md#fetchservicenotification) - Fetch push notification service settings
* [fetchServiceRole](docs/sdk/README.md#fetchservicerole) - Fetch a user role from your service
* [fetchServiceUser](docs/sdk/README.md#fetchserviceuser) - Fetch a conversation user from your service
* [fetchServiceUserConversation](docs/sdk/README.md#fetchserviceuserconversation) - Fetch a specific User Conversation.
* [fetchServiceWebhookConfiguration](docs/sdk/README.md#fetchservicewebhookconfiguration) - Fetch a specific service webhook configuration.
* [fetchUser](docs/sdk/README.md#fetchuser) - Fetch a conversation user from your account's default service
* [fetchUserConversation](docs/sdk/README.md#fetchuserconversation) - Fetch a specific User Conversation.
* [listConfigurationAddress](docs/sdk/README.md#listconfigurationaddress) - Retrieve a list of address configurations for an account
* [listConversation](docs/sdk/README.md#listconversation) - Retrieve a list of conversations in your account's default service
* [listConversationMessage](docs/sdk/README.md#listconversationmessage) - Retrieve a list of all messages in the conversation
* [listConversationMessageReceipt](docs/sdk/README.md#listconversationmessagereceipt) - Retrieve a list of all delivery and read receipts of the conversation message
* [listConversationParticipant](docs/sdk/README.md#listconversationparticipant) - Retrieve a list of all participants of the conversation
* [listConversationScopedWebhook](docs/sdk/README.md#listconversationscopedwebhook) - Retrieve a list of all webhooks scoped to the conversation
* [listCredential](docs/sdk/README.md#listcredential) - Retrieve a list of all push notification credentials on your account
* [listParticipantConversation](docs/sdk/README.md#listparticipantconversation) - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* [listRole](docs/sdk/README.md#listrole) - Retrieve a list of all user roles in your account's default service
* [listService](docs/sdk/README.md#listservice) - Retrieve a list of all conversation services on your account
* [listServiceBinding](docs/sdk/README.md#listservicebinding) - Retrieve a list of all push notification bindings in the conversation service
* [listServiceConversation](docs/sdk/README.md#listserviceconversation) - Retrieve a list of conversations in your service
* [listServiceConversationMessage](docs/sdk/README.md#listserviceconversationmessage) - Retrieve a list of all messages in the conversation
* [listServiceConversationMessageReceipt](docs/sdk/README.md#listserviceconversationmessagereceipt) - Retrieve a list of all delivery and read receipts of the conversation message
* [listServiceConversationParticipant](docs/sdk/README.md#listserviceconversationparticipant) - Retrieve a list of all participants of the conversation
* [listServiceConversationScopedWebhook](docs/sdk/README.md#listserviceconversationscopedwebhook) - Retrieve a list of all webhooks scoped to the conversation
* [listServiceParticipantConversation](docs/sdk/README.md#listserviceparticipantconversation) - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* [listServiceRole](docs/sdk/README.md#listservicerole) - Retrieve a list of all user roles in your service
* [listServiceUser](docs/sdk/README.md#listserviceuser) - Retrieve a list of all conversation users in your service
* [listServiceUserConversation](docs/sdk/README.md#listserviceuserconversation) - Retrieve a list of all User Conversations for the User.
* [listUser](docs/sdk/README.md#listuser) - Retrieve a list of all conversation users in your account's default service
* [listUserConversation](docs/sdk/README.md#listuserconversation) - Retrieve a list of all User Conversations for the User.
* [updateConfiguration](docs/sdk/README.md#updateconfiguration) - Update the global configuration of conversations on your account
* [updateConfigurationAddress](docs/sdk/README.md#updateconfigurationaddress) - Update an existing address configuration
* [updateConfigurationWebhook](docs/sdk/README.md#updateconfigurationwebhook)
* [updateConversation](docs/sdk/README.md#updateconversation) - Update an existing conversation in your account's default service
* [updateConversationMessage](docs/sdk/README.md#updateconversationmessage) - Update an existing message in the conversation
* [updateConversationParticipant](docs/sdk/README.md#updateconversationparticipant) - Update an existing participant in the conversation
* [updateConversationScopedWebhook](docs/sdk/README.md#updateconversationscopedwebhook) - Update an existing conversation-scoped webhook
* [updateCredential](docs/sdk/README.md#updatecredential) - Update an existing push notification credential on your account
* [updateRole](docs/sdk/README.md#updaterole) - Update an existing user role in your account's default service
* [updateServiceConfiguration](docs/sdk/README.md#updateserviceconfiguration) - Update configuration settings of a conversation service
* [updateServiceConversation](docs/sdk/README.md#updateserviceconversation) - Update an existing conversation in your service
* [updateServiceConversationMessage](docs/sdk/README.md#updateserviceconversationmessage) - Update an existing message in the conversation
* [updateServiceConversationParticipant](docs/sdk/README.md#updateserviceconversationparticipant) - Update an existing participant in the conversation
* [updateServiceConversationScopedWebhook](docs/sdk/README.md#updateserviceconversationscopedwebhook) - Update an existing conversation-scoped webhook
* [updateServiceNotification](docs/sdk/README.md#updateservicenotification) - Update push notification service settings
* [updateServiceRole](docs/sdk/README.md#updateservicerole) - Update an existing user role in your service
* [updateServiceUser](docs/sdk/README.md#updateserviceuser) - Update an existing conversation user in your service
* [updateServiceUserConversation](docs/sdk/README.md#updateserviceuserconversation) - Update a specific User Conversation.
* [updateServiceWebhookConfiguration](docs/sdk/README.md#updateservicewebhookconfiguration) - Update a specific Webhook.
* [updateUser](docs/sdk/README.md#updateuser) - Update an existing conversation user in your account's default service
* [updateUserConversation](docs/sdk/README.md#updateuserconversation) - Update a specific User Conversation.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
