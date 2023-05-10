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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationAddressCreateConfigurationAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationAddressEnumAutoCreationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationAddressEnumMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationAddressEnumTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfigurationAddressCreateConfigurationAddressRequest();
    $request->address = '7854 Huel Via';
    $request->autoCreationConversationServiceSid = 'temporibus';
    $request->autoCreationEnabled = false;
    $request->autoCreationStudioFlowSid = 'ab';
    $request->autoCreationStudioRetryCount = 337396;
    $request->autoCreationType = ConfigurationAddressEnumAutoCreationTypeEnum::WEBHOOK;
    $request->autoCreationWebhookFilters = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->autoCreationWebhookMethod = ConfigurationAddressEnumMethodEnum::POST;
    $request->autoCreationWebhookUrl = 'quo';
    $request->friendlyName = 'odit';
    $request->type = ConfigurationAddressEnumTypeEnum::GBM;

    $requestSecurity = new CreateConfigurationAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createConfigurationAddress($request, $requestSecurity);

    if ($response->conversationsV1ConfigurationAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConversation

Create a new conversation in your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationCreateConversationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConversationEnumStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversationEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConversationRequest();
    $request->requestBody = new CreateConversationCreateConversationRequest();
    $request->requestBody->attributes = 'at';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-31T09:34:50.024Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-07T00:03:55.328Z');
    $request->requestBody->friendlyName = 'esse';
    $request->requestBody->messagingServiceSid = 'totam';
    $request->requestBody->state = ConversationEnumStateEnum::CLOSED;
    $request->requestBody->timersClosed = 'dolorum';
    $request->requestBody->timersInactive = 'dicta';
    $request->requestBody->uniqueName = 'nam';
    $request->xTwilioWebhookEnabled = ConversationEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new CreateConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createConversation($request, $requestSecurity);

    if ($response->conversationsV1Conversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConversationMessage

Add a new message to the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationMessageCreateConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConversationMessageEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConversationMessageRequest();
    $request->conversationSid = 'occaecati';
    $request->requestBody = new CreateConversationMessageCreateConversationMessageRequest();
    $request->requestBody->attributes = 'fugit';
    $request->requestBody->author = 'deleniti';
    $request->requestBody->body = 'hic';
    $request->requestBody->contentSid = 'optio';
    $request->requestBody->contentVariables = 'totam';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-02T15:33:40.440Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-26T10:29:33.503Z');
    $request->requestBody->mediaSid = 'qui';
    $request->xTwilioWebhookEnabled = ConversationMessageEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new CreateConversationMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createConversationMessage($request, $requestSecurity);

    if ($response->conversationsV1ConversationConversationMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConversationParticipant

Add a new participant to the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationParticipantCreateConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConversationParticipantEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConversationParticipantRequest();
    $request->conversationSid = 'cum';
    $request->requestBody = new CreateConversationParticipantCreateConversationParticipantRequest();
    $request->requestBody->attributes = 'esse';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-07T12:31:06.574Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-25T03:24:03.949Z');
    $request->requestBody->identity = 'ad';
    $request->requestBody->messagingBindingAddress = 'natus';
    $request->requestBody->messagingBindingProjectedAddress = 'sed';
    $request->requestBody->messagingBindingProxyAddress = 'iste';
    $request->requestBody->roleSid = 'dolor';
    $request->xTwilioWebhookEnabled = ConversationParticipantEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new CreateConversationParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createConversationParticipant($request, $requestSecurity);

    if ($response->conversationsV1ConversationConversationParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConversationScopedWebhook

Create a new webhook scoped to the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationScopedWebhookCreateConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConversationScopedWebhookEnumMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversationScopedWebhookEnumTargetEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationScopedWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConversationScopedWebhookRequest();
    $request->conversationSid = 'laboriosam';
    $request->requestBody = new CreateConversationScopedWebhookCreateConversationScopedWebhookRequest();
    $request->requestBody->configurationFilters = [
        'saepe',
        'fuga',
        'in',
        'corporis',
    ];
    $request->requestBody->configurationFlowSid = 'iste';
    $request->requestBody->configurationMethod = ConversationScopedWebhookEnumMethodEnum::GET;
    $request->requestBody->configurationReplayAfter = 902349;
    $request->requestBody->configurationTriggers = [
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->requestBody->configurationUrl = 'est';
    $request->requestBody->target = ConversationScopedWebhookEnumTargetEnum::TRIGGER;

    $requestSecurity = new CreateConversationScopedWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createConversationScopedWebhook($request, $requestSecurity);

    if ($response->conversationsV1ConversationConversationScopedWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCredential

Add a new push notification credential to your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialCreateCredentialRequest;
use \OpenAPI\OpenAPI\Models\Shared\CredentialEnumPushTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCredentialCreateCredentialRequest();
    $request->apiKey = 'laborum';
    $request->certificate = 'dolores';
    $request->friendlyName = 'dolorem';
    $request->privateKey = 'corporis';
    $request->sandbox = false;
    $request->secret = 'explicabo';
    $request->type = CredentialEnumPushTypeEnum::FCM;

    $requestSecurity = new CreateCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCredential($request, $requestSecurity);

    if ($response->conversationsV1Credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRole

Create a new user role in your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoleCreateRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoleEnumRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRoleCreateRoleRequest();
    $request->friendlyName = 'enim';
    $request->permission = [
        'nemo',
        'minima',
        'excepturi',
    ];
    $request->type = RoleEnumRoleTypeEnum::CONVERSATION;

    $requestSecurity = new CreateRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createRole($request, $requestSecurity);

    if ($response->conversationsV1Role !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

Create a new conversation service on your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceCreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceCreateServiceRequest();
    $request->friendlyName = 'iure';

    $requestSecurity = new CreateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createService($request, $requestSecurity);

    if ($response->conversationsV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceConversation

Create a new conversation in your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceConversationCreateServiceConversationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationEnumStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceConversationRequest();
    $request->chatServiceSid = 'culpa';
    $request->requestBody = new CreateServiceConversationCreateServiceConversationRequest();
    $request->requestBody->attributes = 'doloribus';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-11T06:15:44.019Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-01T12:28:44.292Z');
    $request->requestBody->friendlyName = 'culpa';
    $request->requestBody->messagingServiceSid = 'consequuntur';
    $request->requestBody->state = ServiceConversationEnumStateEnum::CLOSED;
    $request->requestBody->timersClosed = 'mollitia';
    $request->requestBody->timersInactive = 'occaecati';
    $request->requestBody->uniqueName = 'numquam';
    $request->xTwilioWebhookEnabled = ServiceConversationEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new CreateServiceConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createServiceConversation($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceConversationMessage

Add a new message to the conversation in a specific service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceConversationMessageCreateServiceConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationMessageEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceConversationMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceConversationMessageRequest();
    $request->chatServiceSid = 'quam';
    $request->conversationSid = 'molestiae';
    $request->requestBody = new CreateServiceConversationMessageCreateServiceConversationMessageRequest();
    $request->requestBody->attributes = 'velit';
    $request->requestBody->author = 'error';
    $request->requestBody->body = 'quia';
    $request->requestBody->contentSid = 'quis';
    $request->requestBody->contentVariables = 'vitae';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-08T21:06:19.630Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-11T13:31:01.643Z');
    $request->requestBody->mediaSid = 'quo';
    $request->xTwilioWebhookEnabled = ServiceConversationMessageEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new CreateServiceConversationMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createServiceConversationMessage($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversationServiceConversationMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceConversationParticipant

Add a new participant to the conversation in a specific service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceConversationParticipantCreateServiceConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationParticipantEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceConversationParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceConversationParticipantRequest();
    $request->chatServiceSid = 'tenetur';
    $request->conversationSid = 'ipsam';
    $request->requestBody = new CreateServiceConversationParticipantCreateServiceConversationParticipantRequest();
    $request->requestBody->attributes = 'id';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T03:20:13.120Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T15:52:05.226Z');
    $request->requestBody->identity = 'temporibus';
    $request->requestBody->messagingBindingAddress = 'laborum';
    $request->requestBody->messagingBindingProjectedAddress = 'quasi';
    $request->requestBody->messagingBindingProxyAddress = 'reiciendis';
    $request->requestBody->roleSid = 'voluptatibus';
    $request->xTwilioWebhookEnabled = ServiceConversationParticipantEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new CreateServiceConversationParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createServiceConversationParticipant($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversationServiceConversationParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceConversationScopedWebhook

Create a new webhook scoped to the conversation in a specific service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationScopedWebhookEnumMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationScopedWebhookEnumTargetEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceConversationScopedWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceConversationScopedWebhookRequest();
    $request->chatServiceSid = 'nihil';
    $request->conversationSid = 'praesentium';
    $request->requestBody = new CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest();
    $request->requestBody->configurationFilters = [
        'ipsa',
        'omnis',
        'voluptate',
        'cum',
    ];
    $request->requestBody->configurationFlowSid = 'perferendis';
    $request->requestBody->configurationMethod = ServiceConversationScopedWebhookEnumMethodEnum::GET;
    $request->requestBody->configurationReplayAfter = 441711;
    $request->requestBody->configurationTriggers = [
        'maiores',
        'dicta',
    ];
    $request->requestBody->configurationUrl = 'corporis';
    $request->requestBody->target = ServiceConversationScopedWebhookEnumTargetEnum::WEBHOOK;

    $requestSecurity = new CreateServiceConversationScopedWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createServiceConversationScopedWebhook($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversationServiceConversationScopedWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceRole

Create a new user role in your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceRoleCreateServiceRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceRoleEnumRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceRoleRequest();
    $request->chatServiceSid = 'iusto';
    $request->requestBody = new CreateServiceRoleCreateServiceRoleRequest();
    $request->requestBody->friendlyName = 'dicta';
    $request->requestBody->permission = [
        'enim',
        'accusamus',
        'commodi',
    ];
    $request->requestBody->type = ServiceRoleEnumRoleTypeEnum::SERVICE;

    $requestSecurity = new CreateServiceRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createServiceRole($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServiceUser

Add a new conversation user to your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceUserCreateServiceUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceUserEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceUserRequest();
    $request->chatServiceSid = 'quae';
    $request->requestBody = new CreateServiceUserCreateServiceUserRequest();
    $request->requestBody->attributes = 'ipsum';
    $request->requestBody->friendlyName = 'quidem';
    $request->requestBody->identity = 'molestias';
    $request->requestBody->roleSid = 'excepturi';
    $request->xTwilioWebhookEnabled = ServiceUserEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new CreateServiceUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createServiceUser($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUser

Add a new conversation user to your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserCreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserRequest();
    $request->requestBody = new CreateUserCreateUserRequest();
    $request->requestBody->attributes = 'modi';
    $request->requestBody->friendlyName = 'praesentium';
    $request->requestBody->identity = 'rem';
    $request->requestBody->roleSid = 'voluptates';
    $request->xTwilioWebhookEnabled = UserEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new CreateUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUser($request, $requestSecurity);

    if ($response->conversationsV1User !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConfigurationAddress

Remove an existing address configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigurationAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConfigurationAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConfigurationAddressRequest();
    $request->sid = 'repudiandae';

    $requestSecurity = new DeleteConfigurationAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteConfigurationAddress($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConversation

Remove a conversation from your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConversationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConversationEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConversationRequest();
    $request->sid = 'sint';
    $request->xTwilioWebhookEnabled = ConversationEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new DeleteConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteConversation($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConversationMessage

Remove a message from the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConversationMessageEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConversationMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConversationMessageRequest();
    $request->conversationSid = 'itaque';
    $request->sid = 'incidunt';
    $request->xTwilioWebhookEnabled = ConversationMessageEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new DeleteConversationMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteConversationMessage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConversationParticipant

Remove a participant from the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConversationParticipantEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConversationParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConversationParticipantRequest();
    $request->conversationSid = 'consequatur';
    $request->sid = 'est';
    $request->xTwilioWebhookEnabled = ConversationParticipantEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new DeleteConversationParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteConversationParticipant($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConversationScopedWebhook

Remove an existing webhook scoped to the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConversationScopedWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConversationScopedWebhookRequest();
    $request->conversationSid = 'explicabo';
    $request->sid = 'deserunt';

    $requestSecurity = new DeleteConversationScopedWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteConversationScopedWebhook($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCredential

Remove a push notification credential from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCredentialRequest();
    $request->sid = 'distinctio';

    $requestSecurity = new DeleteCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCredential($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRole

Remove a user role from your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRoleRequest();
    $request->sid = 'quibusdam';

    $requestSecurity = new DeleteRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteRole($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

Remove a conversation service with all its nested resources from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceRequest();
    $request->sid = 'labore';

    $requestSecurity = new DeleteServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteService($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceBinding

Remove a push notification binding from the conversation service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceBindingRequest();
    $request->chatServiceSid = 'modi';
    $request->sid = 'qui';

    $requestSecurity = new DeleteServiceBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteServiceBinding($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceConversation

Remove a conversation from your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceConversationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceConversationRequest();
    $request->chatServiceSid = 'aliquid';
    $request->sid = 'cupiditate';
    $request->xTwilioWebhookEnabled = ServiceConversationEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new DeleteServiceConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteServiceConversation($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceConversationMessage

Remove a message from the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationMessageEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceConversationMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceConversationMessageRequest();
    $request->chatServiceSid = 'perferendis';
    $request->conversationSid = 'magni';
    $request->sid = 'assumenda';
    $request->xTwilioWebhookEnabled = ServiceConversationMessageEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new DeleteServiceConversationMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteServiceConversationMessage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceConversationParticipant

Remove a participant from the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationParticipantEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceConversationParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceConversationParticipantRequest();
    $request->chatServiceSid = 'alias';
    $request->conversationSid = 'fugit';
    $request->sid = 'dolorum';
    $request->xTwilioWebhookEnabled = ServiceConversationParticipantEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new DeleteServiceConversationParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteServiceConversationParticipant($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceConversationScopedWebhook

Remove an existing webhook scoped to the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceConversationScopedWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceConversationScopedWebhookRequest();
    $request->chatServiceSid = 'tempora';
    $request->conversationSid = 'facilis';
    $request->sid = 'tempore';

    $requestSecurity = new DeleteServiceConversationScopedWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteServiceConversationScopedWebhook($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceRole

Remove a user role from your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceRoleRequest();
    $request->chatServiceSid = 'labore';
    $request->sid = 'delectus';

    $requestSecurity = new DeleteServiceRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteServiceRole($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceUser

Remove a conversation user from your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceUserEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceUserRequest();
    $request->chatServiceSid = 'eum';
    $request->sid = 'non';
    $request->xTwilioWebhookEnabled = ServiceUserEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new DeleteServiceUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteServiceUser($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceUserConversation

Delete a specific User Conversation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceUserConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceUserConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceUserConversationRequest();
    $request->chatServiceSid = 'sint';
    $request->conversationSid = 'aliquid';
    $request->userSid = 'provident';

    $requestSecurity = new DeleteServiceUserConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteServiceUserConversation($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUser

Remove a conversation user from your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequest();
    $request->sid = 'necessitatibus';
    $request->xTwilioWebhookEnabled = UserEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new DeleteUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUser($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserConversation

Delete a specific User Conversation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserConversationRequest();
    $request->conversationSid = 'officia';
    $request->userSid = 'dolor';

    $requestSecurity = new DeleteUserConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUserConversation($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConfiguration

Fetch the global configuration of conversations on your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FetchConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConfiguration($requestSecurity);

    if ($response->conversationsV1Configuration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConfigurationAddress

Fetch an address configuration 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConfigurationAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConfigurationAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConfigurationAddressRequest();
    $request->sid = 'debitis';

    $requestSecurity = new FetchConfigurationAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConfigurationAddress($request, $requestSecurity);

    if ($response->conversationsV1ConfigurationAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConfigurationWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConfigurationWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new FetchConfigurationWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConfigurationWebhook($requestSecurity);

    if ($response->conversationsV1ConfigurationConfigurationWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConversation

Fetch a conversation from your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConversationRequest();
    $request->sid = 'a';

    $requestSecurity = new FetchConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConversation($request, $requestSecurity);

    if ($response->conversationsV1Conversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConversationMessage

Fetch a message from the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConversationMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConversationMessageRequest();
    $request->conversationSid = 'dolorum';
    $request->sid = 'in';

    $requestSecurity = new FetchConversationMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConversationMessage($request, $requestSecurity);

    if ($response->conversationsV1ConversationConversationMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConversationMessageReceipt

Fetch the delivery and read receipts of the conversation message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConversationMessageReceiptRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConversationMessageReceiptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConversationMessageReceiptRequest();
    $request->conversationSid = 'in';
    $request->messageSid = 'illum';
    $request->sid = 'maiores';

    $requestSecurity = new FetchConversationMessageReceiptSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConversationMessageReceipt($request, $requestSecurity);

    if ($response->conversationsV1ConversationConversationMessageConversationMessageReceipt !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConversationParticipant

Fetch a participant of the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConversationParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConversationParticipantRequest();
    $request->conversationSid = 'rerum';
    $request->sid = 'dicta';

    $requestSecurity = new FetchConversationParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConversationParticipant($request, $requestSecurity);

    if ($response->conversationsV1ConversationConversationParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConversationScopedWebhook

Fetch the configuration of a conversation-scoped webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConversationScopedWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConversationScopedWebhookRequest();
    $request->conversationSid = 'magnam';
    $request->sid = 'cumque';

    $requestSecurity = new FetchConversationScopedWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConversationScopedWebhook($request, $requestSecurity);

    if ($response->conversationsV1ConversationConversationScopedWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCredential

Fetch a push notification credential from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCredentialRequest();
    $request->sid = 'facere';

    $requestSecurity = new FetchCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCredential($request, $requestSecurity);

    if ($response->conversationsV1Credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRole

Fetch a user role from your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRoleRequest();
    $request->sid = 'ea';

    $requestSecurity = new FetchRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRole($request, $requestSecurity);

    if ($response->conversationsV1Role !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchService

Fetch a conversation service from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceRequest();
    $request->sid = 'aliquid';

    $requestSecurity = new FetchServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchService($request, $requestSecurity);

    if ($response->conversationsV1Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchServiceBinding

Fetch a push notification binding from the conversation service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceBindingRequest();
    $request->chatServiceSid = 'laborum';
    $request->sid = 'accusamus';

    $requestSecurity = new FetchServiceBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchServiceBinding($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceBinding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchServiceConfiguration

Fetch the configuration of a conversation service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceConfigurationRequest();
    $request->chatServiceSid = 'non';

    $requestSecurity = new FetchServiceConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchServiceConfiguration($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchServiceConversation

Fetch a conversation from your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceConversationRequest();
    $request->chatServiceSid = 'occaecati';
    $request->sid = 'enim';

    $requestSecurity = new FetchServiceConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchServiceConversation($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchServiceConversationMessage

Fetch a message from the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceConversationMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceConversationMessageRequest();
    $request->chatServiceSid = 'accusamus';
    $request->conversationSid = 'delectus';
    $request->sid = 'quidem';

    $requestSecurity = new FetchServiceConversationMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchServiceConversationMessage($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversationServiceConversationMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchServiceConversationMessageReceipt

Fetch the delivery and read receipts of the conversation message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceConversationMessageReceiptRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceConversationMessageReceiptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceConversationMessageReceiptRequest();
    $request->chatServiceSid = 'provident';
    $request->conversationSid = 'nam';
    $request->messageSid = 'id';
    $request->sid = 'blanditiis';

    $requestSecurity = new FetchServiceConversationMessageReceiptSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchServiceConversationMessageReceipt($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchServiceConversationParticipant

Fetch a participant of the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceConversationParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceConversationParticipantRequest();
    $request->chatServiceSid = 'deleniti';
    $request->conversationSid = 'sapiente';
    $request->sid = 'amet';

    $requestSecurity = new FetchServiceConversationParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchServiceConversationParticipant($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversationServiceConversationParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchServiceConversationScopedWebhook

Fetch the configuration of a conversation-scoped webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceConversationScopedWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceConversationScopedWebhookRequest();
    $request->chatServiceSid = 'deserunt';
    $request->conversationSid = 'nisi';
    $request->sid = 'vel';

    $requestSecurity = new FetchServiceConversationScopedWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchServiceConversationScopedWebhook($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversationServiceConversationScopedWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchServiceNotification

Fetch push notification service settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceNotificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceNotificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceNotificationRequest();
    $request->chatServiceSid = 'natus';

    $requestSecurity = new FetchServiceNotificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchServiceNotification($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConfigurationServiceNotification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchServiceRole

Fetch a user role from your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceRoleRequest();
    $request->chatServiceSid = 'omnis';
    $request->sid = 'molestiae';

    $requestSecurity = new FetchServiceRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchServiceRole($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchServiceUser

Fetch a conversation user from your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceUserRequest();
    $request->chatServiceSid = 'perferendis';
    $request->sid = 'nihil';

    $requestSecurity = new FetchServiceUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchServiceUser($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchServiceUserConversation

Fetch a specific User Conversation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceUserConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceUserConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceUserConversationRequest();
    $request->chatServiceSid = 'magnam';
    $request->conversationSid = 'distinctio';
    $request->userSid = 'id';

    $requestSecurity = new FetchServiceUserConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchServiceUserConversation($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceUserServiceUserConversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchServiceWebhookConfiguration

Fetch a specific service webhook configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceWebhookConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchServiceWebhookConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchServiceWebhookConfigurationRequest();
    $request->chatServiceSid = 'labore';

    $requestSecurity = new FetchServiceWebhookConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchServiceWebhookConfiguration($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUser

Fetch a conversation user from your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUserRequest();
    $request->sid = 'labore';

    $requestSecurity = new FetchUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUser($request, $requestSecurity);

    if ($response->conversationsV1User !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUserConversation

Fetch a specific User Conversation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUserConversationRequest();
    $request->conversationSid = 'suscipit';
    $request->userSid = 'natus';

    $requestSecurity = new FetchUserConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUserConversation($request, $requestSecurity);

    if ($response->conversationsV1UserUserConversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConfigurationAddress

Retrieve a list of address configurations for an account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConfigurationAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConfigurationAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConfigurationAddressRequest();
    $request->page = 749170;
    $request->pageSize = 428769;
    $request->pageToken = 'vero';
    $request->type = 'aspernatur';

    $requestSecurity = new ListConfigurationAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConfigurationAddress($request, $requestSecurity);

    if ($response->listConfigurationAddressResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConversation

Retrieve a list of conversations in your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConversationRequest();
    $request->page = 102863;
    $request->pageSize = 298282;
    $request->pageToken = 'et';

    $requestSecurity = new ListConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConversation($request, $requestSecurity);

    if ($response->listConversationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConversationMessage

Retrieve a list of all messages in the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConversationMessageEnumOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListConversationMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConversationMessageRequest();
    $request->conversationSid = 'excepturi';
    $request->order = ConversationMessageEnumOrderTypeEnum::ASC;
    $request->page = 590873;
    $request->pageSize = 551816;
    $request->pageToken = 'sint';

    $requestSecurity = new ListConversationMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConversationMessage($request, $requestSecurity);

    if ($response->listConversationMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConversationMessageReceipt

Retrieve a list of all delivery and read receipts of the conversation message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConversationMessageReceiptRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConversationMessageReceiptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConversationMessageReceiptRequest();
    $request->conversationSid = 'accusantium';
    $request->messageSid = 'mollitia';
    $request->page = 968962;
    $request->pageSize = 652103;
    $request->pageToken = 'ad';

    $requestSecurity = new ListConversationMessageReceiptSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConversationMessageReceipt($request, $requestSecurity);

    if ($response->listConversationMessageReceiptResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConversationParticipant

Retrieve a list of all participants of the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConversationParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConversationParticipantRequest();
    $request->conversationSid = 'eum';
    $request->page = 221262;
    $request->pageSize = 896547;
    $request->pageToken = 'odit';

    $requestSecurity = new ListConversationParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConversationParticipant($request, $requestSecurity);

    if ($response->listConversationParticipantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConversationScopedWebhook

Retrieve a list of all webhooks scoped to the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConversationScopedWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConversationScopedWebhookRequest();
    $request->conversationSid = 'nemo';
    $request->page = 97260;
    $request->pageSize = 435865;
    $request->pageToken = 'doloribus';

    $requestSecurity = new ListConversationScopedWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConversationScopedWebhook($request, $requestSecurity);

    if ($response->listConversationScopedWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCredential

Retrieve a list of all push notification credentials on your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCredentialRequest();
    $request->page = 891924;
    $request->pageSize = 260341;
    $request->pageToken = 'maxime';

    $requestSecurity = new ListCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCredential($request, $requestSecurity);

    if ($response->listCredentialResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listParticipantConversation

Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListParticipantConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListParticipantConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListParticipantConversationRequest();
    $request->address = '7410 Herman Rapids';
    $request->identity = 'nihil';
    $request->page = 998848;
    $request->pageSize = 841140;
    $request->pageToken = 'sed';

    $requestSecurity = new ListParticipantConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listParticipantConversation($request, $requestSecurity);

    if ($response->listParticipantConversationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRole

Retrieve a list of all user roles in your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRoleRequest();
    $request->page = 904648;
    $request->pageSize = 868126;
    $request->pageToken = 'accusantium';

    $requestSecurity = new ListRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRole($request, $requestSecurity);

    if ($response->listRoleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listService

Retrieve a list of all conversation services on your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceRequest();
    $request->page = 162493;
    $request->pageSize = 508315;
    $request->pageToken = 'natus';

    $requestSecurity = new ListServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listService($request, $requestSecurity);

    if ($response->listServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceBinding

Retrieve a list of all push notification bindings in the conversation service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceBindingRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceBindingEnumBindingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceBindingRequest();
    $request->bindingType = [
        ServiceBindingEnumBindingTypeEnum::APN,
    ];
    $request->chatServiceSid = 'quo';
    $request->identity = [
        'pariatur',
        'maxime',
        'ea',
        'excepturi',
    ];
    $request->page = 139972;
    $request->pageSize = 407183;
    $request->pageToken = 'accusantium';

    $requestSecurity = new ListServiceBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listServiceBinding($request, $requestSecurity);

    if ($response->listServiceBindingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceConversation

Retrieve a list of conversations in your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceConversationRequest();
    $request->chatServiceSid = 'ab';
    $request->page = 982575;
    $request->pageSize = 697429;
    $request->pageToken = 'ipsam';

    $requestSecurity = new ListServiceConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listServiceConversation($request, $requestSecurity);

    if ($response->listServiceConversationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceConversationMessage

Retrieve a list of all messages in the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationMessageEnumOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceConversationMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceConversationMessageRequest();
    $request->chatServiceSid = 'voluptate';
    $request->conversationSid = 'autem';
    $request->order = ServiceConversationMessageEnumOrderTypeEnum::DESC;
    $request->page = 50588;
    $request->pageSize = 866383;
    $request->pageToken = 'nemo';

    $requestSecurity = new ListServiceConversationMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listServiceConversationMessage($request, $requestSecurity);

    if ($response->listServiceConversationMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceConversationMessageReceipt

Retrieve a list of all delivery and read receipts of the conversation message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceConversationMessageReceiptRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceConversationMessageReceiptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceConversationMessageReceiptRequest();
    $request->chatServiceSid = 'voluptatibus';
    $request->conversationSid = 'perferendis';
    $request->messageSid = 'fugiat';
    $request->page = 230742;
    $request->pageSize = 11714;
    $request->pageToken = 'cumque';

    $requestSecurity = new ListServiceConversationMessageReceiptSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listServiceConversationMessageReceipt($request, $requestSecurity);

    if ($response->listServiceConversationMessageReceiptResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceConversationParticipant

Retrieve a list of all participants of the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceConversationParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceConversationParticipantRequest();
    $request->chatServiceSid = 'corporis';
    $request->conversationSid = 'hic';
    $request->page = 729991;
    $request->pageSize = 749999;
    $request->pageToken = 'dolores';

    $requestSecurity = new ListServiceConversationParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listServiceConversationParticipant($request, $requestSecurity);

    if ($response->listServiceConversationParticipantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceConversationScopedWebhook

Retrieve a list of all webhooks scoped to the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceConversationScopedWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceConversationScopedWebhookRequest();
    $request->chatServiceSid = 'quis';
    $request->conversationSid = 'totam';
    $request->page = 489549;
    $request->pageSize = 54338;
    $request->pageToken = 'quis';

    $requestSecurity = new ListServiceConversationScopedWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listServiceConversationScopedWebhook($request, $requestSecurity);

    if ($response->listServiceConversationScopedWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceParticipantConversation

Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceParticipantConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceParticipantConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceParticipantConversationRequest();
    $request->address = '10174 Seamus Grove';
    $request->chatServiceSid = 'hic';
    $request->identity = 'recusandae';
    $request->page = 608253;
    $request->pageSize = 704415;
    $request->pageToken = 'perspiciatis';

    $requestSecurity = new ListServiceParticipantConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listServiceParticipantConversation($request, $requestSecurity);

    if ($response->listServiceParticipantConversationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceRole

Retrieve a list of all user roles in your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceRoleRequest();
    $request->chatServiceSid = 'voluptatem';
    $request->page = 783645;
    $request->pageSize = 164694;
    $request->pageToken = 'blanditiis';

    $requestSecurity = new ListServiceRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listServiceRole($request, $requestSecurity);

    if ($response->listServiceRoleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceUser

Retrieve a list of all conversation users in your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceUserRequest();
    $request->chatServiceSid = 'error';
    $request->page = 50370;
    $request->pageSize = 577229;
    $request->pageToken = 'rerum';

    $requestSecurity = new ListServiceUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listServiceUser($request, $requestSecurity);

    if ($response->listServiceUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceUserConversation

Retrieve a list of all User Conversations for the User.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceUserConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceUserConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceUserConversationRequest();
    $request->chatServiceSid = 'adipisci';
    $request->page = 992397;
    $request->pageSize = 934214;
    $request->pageToken = 'modi';
    $request->userSid = 'iste';

    $requestSecurity = new ListServiceUserConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listServiceUserConversation($request, $requestSecurity);

    if ($response->listServiceUserConversationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUser

Retrieve a list of all conversation users in your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserRequest();
    $request->page = 679091;
    $request->pageSize = 535633;
    $request->pageToken = 'pariatur';

    $requestSecurity = new ListUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUser($request, $requestSecurity);

    if ($response->listUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUserConversation

Retrieve a list of all User Conversations for the User.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUserConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUserConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserConversationRequest();
    $request->page = 589910;
    $request->pageSize = 750844;
    $request->pageToken = 'libero';
    $request->userSid = 'delectus';

    $requestSecurity = new ListUserConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUserConversation($request, $requestSecurity);

    if ($response->listUserConversationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfiguration

Update the global configuration of conversations on your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationUpdateConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConfigurationUpdateConfigurationRequest();
    $request->defaultChatServiceSid = 'quaerat';
    $request->defaultClosedTimer = 'quos';
    $request->defaultInactiveTimer = 'aliquid';
    $request->defaultMessagingServiceSid = 'dolorem';

    $requestSecurity = new UpdateConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateConfiguration($request, $requestSecurity);

    if ($response->conversationsV1Configuration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfigurationAddress

Update an existing address configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationAddressUpdateConfigurationAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationAddressEnumAutoCreationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationAddressEnumMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConfigurationAddressRequest();
    $request->requestBody = new UpdateConfigurationAddressUpdateConfigurationAddressRequest();
    $request->requestBody->autoCreationConversationServiceSid = 'dolorem';
    $request->requestBody->autoCreationEnabled = false;
    $request->requestBody->autoCreationStudioFlowSid = 'dolor';
    $request->requestBody->autoCreationStudioRetryCount = 186193;
    $request->requestBody->autoCreationType = ConfigurationAddressEnumAutoCreationTypeEnum::WEBHOOK;
    $request->requestBody->autoCreationWebhookFilters = [
        'excepturi',
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->requestBody->autoCreationWebhookMethod = ConfigurationAddressEnumMethodEnum::POST;
    $request->requestBody->autoCreationWebhookUrl = 'amet';
    $request->requestBody->friendlyName = 'dolorum';
    $request->sid = 'numquam';

    $requestSecurity = new UpdateConfigurationAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateConfigurationAddress($request, $requestSecurity);

    if ($response->conversationsV1ConfigurationAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfigurationWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationWebhookUpdateConfigurationWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationWebhookEnumTargetEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigurationWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConfigurationWebhookUpdateConfigurationWebhookRequest();
    $request->filters = [
        'ipsa',
    ];
    $request->method = 'ipsa';
    $request->postWebhookUrl = 'iure';
    $request->preWebhookUrl = 'odio';
    $request->target = ConfigurationWebhookEnumTargetEnum::WEBHOOK;

    $requestSecurity = new UpdateConfigurationWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateConfigurationWebhook($request, $requestSecurity);

    if ($response->conversationsV1ConfigurationConfigurationWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConversation

Update an existing conversation in your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConversationUpdateConversationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConversationEnumStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversationEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConversationRequest();
    $request->requestBody = new UpdateConversationUpdateConversationRequest();
    $request->requestBody->attributes = 'accusamus';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-18T05:23:42.271Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T13:18:59.478Z');
    $request->requestBody->friendlyName = 'eos';
    $request->requestBody->messagingServiceSid = 'atque';
    $request->requestBody->state = ConversationEnumStateEnum::INACTIVE;
    $request->requestBody->timersClosed = 'fugiat';
    $request->requestBody->timersInactive = 'ab';
    $request->requestBody->uniqueName = 'soluta';
    $request->sid = 'dolorum';
    $request->xTwilioWebhookEnabled = ConversationEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new UpdateConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateConversation($request, $requestSecurity);

    if ($response->conversationsV1Conversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConversationMessage

Update an existing message in the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConversationMessageUpdateConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConversationMessageEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConversationMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConversationMessageRequest();
    $request->conversationSid = 'voluptate';
    $request->requestBody = new UpdateConversationMessageUpdateConversationMessageRequest();
    $request->requestBody->attributes = 'dolorum';
    $request->requestBody->author = 'deleniti';
    $request->requestBody->body = 'omnis';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-09T09:45:52.295Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-04T21:36:49.552Z');
    $request->sid = 'ipsum';
    $request->xTwilioWebhookEnabled = ConversationMessageEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new UpdateConversationMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateConversationMessage($request, $requestSecurity);

    if ($response->conversationsV1ConversationConversationMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConversationParticipant

Update an existing participant in the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConversationParticipantUpdateConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConversationParticipantEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConversationParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConversationParticipantRequest();
    $request->conversationSid = 'id';
    $request->requestBody = new UpdateConversationParticipantUpdateConversationParticipantRequest();
    $request->requestBody->attributes = 'saepe';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-11T21:56:55.945Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-09T08:02:18.659Z');
    $request->requestBody->identity = 'optio';
    $request->requestBody->lastReadMessageIndex = 881586;
    $request->requestBody->lastReadTimestamp = 'ad';
    $request->requestBody->messagingBindingProjectedAddress = 'saepe';
    $request->requestBody->messagingBindingProxyAddress = 'suscipit';
    $request->requestBody->roleSid = 'deserunt';
    $request->sid = 'provident';
    $request->xTwilioWebhookEnabled = ConversationParticipantEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new UpdateConversationParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateConversationParticipant($request, $requestSecurity);

    if ($response->conversationsV1ConversationConversationParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConversationScopedWebhook

Update an existing conversation-scoped webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConversationScopedWebhookEnumMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConversationScopedWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConversationScopedWebhookRequest();
    $request->conversationSid = 'repellendus';
    $request->requestBody = new UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest();
    $request->requestBody->configurationFilters = [
        'similique',
        'alias',
        'at',
    ];
    $request->requestBody->configurationFlowSid = 'quaerat';
    $request->requestBody->configurationMethod = ConversationScopedWebhookEnumMethodEnum::GET;
    $request->requestBody->configurationTriggers = [
        'quod',
        'officiis',
    ];
    $request->requestBody->configurationUrl = 'qui';
    $request->sid = 'dolorum';

    $requestSecurity = new UpdateConversationScopedWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateConversationScopedWebhook($request, $requestSecurity);

    if ($response->conversationsV1ConversationConversationScopedWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCredential

Update an existing push notification credential on your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialUpdateCredentialRequest;
use \OpenAPI\OpenAPI\Models\Shared\CredentialEnumPushTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCredentialRequest();
    $request->requestBody = new UpdateCredentialUpdateCredentialRequest();
    $request->requestBody->apiKey = 'a';
    $request->requestBody->certificate = 'esse';
    $request->requestBody->friendlyName = 'harum';
    $request->requestBody->privateKey = 'iusto';
    $request->requestBody->sandbox = false;
    $request->requestBody->secret = 'ipsum';
    $request->requestBody->type = CredentialEnumPushTypeEnum::FCM;
    $request->sid = 'tenetur';

    $requestSecurity = new UpdateCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateCredential($request, $requestSecurity);

    if ($response->conversationsV1Credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRole

Update an existing user role in your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoleUpdateRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRoleRequest();
    $request->requestBody = new UpdateRoleUpdateRoleRequest();
    $request->requestBody->permission = [
        'tempore',
    ];
    $request->sid = 'accusamus';

    $requestSecurity = new UpdateRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateRole($request, $requestSecurity);

    if ($response->conversationsV1Role !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceConfiguration

Update configuration settings of a conversation service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConfigurationUpdateServiceConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceConfigurationRequest();
    $request->chatServiceSid = 'numquam';
    $request->requestBody = new UpdateServiceConfigurationUpdateServiceConfigurationRequest();
    $request->requestBody->defaultChatServiceRoleSid = 'enim';
    $request->requestBody->defaultConversationCreatorRoleSid = 'dolorem';
    $request->requestBody->defaultConversationRoleSid = 'sapiente';
    $request->requestBody->reachabilityEnabled = false;

    $requestSecurity = new UpdateServiceConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateServiceConfiguration($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceConversation

Update an existing conversation in your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConversationUpdateServiceConversationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationEnumStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceConversationRequest();
    $request->chatServiceSid = 'totam';
    $request->requestBody = new UpdateServiceConversationUpdateServiceConversationRequest();
    $request->requestBody->attributes = 'nihil';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-16T06:31:32.314Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-05T21:38:15.600Z');
    $request->requestBody->friendlyName = 'vel';
    $request->requestBody->messagingServiceSid = 'libero';
    $request->requestBody->state = ServiceConversationEnumStateEnum::ACTIVE;
    $request->requestBody->timersClosed = 'deserunt';
    $request->requestBody->timersInactive = 'quam';
    $request->requestBody->uniqueName = 'ipsum';
    $request->sid = 'incidunt';
    $request->xTwilioWebhookEnabled = ServiceConversationEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new UpdateServiceConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateServiceConversation($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceConversationMessage

Update an existing message in the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConversationMessageUpdateServiceConversationMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationMessageEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConversationMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceConversationMessageRequest();
    $request->chatServiceSid = 'cupiditate';
    $request->conversationSid = 'maxime';
    $request->requestBody = new UpdateServiceConversationMessageUpdateServiceConversationMessageRequest();
    $request->requestBody->attributes = 'pariatur';
    $request->requestBody->author = 'soluta';
    $request->requestBody->body = 'dicta';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-19T07:31:04.219Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T19:04:59.225Z');
    $request->sid = 'dolores';
    $request->xTwilioWebhookEnabled = ServiceConversationMessageEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new UpdateServiceConversationMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateServiceConversationMessage($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversationServiceConversationMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceConversationParticipant

Update an existing participant in the conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationParticipantEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConversationParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceConversationParticipantRequest();
    $request->chatServiceSid = 'facilis';
    $request->conversationSid = 'aliquid';
    $request->requestBody = new UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest();
    $request->requestBody->attributes = 'quam';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-27T11:41:31.258Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-18T05:22:32.548Z');
    $request->requestBody->identity = 'fugit';
    $request->requestBody->lastReadMessageIndex = 164959;
    $request->requestBody->lastReadTimestamp = 'odio';
    $request->requestBody->messagingBindingProjectedAddress = 'sunt';
    $request->requestBody->messagingBindingProxyAddress = 'ullam';
    $request->requestBody->roleSid = 'nam';
    $request->sid = 'hic';
    $request->xTwilioWebhookEnabled = ServiceConversationParticipantEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new UpdateServiceConversationParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateServiceConversationParticipant($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversationServiceConversationParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceConversationScopedWebhook

Update an existing conversation-scoped webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceConversationScopedWebhookEnumMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceConversationScopedWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceConversationScopedWebhookRequest();
    $request->chatServiceSid = 'cumque';
    $request->conversationSid = 'soluta';
    $request->requestBody = new UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest();
    $request->requestBody->configurationFilters = [
        'et',
        'saepe',
        'ipsum',
    ];
    $request->requestBody->configurationFlowSid = 'veritatis';
    $request->requestBody->configurationMethod = ServiceConversationScopedWebhookEnumMethodEnum::POST;
    $request->requestBody->configurationTriggers = [
        'tempore',
        'cupiditate',
        'aperiam',
    ];
    $request->requestBody->configurationUrl = 'delectus';
    $request->sid = 'dolorem';

    $requestSecurity = new UpdateServiceConversationScopedWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateServiceConversationScopedWebhook($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConversationServiceConversationScopedWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceNotification

Update push notification service settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceNotificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceNotificationUpdateServiceNotificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceNotificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceNotificationRequest();
    $request->chatServiceSid = 'dolore';
    $request->requestBody = new UpdateServiceNotificationUpdateServiceNotificationRequest();
    $request->requestBody->addedToConversationEnabled = false;
    $request->requestBody->addedToConversationSound = 'labore';
    $request->requestBody->addedToConversationTemplate = 'adipisci';
    $request->requestBody->logEnabled = false;
    $request->requestBody->newMessageBadgeCountEnabled = false;
    $request->requestBody->newMessageEnabled = false;
    $request->requestBody->newMessageSound = 'dolorum';
    $request->requestBody->newMessageTemplate = 'architecto';
    $request->requestBody->newMessageWithMediaEnabled = false;
    $request->requestBody->newMessageWithMediaTemplate = 'quae';
    $request->requestBody->removedFromConversationEnabled = false;
    $request->requestBody->removedFromConversationSound = 'aut';
    $request->requestBody->removedFromConversationTemplate = 'quas';

    $requestSecurity = new UpdateServiceNotificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateServiceNotification($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConfigurationServiceNotification !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceRole

Update an existing user role in your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRoleUpdateServiceRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRoleRequest();
    $request->chatServiceSid = 'itaque';
    $request->requestBody = new UpdateServiceRoleUpdateServiceRoleRequest();
    $request->requestBody->permission = [
        'est',
    ];
    $request->sid = 'repellendus';

    $requestSecurity = new UpdateServiceRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateServiceRole($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceUser

Update an existing conversation user in your service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUserUpdateServiceUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceUserEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceUserRequest();
    $request->chatServiceSid = 'porro';
    $request->requestBody = new UpdateServiceUserUpdateServiceUserRequest();
    $request->requestBody->attributes = 'doloribus';
    $request->requestBody->friendlyName = 'ut';
    $request->requestBody->roleSid = 'facilis';
    $request->sid = 'cupiditate';
    $request->xTwilioWebhookEnabled = ServiceUserEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new UpdateServiceUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateServiceUser($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceUserConversation

Update a specific User Conversation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUserConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUserConversationUpdateServiceUserConversationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceUserConversationEnumNotificationLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUserConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceUserConversationRequest();
    $request->chatServiceSid = 'quae';
    $request->conversationSid = 'laudantium';
    $request->requestBody = new UpdateServiceUserConversationUpdateServiceUserConversationRequest();
    $request->requestBody->lastReadMessageIndex = 485628;
    $request->requestBody->lastReadTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-17T10:17:06.805Z');
    $request->requestBody->notificationLevel = ServiceUserConversationEnumNotificationLevelEnum::MUTED;
    $request->userSid = 'vero';

    $requestSecurity = new UpdateServiceUserConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateServiceUserConversation($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceUserServiceUserConversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceWebhookConfiguration

Update a specific Webhook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceWebhookConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceWebhookConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceWebhookConfigurationRequest();
    $request->chatServiceSid = 'omnis';
    $request->requestBody = new UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest();
    $request->requestBody->filters = [
        'ipsum',
        'delectus',
    ];
    $request->requestBody->method = 'voluptate';
    $request->requestBody->postWebhookUrl = 'http://ugly-vase.info';
    $request->requestBody->preWebhookUrl = 'https://same-shoestring.info';

    $requestSecurity = new UpdateServiceWebhookConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateServiceWebhookConfiguration($request, $requestSecurity);

    if ($response->conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUser

Update an existing conversation user in your account's default service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserUpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserRequest();
    $request->requestBody = new UpdateUserUpdateUserRequest();
    $request->requestBody->attributes = 'similique';
    $request->requestBody->friendlyName = 'facilis';
    $request->requestBody->roleSid = 'vero';
    $request->sid = 'ducimus';
    $request->xTwilioWebhookEnabled = UserEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new UpdateUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUser($request, $requestSecurity);

    if ($response->conversationsV1User !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserConversation

Update a specific User Conversation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserConversationUpdateUserConversationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserConversationEnumNotificationLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserConversationRequest();
    $request->conversationSid = 'quibusdam';
    $request->requestBody = new UpdateUserConversationUpdateUserConversationRequest();
    $request->requestBody->lastReadMessageIndex = 848944;
    $request->requestBody->lastReadTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T11:24:00.260Z');
    $request->requestBody->notificationLevel = UserConversationEnumNotificationLevelEnum::MUTED;
    $request->userSid = 'aut';

    $requestSecurity = new UpdateUserConversationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUserConversation($request, $requestSecurity);

    if ($response->conversationsV1UserUserConversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
