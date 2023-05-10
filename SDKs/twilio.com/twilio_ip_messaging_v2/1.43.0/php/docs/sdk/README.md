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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelCreateChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelEnumChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChannelRequest();
    $request->requestBody = new CreateChannelCreateChannelRequest();
    $request->requestBody->attributes = 'suscipit';
    $request->requestBody->createdBy = 'iure';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T12:04:06.508Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T06:18:51.036Z');
    $request->requestBody->friendlyName = 'tempora';
    $request->requestBody->type = ChannelEnumChannelTypeEnum::PUBLIC;
    $request->requestBody->uniqueName = 'molestiae';
    $request->serviceSid = 'minus';
    $request->xTwilioWebhookEnabled = ChannelEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new CreateChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createChannel($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createChannelWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelWebhookCreateChannelWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelWebhookEnumMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelWebhookEnumTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChannelWebhookRequest();
    $request->channelSid = 'voluptatum';
    $request->requestBody = new CreateChannelWebhookCreateChannelWebhookRequest();
    $request->requestBody->configurationFilters = [
        'excepturi',
        'nisi',
    ];
    $request->requestBody->configurationFlowSid = 'recusandae';
    $request->requestBody->configurationMethod = ChannelWebhookEnumMethodEnum::POST;
    $request->requestBody->configurationRetryCount = 71036;
    $request->requestBody->configurationTriggers = [
        'veritatis',
        'deserunt',
    ];
    $request->requestBody->configurationUrl = 'perferendis';
    $request->requestBody->type = ChannelWebhookEnumTypeEnum::TRIGGER;
    $request->serviceSid = 'repellendus';

    $requestSecurity = new CreateChannelWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createChannelWebhook($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannelChannelWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCredential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialCreateCredentialRequest;
use \OpenAPI\OpenAPI\Models\Shared\CredentialEnumPushServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCredentialCreateCredentialRequest();
    $request->apiKey = 'sapiente';
    $request->certificate = 'quo';
    $request->friendlyName = 'odit';
    $request->privateKey = 'at';
    $request->sandbox = false;
    $request->secret = 'at';
    $request->type = CredentialEnumPushServiceEnum::FCM;

    $requestSecurity = new CreateCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCredential($request, $requestSecurity);

    if ($response->ipMessagingV2Credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInvite

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInviteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInviteCreateInviteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInviteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInviteRequest();
    $request->channelSid = 'molestiae';
    $request->requestBody = new CreateInviteCreateInviteRequest();
    $request->requestBody->identity = 'quod';
    $request->requestBody->roleSid = 'quod';
    $request->serviceSid = 'esse';

    $requestSecurity = new CreateInviteSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createInvite($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannelInvite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMember

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMemberCreateMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\MemberEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMemberRequest();
    $request->channelSid = 'totam';
    $request->requestBody = new CreateMemberCreateMemberRequest();
    $request->requestBody->attributes = 'porro';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T15:49:54.663Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-20T20:35:01.256Z');
    $request->requestBody->identity = 'occaecati';
    $request->requestBody->lastConsumedMessageIndex = 143353;
    $request->requestBody->lastConsumptionTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-10T09:24:01.909Z');
    $request->requestBody->roleSid = 'optio';
    $request->serviceSid = 'totam';
    $request->xTwilioWebhookEnabled = MemberEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new CreateMemberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createMember($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannelMember !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMessage

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageCreateMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMessageRequest();
    $request->channelSid = 'commodi';
    $request->requestBody = new CreateMessageCreateMessageRequest();
    $request->requestBody->attributes = 'molestiae';
    $request->requestBody->body = 'modi';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T09:42:46.236Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-02T00:14:45.467Z');
    $request->requestBody->from = 'ipsum';
    $request->requestBody->lastUpdatedBy = 'excepturi';
    $request->requestBody->mediaSid = 'aspernatur';
    $request->serviceSid = 'perferendis';
    $request->xTwilioWebhookEnabled = MessageEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new CreateMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createMessage($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannelMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRole

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoleCreateRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoleEnumRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRoleRequest();
    $request->requestBody = new CreateRoleCreateRoleRequest();
    $request->requestBody->friendlyName = 'natus';
    $request->requestBody->permission = [
        'iste',
    ];
    $request->requestBody->type = RoleEnumRoleTypeEnum::CHANNEL;
    $request->serviceSid = 'natus';

    $requestSecurity = new CreateRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createRole($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

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
    $request->friendlyName = 'laboriosam';

    $requestSecurity = new CreateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createService($request, $requestSecurity);

    if ($response->ipMessagingV2Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUser

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
    $request->requestBody->attributes = 'hic';
    $request->requestBody->friendlyName = 'saepe';
    $request->requestBody->identity = 'fuga';
    $request->requestBody->roleSid = 'in';
    $request->serviceSid = 'corporis';
    $request->xTwilioWebhookEnabled = UserEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new CreateUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUser($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBinding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBindingRequest();
    $request->serviceSid = 'iure';
    $request->sid = 'saepe';

    $requestSecurity = new DeleteBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteBinding($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteChannelRequest();
    $request->serviceSid = 'quidem';
    $request->sid = 'architecto';
    $request->xTwilioWebhookEnabled = ChannelEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new DeleteChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteChannel($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteChannelWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteChannelWebhookRequest();
    $request->channelSid = 'reiciendis';
    $request->serviceSid = 'est';
    $request->sid = 'mollitia';

    $requestSecurity = new DeleteChannelWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteChannelWebhook($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCredential

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
    $request->sid = 'laborum';

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

## deleteInvite

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInviteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInviteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInviteRequest();
    $request->channelSid = 'dolores';
    $request->serviceSid = 'dolorem';
    $request->sid = 'corporis';

    $requestSecurity = new DeleteInviteSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteInvite($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMember

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\MemberEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMemberRequest();
    $request->channelSid = 'explicabo';
    $request->serviceSid = 'nobis';
    $request->sid = 'enim';
    $request->xTwilioWebhookEnabled = MemberEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new DeleteMemberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteMember($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMessage

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMessageRequest();
    $request->channelSid = 'nemo';
    $request->serviceSid = 'minima';
    $request->sid = 'excepturi';
    $request->xTwilioWebhookEnabled = MessageEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new DeleteMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteMessage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRole

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
    $request->serviceSid = 'iure';
    $request->sid = 'culpa';

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
    $request->sid = 'doloribus';

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

## deleteUser

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequest();
    $request->serviceSid = 'sapiente';
    $request->sid = 'architecto';

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

## deleteUserBinding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserBindingRequest();
    $request->serviceSid = 'mollitia';
    $request->sid = 'dolorem';
    $request->userSid = 'culpa';

    $requestSecurity = new DeleteUserBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUserBinding($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserChannelRequest();
    $request->channelSid = 'consequuntur';
    $request->serviceSid = 'repellat';
    $request->userSid = 'mollitia';

    $requestSecurity = new DeleteUserChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUserChannel($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchBinding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchBindingRequest();
    $request->serviceSid = 'occaecati';
    $request->sid = 'numquam';

    $requestSecurity = new FetchBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchBinding($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceBinding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchChannelRequest();
    $request->serviceSid = 'commodi';
    $request->sid = 'quam';

    $requestSecurity = new FetchChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchChannel($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchChannelWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchChannelWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchChannelWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchChannelWebhookRequest();
    $request->channelSid = 'molestiae';
    $request->serviceSid = 'velit';
    $request->sid = 'error';

    $requestSecurity = new FetchChannelWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchChannelWebhook($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannelChannelWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCredential

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
    $request->sid = 'quia';

    $requestSecurity = new FetchCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCredential($request, $requestSecurity);

    if ($response->ipMessagingV2Credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchInvite

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchInviteRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchInviteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchInviteRequest();
    $request->channelSid = 'quis';
    $request->serviceSid = 'vitae';
    $request->sid = 'laborum';

    $requestSecurity = new FetchInviteSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchInvite($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannelInvite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMember

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMemberRequest();
    $request->channelSid = 'animi';
    $request->serviceSid = 'enim';
    $request->sid = 'odit';

    $requestSecurity = new FetchMemberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMember($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannelMember !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMessage

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMessageRequest();
    $request->channelSid = 'quo';
    $request->serviceSid = 'sequi';
    $request->sid = 'tenetur';

    $requestSecurity = new FetchMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMessage($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannelMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRole

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
    $request->serviceSid = 'ipsam';
    $request->sid = 'id';

    $requestSecurity = new FetchRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRole($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchService

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
    $request->sid = 'possimus';

    $requestSecurity = new FetchServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchService($request, $requestSecurity);

    if ($response->ipMessagingV2Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUser

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
    $request->serviceSid = 'aut';
    $request->sid = 'quasi';

    $requestSecurity = new FetchUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUser($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUserBinding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserBindingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUserBindingRequest();
    $request->serviceSid = 'error';
    $request->sid = 'temporibus';
    $request->userSid = 'laborum';

    $requestSecurity = new FetchUserBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUserBinding($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceUserUserBinding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUserChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUserChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUserChannelRequest();
    $request->channelSid = 'quasi';
    $request->serviceSid = 'reiciendis';
    $request->userSid = 'voluptatibus';

    $requestSecurity = new FetchUserChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUserChannel($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceUserUserChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBinding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListBindingRequest;
use \OpenAPI\OpenAPI\Models\Shared\BindingEnumBindingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBindingRequest();
    $request->bindingType = [
        BindingEnumBindingTypeEnum::APN,
        BindingEnumBindingTypeEnum::APN,
        BindingEnumBindingTypeEnum::FCM,
        BindingEnumBindingTypeEnum::GCM,
    ];
    $request->identity = [
        'voluptate',
        'cum',
        'perferendis',
    ];
    $request->page = 39187;
    $request->pageSize = 441711;
    $request->pageToken = 'ut';
    $request->serviceSid = 'maiores';

    $requestSecurity = new ListBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listBinding($request, $requestSecurity);

    if ($response->listBindingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelEnumChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListChannelRequest();
    $request->page = 120196;
    $request->pageSize = 359444;
    $request->pageToken = 'dolore';
    $request->serviceSid = 'iusto';
    $request->type = [
        ChannelEnumChannelTypeEnum::PRIVATE,
    ];

    $requestSecurity = new ListChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listChannel($request, $requestSecurity);

    if ($response->listChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listChannelWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListChannelWebhookRequest();
    $request->channelSid = 'enim';
    $request->page = 880476;
    $request->pageSize = 414263;
    $request->pageToken = 'repudiandae';
    $request->serviceSid = 'quae';

    $requestSecurity = new ListChannelWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listChannelWebhook($request, $requestSecurity);

    if ($response->listChannelWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCredential

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
    $request->page = 216822;
    $request->pageSize = 692472;
    $request->pageToken = 'molestias';

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

## listInvite

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInviteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInviteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInviteRequest();
    $request->channelSid = 'excepturi';
    $request->identity = [
        'modi',
        'praesentium',
        'rem',
        'voluptates',
    ];
    $request->page = 93940;
    $request->pageSize = 921158;
    $request->pageToken = 'sint';
    $request->serviceSid = 'veritatis';

    $requestSecurity = new ListInviteSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listInvite($request, $requestSecurity);

    if ($response->listInviteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMember

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMemberRequest();
    $request->channelSid = 'itaque';
    $request->identity = [
        'enim',
        'consequatur',
    ];
    $request->page = 667411;
    $request->pageSize = 842342;
    $request->pageToken = 'explicabo';
    $request->serviceSid = 'deserunt';

    $requestSecurity = new ListMemberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMember($request, $requestSecurity);

    if ($response->listMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMessage

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageEnumOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMessageRequest();
    $request->channelSid = 'distinctio';
    $request->order = MessageEnumOrderTypeEnum::DESC;
    $request->page = 289406;
    $request->pageSize = 264730;
    $request->pageToken = 'qui';
    $request->serviceSid = 'aliquid';

    $requestSecurity = new ListMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMessage($request, $requestSecurity);

    if ($response->listMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRole

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
    $request->page = 586513;
    $request->pageSize = 552822;
    $request->pageToken = 'perferendis';
    $request->serviceSid = 'magni';

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
    $request->page = 828940;
    $request->pageSize = 369808;
    $request->pageToken = 'alias';

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

## listUser

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
    $request->page = 146441;
    $request->pageSize = 677817;
    $request->pageToken = 'excepturi';
    $request->serviceSid = 'tempora';

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

## listUserBinding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUserBindingRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserBindingEnumBindingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUserBindingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserBindingRequest();
    $request->bindingType = [
        UserBindingEnumBindingTypeEnum::FCM,
        UserBindingEnumBindingTypeEnum::GCM,
        UserBindingEnumBindingTypeEnum::FCM,
    ];
    $request->page = 433288;
    $request->pageSize = 248753;
    $request->pageToken = 'eligendi';
    $request->serviceSid = 'sint';
    $request->userSid = 'aliquid';

    $requestSecurity = new ListUserBindingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUserBinding($request, $requestSecurity);

    if ($response->listUserBindingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUserChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUserChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUserChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserChannelRequest();
    $request->page = 592042;
    $request->pageSize = 896039;
    $request->pageToken = 'sint';
    $request->serviceSid = 'officia';
    $request->userSid = 'dolor';

    $requestSecurity = new ListUserChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUserChannel($request, $requestSecurity);

    if ($response->listUserChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelUpdateChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateChannelRequest();
    $request->requestBody = new UpdateChannelUpdateChannelRequest();
    $request->requestBody->attributes = 'debitis';
    $request->requestBody->createdBy = 'a';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-08T14:21:47.573Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-26T01:27:36.152Z');
    $request->requestBody->friendlyName = 'maiores';
    $request->requestBody->uniqueName = 'rerum';
    $request->serviceSid = 'dicta';
    $request->sid = 'magnam';
    $request->xTwilioWebhookEnabled = ChannelEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new UpdateChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateChannel($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateChannelWebhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelWebhookUpdateChannelWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelWebhookEnumMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateChannelWebhookRequest();
    $request->channelSid = 'facere';
    $request->requestBody = new UpdateChannelWebhookUpdateChannelWebhookRequest();
    $request->requestBody->configurationFilters = [
        'aliquid',
        'laborum',
    ];
    $request->requestBody->configurationFlowSid = 'accusamus';
    $request->requestBody->configurationMethod = ChannelWebhookEnumMethodEnum::GET;
    $request->requestBody->configurationRetryCount = 581273;
    $request->requestBody->configurationTriggers = [
        'accusamus',
        'delectus',
    ];
    $request->requestBody->configurationUrl = 'quidem';
    $request->serviceSid = 'provident';
    $request->sid = 'nam';

    $requestSecurity = new UpdateChannelWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateChannelWebhook($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannelChannelWebhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCredential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialUpdateCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCredentialRequest();
    $request->requestBody = new UpdateCredentialUpdateCredentialRequest();
    $request->requestBody->apiKey = 'id';
    $request->requestBody->certificate = 'blanditiis';
    $request->requestBody->friendlyName = 'deleniti';
    $request->requestBody->privateKey = 'sapiente';
    $request->requestBody->sandbox = false;
    $request->requestBody->secret = 'amet';
    $request->sid = 'deserunt';

    $requestSecurity = new UpdateCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateCredential($request, $requestSecurity);

    if ($response->ipMessagingV2Credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMember

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberUpdateMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\MemberEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMemberRequest();
    $request->channelSid = 'nisi';
    $request->requestBody = new UpdateMemberUpdateMemberRequest();
    $request->requestBody->attributes = 'vel';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-15T07:59:26.631Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-24T23:52:02.245Z');
    $request->requestBody->lastConsumedMessageIndex = 470132;
    $request->requestBody->lastConsumptionTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-14T15:11:13.227Z');
    $request->requestBody->roleSid = 'id';
    $request->serviceSid = 'labore';
    $request->sid = 'labore';
    $request->xTwilioWebhookEnabled = MemberEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new UpdateMemberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateMember($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannelMember !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMessage

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessageUpdateMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageEnumWebhookEnabledTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMessageRequest();
    $request->channelSid = 'natus';
    $request->requestBody = new UpdateMessageUpdateMessageRequest();
    $request->requestBody->attributes = 'nobis';
    $request->requestBody->body = 'eum';
    $request->requestBody->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-05T15:44:28.456Z');
    $request->requestBody->dateUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T03:02:47.808Z');
    $request->requestBody->from = 'et';
    $request->requestBody->lastUpdatedBy = 'excepturi';
    $request->serviceSid = 'ullam';
    $request->sid = 'provident';
    $request->xTwilioWebhookEnabled = MessageEnumWebhookEnabledTypeEnum::FALSE;

    $requestSecurity = new UpdateMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateMessage($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceChannelMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRole

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
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->serviceSid = 'mollitia';
    $request->sid = 'ad';

    $requestSecurity = new UpdateRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateRole($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhookMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->requestBody = new UpdateServiceUpdateServiceRequest();
    $request->requestBody->consumptionReportInterval = 431418;
    $request->requestBody->defaultChannelCreatorRoleSid = 'dolor';
    $request->requestBody->defaultChannelRoleSid = 'necessitatibus';
    $request->requestBody->defaultServiceRoleSid = 'odit';
    $request->requestBody->friendlyName = 'nemo';
    $request->requestBody->limitsChannelMembers = 97260;
    $request->requestBody->limitsUserChannels = 435865;
    $request->requestBody->mediaCompatibilityMessage = 'doloribus';
    $request->requestBody->notificationsAddedToChannelEnabled = false;
    $request->requestBody->notificationsAddedToChannelSound = 'debitis';
    $request->requestBody->notificationsAddedToChannelTemplate = 'eius';
    $request->requestBody->notificationsInvitedToChannelEnabled = false;
    $request->requestBody->notificationsInvitedToChannelSound = 'maxime';
    $request->requestBody->notificationsInvitedToChannelTemplate = 'deleniti';
    $request->requestBody->notificationsLogEnabled = false;
    $request->requestBody->notificationsNewMessageBadgeCountEnabled = false;
    $request->requestBody->notificationsNewMessageEnabled = false;
    $request->requestBody->notificationsNewMessageSound = 'facilis';
    $request->requestBody->notificationsNewMessageTemplate = 'in';
    $request->requestBody->notificationsRemovedFromChannelEnabled = false;
    $request->requestBody->notificationsRemovedFromChannelSound = 'architecto';
    $request->requestBody->notificationsRemovedFromChannelTemplate = 'architecto';
    $request->requestBody->postWebhookRetryCount = 919483;
    $request->requestBody->postWebhookUrl = 'http://safe-interconnection.org';
    $request->requestBody->preWebhookRetryCount = 841140;
    $request->requestBody->preWebhookUrl = 'http://untimely-suicide.com';
    $request->requestBody->reachabilityEnabled = false;
    $request->requestBody->readStatusEnabled = false;
    $request->requestBody->typingIndicatorTimeout = 162493;
    $request->requestBody->webhookFilters = [
        'natus',
        'magni',
        'sunt',
    ];
    $request->requestBody->webhookMethod = UpdateServiceUpdateServiceRequestWebhookMethodEnum::PUT;
    $request->sid = 'illum';

    $requestSecurity = new UpdateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateService($request, $requestSecurity);

    if ($response->ipMessagingV2Service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUser

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
    $request->requestBody->attributes = 'pariatur';
    $request->requestBody->friendlyName = 'maxime';
    $request->requestBody->roleSid = 'ea';
    $request->serviceSid = 'excepturi';
    $request->sid = 'odit';
    $request->xTwilioWebhookEnabled = UserEnumWebhookEnabledTypeEnum::TRUE;

    $requestSecurity = new UpdateUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUser($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserChannelUpdateUserChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserChannelEnumNotificationLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserChannelRequest();
    $request->channelSid = 'accusantium';
    $request->requestBody = new UpdateUserChannelUpdateUserChannelRequest();
    $request->requestBody->lastConsumedMessageIndex = 69167;
    $request->requestBody->lastConsumptionTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-28T07:34:18.392Z');
    $request->requestBody->notificationLevel = UserChannelEnumNotificationLevelEnum::DEFAULT;
    $request->serviceSid = 'voluptate';
    $request->userSid = 'autem';

    $requestSecurity = new UpdateUserChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUserChannel($request, $requestSecurity);

    if ($response->ipMessagingV2ServiceUserUserChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
