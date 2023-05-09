# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createConfigurationAddress](#createconfigurationaddress) - Create a new address configuration
* [createConversation](#createconversation) - Create a new conversation in your account's default service
* [createConversationMessage](#createconversationmessage) - Add a new message to the conversation
* [createConversationParticipant](#createconversationparticipant) - Add a new participant to the conversation
* [createConversationScopedWebhook](#createconversationscopedwebhook) - Create a new webhook scoped to the conversation
* [createCredential](#createcredential) - Add a new push notification credential to your account
* [createRole](#createrole) - Create a new user role in your account's default service
* [createService](#createservice) - Create a new conversation service on your account
* [createServiceConversation](#createserviceconversation) - Create a new conversation in your service
* [createServiceConversationMessage](#createserviceconversationmessage) - Add a new message to the conversation in a specific service
* [createServiceConversationParticipant](#createserviceconversationparticipant) - Add a new participant to the conversation in a specific service
* [createServiceConversationScopedWebhook](#createserviceconversationscopedwebhook) - Create a new webhook scoped to the conversation in a specific service
* [createServiceRole](#createservicerole) - Create a new user role in your service
* [createServiceUser](#createserviceuser) - Add a new conversation user to your service
* [createUser](#createuser) - Add a new conversation user to your account's default service
* [deleteConfigurationAddress](#deleteconfigurationaddress) - Remove an existing address configuration
* [deleteConversation](#deleteconversation) - Remove a conversation from your account's default service
* [deleteConversationMessage](#deleteconversationmessage) - Remove a message from the conversation
* [deleteConversationParticipant](#deleteconversationparticipant) - Remove a participant from the conversation
* [deleteConversationScopedWebhook](#deleteconversationscopedwebhook) - Remove an existing webhook scoped to the conversation
* [deleteCredential](#deletecredential) - Remove a push notification credential from your account
* [deleteRole](#deleterole) - Remove a user role from your account's default service
* [deleteService](#deleteservice) - Remove a conversation service with all its nested resources from your account
* [deleteServiceBinding](#deleteservicebinding) - Remove a push notification binding from the conversation service
* [deleteServiceConversation](#deleteserviceconversation) - Remove a conversation from your service
* [deleteServiceConversationMessage](#deleteserviceconversationmessage) - Remove a message from the conversation
* [deleteServiceConversationParticipant](#deleteserviceconversationparticipant) - Remove a participant from the conversation
* [deleteServiceConversationScopedWebhook](#deleteserviceconversationscopedwebhook) - Remove an existing webhook scoped to the conversation
* [deleteServiceRole](#deleteservicerole) - Remove a user role from your service
* [deleteServiceUser](#deleteserviceuser) - Remove a conversation user from your service
* [deleteServiceUserConversation](#deleteserviceuserconversation) - Delete a specific User Conversation.
* [deleteUser](#deleteuser) - Remove a conversation user from your account's default service
* [deleteUserConversation](#deleteuserconversation) - Delete a specific User Conversation.
* [fetchConfiguration](#fetchconfiguration) - Fetch the global configuration of conversations on your account
* [fetchConfigurationAddress](#fetchconfigurationaddress) - Fetch an address configuration 
* [fetchConfigurationWebhook](#fetchconfigurationwebhook)
* [fetchConversation](#fetchconversation) - Fetch a conversation from your account's default service
* [fetchConversationMessage](#fetchconversationmessage) - Fetch a message from the conversation
* [fetchConversationMessageReceipt](#fetchconversationmessagereceipt) - Fetch the delivery and read receipts of the conversation message
* [fetchConversationParticipant](#fetchconversationparticipant) - Fetch a participant of the conversation
* [fetchConversationScopedWebhook](#fetchconversationscopedwebhook) - Fetch the configuration of a conversation-scoped webhook
* [fetchCredential](#fetchcredential) - Fetch a push notification credential from your account
* [fetchRole](#fetchrole) - Fetch a user role from your account's default service
* [fetchService](#fetchservice) - Fetch a conversation service from your account
* [fetchServiceBinding](#fetchservicebinding) - Fetch a push notification binding from the conversation service
* [fetchServiceConfiguration](#fetchserviceconfiguration) - Fetch the configuration of a conversation service
* [fetchServiceConversation](#fetchserviceconversation) - Fetch a conversation from your service
* [fetchServiceConversationMessage](#fetchserviceconversationmessage) - Fetch a message from the conversation
* [fetchServiceConversationMessageReceipt](#fetchserviceconversationmessagereceipt) - Fetch the delivery and read receipts of the conversation message
* [fetchServiceConversationParticipant](#fetchserviceconversationparticipant) - Fetch a participant of the conversation
* [fetchServiceConversationScopedWebhook](#fetchserviceconversationscopedwebhook) - Fetch the configuration of a conversation-scoped webhook
* [fetchServiceNotification](#fetchservicenotification) - Fetch push notification service settings
* [fetchServiceRole](#fetchservicerole) - Fetch a user role from your service
* [fetchServiceUser](#fetchserviceuser) - Fetch a conversation user from your service
* [fetchServiceUserConversation](#fetchserviceuserconversation) - Fetch a specific User Conversation.
* [fetchServiceWebhookConfiguration](#fetchservicewebhookconfiguration) - Fetch a specific service webhook configuration.
* [fetchUser](#fetchuser) - Fetch a conversation user from your account's default service
* [fetchUserConversation](#fetchuserconversation) - Fetch a specific User Conversation.
* [listConfigurationAddress](#listconfigurationaddress) - Retrieve a list of address configurations for an account
* [listConversation](#listconversation) - Retrieve a list of conversations in your account's default service
* [listConversationMessage](#listconversationmessage) - Retrieve a list of all messages in the conversation
* [listConversationMessageReceipt](#listconversationmessagereceipt) - Retrieve a list of all delivery and read receipts of the conversation message
* [listConversationParticipant](#listconversationparticipant) - Retrieve a list of all participants of the conversation
* [listConversationScopedWebhook](#listconversationscopedwebhook) - Retrieve a list of all webhooks scoped to the conversation
* [listCredential](#listcredential) - Retrieve a list of all push notification credentials on your account
* [listParticipantConversation](#listparticipantconversation) - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* [listRole](#listrole) - Retrieve a list of all user roles in your account's default service
* [listService](#listservice) - Retrieve a list of all conversation services on your account
* [listServiceBinding](#listservicebinding) - Retrieve a list of all push notification bindings in the conversation service
* [listServiceConversation](#listserviceconversation) - Retrieve a list of conversations in your service
* [listServiceConversationMessage](#listserviceconversationmessage) - Retrieve a list of all messages in the conversation
* [listServiceConversationMessageReceipt](#listserviceconversationmessagereceipt) - Retrieve a list of all delivery and read receipts of the conversation message
* [listServiceConversationParticipant](#listserviceconversationparticipant) - Retrieve a list of all participants of the conversation
* [listServiceConversationScopedWebhook](#listserviceconversationscopedwebhook) - Retrieve a list of all webhooks scoped to the conversation
* [listServiceParticipantConversation](#listserviceparticipantconversation) - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* [listServiceRole](#listservicerole) - Retrieve a list of all user roles in your service
* [listServiceUser](#listserviceuser) - Retrieve a list of all conversation users in your service
* [listServiceUserConversation](#listserviceuserconversation) - Retrieve a list of all User Conversations for the User.
* [listUser](#listuser) - Retrieve a list of all conversation users in your account's default service
* [listUserConversation](#listuserconversation) - Retrieve a list of all User Conversations for the User.
* [updateConfiguration](#updateconfiguration) - Update the global configuration of conversations on your account
* [updateConfigurationAddress](#updateconfigurationaddress) - Update an existing address configuration
* [updateConfigurationWebhook](#updateconfigurationwebhook)
* [updateConversation](#updateconversation) - Update an existing conversation in your account's default service
* [updateConversationMessage](#updateconversationmessage) - Update an existing message in the conversation
* [updateConversationParticipant](#updateconversationparticipant) - Update an existing participant in the conversation
* [updateConversationScopedWebhook](#updateconversationscopedwebhook) - Update an existing conversation-scoped webhook
* [updateCredential](#updatecredential) - Update an existing push notification credential on your account
* [updateRole](#updaterole) - Update an existing user role in your account's default service
* [updateServiceConfiguration](#updateserviceconfiguration) - Update configuration settings of a conversation service
* [updateServiceConversation](#updateserviceconversation) - Update an existing conversation in your service
* [updateServiceConversationMessage](#updateserviceconversationmessage) - Update an existing message in the conversation
* [updateServiceConversationParticipant](#updateserviceconversationparticipant) - Update an existing participant in the conversation
* [updateServiceConversationScopedWebhook](#updateserviceconversationscopedwebhook) - Update an existing conversation-scoped webhook
* [updateServiceNotification](#updateservicenotification) - Update push notification service settings
* [updateServiceRole](#updateservicerole) - Update an existing user role in your service
* [updateServiceUser](#updateserviceuser) - Update an existing conversation user in your service
* [updateServiceUserConversation](#updateserviceuserconversation) - Update a specific User Conversation.
* [updateServiceWebhookConfiguration](#updateservicewebhookconfiguration) - Update a specific Webhook.
* [updateUser](#updateuser) - Update an existing conversation user in your account's default service
* [updateUserConversation](#updateuserconversation) - Update a specific User Conversation.

## createConfigurationAddress

Create a new address configuration

### Example Usage

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

            CreateConfigurationAddressCreateConfigurationAddressRequest req = new CreateConfigurationAddressCreateConfigurationAddressRequest("ipsa", ConfigurationAddressEnumTypeEnum.GBM) {{
                autoCreationConversationServiceSid = "tempora";
                autoCreationEnabled = false;
                autoCreationStudioFlowSid = "suscipit";
                autoCreationStudioRetryCount = 477665L;
                autoCreationType = ConfigurationAddressEnumAutoCreationTypeEnum.DEFAULT_;
                autoCreationWebhookFilters = new String[]{{
                    add("voluptatum"),
                    add("iusto"),
                    add("excepturi"),
                    add("nisi"),
                }};
                autoCreationWebhookMethod = ConfigurationAddressEnumMethodEnum.POST;
                autoCreationWebhookUrl = "temporibus";
                friendlyName = "ab";
            }};            

            CreateConfigurationAddressResponse res = sdk.sdk.createConfigurationAddress(req, new CreateConfigurationAddressSecurity("quis", "veritatis") {{
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

## createConversation

Create a new conversation in your account's default service

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConversationCreateConversationRequest;
import org.openapis.openapi.models.operations.CreateConversationRequest;
import org.openapis.openapi.models.operations.CreateConversationResponse;
import org.openapis.openapi.models.operations.CreateConversationSecurity;
import org.openapis.openapi.models.shared.ConversationEnumStateEnum;
import org.openapis.openapi.models.shared.ConversationEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConversationRequest req = new CreateConversationRequest() {{
                requestBody = new CreateConversationCreateConversationRequest() {{
                    attributes = "deserunt";
                    dateCreated = OffsetDateTime.parse("2022-08-19T14:12:14.246Z");
                    dateUpdated = OffsetDateTime.parse("2020-02-17T21:57:45.117Z");
                    friendlyName = "quo";
                    messagingServiceSid = "odit";
                    state = ConversationEnumStateEnum.CLOSED;
                    timersClosed = "at";
                    timersInactive = "maiores";
                    uniqueName = "molestiae";
                }};;
                xTwilioWebhookEnabled = ConversationEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            CreateConversationResponse res = sdk.sdk.createConversation(req, new CreateConversationSecurity("quod", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Conversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConversationMessage

Add a new message to the conversation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConversationMessageCreateConversationMessageRequest;
import org.openapis.openapi.models.operations.CreateConversationMessageRequest;
import org.openapis.openapi.models.operations.CreateConversationMessageResponse;
import org.openapis.openapi.models.operations.CreateConversationMessageSecurity;
import org.openapis.openapi.models.shared.ConversationMessageEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConversationMessageRequest req = new CreateConversationMessageRequest("totam") {{
                requestBody = new CreateConversationMessageCreateConversationMessageRequest() {{
                    attributes = "porro";
                    author = "dolorum";
                    body = "dicta";
                    contentSid = "nam";
                    contentVariables = "officia";
                    dateCreated = OffsetDateTime.parse("2022-09-18T08:27:00.721Z");
                    dateUpdated = OffsetDateTime.parse("2021-02-10T09:24:01.909Z");
                    mediaSid = "optio";
                }};;
                xTwilioWebhookEnabled = ConversationMessageEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            CreateConversationMessageResponse res = sdk.sdk.createConversationMessage(req, new CreateConversationMessageSecurity("beatae", "commodi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConversationConversationMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConversationParticipant

Add a new participant to the conversation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConversationParticipantCreateConversationParticipantRequest;
import org.openapis.openapi.models.operations.CreateConversationParticipantRequest;
import org.openapis.openapi.models.operations.CreateConversationParticipantResponse;
import org.openapis.openapi.models.operations.CreateConversationParticipantSecurity;
import org.openapis.openapi.models.shared.ConversationParticipantEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConversationParticipantRequest req = new CreateConversationParticipantRequest("molestiae") {{
                requestBody = new CreateConversationParticipantCreateConversationParticipantRequest() {{
                    attributes = "modi";
                    dateCreated = OffsetDateTime.parse("2022-03-24T09:42:46.236Z");
                    dateUpdated = OffsetDateTime.parse("2022-02-02T00:14:45.467Z");
                    identity = "ipsum";
                    messagingBindingAddress = "excepturi";
                    messagingBindingProjectedAddress = "aspernatur";
                    messagingBindingProxyAddress = "perferendis";
                    roleSid = "ad";
                }};;
                xTwilioWebhookEnabled = ConversationParticipantEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            CreateConversationParticipantResponse res = sdk.sdk.createConversationParticipant(req, new CreateConversationParticipantSecurity("sed", "iste") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConversationConversationParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConversationScopedWebhook

Create a new webhook scoped to the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConversationScopedWebhookCreateConversationScopedWebhookRequest;
import org.openapis.openapi.models.operations.CreateConversationScopedWebhookRequest;
import org.openapis.openapi.models.operations.CreateConversationScopedWebhookResponse;
import org.openapis.openapi.models.operations.CreateConversationScopedWebhookSecurity;
import org.openapis.openapi.models.shared.ConversationScopedWebhookEnumMethodEnum;
import org.openapis.openapi.models.shared.ConversationScopedWebhookEnumTargetEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConversationScopedWebhookRequest req = new CreateConversationScopedWebhookRequest("dolor") {{
                requestBody = new CreateConversationScopedWebhookCreateConversationScopedWebhookRequest(ConversationScopedWebhookEnumTargetEnum.TRIGGER) {{
                    configurationFilters = new String[]{{
                        add("hic"),
                        add("saepe"),
                    }};
                    configurationFlowSid = "fuga";
                    configurationMethod = ConversationScopedWebhookEnumMethodEnum.GET;
                    configurationReplayAfter = 359508L;
                    configurationTriggers = new String[]{{
                        add("iure"),
                        add("saepe"),
                        add("quidem"),
                    }};
                    configurationUrl = "architecto";
                }};;
            }};            

            CreateConversationScopedWebhookResponse res = sdk.sdk.createConversationScopedWebhook(req, new CreateConversationScopedWebhookSecurity("ipsa", "reiciendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConversationConversationScopedWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCredential

Add a new push notification credential to your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCredentialCreateCredentialRequest;
import org.openapis.openapi.models.operations.CreateCredentialResponse;
import org.openapis.openapi.models.operations.CreateCredentialSecurity;
import org.openapis.openapi.models.shared.CredentialEnumPushTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialCreateCredentialRequest req = new CreateCredentialCreateCredentialRequest(CredentialEnumPushTypeEnum.FCM) {{
                apiKey = "mollitia";
                certificate = "laborum";
                friendlyName = "dolores";
                privateKey = "dolorem";
                sandbox = false;
                secret = "corporis";
            }};            

            CreateCredentialResponse res = sdk.sdk.createCredential(req, new CreateCredentialSecurity("explicabo", "nobis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Credential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRole

Create a new user role in your account's default service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRoleCreateRoleRequest;
import org.openapis.openapi.models.operations.CreateRoleResponse;
import org.openapis.openapi.models.operations.CreateRoleSecurity;
import org.openapis.openapi.models.shared.RoleEnumRoleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRoleCreateRoleRequest req = new CreateRoleCreateRoleRequest("enim",                 new String[]{{
                                add("nemo"),
                                add("minima"),
                                add("excepturi"),
                            }}, RoleEnumRoleTypeEnum.CONVERSATION);            

            CreateRoleResponse res = sdk.sdk.createRole(req, new CreateRoleSecurity("iure", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Role != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

Create a new conversation service on your account

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

            CreateServiceCreateServiceRequest req = new CreateServiceCreateServiceRequest("doloribus");            

            CreateServiceResponse res = sdk.sdk.createService(req, new CreateServiceSecurity("sapiente", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceConversation

Create a new conversation in your service

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceConversationCreateServiceConversationRequest;
import org.openapis.openapi.models.operations.CreateServiceConversationRequest;
import org.openapis.openapi.models.operations.CreateServiceConversationResponse;
import org.openapis.openapi.models.operations.CreateServiceConversationSecurity;
import org.openapis.openapi.models.shared.ServiceConversationEnumStateEnum;
import org.openapis.openapi.models.shared.ServiceConversationEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceConversationRequest req = new CreateServiceConversationRequest("mollitia") {{
                requestBody = new CreateServiceConversationCreateServiceConversationRequest() {{
                    attributes = "dolorem";
                    dateCreated = OffsetDateTime.parse("2022-09-05T05:51:25.673Z");
                    dateUpdated = OffsetDateTime.parse("2021-01-15T20:18:47.519Z");
                    friendlyName = "occaecati";
                    messagingServiceSid = "numquam";
                    state = ServiceConversationEnumStateEnum.ACTIVE;
                    timersClosed = "quam";
                    timersInactive = "molestiae";
                    uniqueName = "velit";
                }};;
                xTwilioWebhookEnabled = ServiceConversationEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            CreateServiceConversationResponse res = sdk.sdk.createServiceConversation(req, new CreateServiceConversationSecurity("quia", "quis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceConversationMessage

Add a new message to the conversation in a specific service

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceConversationMessageCreateServiceConversationMessageRequest;
import org.openapis.openapi.models.operations.CreateServiceConversationMessageRequest;
import org.openapis.openapi.models.operations.CreateServiceConversationMessageResponse;
import org.openapis.openapi.models.operations.CreateServiceConversationMessageSecurity;
import org.openapis.openapi.models.shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceConversationMessageRequest req = new CreateServiceConversationMessageRequest("vitae", "laborum") {{
                requestBody = new CreateServiceConversationMessageCreateServiceConversationMessageRequest() {{
                    attributes = "animi";
                    author = "enim";
                    body = "odit";
                    contentSid = "quo";
                    contentVariables = "sequi";
                    dateCreated = OffsetDateTime.parse("2021-11-23T05:54:08.890Z");
                    dateUpdated = OffsetDateTime.parse("2021-05-11T16:11:54.761Z");
                    mediaSid = "aut";
                }};;
                xTwilioWebhookEnabled = ServiceConversationMessageEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            CreateServiceConversationMessageResponse res = sdk.sdk.createServiceConversationMessage(req, new CreateServiceConversationMessageSecurity("error", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversationServiceConversationMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceConversationParticipant

Add a new participant to the conversation in a specific service

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceConversationParticipantCreateServiceConversationParticipantRequest;
import org.openapis.openapi.models.operations.CreateServiceConversationParticipantRequest;
import org.openapis.openapi.models.operations.CreateServiceConversationParticipantResponse;
import org.openapis.openapi.models.operations.CreateServiceConversationParticipantSecurity;
import org.openapis.openapi.models.shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceConversationParticipantRequest req = new CreateServiceConversationParticipantRequest("laborum", "quasi") {{
                requestBody = new CreateServiceConversationParticipantCreateServiceConversationParticipantRequest() {{
                    attributes = "reiciendis";
                    dateCreated = OffsetDateTime.parse("2020-05-14T09:04:32.205Z");
                    dateUpdated = OffsetDateTime.parse("2022-06-28T23:41:25.321Z");
                    identity = "voluptatibus";
                    messagingBindingAddress = "ipsa";
                    messagingBindingProjectedAddress = "omnis";
                    messagingBindingProxyAddress = "voluptate";
                    roleSid = "cum";
                }};;
                xTwilioWebhookEnabled = ServiceConversationParticipantEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            CreateServiceConversationParticipantResponse res = sdk.sdk.createServiceConversationParticipant(req, new CreateServiceConversationParticipantSecurity("doloremque", "reprehenderit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversationServiceConversationParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceConversationScopedWebhook

Create a new webhook scoped to the conversation in a specific service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest;
import org.openapis.openapi.models.operations.CreateServiceConversationScopedWebhookRequest;
import org.openapis.openapi.models.operations.CreateServiceConversationScopedWebhookResponse;
import org.openapis.openapi.models.operations.CreateServiceConversationScopedWebhookSecurity;
import org.openapis.openapi.models.shared.ServiceConversationScopedWebhookEnumMethodEnum;
import org.openapis.openapi.models.shared.ServiceConversationScopedWebhookEnumTargetEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceConversationScopedWebhookRequest req = new CreateServiceConversationScopedWebhookRequest("ut", "maiores") {{
                requestBody = new CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest(ServiceConversationScopedWebhookEnumTargetEnum.WEBHOOK) {{
                    configurationFilters = new String[]{{
                        add("dolore"),
                        add("iusto"),
                    }};
                    configurationFlowSid = "dicta";
                    configurationMethod = ServiceConversationScopedWebhookEnumMethodEnum.POST;
                    configurationReplayAfter = 317983L;
                    configurationTriggers = new String[]{{
                        add("commodi"),
                        add("repudiandae"),
                        add("quae"),
                        add("ipsum"),
                    }};
                    configurationUrl = "quidem";
                }};;
            }};            

            CreateServiceConversationScopedWebhookResponse res = sdk.sdk.createServiceConversationScopedWebhook(req, new CreateServiceConversationScopedWebhookSecurity("molestias", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversationServiceConversationScopedWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceRole

Create a new user role in your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceRoleCreateServiceRoleRequest;
import org.openapis.openapi.models.operations.CreateServiceRoleRequest;
import org.openapis.openapi.models.operations.CreateServiceRoleResponse;
import org.openapis.openapi.models.operations.CreateServiceRoleSecurity;
import org.openapis.openapi.models.shared.ServiceRoleEnumRoleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceRoleRequest req = new CreateServiceRoleRequest("pariatur") {{
                requestBody = new CreateServiceRoleCreateServiceRoleRequest("modi",                 new String[]{{
                                    add("rem"),
                                    add("voluptates"),
                                    add("quasi"),
                                }}, ServiceRoleEnumRoleTypeEnum.SERVICE);;
            }};            

            CreateServiceRoleResponse res = sdk.sdk.createServiceRole(req, new CreateServiceRoleSecurity("sint", "veritatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceUser

Add a new conversation user to your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceUserCreateServiceUserRequest;
import org.openapis.openapi.models.operations.CreateServiceUserRequest;
import org.openapis.openapi.models.operations.CreateServiceUserResponse;
import org.openapis.openapi.models.operations.CreateServiceUserSecurity;
import org.openapis.openapi.models.shared.ServiceUserEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceUserRequest req = new CreateServiceUserRequest("itaque") {{
                requestBody = new CreateServiceUserCreateServiceUserRequest("incidunt") {{
                    attributes = "enim";
                    friendlyName = "consequatur";
                    roleSid = "est";
                }};;
                xTwilioWebhookEnabled = ServiceUserEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            CreateServiceUserResponse res = sdk.sdk.createServiceUser(req, new CreateServiceUserSecurity("explicabo", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUser

Add a new conversation user to your account's default service

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

            CreateUserRequest req = new CreateUserRequest() {{
                requestBody = new CreateUserCreateUserRequest("distinctio") {{
                    attributes = "quibusdam";
                    friendlyName = "labore";
                    roleSid = "modi";
                }};;
                xTwilioWebhookEnabled = UserEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            CreateUserResponse res = sdk.sdk.createUser(req, new CreateUserSecurity("aliquid", "cupiditate") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1User != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConfigurationAddress

Remove an existing address configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConfigurationAddressRequest;
import org.openapis.openapi.models.operations.DeleteConfigurationAddressResponse;
import org.openapis.openapi.models.operations.DeleteConfigurationAddressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConfigurationAddressRequest req = new DeleteConfigurationAddressRequest("quos");            

            DeleteConfigurationAddressResponse res = sdk.sdk.deleteConfigurationAddress(req, new DeleteConfigurationAddressSecurity("perferendis", "magni") {{
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

## deleteConversation

Remove a conversation from your account's default service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConversationRequest;
import org.openapis.openapi.models.operations.DeleteConversationResponse;
import org.openapis.openapi.models.operations.DeleteConversationSecurity;
import org.openapis.openapi.models.shared.ConversationEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConversationRequest req = new DeleteConversationRequest("assumenda") {{
                xTwilioWebhookEnabled = ConversationEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            DeleteConversationResponse res = sdk.sdk.deleteConversation(req, new DeleteConversationSecurity("alias", "fugit") {{
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

## deleteConversationMessage

Remove a message from the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConversationMessageRequest;
import org.openapis.openapi.models.operations.DeleteConversationMessageResponse;
import org.openapis.openapi.models.operations.DeleteConversationMessageSecurity;
import org.openapis.openapi.models.shared.ConversationMessageEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConversationMessageRequest req = new DeleteConversationMessageRequest("dolorum", "excepturi") {{
                xTwilioWebhookEnabled = ConversationMessageEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            DeleteConversationMessageResponse res = sdk.sdk.deleteConversationMessage(req, new DeleteConversationMessageSecurity("facilis", "tempore") {{
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

## deleteConversationParticipant

Remove a participant from the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConversationParticipantRequest;
import org.openapis.openapi.models.operations.DeleteConversationParticipantResponse;
import org.openapis.openapi.models.operations.DeleteConversationParticipantSecurity;
import org.openapis.openapi.models.shared.ConversationParticipantEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConversationParticipantRequest req = new DeleteConversationParticipantRequest("labore", "delectus") {{
                xTwilioWebhookEnabled = ConversationParticipantEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            DeleteConversationParticipantResponse res = sdk.sdk.deleteConversationParticipant(req, new DeleteConversationParticipantSecurity("non", "eligendi") {{
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

## deleteConversationScopedWebhook

Remove an existing webhook scoped to the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConversationScopedWebhookRequest;
import org.openapis.openapi.models.operations.DeleteConversationScopedWebhookResponse;
import org.openapis.openapi.models.operations.DeleteConversationScopedWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConversationScopedWebhookRequest req = new DeleteConversationScopedWebhookRequest("sint", "aliquid");            

            DeleteConversationScopedWebhookResponse res = sdk.sdk.deleteConversationScopedWebhook(req, new DeleteConversationScopedWebhookSecurity("provident", "necessitatibus") {{
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

Remove a push notification credential from your account

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

            DeleteCredentialRequest req = new DeleteCredentialRequest("sint");            

            DeleteCredentialResponse res = sdk.sdk.deleteCredential(req, new DeleteCredentialSecurity("officia", "dolor") {{
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

Remove a user role from your account's default service

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

            DeleteRoleRequest req = new DeleteRoleRequest("debitis");            

            DeleteRoleResponse res = sdk.sdk.deleteRole(req, new DeleteRoleSecurity("a", "dolorum") {{
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

Remove a conversation service with all its nested resources from your account

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

            DeleteServiceRequest req = new DeleteServiceRequest("in");            

            DeleteServiceResponse res = sdk.sdk.deleteService(req, new DeleteServiceSecurity("in", "illum") {{
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

## deleteServiceBinding

Remove a push notification binding from the conversation service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceBindingRequest;
import org.openapis.openapi.models.operations.DeleteServiceBindingResponse;
import org.openapis.openapi.models.operations.DeleteServiceBindingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceBindingRequest req = new DeleteServiceBindingRequest("maiores", "rerum");            

            DeleteServiceBindingResponse res = sdk.sdk.deleteServiceBinding(req, new DeleteServiceBindingSecurity("dicta", "magnam") {{
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

## deleteServiceConversation

Remove a conversation from your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceConversationRequest;
import org.openapis.openapi.models.operations.DeleteServiceConversationResponse;
import org.openapis.openapi.models.operations.DeleteServiceConversationSecurity;
import org.openapis.openapi.models.shared.ServiceConversationEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceConversationRequest req = new DeleteServiceConversationRequest("cumque", "facere") {{
                xTwilioWebhookEnabled = ServiceConversationEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            DeleteServiceConversationResponse res = sdk.sdk.deleteServiceConversation(req, new DeleteServiceConversationSecurity("aliquid", "laborum") {{
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

## deleteServiceConversationMessage

Remove a message from the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceConversationMessageRequest;
import org.openapis.openapi.models.operations.DeleteServiceConversationMessageResponse;
import org.openapis.openapi.models.operations.DeleteServiceConversationMessageSecurity;
import org.openapis.openapi.models.shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceConversationMessageRequest req = new DeleteServiceConversationMessageRequest("accusamus", "non", "occaecati") {{
                xTwilioWebhookEnabled = ServiceConversationMessageEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            DeleteServiceConversationMessageResponse res = sdk.sdk.deleteServiceConversationMessage(req, new DeleteServiceConversationMessageSecurity("accusamus", "delectus") {{
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

## deleteServiceConversationParticipant

Remove a participant from the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceConversationParticipantRequest;
import org.openapis.openapi.models.operations.DeleteServiceConversationParticipantResponse;
import org.openapis.openapi.models.operations.DeleteServiceConversationParticipantSecurity;
import org.openapis.openapi.models.shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceConversationParticipantRequest req = new DeleteServiceConversationParticipantRequest("quidem", "provident", "nam") {{
                xTwilioWebhookEnabled = ServiceConversationParticipantEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            DeleteServiceConversationParticipantResponse res = sdk.sdk.deleteServiceConversationParticipant(req, new DeleteServiceConversationParticipantSecurity("blanditiis", "deleniti") {{
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

## deleteServiceConversationScopedWebhook

Remove an existing webhook scoped to the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceConversationScopedWebhookRequest;
import org.openapis.openapi.models.operations.DeleteServiceConversationScopedWebhookResponse;
import org.openapis.openapi.models.operations.DeleteServiceConversationScopedWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceConversationScopedWebhookRequest req = new DeleteServiceConversationScopedWebhookRequest("sapiente", "amet", "deserunt");            

            DeleteServiceConversationScopedWebhookResponse res = sdk.sdk.deleteServiceConversationScopedWebhook(req, new DeleteServiceConversationScopedWebhookSecurity("nisi", "vel") {{
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

## deleteServiceRole

Remove a user role from your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRoleRequest;
import org.openapis.openapi.models.operations.DeleteServiceRoleResponse;
import org.openapis.openapi.models.operations.DeleteServiceRoleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceRoleRequest req = new DeleteServiceRoleRequest("natus", "omnis");            

            DeleteServiceRoleResponse res = sdk.sdk.deleteServiceRole(req, new DeleteServiceRoleSecurity("molestiae", "perferendis") {{
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

## deleteServiceUser

Remove a conversation user from your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceUserRequest;
import org.openapis.openapi.models.operations.DeleteServiceUserResponse;
import org.openapis.openapi.models.operations.DeleteServiceUserSecurity;
import org.openapis.openapi.models.shared.ServiceUserEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceUserRequest req = new DeleteServiceUserRequest("nihil", "magnam") {{
                xTwilioWebhookEnabled = ServiceUserEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            DeleteServiceUserResponse res = sdk.sdk.deleteServiceUser(req, new DeleteServiceUserSecurity("id", "labore") {{
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

## deleteServiceUserConversation

Delete a specific User Conversation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceUserConversationRequest;
import org.openapis.openapi.models.operations.DeleteServiceUserConversationResponse;
import org.openapis.openapi.models.operations.DeleteServiceUserConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceUserConversationRequest req = new DeleteServiceUserConversationRequest("labore", "suscipit", "natus");            

            DeleteServiceUserConversationResponse res = sdk.sdk.deleteServiceUserConversation(req, new DeleteServiceUserConversationSecurity("nobis", "eum") {{
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

Remove a conversation user from your account's default service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequest;
import org.openapis.openapi.models.operations.DeleteUserResponse;
import org.openapis.openapi.models.operations.DeleteUserSecurity;
import org.openapis.openapi.models.shared.UserEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUserRequest req = new DeleteUserRequest("vero") {{
                xTwilioWebhookEnabled = UserEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            DeleteUserResponse res = sdk.sdk.deleteUser(req, new DeleteUserSecurity("architecto", "magnam") {{
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

## deleteUserConversation

Delete a specific User Conversation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserConversationRequest;
import org.openapis.openapi.models.operations.DeleteUserConversationResponse;
import org.openapis.openapi.models.operations.DeleteUserConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUserConversationRequest req = new DeleteUserConversationRequest("et", "excepturi");            

            DeleteUserConversationResponse res = sdk.sdk.deleteUserConversation(req, new DeleteUserConversationSecurity("ullam", "provident") {{
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

## fetchConfiguration

Fetch the global configuration of conversations on your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConfigurationResponse;
import org.openapis.openapi.models.operations.FetchConfigurationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConfigurationResponse res = sdk.sdk.fetchConfiguration(new FetchConfigurationSecurity("quos", "sint") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Configuration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConfigurationAddress

Fetch an address configuration 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConfigurationAddressRequest;
import org.openapis.openapi.models.operations.FetchConfigurationAddressResponse;
import org.openapis.openapi.models.operations.FetchConfigurationAddressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConfigurationAddressRequest req = new FetchConfigurationAddressRequest("accusantium");            

            FetchConfigurationAddressResponse res = sdk.sdk.fetchConfigurationAddress(req, new FetchConfigurationAddressSecurity("mollitia", "reiciendis") {{
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

## fetchConfigurationWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConfigurationWebhookResponse;
import org.openapis.openapi.models.operations.FetchConfigurationWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConfigurationWebhookResponse res = sdk.sdk.fetchConfigurationWebhook(new FetchConfigurationWebhookSecurity("mollitia", "ad") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConfigurationConfigurationWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConversation

Fetch a conversation from your account's default service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConversationRequest;
import org.openapis.openapi.models.operations.FetchConversationResponse;
import org.openapis.openapi.models.operations.FetchConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConversationRequest req = new FetchConversationRequest("eum");            

            FetchConversationResponse res = sdk.sdk.fetchConversation(req, new FetchConversationSecurity("dolor", "necessitatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Conversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConversationMessage

Fetch a message from the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConversationMessageRequest;
import org.openapis.openapi.models.operations.FetchConversationMessageResponse;
import org.openapis.openapi.models.operations.FetchConversationMessageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConversationMessageRequest req = new FetchConversationMessageRequest("odit", "nemo");            

            FetchConversationMessageResponse res = sdk.sdk.fetchConversationMessage(req, new FetchConversationMessageSecurity("quasi", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConversationConversationMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConversationMessageReceipt

Fetch the delivery and read receipts of the conversation message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConversationMessageReceiptRequest;
import org.openapis.openapi.models.operations.FetchConversationMessageReceiptResponse;
import org.openapis.openapi.models.operations.FetchConversationMessageReceiptSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConversationMessageReceiptRequest req = new FetchConversationMessageReceiptRequest("doloribus", "debitis", "eius");            

            FetchConversationMessageReceiptResponse res = sdk.sdk.fetchConversationMessageReceipt(req, new FetchConversationMessageReceiptSecurity("maxime", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConversationConversationMessageConversationMessageReceipt != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConversationParticipant

Fetch a participant of the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConversationParticipantRequest;
import org.openapis.openapi.models.operations.FetchConversationParticipantResponse;
import org.openapis.openapi.models.operations.FetchConversationParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConversationParticipantRequest req = new FetchConversationParticipantRequest("facilis", "in");            

            FetchConversationParticipantResponse res = sdk.sdk.fetchConversationParticipant(req, new FetchConversationParticipantSecurity("architecto", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConversationConversationParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConversationScopedWebhook

Fetch the configuration of a conversation-scoped webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConversationScopedWebhookRequest;
import org.openapis.openapi.models.operations.FetchConversationScopedWebhookResponse;
import org.openapis.openapi.models.operations.FetchConversationScopedWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConversationScopedWebhookRequest req = new FetchConversationScopedWebhookRequest("repudiandae", "ullam");            

            FetchConversationScopedWebhookResponse res = sdk.sdk.fetchConversationScopedWebhook(req, new FetchConversationScopedWebhookSecurity("expedita", "nihil") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConversationConversationScopedWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCredential

Fetch a push notification credential from your account

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

            FetchCredentialRequest req = new FetchCredentialRequest("repellat");            

            FetchCredentialResponse res = sdk.sdk.fetchCredential(req, new FetchCredentialSecurity("quibusdam", "sed") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Credential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRole

Fetch a user role from your account's default service

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

            FetchRoleRequest req = new FetchRoleRequest("saepe");            

            FetchRoleResponse res = sdk.sdk.fetchRole(req, new FetchRoleSecurity("pariatur", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Role != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchService

Fetch a conversation service from your account

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

            FetchServiceRequest req = new FetchServiceRequest("consequuntur");            

            FetchServiceResponse res = sdk.sdk.fetchService(req, new FetchServiceSecurity("praesentium", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchServiceBinding

Fetch a push notification binding from the conversation service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceBindingRequest;
import org.openapis.openapi.models.operations.FetchServiceBindingResponse;
import org.openapis.openapi.models.operations.FetchServiceBindingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceBindingRequest req = new FetchServiceBindingRequest("magni", "sunt");            

            FetchServiceBindingResponse res = sdk.sdk.fetchServiceBinding(req, new FetchServiceBindingSecurity("quo", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceBinding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchServiceConfiguration

Fetch the configuration of a conversation service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceConfigurationRequest;
import org.openapis.openapi.models.operations.FetchServiceConfigurationResponse;
import org.openapis.openapi.models.operations.FetchServiceConfigurationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceConfigurationRequest req = new FetchServiceConfigurationRequest("pariatur");            

            FetchServiceConfigurationResponse res = sdk.sdk.fetchServiceConfiguration(req, new FetchServiceConfigurationSecurity("maxime", "ea") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchServiceConversation

Fetch a conversation from your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceConversationRequest;
import org.openapis.openapi.models.operations.FetchServiceConversationResponse;
import org.openapis.openapi.models.operations.FetchServiceConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceConversationRequest req = new FetchServiceConversationRequest("excepturi", "odit");            

            FetchServiceConversationResponse res = sdk.sdk.fetchServiceConversation(req, new FetchServiceConversationSecurity("ea", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchServiceConversationMessage

Fetch a message from the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceConversationMessageRequest;
import org.openapis.openapi.models.operations.FetchServiceConversationMessageResponse;
import org.openapis.openapi.models.operations.FetchServiceConversationMessageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceConversationMessageRequest req = new FetchServiceConversationMessageRequest("ab", "maiores", "quidem");            

            FetchServiceConversationMessageResponse res = sdk.sdk.fetchServiceConversationMessage(req, new FetchServiceConversationMessageSecurity("ipsam", "voluptate") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversationServiceConversationMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchServiceConversationMessageReceipt

Fetch the delivery and read receipts of the conversation message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceConversationMessageReceiptRequest;
import org.openapis.openapi.models.operations.FetchServiceConversationMessageReceiptResponse;
import org.openapis.openapi.models.operations.FetchServiceConversationMessageReceiptSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceConversationMessageReceiptRequest req = new FetchServiceConversationMessageReceiptRequest("autem", "nam", "eaque", "pariatur");            

            FetchServiceConversationMessageReceiptResponse res = sdk.sdk.fetchServiceConversationMessageReceipt(req, new FetchServiceConversationMessageReceiptSecurity("nemo", "voluptatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchServiceConversationParticipant

Fetch a participant of the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceConversationParticipantRequest;
import org.openapis.openapi.models.operations.FetchServiceConversationParticipantResponse;
import org.openapis.openapi.models.operations.FetchServiceConversationParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceConversationParticipantRequest req = new FetchServiceConversationParticipantRequest("perferendis", "fugiat", "amet");            

            FetchServiceConversationParticipantResponse res = sdk.sdk.fetchServiceConversationParticipant(req, new FetchServiceConversationParticipantSecurity("aut", "cumque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversationServiceConversationParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchServiceConversationScopedWebhook

Fetch the configuration of a conversation-scoped webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceConversationScopedWebhookRequest;
import org.openapis.openapi.models.operations.FetchServiceConversationScopedWebhookResponse;
import org.openapis.openapi.models.operations.FetchServiceConversationScopedWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceConversationScopedWebhookRequest req = new FetchServiceConversationScopedWebhookRequest("corporis", "hic", "libero");            

            FetchServiceConversationScopedWebhookResponse res = sdk.sdk.fetchServiceConversationScopedWebhook(req, new FetchServiceConversationScopedWebhookSecurity("nobis", "dolores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversationServiceConversationScopedWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchServiceNotification

Fetch push notification service settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceNotificationRequest;
import org.openapis.openapi.models.operations.FetchServiceNotificationResponse;
import org.openapis.openapi.models.operations.FetchServiceNotificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceNotificationRequest req = new FetchServiceNotificationRequest("quis");            

            FetchServiceNotificationResponse res = sdk.sdk.fetchServiceNotification(req, new FetchServiceNotificationSecurity("totam", "dignissimos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConfigurationServiceNotification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchServiceRole

Fetch a user role from your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceRoleRequest;
import org.openapis.openapi.models.operations.FetchServiceRoleResponse;
import org.openapis.openapi.models.operations.FetchServiceRoleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceRoleRequest req = new FetchServiceRoleRequest("eaque", "quis");            

            FetchServiceRoleResponse res = sdk.sdk.fetchServiceRole(req, new FetchServiceRoleSecurity("nesciunt", "eos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchServiceUser

Fetch a conversation user from your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceUserRequest;
import org.openapis.openapi.models.operations.FetchServiceUserResponse;
import org.openapis.openapi.models.operations.FetchServiceUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceUserRequest req = new FetchServiceUserRequest("perferendis", "dolores");            

            FetchServiceUserResponse res = sdk.sdk.fetchServiceUser(req, new FetchServiceUserSecurity("minus", "quam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchServiceUserConversation

Fetch a specific User Conversation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceUserConversationRequest;
import org.openapis.openapi.models.operations.FetchServiceUserConversationResponse;
import org.openapis.openapi.models.operations.FetchServiceUserConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceUserConversationRequest req = new FetchServiceUserConversationRequest("dolor", "vero", "nostrum");            

            FetchServiceUserConversationResponse res = sdk.sdk.fetchServiceUserConversation(req, new FetchServiceUserConversationSecurity("hic", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceUserServiceUserConversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchServiceWebhookConfiguration

Fetch a specific service webhook configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceWebhookConfigurationRequest;
import org.openapis.openapi.models.operations.FetchServiceWebhookConfigurationResponse;
import org.openapis.openapi.models.operations.FetchServiceWebhookConfigurationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceWebhookConfigurationRequest req = new FetchServiceWebhookConfigurationRequest("omnis");            

            FetchServiceWebhookConfigurationResponse res = sdk.sdk.fetchServiceWebhookConfiguration(req, new FetchServiceWebhookConfigurationSecurity("facilis", "perspiciatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUser

Fetch a conversation user from your account's default service

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

            FetchUserRequest req = new FetchUserRequest("voluptatem");            

            FetchUserResponse res = sdk.sdk.fetchUser(req, new FetchUserSecurity("porro", "consequuntur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1User != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUserConversation

Fetch a specific User Conversation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUserConversationRequest;
import org.openapis.openapi.models.operations.FetchUserConversationResponse;
import org.openapis.openapi.models.operations.FetchUserConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUserConversationRequest req = new FetchUserConversationRequest("blanditiis", "error");            

            FetchUserConversationResponse res = sdk.sdk.fetchUserConversation(req, new FetchUserConversationSecurity("eaque", "occaecati") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1UserUserConversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConfigurationAddress

Retrieve a list of address configurations for an account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConfigurationAddressRequest;
import org.openapis.openapi.models.operations.ListConfigurationAddressResponse;
import org.openapis.openapi.models.operations.ListConfigurationAddressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConfigurationAddressRequest req = new ListConfigurationAddressRequest() {{
                page = 699098L;
                pageSize = 237893L;
                pageToken = "asperiores";
                type = "earum";
            }};            

            ListConfigurationAddressResponse res = sdk.sdk.listConfigurationAddress(req, new ListConfigurationAddressSecurity("modi", "iste") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConfigurationAddressResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConversation

Retrieve a list of conversations in your account's default service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConversationRequest;
import org.openapis.openapi.models.operations.ListConversationResponse;
import org.openapis.openapi.models.operations.ListConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConversationRequest req = new ListConversationRequest() {{
                page = 679091L;
                pageSize = 535633L;
                pageToken = "pariatur";
            }};            

            ListConversationResponse res = sdk.sdk.listConversation(req, new ListConversationSecurity("provident", "nobis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConversationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConversationMessage

Retrieve a list of all messages in the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConversationMessageRequest;
import org.openapis.openapi.models.operations.ListConversationMessageResponse;
import org.openapis.openapi.models.operations.ListConversationMessageSecurity;
import org.openapis.openapi.models.shared.ConversationMessageEnumOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConversationMessageRequest req = new ListConversationMessageRequest("libero") {{
                order = ConversationMessageEnumOrderTypeEnum.DESC;
                page = 311945L;
                pageSize = 554242L;
                pageToken = "aliquid";
            }};            

            ListConversationMessageResponse res = sdk.sdk.listConversationMessage(req, new ListConversationMessageSecurity("dolorem", "dolorem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConversationMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConversationMessageReceipt

Retrieve a list of all delivery and read receipts of the conversation message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConversationMessageReceiptRequest;
import org.openapis.openapi.models.operations.ListConversationMessageReceiptResponse;
import org.openapis.openapi.models.operations.ListConversationMessageReceiptSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConversationMessageReceiptRequest req = new ListConversationMessageReceiptRequest("dolor", "qui") {{
                page = 218749L;
                pageSize = 944373L;
                pageToken = "excepturi";
            }};            

            ListConversationMessageReceiptResponse res = sdk.sdk.listConversationMessageReceipt(req, new ListConversationMessageReceiptSecurity("cum", "voluptate") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConversationMessageReceiptResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConversationParticipant

Retrieve a list of all participants of the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConversationParticipantRequest;
import org.openapis.openapi.models.operations.ListConversationParticipantResponse;
import org.openapis.openapi.models.operations.ListConversationParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConversationParticipantRequest req = new ListConversationParticipantRequest("dignissimos") {{
                page = 970237L;
                pageSize = 227414L;
                pageToken = "dolorum";
            }};            

            ListConversationParticipantResponse res = sdk.sdk.listConversationParticipant(req, new ListConversationParticipantSecurity("numquam", "veritatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConversationParticipantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConversationScopedWebhook

Retrieve a list of all webhooks scoped to the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConversationScopedWebhookRequest;
import org.openapis.openapi.models.operations.ListConversationScopedWebhookResponse;
import org.openapis.openapi.models.operations.ListConversationScopedWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConversationScopedWebhookRequest req = new ListConversationScopedWebhookRequest("ipsa") {{
                page = 56418L;
                pageSize = 434417L;
                pageToken = "odio";
            }};            

            ListConversationScopedWebhookResponse res = sdk.sdk.listConversationScopedWebhook(req, new ListConversationScopedWebhookSecurity("quaerat", "accusamus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConversationScopedWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCredential

Retrieve a list of all push notification credentials on your account

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
                page = 696344L;
                pageSize = 976405L;
                pageToken = "voluptas";
            }};            

            ListCredentialResponse res = sdk.sdk.listCredential(req, new ListCredentialSecurity("natus", "eos") {{
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

## listParticipantConversation

Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListParticipantConversationRequest;
import org.openapis.openapi.models.operations.ListParticipantConversationResponse;
import org.openapis.openapi.models.operations.ListParticipantConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListParticipantConversationRequest req = new ListParticipantConversationRequest() {{
                address = "0807 Kris Lakes";
                identity = "dolorum";
                page = 536579L;
                pageSize = 607045L;
                pageToken = "necessitatibus";
            }};            

            ListParticipantConversationResponse res = sdk.sdk.listParticipantConversation(req, new ListParticipantConversationSecurity("distinctio", "asperiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listParticipantConversationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRole

Retrieve a list of all user roles in your account's default service

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

            ListRoleRequest req = new ListRoleRequest() {{
                page = 469497L;
                pageSize = 216897L;
                pageToken = "voluptate";
            }};            

            ListRoleResponse res = sdk.sdk.listRole(req, new ListRoleSecurity("id", "saepe") {{
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

Retrieve a list of all conversation services on your account

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
                page = 263322L;
                pageSize = 137220L;
                pageToken = "perferendis";
            }};            

            ListServiceResponse res = sdk.sdk.listService(req, new ListServiceSecurity("amet", "optio") {{
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

## listServiceBinding

Retrieve a list of all push notification bindings in the conversation service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceBindingRequest;
import org.openapis.openapi.models.operations.ListServiceBindingResponse;
import org.openapis.openapi.models.operations.ListServiceBindingSecurity;
import org.openapis.openapi.models.shared.ServiceBindingEnumBindingTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceBindingRequest req = new ListServiceBindingRequest("accusamus") {{
                bindingType = new org.openapis.openapi.models.shared.ServiceBindingEnumBindingTypeEnum[]{{
                    add(ServiceBindingEnumBindingTypeEnum.FCM),
                    add(ServiceBindingEnumBindingTypeEnum.GCM),
                }};
                identity = new String[]{{
                    add("provident"),
                    add("minima"),
                    add("repellendus"),
                }};
                page = 519711L;
                pageSize = 628982L;
                pageToken = "alias";
            }};            

            ListServiceBindingResponse res = sdk.sdk.listServiceBinding(req, new ListServiceBindingSecurity("at", "quaerat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceBindingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceConversation

Retrieve a list of conversations in your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceConversationRequest;
import org.openapis.openapi.models.operations.ListServiceConversationResponse;
import org.openapis.openapi.models.operations.ListServiceConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceConversationRequest req = new ListServiceConversationRequest("tempora") {{
                page = 425451L;
                pageSize = 798047L;
                pageToken = "officiis";
            }};            

            ListServiceConversationResponse res = sdk.sdk.listServiceConversation(req, new ListServiceConversationSecurity("qui", "dolorum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceConversationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceConversationMessage

Retrieve a list of all messages in the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceConversationMessageRequest;
import org.openapis.openapi.models.operations.ListServiceConversationMessageResponse;
import org.openapis.openapi.models.operations.ListServiceConversationMessageSecurity;
import org.openapis.openapi.models.shared.ServiceConversationMessageEnumOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceConversationMessageRequest req = new ListServiceConversationMessageRequest("a", "esse") {{
                order = ServiceConversationMessageEnumOrderTypeEnum.DESC;
                page = 483409L;
                pageSize = 215507L;
                pageToken = "quisquam";
            }};            

            ListServiceConversationMessageResponse res = sdk.sdk.listServiceConversationMessage(req, new ListServiceConversationMessageSecurity("tenetur", "amet") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceConversationMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceConversationMessageReceipt

Retrieve a list of all delivery and read receipts of the conversation message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceConversationMessageReceiptRequest;
import org.openapis.openapi.models.operations.ListServiceConversationMessageReceiptResponse;
import org.openapis.openapi.models.operations.ListServiceConversationMessageReceiptSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceConversationMessageReceiptRequest req = new ListServiceConversationMessageReceiptRequest("tempore", "accusamus", "numquam") {{
                page = 313692L;
                pageSize = 213312L;
                pageToken = "sapiente";
            }};            

            ListServiceConversationMessageReceiptResponse res = sdk.sdk.listServiceConversationMessageReceipt(req, new ListServiceConversationMessageReceiptSecurity("totam", "nihil") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceConversationMessageReceiptResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceConversationParticipant

Retrieve a list of all participants of the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceConversationParticipantRequest;
import org.openapis.openapi.models.operations.ListServiceConversationParticipantResponse;
import org.openapis.openapi.models.operations.ListServiceConversationParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceConversationParticipantRequest req = new ListServiceConversationParticipantRequest("sit", "expedita") {{
                page = 207470L;
                pageSize = 153694L;
                pageToken = "vel";
            }};            

            ListServiceConversationParticipantResponse res = sdk.sdk.listServiceConversationParticipant(req, new ListServiceConversationParticipantSecurity("libero", "voluptas") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceConversationParticipantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceConversationScopedWebhook

Retrieve a list of all webhooks scoped to the conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceConversationScopedWebhookRequest;
import org.openapis.openapi.models.operations.ListServiceConversationScopedWebhookResponse;
import org.openapis.openapi.models.operations.ListServiceConversationScopedWebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceConversationScopedWebhookRequest req = new ListServiceConversationScopedWebhookRequest("deserunt", "quam") {{
                page = 214880L;
                pageSize = 277628L;
                pageToken = "qui";
            }};            

            ListServiceConversationScopedWebhookResponse res = sdk.sdk.listServiceConversationScopedWebhook(req, new ListServiceConversationScopedWebhookSecurity("cupiditate", "maxime") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceConversationScopedWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceParticipantConversation

Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceParticipantConversationRequest;
import org.openapis.openapi.models.operations.ListServiceParticipantConversationResponse;
import org.openapis.openapi.models.operations.ListServiceParticipantConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceParticipantConversationRequest req = new ListServiceParticipantConversationRequest("pariatur") {{
                address = "165 Brendon Dale";
                identity = "distinctio";
                page = 704474L;
                pageSize = 396060L;
                pageToken = "quam";
            }};            

            ListServiceParticipantConversationResponse res = sdk.sdk.listServiceParticipantConversation(req, new ListServiceParticipantConversationSecurity("molestias", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceParticipantConversationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceRole

Retrieve a list of all user roles in your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceRoleRequest;
import org.openapis.openapi.models.operations.ListServiceRoleResponse;
import org.openapis.openapi.models.operations.ListServiceRoleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceRoleRequest req = new ListServiceRoleRequest("qui") {{
                page = 204865L;
                pageSize = 144847L;
                pageToken = "magni";
            }};            

            ListServiceRoleResponse res = sdk.sdk.listServiceRole(req, new ListServiceRoleSecurity("odio", "sunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceRoleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceUser

Retrieve a list of all conversation users in your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceUserRequest;
import org.openapis.openapi.models.operations.ListServiceUserResponse;
import org.openapis.openapi.models.operations.ListServiceUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceUserRequest req = new ListServiceUserRequest("ullam") {{
                page = 722081L;
                pageSize = 940432L;
                pageToken = "voluptatem";
            }};            

            ListServiceUserResponse res = sdk.sdk.listServiceUser(req, new ListServiceUserSecurity("cumque", "soluta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceUserConversation

Retrieve a list of all User Conversations for the User.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceUserConversationRequest;
import org.openapis.openapi.models.operations.ListServiceUserConversationResponse;
import org.openapis.openapi.models.operations.ListServiceUserConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceUserConversationRequest req = new ListServiceUserConversationRequest("nobis", "et") {{
                page = 903720L;
                pageSize = 217450L;
                pageToken = "veritatis";
            }};            

            ListServiceUserConversationResponse res = sdk.sdk.listServiceUserConversation(req, new ListServiceUserConversationSecurity("nobis", "quos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceUserConversationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUser

Retrieve a list of all conversation users in your account's default service

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

            ListUserRequest req = new ListUserRequest() {{
                page = 731694L;
                pageSize = 584476L;
                pageToken = "aperiam";
            }};            

            ListUserResponse res = sdk.sdk.listUser(req, new ListUserSecurity("delectus", "dolorem") {{
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

## listUserConversation

Retrieve a list of all User Conversations for the User.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserConversationRequest;
import org.openapis.openapi.models.operations.ListUserConversationResponse;
import org.openapis.openapi.models.operations.ListUserConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUserConversationRequest req = new ListUserConversationRequest("dolore") {{
                page = 286915L;
                pageSize = 240829L;
                pageToken = "dolorum";
            }};            

            ListUserConversationResponse res = sdk.sdk.listUserConversation(req, new ListUserConversationSecurity("architecto", "quae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUserConversationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConfiguration

Update the global configuration of conversations on your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateConfigurationSecurity;
import org.openapis.openapi.models.operations.UpdateConfigurationUpdateConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConfigurationUpdateConfigurationRequest req = new UpdateConfigurationUpdateConfigurationRequest() {{
                defaultChatServiceSid = "aut";
                defaultClosedTimer = "quas";
                defaultInactiveTimer = "itaque";
                defaultMessagingServiceSid = "consequatur";
            }};            

            UpdateConfigurationResponse res = sdk.sdk.updateConfiguration(req, new UpdateConfigurationSecurity("est", "repellendus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Configuration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConfigurationAddress

Update an existing address configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConfigurationAddressRequest;
import org.openapis.openapi.models.operations.UpdateConfigurationAddressResponse;
import org.openapis.openapi.models.operations.UpdateConfigurationAddressSecurity;
import org.openapis.openapi.models.operations.UpdateConfigurationAddressUpdateConfigurationAddressRequest;
import org.openapis.openapi.models.shared.ConfigurationAddressEnumAutoCreationTypeEnum;
import org.openapis.openapi.models.shared.ConfigurationAddressEnumMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConfigurationAddressRequest req = new UpdateConfigurationAddressRequest("porro") {{
                requestBody = new UpdateConfigurationAddressUpdateConfigurationAddressRequest() {{
                    autoCreationConversationServiceSid = "doloribus";
                    autoCreationEnabled = false;
                    autoCreationStudioFlowSid = "ut";
                    autoCreationStudioRetryCount = 703495L;
                    autoCreationType = ConfigurationAddressEnumAutoCreationTypeEnum.STUDIO;
                    autoCreationWebhookFilters = new String[]{{
                        add("quae"),
                    }};
                    autoCreationWebhookMethod = ConfigurationAddressEnumMethodEnum.POST;
                    autoCreationWebhookUrl = "odio";
                    friendlyName = "occaecati";
                }};;
            }};            

            UpdateConfigurationAddressResponse res = sdk.sdk.updateConfigurationAddress(req, new UpdateConfigurationAddressSecurity("voluptatibus", "quisquam") {{
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

## updateConfigurationWebhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConfigurationWebhookResponse;
import org.openapis.openapi.models.operations.UpdateConfigurationWebhookSecurity;
import org.openapis.openapi.models.operations.UpdateConfigurationWebhookUpdateConfigurationWebhookRequest;
import org.openapis.openapi.models.shared.ConfigurationWebhookEnumTargetEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConfigurationWebhookUpdateConfigurationWebhookRequest req = new UpdateConfigurationWebhookUpdateConfigurationWebhookRequest() {{
                filters = new String[]{{
                    add("omnis"),
                    add("quis"),
                    add("ipsum"),
                    add("delectus"),
                }};
                method = "voluptate";
                postWebhookUrl = "consectetur";
                preWebhookUrl = "vero";
                target = ConfigurationWebhookEnumTargetEnum.FLEX;
            }};            

            UpdateConfigurationWebhookResponse res = sdk.sdk.updateConfigurationWebhook(req, new UpdateConfigurationWebhookSecurity("dignissimos", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConfigurationConfigurationWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConversation

Update an existing conversation in your account's default service

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConversationRequest;
import org.openapis.openapi.models.operations.UpdateConversationResponse;
import org.openapis.openapi.models.operations.UpdateConversationSecurity;
import org.openapis.openapi.models.operations.UpdateConversationUpdateConversationRequest;
import org.openapis.openapi.models.shared.ConversationEnumStateEnum;
import org.openapis.openapi.models.shared.ConversationEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConversationRequest req = new UpdateConversationRequest("distinctio") {{
                requestBody = new UpdateConversationUpdateConversationRequest() {{
                    attributes = "quod";
                    dateCreated = OffsetDateTime.parse("2022-05-15T21:16:33.535Z");
                    dateUpdated = OffsetDateTime.parse("2021-04-02T18:28:29.036Z");
                    friendlyName = "ducimus";
                    messagingServiceSid = "dolore";
                    state = ConversationEnumStateEnum.CLOSED;
                    timersClosed = "illum";
                    timersInactive = "sequi";
                    uniqueName = "natus";
                }};;
                xTwilioWebhookEnabled = ConversationEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            UpdateConversationResponse res = sdk.sdk.updateConversation(req, new UpdateConversationSecurity("aut", "voluptatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Conversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConversationMessage

Update an existing message in the conversation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConversationMessageRequest;
import org.openapis.openapi.models.operations.UpdateConversationMessageResponse;
import org.openapis.openapi.models.operations.UpdateConversationMessageSecurity;
import org.openapis.openapi.models.operations.UpdateConversationMessageUpdateConversationMessageRequest;
import org.openapis.openapi.models.shared.ConversationMessageEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConversationMessageRequest req = new UpdateConversationMessageRequest("exercitationem", "nulla") {{
                requestBody = new UpdateConversationMessageUpdateConversationMessageRequest() {{
                    attributes = "fugit";
                    author = "porro";
                    body = "maiores";
                    dateCreated = OffsetDateTime.parse("2021-07-26T04:25:41.517Z");
                    dateUpdated = OffsetDateTime.parse("2021-07-05T08:33:16.995Z");
                }};;
                xTwilioWebhookEnabled = ConversationMessageEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            UpdateConversationMessageResponse res = sdk.sdk.updateConversationMessage(req, new UpdateConversationMessageSecurity("officia", "tempora") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConversationConversationMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConversationParticipant

Update an existing participant in the conversation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConversationParticipantRequest;
import org.openapis.openapi.models.operations.UpdateConversationParticipantResponse;
import org.openapis.openapi.models.operations.UpdateConversationParticipantSecurity;
import org.openapis.openapi.models.operations.UpdateConversationParticipantUpdateConversationParticipantRequest;
import org.openapis.openapi.models.shared.ConversationParticipantEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConversationParticipantRequest req = new UpdateConversationParticipantRequest("ipsam", "ea") {{
                requestBody = new UpdateConversationParticipantUpdateConversationParticipantRequest() {{
                    attributes = "aspernatur";
                    dateCreated = OffsetDateTime.parse("2022-03-06T22:14:54.933Z");
                    dateUpdated = OffsetDateTime.parse("2022-10-23T16:55:55.380Z");
                    identity = "ex";
                    lastReadMessageIndex = 511319L;
                    lastReadTimestamp = "dicta";
                    messagingBindingProjectedAddress = "dolor";
                    messagingBindingProxyAddress = "maiores";
                    roleSid = "quasi";
                }};;
                xTwilioWebhookEnabled = ConversationParticipantEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            UpdateConversationParticipantResponse res = sdk.sdk.updateConversationParticipant(req, new UpdateConversationParticipantSecurity("nulla", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConversationConversationParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConversationScopedWebhook

Update an existing conversation-scoped webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConversationScopedWebhookRequest;
import org.openapis.openapi.models.operations.UpdateConversationScopedWebhookResponse;
import org.openapis.openapi.models.operations.UpdateConversationScopedWebhookSecurity;
import org.openapis.openapi.models.operations.UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest;
import org.openapis.openapi.models.shared.ConversationScopedWebhookEnumMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConversationScopedWebhookRequest req = new UpdateConversationScopedWebhookRequest("voluptatibus", "nostrum") {{
                requestBody = new UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest() {{
                    configurationFilters = new String[]{{
                        add("quisquam"),
                        add("saepe"),
                        add("ea"),
                        add("impedit"),
                    }};
                    configurationFlowSid = "corporis";
                    configurationMethod = ConversationScopedWebhookEnumMethodEnum.GET;
                    configurationTriggers = new String[]{{
                        add("inventore"),
                        add("magnam"),
                    }};
                    configurationUrl = "ea";
                }};;
            }};            

            UpdateConversationScopedWebhookResponse res = sdk.sdk.updateConversationScopedWebhook(req, new UpdateConversationScopedWebhookSecurity("quo", "consectetur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConversationConversationScopedWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCredential

Update an existing push notification credential on your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCredentialRequest;
import org.openapis.openapi.models.operations.UpdateCredentialResponse;
import org.openapis.openapi.models.operations.UpdateCredentialSecurity;
import org.openapis.openapi.models.operations.UpdateCredentialUpdateCredentialRequest;
import org.openapis.openapi.models.shared.CredentialEnumPushTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCredentialRequest req = new UpdateCredentialRequest("recusandae") {{
                requestBody = new UpdateCredentialUpdateCredentialRequest() {{
                    apiKey = "aspernatur";
                    certificate = "minima";
                    friendlyName = "eaque";
                    privateKey = "a";
                    sandbox = false;
                    secret = "libero";
                    type = CredentialEnumPushTypeEnum.APN;
                }};;
            }};            

            UpdateCredentialResponse res = sdk.sdk.updateCredential(req, new UpdateCredentialSecurity("aut", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Credential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRole

Update an existing user role in your account's default service

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

            UpdateRoleRequest req = new UpdateRoleRequest("impedit") {{
                requestBody = new UpdateRoleUpdateRoleRequest(                new String[]{{
                                    add("fugit"),
                                    add("accusamus"),
                                }});;
            }};            

            UpdateRoleResponse res = sdk.sdk.updateRole(req, new UpdateRoleSecurity("inventore", "non") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1Role != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceConfiguration

Update configuration settings of a conversation service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateServiceConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateServiceConfigurationSecurity;
import org.openapis.openapi.models.operations.UpdateServiceConfigurationUpdateServiceConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceConfigurationRequest req = new UpdateServiceConfigurationRequest("et") {{
                requestBody = new UpdateServiceConfigurationUpdateServiceConfigurationRequest() {{
                    defaultChatServiceRoleSid = "dolorum";
                    defaultConversationCreatorRoleSid = "laborum";
                    defaultConversationRoleSid = "placeat";
                    reachabilityEnabled = false;
                }};;
            }};            

            UpdateServiceConfigurationResponse res = sdk.sdk.updateServiceConfiguration(req, new UpdateServiceConfigurationSecurity("velit", "eum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceConversation

Update an existing conversation in your service

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceConversationRequest;
import org.openapis.openapi.models.operations.UpdateServiceConversationResponse;
import org.openapis.openapi.models.operations.UpdateServiceConversationSecurity;
import org.openapis.openapi.models.operations.UpdateServiceConversationUpdateServiceConversationRequest;
import org.openapis.openapi.models.shared.ServiceConversationEnumStateEnum;
import org.openapis.openapi.models.shared.ServiceConversationEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceConversationRequest req = new UpdateServiceConversationRequest("autem", "nobis") {{
                requestBody = new UpdateServiceConversationUpdateServiceConversationRequest() {{
                    attributes = "quas";
                    dateCreated = OffsetDateTime.parse("2020-06-02T16:42:54.630Z");
                    dateUpdated = OffsetDateTime.parse("2022-04-10T15:05:31.822Z");
                    friendlyName = "quasi";
                    messagingServiceSid = "tempora";
                    state = ServiceConversationEnumStateEnum.INACTIVE;
                    timersClosed = "explicabo";
                    timersInactive = "provident";
                    uniqueName = "ipsa";
                }};;
                xTwilioWebhookEnabled = ServiceConversationEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            UpdateServiceConversationResponse res = sdk.sdk.updateServiceConversation(req, new UpdateServiceConversationSecurity("magnam", "odio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceConversationMessage

Update an existing message in the conversation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceConversationMessageRequest;
import org.openapis.openapi.models.operations.UpdateServiceConversationMessageResponse;
import org.openapis.openapi.models.operations.UpdateServiceConversationMessageSecurity;
import org.openapis.openapi.models.operations.UpdateServiceConversationMessageUpdateServiceConversationMessageRequest;
import org.openapis.openapi.models.shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceConversationMessageRequest req = new UpdateServiceConversationMessageRequest("eius", "esse", "esse") {{
                requestBody = new UpdateServiceConversationMessageUpdateServiceConversationMessageRequest() {{
                    attributes = "rem";
                    author = "fuga";
                    body = "reprehenderit";
                    dateCreated = OffsetDateTime.parse("2021-04-18T13:50:09.955Z");
                    dateUpdated = OffsetDateTime.parse("2022-07-26T19:04:27.877Z");
                }};;
                xTwilioWebhookEnabled = ServiceConversationMessageEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            UpdateServiceConversationMessageResponse res = sdk.sdk.updateServiceConversationMessage(req, new UpdateServiceConversationMessageSecurity("assumenda", "eos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversationServiceConversationMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceConversationParticipant

Update an existing participant in the conversation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceConversationParticipantRequest;
import org.openapis.openapi.models.operations.UpdateServiceConversationParticipantResponse;
import org.openapis.openapi.models.operations.UpdateServiceConversationParticipantSecurity;
import org.openapis.openapi.models.operations.UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest;
import org.openapis.openapi.models.shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceConversationParticipantRequest req = new UpdateServiceConversationParticipantRequest("praesentium", "quisquam", "veritatis") {{
                requestBody = new UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest() {{
                    attributes = "ipsa";
                    dateCreated = OffsetDateTime.parse("2021-08-10T04:36:29.661Z");
                    dateUpdated = OffsetDateTime.parse("2022-03-22T18:37:41.743Z");
                    identity = "illum";
                    lastReadMessageIndex = 777408L;
                    lastReadTimestamp = "fuga";
                    messagingBindingProjectedAddress = "eius";
                    messagingBindingProxyAddress = "eos";
                    roleSid = "voluptas";
                }};;
                xTwilioWebhookEnabled = ServiceConversationParticipantEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            UpdateServiceConversationParticipantResponse res = sdk.sdk.updateServiceConversationParticipant(req, new UpdateServiceConversationParticipantSecurity("cupiditate", "consequatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversationServiceConversationParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceConversationScopedWebhook

Update an existing conversation-scoped webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceConversationScopedWebhookRequest;
import org.openapis.openapi.models.operations.UpdateServiceConversationScopedWebhookResponse;
import org.openapis.openapi.models.operations.UpdateServiceConversationScopedWebhookSecurity;
import org.openapis.openapi.models.operations.UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest;
import org.openapis.openapi.models.shared.ServiceConversationScopedWebhookEnumMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceConversationScopedWebhookRequest req = new UpdateServiceConversationScopedWebhookRequest("tempora", "debitis", "ipsam") {{
                requestBody = new UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest() {{
                    configurationFilters = new String[]{{
                        add("sequi"),
                    }};
                    configurationFlowSid = "quo";
                    configurationMethod = ServiceConversationScopedWebhookEnumMethodEnum.GET;
                    configurationTriggers = new String[]{{
                        add("aperiam"),
                        add("distinctio"),
                        add("quod"),
                        add("dignissimos"),
                    }};
                    configurationUrl = "inventore";
                }};;
            }};            

            UpdateServiceConversationScopedWebhookResponse res = sdk.sdk.updateServiceConversationScopedWebhook(req, new UpdateServiceConversationScopedWebhookSecurity("nihil", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConversationServiceConversationScopedWebhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceNotification

Update push notification service settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceNotificationRequest;
import org.openapis.openapi.models.operations.UpdateServiceNotificationResponse;
import org.openapis.openapi.models.operations.UpdateServiceNotificationSecurity;
import org.openapis.openapi.models.operations.UpdateServiceNotificationUpdateServiceNotificationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceNotificationRequest req = new UpdateServiceNotificationRequest("accusamus") {{
                requestBody = new UpdateServiceNotificationUpdateServiceNotificationRequest() {{
                    addedToConversationEnabled = false;
                    addedToConversationSound = "aliquam";
                    addedToConversationTemplate = "odio";
                    logEnabled = false;
                    newMessageBadgeCountEnabled = false;
                    newMessageEnabled = false;
                    newMessageSound = "occaecati";
                    newMessageTemplate = "commodi";
                    newMessageWithMediaEnabled = false;
                    newMessageWithMediaTemplate = "sapiente";
                    removedFromConversationEnabled = false;
                    removedFromConversationSound = "dolores";
                    removedFromConversationTemplate = "deserunt";
                }};;
            }};            

            UpdateServiceNotificationResponse res = sdk.sdk.updateServiceNotification(req, new UpdateServiceNotificationSecurity("molestiae", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConfigurationServiceNotification != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceRole

Update an existing user role in your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRoleRequest;
import org.openapis.openapi.models.operations.UpdateServiceRoleResponse;
import org.openapis.openapi.models.operations.UpdateServiceRoleSecurity;
import org.openapis.openapi.models.operations.UpdateServiceRoleUpdateServiceRoleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceRoleRequest req = new UpdateServiceRoleRequest("porro", "eum") {{
                requestBody = new UpdateServiceRoleUpdateServiceRoleRequest(                new String[]{{
                                    add("praesentium"),
                                    add("consequuntur"),
                                    add("deleniti"),
                                }});;
            }};            

            UpdateServiceRoleResponse res = sdk.sdk.updateServiceRole(req, new UpdateServiceRoleSecurity("fugit", "fuga") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceRole != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceUser

Update an existing conversation user in your service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceUserRequest;
import org.openapis.openapi.models.operations.UpdateServiceUserResponse;
import org.openapis.openapi.models.operations.UpdateServiceUserSecurity;
import org.openapis.openapi.models.operations.UpdateServiceUserUpdateServiceUserRequest;
import org.openapis.openapi.models.shared.ServiceUserEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceUserRequest req = new UpdateServiceUserRequest("mollitia", "incidunt") {{
                requestBody = new UpdateServiceUserUpdateServiceUserRequest() {{
                    attributes = "atque";
                    friendlyName = "explicabo";
                    roleSid = "minima";
                }};;
                xTwilioWebhookEnabled = ServiceUserEnumWebhookEnabledTypeEnum.TRUE;
            }};            

            UpdateServiceUserResponse res = sdk.sdk.updateServiceUser(req, new UpdateServiceUserSecurity("fugit", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceUserConversation

Update a specific User Conversation.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceUserConversationRequest;
import org.openapis.openapi.models.operations.UpdateServiceUserConversationResponse;
import org.openapis.openapi.models.operations.UpdateServiceUserConversationSecurity;
import org.openapis.openapi.models.operations.UpdateServiceUserConversationUpdateServiceUserConversationRequest;
import org.openapis.openapi.models.shared.ServiceUserConversationEnumNotificationLevelEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceUserConversationRequest req = new UpdateServiceUserConversationRequest("consequuntur", "ratione", "explicabo") {{
                requestBody = new UpdateServiceUserConversationUpdateServiceUserConversationRequest() {{
                    lastReadMessageIndex = 903984L;
                    lastReadTimestamp = OffsetDateTime.parse("2021-11-30T00:31:10.440Z");
                    notificationLevel = ServiceUserConversationEnumNotificationLevelEnum.DEFAULT_;
                }};;
            }};            

            UpdateServiceUserConversationResponse res = sdk.sdk.updateServiceUserConversation(req, new UpdateServiceUserConversationSecurity("esse", "eveniet") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceUserServiceUserConversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceWebhookConfiguration

Update a specific Webhook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceWebhookConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateServiceWebhookConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateServiceWebhookConfigurationSecurity;
import org.openapis.openapi.models.operations.UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceWebhookConfigurationRequest req = new UpdateServiceWebhookConfigurationRequest("accusamus") {{
                requestBody = new UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest() {{
                    filters = new String[]{{
                        add("esse"),
                    }};
                    method = "quod";
                    postWebhookUrl = "https://turbulent-gravitas.com";
                    preWebhookUrl = "https://inborn-pretzel.info";
                }};;
            }};            

            UpdateServiceWebhookConfigurationResponse res = sdk.sdk.updateServiceWebhookConfiguration(req, new UpdateServiceWebhookConfigurationSecurity("rerum", "occaecati") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUser

Update an existing conversation user in your account's default service

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

            UpdateUserRequest req = new UpdateUserRequest("minima") {{
                requestBody = new UpdateUserUpdateUserRequest() {{
                    attributes = "distinctio";
                    friendlyName = "eligendi";
                    roleSid = "sit";
                }};;
                xTwilioWebhookEnabled = UserEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            UpdateUserResponse res = sdk.sdk.updateUser(req, new UpdateUserSecurity("tempore", "adipisci") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1User != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserConversation

Update a specific User Conversation.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserConversationRequest;
import org.openapis.openapi.models.operations.UpdateUserConversationResponse;
import org.openapis.openapi.models.operations.UpdateUserConversationSecurity;
import org.openapis.openapi.models.operations.UpdateUserConversationUpdateUserConversationRequest;
import org.openapis.openapi.models.shared.UserConversationEnumNotificationLevelEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUserConversationRequest req = new UpdateUserConversationRequest("cumque", "consequuntur") {{
                requestBody = new UpdateUserConversationUpdateUserConversationRequest() {{
                    lastReadMessageIndex = 9766L;
                    lastReadTimestamp = OffsetDateTime.parse("2022-01-28T10:14:21.975Z");
                    notificationLevel = UserConversationEnumNotificationLevelEnum.MUTED;
                }};;
            }};            

            UpdateUserConversationResponse res = sdk.sdk.updateUserConversation(req, new UpdateUserConversationSecurity("consectetur", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1UserUserConversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
