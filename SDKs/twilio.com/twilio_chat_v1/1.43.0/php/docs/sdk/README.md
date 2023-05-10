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
* [listUserChannel](#listuserchannel) - List all Channels for a given User.
* [updateChannel](#updatechannel)
* [updateCredential](#updatecredential)
* [updateMember](#updatemember)
* [updateMessage](#updatemessage)
* [updateRole](#updaterole)
* [updateService](#updateservice)
* [updateUser](#updateuser)

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
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChannelRequest();
    $request->requestBody = new CreateChannelCreateChannelRequest();
    $request->requestBody->attributes = 'nulla';
    $request->requestBody->friendlyName = 'corrupti';
    $request->requestBody->type = ChannelEnumChannelTypeEnum::PRIVATE;
    $request->requestBody->uniqueName = 'vel';
    $request->serviceSid = 'error';

    $requestSecurity = new CreateChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createChannel($request, $requestSecurity);

    if ($response->chatV1ServiceChannel !== null) {
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
    $request->apiKey = 'deserunt';
    $request->certificate = 'suscipit';
    $request->friendlyName = 'iure';
    $request->privateKey = 'magnam';
    $request->sandbox = false;
    $request->secret = 'debitis';
    $request->type = CredentialEnumPushServiceEnum::GCM;

    $requestSecurity = new CreateCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCredential($request, $requestSecurity);

    if ($response->chatV1Credential !== null) {
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
    $request->channelSid = 'delectus';
    $request->requestBody = new CreateInviteCreateInviteRequest();
    $request->requestBody->identity = 'tempora';
    $request->requestBody->roleSid = 'suscipit';
    $request->serviceSid = 'molestiae';

    $requestSecurity = new CreateInviteSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createInvite($request, $requestSecurity);

    if ($response->chatV1ServiceChannelInvite !== null) {
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
use \OpenAPI\OpenAPI\Models\Operations\CreateMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMemberRequest();
    $request->channelSid = 'minus';
    $request->requestBody = new CreateMemberCreateMemberRequest();
    $request->requestBody->identity = 'placeat';
    $request->requestBody->roleSid = 'voluptatum';
    $request->serviceSid = 'iusto';

    $requestSecurity = new CreateMemberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createMember($request, $requestSecurity);

    if ($response->chatV1ServiceChannelMember !== null) {
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
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMessageRequest();
    $request->channelSid = 'excepturi';
    $request->requestBody = new CreateMessageCreateMessageRequest();
    $request->requestBody->attributes = 'nisi';
    $request->requestBody->body = 'recusandae';
    $request->requestBody->from = 'temporibus';
    $request->serviceSid = 'ab';

    $requestSecurity = new CreateMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createMessage($request, $requestSecurity);

    if ($response->chatV1ServiceChannelMessage !== null) {
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
    $request->requestBody->friendlyName = 'quis';
    $request->requestBody->permission = [
        'deserunt',
    ];
    $request->requestBody->type = RoleEnumRoleTypeEnum::CHANNEL;
    $request->serviceSid = 'ipsam';

    $requestSecurity = new CreateRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createRole($request, $requestSecurity);

    if ($response->chatV1ServiceRole !== null) {
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
    $request->friendlyName = 'repellendus';

    $requestSecurity = new CreateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createService($request, $requestSecurity);

    if ($response->chatV1Service !== null) {
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
use \OpenAPI\OpenAPI\Models\Operations\CreateUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserRequest();
    $request->requestBody = new CreateUserCreateUserRequest();
    $request->requestBody->attributes = 'sapiente';
    $request->requestBody->friendlyName = 'quo';
    $request->requestBody->identity = 'odit';
    $request->requestBody->roleSid = 'at';
    $request->serviceSid = 'at';

    $requestSecurity = new CreateUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUser($request, $requestSecurity);

    if ($response->chatV1ServiceUser !== null) {
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
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteChannelRequest();
    $request->serviceSid = 'maiores';
    $request->sid = 'molestiae';

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
    $request->sid = 'quod';

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
    $request->channelSid = 'quod';
    $request->serviceSid = 'esse';
    $request->sid = 'totam';

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
use \OpenAPI\OpenAPI\Models\Operations\DeleteMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMemberRequest();
    $request->channelSid = 'porro';
    $request->serviceSid = 'dolorum';
    $request->sid = 'dicta';

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
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMessageRequest();
    $request->channelSid = 'nam';
    $request->serviceSid = 'officia';
    $request->sid = 'occaecati';

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
    $request->serviceSid = 'fugit';
    $request->sid = 'deleniti';

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
    $request->sid = 'hic';

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
    $request->serviceSid = 'optio';
    $request->sid = 'totam';

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
    $request->serviceSid = 'beatae';
    $request->sid = 'commodi';

    $requestSecurity = new FetchChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchChannel($request, $requestSecurity);

    if ($response->chatV1ServiceChannel !== null) {
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
    $request->sid = 'molestiae';

    $requestSecurity = new FetchCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCredential($request, $requestSecurity);

    if ($response->chatV1Credential !== null) {
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
    $request->channelSid = 'modi';
    $request->serviceSid = 'qui';
    $request->sid = 'impedit';

    $requestSecurity = new FetchInviteSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchInvite($request, $requestSecurity);

    if ($response->chatV1ServiceChannelInvite !== null) {
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
    $request->channelSid = 'cum';
    $request->serviceSid = 'esse';
    $request->sid = 'ipsum';

    $requestSecurity = new FetchMemberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMember($request, $requestSecurity);

    if ($response->chatV1ServiceChannelMember !== null) {
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
    $request->channelSid = 'excepturi';
    $request->serviceSid = 'aspernatur';
    $request->sid = 'perferendis';

    $requestSecurity = new FetchMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMessage($request, $requestSecurity);

    if ($response->chatV1ServiceChannelMessage !== null) {
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
    $request->serviceSid = 'ad';
    $request->sid = 'natus';

    $requestSecurity = new FetchRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRole($request, $requestSecurity);

    if ($response->chatV1ServiceRole !== null) {
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
    $request->sid = 'sed';

    $requestSecurity = new FetchServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchService($request, $requestSecurity);

    if ($response->chatV1Service !== null) {
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
    $request->serviceSid = 'iste';
    $request->sid = 'dolor';

    $requestSecurity = new FetchUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUser($request, $requestSecurity);

    if ($response->chatV1ServiceUser !== null) {
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
    $request->page = 616934;
    $request->pageSize = 386489;
    $request->pageToken = 'hic';
    $request->serviceSid = 'saepe';
    $request->type = [
        ChannelEnumChannelTypeEnum::PUBLIC,
        ChannelEnumChannelTypeEnum::PUBLIC,
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
    $request->page = 437032;
    $request->pageSize = 902349;
    $request->pageToken = 'quidem';

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
    $request->channelSid = 'architecto';
    $request->identity = [
        'reiciendis',
    ];
    $request->page = 666767;
    $request->pageSize = 653140;
    $request->pageToken = 'laborum';
    $request->serviceSid = 'dolores';

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
    $request->channelSid = 'dolorem';
    $request->identity = [
        'explicabo',
        'nobis',
    ];
    $request->page = 315428;
    $request->pageSize = 607831;
    $request->pageToken = 'nemo';
    $request->serviceSid = 'minima';

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
    $request->channelSid = 'excepturi';
    $request->order = MessageEnumOrderTypeEnum::ASC;
    $request->page = 438601;
    $request->pageSize = 634274;
    $request->pageToken = 'doloribus';
    $request->serviceSid = 'sapiente';

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
    $request->page = 102044;
    $request->pageSize = 652790;
    $request->pageToken = 'dolorem';
    $request->serviceSid = 'culpa';

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
    $request->page = 161309;
    $request->pageSize = 995300;
    $request->pageToken = 'mollitia';

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
    $request->page = 581850;
    $request->pageSize = 253291;
    $request->pageToken = 'commodi';
    $request->serviceSid = 'quam';

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

## listUserChannel

List all Channels for a given User.

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
    $request->page = 474697;
    $request->pageSize = 244425;
    $request->pageToken = 'error';
    $request->serviceSid = 'quia';
    $request->userSid = 'quis';

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
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateChannelRequest();
    $request->requestBody = new UpdateChannelUpdateChannelRequest();
    $request->requestBody->attributes = 'vitae';
    $request->requestBody->friendlyName = 'laborum';
    $request->requestBody->uniqueName = 'animi';
    $request->serviceSid = 'enim';
    $request->sid = 'odit';

    $requestSecurity = new UpdateChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateChannel($request, $requestSecurity);

    if ($response->chatV1ServiceChannel !== null) {
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
    $request->requestBody->apiKey = 'quo';
    $request->requestBody->certificate = 'sequi';
    $request->requestBody->friendlyName = 'tenetur';
    $request->requestBody->privateKey = 'ipsam';
    $request->requestBody->sandbox = false;
    $request->requestBody->secret = 'id';
    $request->sid = 'possimus';

    $requestSecurity = new UpdateCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateCredential($request, $requestSecurity);

    if ($response->chatV1Credential !== null) {
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
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMemberRequest();
    $request->channelSid = 'aut';
    $request->requestBody = new UpdateMemberUpdateMemberRequest();
    $request->requestBody->lastConsumedMessageIndex = 97101;
    $request->requestBody->roleSid = 'error';
    $request->serviceSid = 'temporibus';
    $request->sid = 'laborum';

    $requestSecurity = new UpdateMemberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateMember($request, $requestSecurity);

    if ($response->chatV1ServiceChannelMember !== null) {
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
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMessageRequest();
    $request->channelSid = 'quasi';
    $request->requestBody = new UpdateMessageUpdateMessageRequest();
    $request->requestBody->attributes = 'reiciendis';
    $request->requestBody->body = 'voluptatibus';
    $request->serviceSid = 'vero';
    $request->sid = 'nihil';

    $requestSecurity = new UpdateMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateMessage($request, $requestSecurity);

    if ($response->chatV1ServiceChannelMessage !== null) {
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
        'voluptatibus',
        'ipsa',
        'omnis',
    ];
    $request->serviceSid = 'voluptate';
    $request->sid = 'cum';

    $requestSecurity = new UpdateRoleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateRole($request, $requestSecurity);

    if ($response->chatV1ServiceRole !== null) {
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
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->requestBody = new UpdateServiceUpdateServiceRequest();
    $request->requestBody->consumptionReportInterval = 19987;
    $request->requestBody->defaultChannelCreatorRoleSid = 'doloremque';
    $request->requestBody->defaultChannelRoleSid = 'reprehenderit';
    $request->requestBody->defaultServiceRoleSid = 'ut';
    $request->requestBody->friendlyName = 'maiores';
    $request->requestBody->limitsChannelMembers = 120196;
    $request->requestBody->limitsUserChannels = 359444;
    $request->requestBody->notificationsAddedToChannelEnabled = false;
    $request->requestBody->notificationsAddedToChannelTemplate = 'dolore';
    $request->requestBody->notificationsInvitedToChannelEnabled = false;
    $request->requestBody->notificationsInvitedToChannelTemplate = 'iusto';
    $request->requestBody->notificationsNewMessageEnabled = false;
    $request->requestBody->notificationsNewMessageTemplate = 'dicta';
    $request->requestBody->notificationsRemovedFromChannelEnabled = false;
    $request->requestBody->notificationsRemovedFromChannelTemplate = 'harum';
    $request->requestBody->postWebhookUrl = 'http://unacceptable-hare.org';
    $request->requestBody->preWebhookUrl = 'http://dutiful-printing.name';
    $request->requestBody->reachabilityEnabled = false;
    $request->requestBody->readStatusEnabled = false;
    $request->requestBody->typingIndicatorTimeout = 566602;
    $request->requestBody->webhookFilters = [
        'modi',
        'praesentium',
        'rem',
        'voluptates',
    ];
    $request->requestBody->webhookMethod = UpdateServiceUpdateServiceRequestWebhookMethodEnum::HEAD;
    $request->requestBody->webhooksOnChannelAddMethod = UpdateServiceUpdateServiceRequestWebhooksOnChannelAddMethodEnum::DELETE;
    $request->requestBody->webhooksOnChannelAddUrl = 'https://bony-trip.biz';
    $request->requestBody->webhooksOnChannelAddedMethod = UpdateServiceUpdateServiceRequestWebhooksOnChannelAddedMethodEnum::GET;
    $request->requestBody->webhooksOnChannelAddedUrl = 'http://quarrelsome-square.com';
    $request->requestBody->webhooksOnChannelDestroyMethod = UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyMethodEnum::PATCH;
    $request->requestBody->webhooksOnChannelDestroyUrl = 'https://tempting-durian.biz';
    $request->requestBody->webhooksOnChannelDestroyedMethod = UpdateServiceUpdateServiceRequestWebhooksOnChannelDestroyedMethodEnum::GET;
    $request->requestBody->webhooksOnChannelDestroyedUrl = 'http://offensive-melody.com';
    $request->requestBody->webhooksOnChannelUpdateMethod = UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdateMethodEnum::HEAD;
    $request->requestBody->webhooksOnChannelUpdateUrl = 'https://hard-accordion.com';
    $request->requestBody->webhooksOnChannelUpdatedMethod = UpdateServiceUpdateServiceRequestWebhooksOnChannelUpdatedMethodEnum::PUT;
    $request->requestBody->webhooksOnChannelUpdatedUrl = 'https://far-off-prune.net';
    $request->requestBody->webhooksOnMemberAddMethod = UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum::GET;
    $request->requestBody->webhooksOnMemberAddUrl = 'https://infantile-demur.net';
    $request->requestBody->webhooksOnMemberAddedMethod = UpdateServiceUpdateServiceRequestWebhooksOnMemberAddedMethodEnum::PATCH;
    $request->requestBody->webhooksOnMemberAddedUrl = 'http://optimistic-tenth.name';
    $request->requestBody->webhooksOnMemberRemoveMethod = UpdateServiceUpdateServiceRequestWebhooksOnMemberRemoveMethodEnum::PATCH;
    $request->requestBody->webhooksOnMemberRemoveUrl = 'http://unimportant-venture.net';
    $request->requestBody->webhooksOnMemberRemovedMethod = UpdateServiceUpdateServiceRequestWebhooksOnMemberRemovedMethodEnum::POST;
    $request->requestBody->webhooksOnMemberRemovedUrl = 'http://thankful-wheat.net';
    $request->requestBody->webhooksOnMessageRemoveMethod = UpdateServiceUpdateServiceRequestWebhooksOnMessageRemoveMethodEnum::HEAD;
    $request->requestBody->webhooksOnMessageRemoveUrl = 'http://smoggy-sledge.info';
    $request->requestBody->webhooksOnMessageRemovedMethod = UpdateServiceUpdateServiceRequestWebhooksOnMessageRemovedMethodEnum::POST;
    $request->requestBody->webhooksOnMessageRemovedUrl = 'https://unaware-department.name';
    $request->requestBody->webhooksOnMessageSendMethod = UpdateServiceUpdateServiceRequestWebhooksOnMessageSendMethodEnum::GET;
    $request->requestBody->webhooksOnMessageSendUrl = 'https://white-printing.name';
    $request->requestBody->webhooksOnMessageSentMethod = UpdateServiceUpdateServiceRequestWebhooksOnMessageSentMethodEnum::PUT;
    $request->requestBody->webhooksOnMessageSentUrl = 'https://lost-mailman.org';
    $request->requestBody->webhooksOnMessageUpdateMethod = UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum::GET;
    $request->requestBody->webhooksOnMessageUpdateUrl = 'https://humble-hello.name';
    $request->requestBody->webhooksOnMessageUpdatedMethod = UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdatedMethodEnum::PATCH;
    $request->requestBody->webhooksOnMessageUpdatedUrl = 'http://aggressive-interject.biz';
    $request->sid = 'distinctio';

    $requestSecurity = new UpdateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateService($request, $requestSecurity);

    if ($response->chatV1Service !== null) {
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
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserRequest();
    $request->requestBody = new UpdateUserUpdateUserRequest();
    $request->requestBody->attributes = 'id';
    $request->requestBody->friendlyName = 'labore';
    $request->requestBody->roleSid = 'labore';
    $request->serviceSid = 'suscipit';
    $request->sid = 'natus';

    $requestSecurity = new UpdateUserSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUser($request, $requestSecurity);

    if ($response->chatV1ServiceUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
