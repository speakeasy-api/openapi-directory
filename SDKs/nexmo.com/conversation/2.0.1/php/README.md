# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConversationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ConversationProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConversationRequestBody();
    $request->displayName = 'Customer Chat';
    $request->imageUrl = 'https://example.com/image.png';
    $request->name = 'customer_chat';
    $request->properties = new ConversationProperties();
    $request->properties->ttl = 60;

    $response = $sdk->conversation->createConversation($request);

    if ($response->createConversation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [conversation](docs/conversation/README.md)

* [createConversation](docs/conversation/README.md#createconversation) - Create a conversation
* [deleteConversation](docs/conversation/README.md#deleteconversation) - Delete a conversation
* [~~listConversations~~](docs/conversation/README.md#listconversations) - List conversations :warning: **Deprecated**
* [recordConversation](docs/conversation/README.md#recordconversation) - Record a conversation
* [replaceConversation](docs/conversation/README.md#replaceconversation) - Update a conversation
* [retrieveConversation](docs/conversation/README.md#retrieveconversation) - Retrieve a conversation

### [event](docs/event/README.md)

* [createEvent](docs/event/README.md#createevent) - Create an event
* [deleteEvent](docs/event/README.md#deleteevent) - Delete an event
* [getEvent](docs/event/README.md#getevent) - Retrieve an event
* [~~getEvents~~](docs/event/README.md#getevents) - List events :warning: **Deprecated**

### [leg](docs/leg/README.md)

* [deleteLeg](docs/leg/README.md#deleteleg) - Delete a leg
* [listLegs](docs/leg/README.md#listlegs) - List legs

### [member](docs/member/README.md)

* [createMember](docs/member/README.md#createmember) - Create a member
* [deleteMember](docs/member/README.md#deletemember) - Delete a member
* [getMember](docs/member/README.md#getmember) - Retrieve a member
* [~~getMembers~~](docs/member/README.md#getmembers) - List members :warning: **Deprecated**
* [updateMember](docs/member/README.md#updatemember) - Update a member

### [user](docs/user/README.md)

* [createUser](docs/user/README.md#createuser) - Create a user
* [deleteUser](docs/user/README.md#deleteuser) - Delete a user
* [getUser](docs/user/README.md#getuser) - Retrieve a user
* [~~getUsers~~](docs/user/README.md#getusers) - List users :warning: **Deprecated**
* [getuserConversations](docs/user/README.md#getuserconversations) - List user conversations
* [updateUser](docs/user/README.md#updateuser) - Update a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
